import React, { useState, useEffect } from "react";
import TagInput from "../components/TagInput";
import { MdClose } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addNotesAPI, editNotesAPI } from "../services/allAPI";

const AddEditNotes = ({ closeModal, type, data }) => {
  const [formDetails, setFormDetails] = useState({
    title: "",
    content: "",
    tags: [],
    isPinned: false,
  });

  const handleSaveNote = async () => {
    const { title, content, tags, isPinned } = formDetails;

    if (title && content) {
      const token = sessionStorage.getItem("token");
      if (!token) return;

      const reqHeader = {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      };

      const reqBody = { title, content, tags, isPinned };

      try {
        let result;
        if (type === "add") {
          result = await addNotesAPI(reqBody, reqHeader);
        } else {
          result = await editNotesAPI(data._id, reqBody, reqHeader);
        }

        if (result.status === 200) {
          closeModal();
          toast.success(
            type === "add"
              ? "Note added successfully"
              : "Note updated successfully",
            {
              className: "toast-dark",
              bodyClassName: "toast-body",
              progressClassName: "toast-progress",
            }
          );
        } else {
          toast.error("Something went wrong", {
            className: "toast-dark",
            bodyClassName: "toast-body",
            progressClassName: "toast-progress",
          });
        }
      } catch (err) {
        console.log(err);
        toast.error("Failed to save note", {
          className: "toast-dark",
          bodyClassName: "toast-body",
          progressClassName: "toast-progress",
        });
      }
    } else {
      toast.warn("Please fill the form completely", {
        className: "toast-dark",
        bodyClassName: "toast-body",
        progressClassName: "toast-progress",
      });
    }
  };

  useEffect(() => {
    if (type === "edit" && data) {
      setFormDetails({
        title: data.title || "",
        content: data.content || "",
        tags: data.tags || [],
        isPinned: data.isPinned || false,
      });
    }
  }, [type, data]);

  return (
    <div>
      <div className="flex flex-col gap-2">
        <div className="flex justify-between">
          <label className="text-xs text-slate-400">TITLE</label>
          <button>
            <MdClose onClick={closeModal} className="text-xl text-slate-600" />
          </button>
        </div>

        <input
          type="text"
          className="text-2xl text-slate-950 outline-none"
          placeholder="Go to the gym at 5"
          value={formDetails.title}
          onChange={(e) =>
            setFormDetails({ ...formDetails, title: e.target.value })
          }
        />
      </div>
      <div className="flex flex-col gap-2 mt-4">
        <label className="text-xs text-slate-400">CONTENT</label>
        <textarea
          type="text"
          className="text-sm text-slate-950 outline-none bg-slate-50 p-2 rounded"
          placeholder="Content"
          rows={10}
          value={formDetails.content}
          onChange={(e) =>
            setFormDetails({ ...formDetails, content: e.target.value })
          }
        />
      </div>
      <div className="mt-3">
        <label className="text-xs text-slate-400">TAGS</label>
        <TagInput
          tags={formDetails.tags}
          setTags={(newTags) =>
            setFormDetails({ ...formDetails, tags: newTags })
          }
        />
      </div>
      <div className="mt-4 flex items-center gap-2">
        <label className="text-xs text-slate-400">PIN NOTE</label>
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            checked={formDetails.isPinned}
            onChange={(e) =>
              setFormDetails({ ...formDetails, isPinned: e.target.checked })
            }
            className="sr-only peer"
          />
          <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-black transition-all after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full"></div>
        </label>
      </div>
      <button
        className="btn w-[100%] text-white bg-gray-900 font-medium mt-5 p-2 rounded max-sm:mb-10"
        onClick={handleSaveNote}
      >
        {type === "add" ? "ADD" : "UPDATE"}
      </button>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
};

export default AddEditNotes;
