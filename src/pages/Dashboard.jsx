import { IoArrowBackSharp } from "react-icons/io5";
import { IoIosLogOut } from "react-icons/io";
import { useEffect, useState } from "react";
import axios from "axios";
import DashboardItem from "../ui/components/DashboardItem";
import { logout } from "../services/apiAuth";
import { useNavigate } from "react-router-dom";
function Dashboard() {
  const [flights, setFlights] = useState([]);
  const navigate = useNavigate();
  const baseurl = import.meta.env.VITE_BACKEND_URL;

  useEffect(() => {
    async function fetchAllFlights() {
      try {
        const { data, error } = await axios.get(
          `${baseurl}/flights`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `${localStorage.getItem("token")}`,
            },
          }
        );
        console.log(data);
        setFlights(data);
      } catch (e) {
        console.log(e.response.data.detail);
      }
    }

    fetchAllFlights();
  }, [baseurl]);

  function handleLogout() {
    logout();
    navigate("/login");
  }

  return (
    <>
      <div className="text-center font-bold text-2xl py-4 rounded-t-lg  flex bg-[#2194F2] text-white ">
        <h2 className="text-center font-bold text-xl ml-[40%]">Flights</h2>
        <IoIosLogOut
          className="text-3xl ml-[28%] p-1 hover:bg-white hover:text-[#2194F2] hover:rounded-full"
          onClick={handleLogout}
        />
      </div>

      <div className=" h-full  mx-4 mb-4 overflow-scroll no-scrollbar mt-4">
        <ul className="flex flex-col gap-3">
          {flights.length == 0 ? (
            <li className="text-center">
              <div className="flex items-center justify-center">
                <div
                  className=" text-blue-400  text-c inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] text-primary motion-reduce:animate-[spin_1.5s_linear_infinite]"
                  role="status"
                >
                  <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                    Loading...
                  </span>
                </div>
              </div>
            </li>
          ) : (
            flights.map((flight, i) => <DashboardItem key={i} {...flight} />)
          )}
        </ul>
      </div>
    </>
  );
}

export default Dashboard;
