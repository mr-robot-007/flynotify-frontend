import { useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import {Outlet} from "react-router-dom";
import { IoArrowBackSharp } from "react-icons/io5";
import {Toaster} from "react-hot-toast";
function AppLayout() {
  const [isOpen, setIsOpen] = useState(false);
    return (
      <div className="h-dvh w-full  bg-[#e7eef4] flex items-center justify-center m-auto">
        <div className="bg-white rounded-xl sm:max-w-[380px] sm:max-h-[700px] h-[90%] w-[80%] m-4">

        <main className=" overflow-x-auto h-full ">
          <div className="flex flex-col mx-0 my-auto h-full ">
            <Toaster/>
            <Outlet />
          </div>
        </main>
        </div>
      </div>
    );
  }
  
  export default AppLayout;
