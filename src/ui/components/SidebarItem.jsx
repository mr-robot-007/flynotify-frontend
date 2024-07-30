import { FaHome } from "react-icons/fa";
import {useNavigate} from "react-router-dom";
function SidebarItem({name, icon, path,active, setActive}) {
    const navigate = useNavigate();
    function handleOnClick(){
        setActive(name);
        navigate(path);
    }
    return (
        <li className={"hover:bg-[#e7eef4] w-full text-center flex items-center gap-2 px-2 py-1 rounded-lg " + (active === name ? "bg-[#e7eef4]" : "") } onClick={handleOnClick}>
            {icon}
            {name}
        </li>
    )
}

export default SidebarItem
