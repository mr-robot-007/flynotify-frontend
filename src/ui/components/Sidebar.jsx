import SidebarItem from "./SidebarItem";
import { FaHome } from "react-icons/fa";
import { MdFlight } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import { IoIosLogOut } from "react-icons/io";
import { useState } from "react";
import { RxCross1 } from "react-icons/rx";

const items = [
    {
        name: "Dashboard",
        icon: <FaHome/>,
        path: "/dashboard"
    },
    {
        name: "Flight Status",
        icon: <MdFlight/>,
        path: "/flight"
    },
    {
        name: "Settings",
        icon: <IoMdSettings/>,
        path: "/settings"
    },
    {
        name: "Logout",
        icon: <IoIosLogOut/>,
        path: "/logout"
    }

]

function Sidebar({isOpen,setIsOpen}) {
    const [active,setActive] = useState("Dashboard");
  return (
    <div className={"flex-col row-span-full border-r border-gray-100 bg-white h-dvh overflow-hidden " } >
      <div className="flex justify-end p-4 text-2xl font-bold" onClick={() => setIsOpen(false)}>
        <RxCross1/>
      </div>
      <ul className="flex flex-col m-4 items-center gap-3 text-lg font-semibold">
        {
            items.map((item,i) => <SidebarItem key={item.name} {...item} active={active} setActive={setActive} />)
        }
      </ul>
    </div>
  );
}

export default Sidebar;
