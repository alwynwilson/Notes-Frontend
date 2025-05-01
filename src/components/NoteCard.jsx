import React from "react";
import { MdOutlinePushPin } from "react-icons/md";
import { MdCreate, MdDelete } from "react-icons/md";

const NoteCard = ({
  title,
  date,
  content,
  tags,
  isPinned,
  onEdit,
  onDelete,
  onPinNote,
}) => {
  return (
    <div className="border lg:w-80 rounded p-4 bg-white hover:shadow-xl transition-all ease-in-out m-4">
      <div className="flex items-center justify-between">
        <div>
          <h6 className="text-sm font-medium">{title}</h6>
          <span className="text-xs text-slate-500">{date}</span>
        </div>
        <MdOutlinePushPin
          className={`text-xl ${
            isPinned == true ? "text-black" : "text-slate-300"
          } cursor-pointer hover:text-gray-700 `}
          onClick={onPinNote}
        />
      </div>
      <p className="text-xs text-slate-600 mt-2">{content?.slice(0, 60)}</p>
      <div className="flex items-center justify-between mt-2">
        <div className="flex items-center gap-1 text-xs text-slate-500">
          {tags && tags.length > 0 ? (
            tags.map((list, index) => (
              <span key={index} className="bg-gray-200 px-2 py-1 rounded-full">
                {list}
              </span>
            ))
          ) : (
            <span className="text-xs text-slate-400">No tags</span>
          )}
        </div>
        <div className="flex items-center gap-2">
          <MdCreate
            className="icon-btn hover:text-green-600"
            onClick={onEdit}
          />
          <MdDelete
            className="icon-btn hover:text-red-500"
            onClick={onDelete}
          />
        </div>
      </div>
    </div>
  );
};

export default NoteCard;
