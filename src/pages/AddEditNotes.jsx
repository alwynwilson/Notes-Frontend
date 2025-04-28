import React,{useState} from "react";
import TagInput from "../components/TagInput";
import { MdClose } from "react-icons/md"

const AddEditNotes = ({ closeModal }) => {

    const [title, setTitle] = useState("");
    const [content,SetContent] = useState("")
    const [tags,setTags] = useState([])

  return (
    <div>
      <div className="flex flex-col gap-2">
        <div className="flex justify-between">
        <label className="text-xs text-slate-400">TITLE</label>
            <button>
            <MdClose onClick={closeModal} className="text-xl text-slate-600"/>
            </button>
        </div>

        <input
          type="text"
          className="text-2xl text-slate-950 outline-none"
          placeholder="Go to the gym at 5"
          value={title}
          onChange={({target})=>setTitle(target.value)}
        />
      </div>
      <div className="flex flex-col gap-2 mt-4">
        <label className="text-xs text-slate-400">CONTENT</label>
        <textarea
          type="text"
          className="text-sm text-slate-950 outline-none bg-slate-50 p-2 rounded"
          placeholder="Content"
          rows={10}
          value={content}
          onChange={({target})=>SetContent(target.value)}
        />
      </div>
      <div className="mt-3">
        <label className="text-xs text-slate-400">TAGS</label>
        <TagInput tags={tags} setTags={setTags}/>
      </div>

      <button
        className="btn w-[100%] text-white bg-gray-900 font-medium mt-5 p-2 rounded max-sm:mb-10"
        
      >
        ADD
      </button>
    </div>
  );
};

export default AddEditNotes;
