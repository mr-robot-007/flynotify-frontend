
import { IoIosLogOut } from "react-icons/io";
function Header({isOpen,setIsOpen}) {
    return (
        <div className={"w-full bg-[#2194F2] h-12 flex items-center justify-between text-white text-3xl font-bold p-4"}>
            <h2 className="">FlyNotify</h2>
            <IoIosLogOut/>
        </div>
    )
}

export default Header
