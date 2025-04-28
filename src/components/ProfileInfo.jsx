import React, { useState } from "react";
import { getInitials } from "../utils/helper";

const ProfileInfo = ({onLogout}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="flex items-center gap-3">
      <div className="relative inline-block text-left">
        <div>
          <div
            className="w-10 h-10 flex items-center justify-center rounded-full text-slate-950 font-medium bg-slate-200 cursor-pointer"
          >
            {getInitials('Williams Johns')}
          </div>
          
        </div>

        {isOpen && (
          <div
            className="origin-top-right absolute right-[-140px] max-sm:-right-[30px] mt-5 w-40
                    rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5
                    focus:outline-none"
            role="menu"
          >
            <div className="py-1" role="none">
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700
                            hover:bg-gray-100"
                role="menuitem"
              >
                <button className="text-sm text-slate-700 underline" onClick={onLogout}>
                  Logout
                </button>
              </a>
            </div>
          </div>
        )}
      </div>
      <div className="max-[425px]:hidden">
    <p className="text-sm font-medium">William Johns</p>
  </div>

      <button onClick={toggleDropdown} className="w-7 h-7 flex items-center justify-center rounded-full text-slate-950 font-medium hover:bg-slate-200 cursor-pointer"><i className="fa-solid fa-ellipsis-vertical"></i></button>
      
    </div>
  );
};

export default ProfileInfo;
