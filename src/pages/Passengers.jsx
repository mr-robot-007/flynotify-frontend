import axios from "axios";
import { useEffect, useState } from "react";
import { IoIosLogOut } from "react-icons/io";
import { IoArrowBackSharp } from "react-icons/io5";
import { useNavigate, useParams } from "react-router-dom";
import { useMoveBack } from "../hooks/useMoveBack";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import Header from "../ui/components/Header";

function Passengers() {
  const { flightId } = useParams("");
  const [flightData, setFlightData] = useState({});
  const [error, setError] = useState(null);
  const moveBack = useMoveBack();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    getValues,
  } = useForm();
  const navigate = useNavigate();
  const baseurl = import.meta.env.VITE_BACKEND_URL;

  useEffect(() => {
    async function fetchFlight() {
      try {
        const { data, error } = await axios.get(
          `${baseurl}/flights/${flightId}`
        );
        console.log(data);
        // console.log(data?.scheduled_departure?.substr(0,19));
        setFlightData(data);
        reset({
          flightId: data.flight_id,
        });
      } catch (e) {
        console.log(e.response.data.detail);
        setError(e.response.data.detail);
      }
    }
    fetchFlight();
  }, [reset, flightId, baseurl]);

  async function onSubmit(formData) {
    console.log(formData);

    try {
      const { data, error } = await axios.post(
        `${baseurl}/passengers/update/${flightId}`,
        { ...formData },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `${localStorage.getItem("token")}`,
          },
        }
      );
      console.log(formData);
      if (data.detail == "Email Already Exists") {
        toast("Email Already Exists.");
      } else {
        toast.success("Passenger Added successfully!");
        navigate("/dashboard");
      }
    } catch (e) {
      toast.error("Something went wrong.");
      console.log(e);
      setError(e);
    }
  }

  return (
    <>
      <Header title="Passengers" moveBack={moveBack} />

      <div className=" h-full  mx-4 mb-4 overflow-scroll no-scrollbar">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col items-center  gap-4 mt-5">
            <div className="flex flex-col gap-2 w-[85%]">
              <label htmlFor="flightId" className="font-semibold">
                Flight Id:
              </label>
              <input
                id="flightId"
                className="border border-gray-500 text-gray-600  rounded-lg p-2 "
                type="text"
                placeholder="Flight ID"
                disabled
                {...register("flightId")}
              />
            </div>

            <div className="flex flex-col gap-2 w-[85%]">
              <label htmlFor="passengers" className="font-semibold">
                Passengers:
              </label>
              <ul className="border border-gray-500 text-gray-600 text-sm font-semibold bg-[#F2F2F2] rounded-lg p-2 overflow-hidden ">
                {flightData?.passenger_contacts?.map((contact, i) => (
                  <li key={i}>
                    {i + 1}. {contact.value}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-2 w-[85%]">
              <label htmlFor="email_address" className="font-semibold">
                Add New Passenger:
              </label>
              <input
                className="border border-gray-500 text-gray-600  rounded-lg p-2 "
                type="email"
                placeholder="Passenger Email"
                {...register("email_address")}
              />
            </div>
            <button
              className=" bg-[#2194F2] text-white text-sm rounded-xl p-2 w-[85%] mt-3"
              onClick={() => console.log("clicked")}
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Passengers;
