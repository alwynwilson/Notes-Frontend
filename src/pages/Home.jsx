import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import NoteCard from "../components/NoteCard";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import { MdAdd } from "react-icons/md";
import AddEditNotes from "./AddEditNotes";
import Modal from "react-modal";
import Error from "../components/Error";

const Home = () => {
  const [openAddEditModal, setOpenAddEditModal] = useState({
    isShown: false,
    type: "add",
    data: null,
  });
  const [check, setCheck] = useState(false);

  const handleClose = (e) => {
    setOpenAddEditModal({
      isShown: false,
      type: "add",
      data: null,
    });
  };

  const getuserdetails = () => {
    if (sessionStorage.getItem("token")) {
      setCheck(true);
    }
  };

  useEffect(() => {
    getuserdetails();
  }, []);

  return (
    <>
      {check ? (
        <div>
          <Navbar />
          <div className="flex items-center justify-center mt-8">
            <div className="items-center justify-center w-70 flex  px-4 bg-slate-100 rounded-md">
              <input
                type="text"
                placeholder="Search Notes"
                className="w-full text-xs bg-transparent py-[11px] outline-none"
              />
              <IoMdClose className="text-xl text-slate-500 cursor-pointer hover:text-black mr-3" />
              <FaMagnifyingGlass className="text-slate-400 cursor-pointer hover:text-black" />
            </div>
          </div>
          <div className="container flex justify-center items-center">
            <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 sm:gap-4 mt-8">
              <NoteCard
                title="Meeting on 7th April"
                date="3rd April 2024"
                content="Meeting on 7th April Meeting on 7th April"
                tags="#Meeting"
                isPinned={true}
                onEdit={() => {}}
                onDelete={() => {}}
                onPinNote={() => {}}
              />
            </div>
          </div>
          <button
            className="w-14 h-14 flex items-center justify-center rounded-2xl bg-gray-900 hover:bg-gray-700 absolute right-7 bottom-7"
            onClick={() => {
              setOpenAddEditModal({
                isShown: true,
                type: "add",
                data: null,
              });
            }}
          >
            <MdAdd className="text-[32px] text-white" />
          </button>
          <Modal
            isOpen={openAddEditModal.isShown}
            onRequestClose={() => {
              setOpenAddEditModal({
                isShown: true,
                type: "add",
                data: null,
              });
            }}
            style={{
              overlay: {
                backgroundColor: "rgba(0,0,0,0.2)",
              },
            }}
            contentLabel=""
            className="max-sm:w-[300px] max-md:w-[600px] w-[800px] max-h-5/6 bg-white rounded mx-auto mt-14 p-5 overflow-hidden scroll-smooth"
          >
            <AddEditNotes closeModal={handleClose} />
          </Modal>
        </div>
      ) : (
        <Error />
      )}
    </>
  );
};

export default Home;
