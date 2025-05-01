import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import NoteCard from "../components/NoteCard";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import { MdAdd } from "react-icons/md";
import AddEditNotes from "./AddEditNotes";
import Modal from "react-modal";
import Error from "../components/Error";
import {
  getNotesAPI,
  deleteNotesAPI,
  searchNotesAPI,
} from "../services/allAPI";

const Home = () => {
  const [openAddEditModal, setOpenAddEditModal] = useState({
    isShown: false,
    type: "add",
    data: null,
  });
  const [check, setCheck] = useState(false);
  const [homeNotes, setHomeNotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchKey, setSearchKey] = useState("");

  const handleClose = (e) => {
    setOpenAddEditModal({
      isShown: false,
      type: "add",
      data: null,
    });
    getNotes();
  };

  const getNotes = async () => {
    const token = sessionStorage.getItem("token");
    if (token) {
      setCheck(true);
      const reqHeader = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      };
      try {
        const result = await getNotesAPI(reqHeader);
        console.log(result);
        if (result.status === 200) {
          setHomeNotes(result.data);
          setLoading(false);
        }
      } catch (err) {
        console.log(err);
        setLoading(false);
      }
    }
  };

  const handleDelete = async (id) => {
    const token = sessionStorage.getItem("token");
    if (!token) return;

    const reqHeader = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };

    try {
      const response = await deleteNotesAPI(id, reqHeader);
      if (response.status === 200) {
        getNotes();
      } else {
        console.log(response);
      }
    } catch (error) {
      console.error("Error deleting note:", error);
    }
  };

  const handleSearch = async () => {
    const token = sessionStorage.getItem("token");
    if (!token) return;

    const reqHeader = {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
    };

    try {
      const response = await searchNotesAPI(searchKey, reqHeader);
      if (response.status === 200) {
        setHomeNotes(response.data);
      }
    } catch (err) {
      console.error("Search failed:", err);
    }
  };

  useEffect(() => {
    getNotes();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <>
      {check ? (
        <div>
          <Navbar />
          <div className="flex items-center justify-center mt-8">
            <div className="items-center justify-center w-70 flex px-4 bg-slate-100 rounded-md">
              <input
                type="text"
                placeholder="Search Notes"
                value={searchKey}
                onChange={(e) => setSearchKey(e.target.value)}
                className="w-full text-xs bg-transparent py-[11px] outline-none"
              />
              <IoMdClose
                className="text-xl text-slate-500 cursor-pointer hover:text-black mr-3"
                onClick={() => {
                  setSearchKey("");
                  getNotes();
                }}
              />
              <FaMagnifyingGlass
                className="text-slate-400 cursor-pointer hover:text-black"
                onClick={handleSearch}
              />
            </div>
          </div>
          <div className="container flex justify-center items-center">
            <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 sm:gap-4 mt-8">
              {homeNotes?.length > 0 ? (
                homeNotes?.map((item) => (
                  <div key={item?._id}>
                    <NoteCard
                      title={`${item.title}`}
                      date={`${item.createdOn.split("T")[0]}`}
                      content={`${item.content}`}
                      tags={item.tags}
                      isPinned={item.isPinned === true ? true : false}
                      onEdit={() =>
                        setOpenAddEditModal({
                          isShown: true,
                          type: "edit",
                          data: item,
                        })
                      }
                      onDelete={() => handleDelete(item._id)}
                      onPinNote={() => {}}
                    />
                  </div>
                ))
              ) : (
                <div className="flex justify-center items-center">
                  <h3>No Contents</h3>
                </div>
              )}
            </div>
          </div>
          <button
            className="w-14 h-14 flex items-center justify-center rounded-2xl bg-gray-900 hover:bg-gray-700 fixed  right-7 bottom-7"
            onClick={() => {
              setOpenAddEditModal({
                isShown: true,
                type: "add",
                data: null,
              });
            }}
          >
            <MdAdd className=" text-[32px] text-white" />
          </button>
          <Modal
            isOpen={openAddEditModal.isShown}
            onRequestClose={handleClose}
            style={{
              overlay: {
                backgroundColor: "rgba(0,0,0,0.2)",
              },
            }}
            contentLabel="Add/Edit Notes"
            className="max-sm:w-[300px] max-md:w-[600px] w-[800px] max-h-5/6 bg-white rounded mx-auto mt-14 p-5 overflow-hidden scroll-smooth"
          >
            <AddEditNotes
              closeModal={handleClose}
              type={openAddEditModal.type}
              data={openAddEditModal.data}
            />
          </Modal>
        </div>
      ) : (
        <Error />
      )}
    </>
  );
};

export default Home;
