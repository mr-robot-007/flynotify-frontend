import { IoIosLogOut } from "react-icons/io";
import { IoArrowBackSharp } from "react-icons/io5";
import { logout } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";

function Header({ title, moveBack }) {
  const navigate = useNavigate();

  function handleLogout() {
    logout();
    navigate("/login");
  }

  return (
    <div className="text-center font-bold text-2xl py-4 rounded-t-lg  flex justify-between bg-[#2194F2] text-white">
      {moveBack && (
        <IoArrowBackSharp
          className="text-3xl ml-4 p-1 hover:bg-white hover:text-[#2194F2] hover:rounded-full"
          onClick={moveBack}
        />
      )}
      <h2 className={`text-center font-bold text-xl ${moveBack == null ? 'ml-[40%]' : ''}`}>{title}</h2>
      <IoIosLogOut className="text-3xl mr-4 p-1 hover:rounded-full hover:bg-white hover:text-[#2194F2] " onClick={handleLogout} />
    </div>
  );
}

export default Header;
