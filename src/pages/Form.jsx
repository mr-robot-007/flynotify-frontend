import axios from "axios";
import { useEffect, useState } from "react";
import { IoIosLogOut } from "react-icons/io";
import { IoArrowBackSharp } from "react-icons/io5";
import { useNavigate, useParams } from "react-router-dom";
import { useMoveBack } from "../hooks/useMoveBack";
import { useForm } from "react-hook-form"
import {toast} from "react-hot-toast";
import Header from "../ui/components/Header";

function Form() {
  // const  flightId  = "6E2341";
  const { flightId } = useParams("");
  const [flightData, setFlightData] = useState({});
  const [error, setError] = useState(null);
  const moveBack = useMoveBack();
  const {register,handleSubmit,reset, formState : {errors},getValues,} = useForm();
  const navigate = useNavigate();
  const baseurl = import.meta.env.VITE_BACKEND_URL;

  useEffect(() => {
    async function fetchFlight() {
        try {
            const {data ,error} = await axios.get(`${baseurl}/flights/${flightId}`);
            // console.log(data);
            // console.log(data?.scheduled_departure?.substr(0,19));
            setFlightData(data);
            reset({
              flightId: data.flight_id,
              status: data.status,
              arrival_gate: data.arrival_gate,
              departure_gate: data.departure_gate,
              scheduled_departure: data.scheduled_departure.substr(0, 19),
              scheduled_arrival: data.scheduled_arrival.substr(0, 19),
            });
        }
        catch(e)
        {
            console.log(e.response.data.detail);
            setError(e.response.data.detail);
        }
    }
    fetchFlight();


  }, [reset,flightId,baseurl]);

  async function onSubmit(formData) {
    console.log(formData);

      try {
        const {data ,error} = await axios.post(`${baseurl}/flights/update/${flightId}`,{...formData},{
          headers: {
            "Content-Type": "application/json",
            "Authorization": `${localStorage.getItem("token")}`,
          },
        });
        console.log(data);
        toast.success('Flight updated successfully!');
        navigate('/dashboard');
       
    }
    catch(e)
    {
        toast.error('Something went wrong.')
        console.log(e);
        setError(e);
    }

  }

  function handleRedirect(e){
    e.preventDefault();
    console.log('hii')
    navigate(`/passengers/${flightId}`);
  }

  return (
    <>
      <Header
        title="Update Flight Status"
        moveBack={() => navigate("/")}
      />

      <div className=" h-full  mx-4 mb-4 overflow-scroll no-scrollbar">
      <form onSubmit={handleSubmit(onSubmit)}>  
                        <div className="flex flex-col items-center  gap-4 mt-5">
                            <div className="flex flex-col gap-2 w-[85%]">
                                <label htmlFor="flightId" className="font-semibold">Flight Id:</label>
                                <input id="flightId" className="border border-gray-500 text-gray-600  rounded-lg p-2 " type="text" placeholder="Flight ID"  disabled {...register("flightId")}/>
                            </div>
                            <div className="flex flex-col gap-2 w-[85%] ">
                                <label htmlFor="status" className="font-semibold">Status:</label>
                                <select name="status" className="border border-gray-500 text-gray-600  rounded-lg p-2 "  {...register("status")}>
                                    <option value ="On Time" defaultValue={flightData?.status === "On Time"}>On Time</option>
                                    <option value ="Delayed" defaultValue={flightData?.status === "Delayed"}>Delayed</option>
                                    <option value ="Cancelled" defaultValue={flightData?.status === "Cancelled"}>Cancelled</option>
                                </select>
                            </div>
                            <div className="flex flex-col gap-2 w-[85%]">
                                <label htmlFor="arrival_gate" className="font-semibold">Arrival Gate:</label>
                                <input className="border border-gray-500 text-gray-600  rounded-lg p-2 " type="text" placeholder="Arrival Gate"  {...register("arrival_gate")} />
                            </div>
                            <div className="flex flex-col gap-2 w-[85%]">
                                <label htmlFor="departure_gate" className="font-semibold">Departure Gate:</label>
                                <input className="border border-gray-500 text-gray-600  rounded-lg p-2 " type="text" placeholder="Departure Gate"  {...register("departure_gate")} />
                            </div>
                            <div className="flex flex-col gap-2 w-[85%]">
                                <label htmlFor="scheduled_departure" className="font-semibold">Scheduled Departure:</label>
                                <input className="border border-gray-500 text-gray-600  rounded-lg p-2 " type="datetime-local" placeholder="Scheduled Departure"  {...register("scheduled_departure")} />
                            </div>
                            <div className="flex flex-col gap-2 w-[85%]">
                                <label htmlFor="scheduled_arrival" className="font-semibold">Scheduled Arrival:</label>
                                <input className="border border-gray-500 text-gray-600  rounded-lg p-2 " type="datetime-local" placeholder="Scheduled Arrival"   {...register("scheduled_arrival")} />
                            </div>
                            <div className=" flex flex-col items-center justify-center w-full gap-2">
                            <button className=" bg-[#2194F2] text-white text-sm rounded-xl p-2 w-[85%] mt-3" onClick = {() => console.log("clicked")}>Update Details</button>
                            <button className=" bg-[#bba541] text-white text-sm rounded-xl p-2 w-[85%] mt-3" type = 'button' onClick = {(e) => handleRedirect(e)}>View Passengers</button>
                            </div>
                        </div>
                    </form>
      </div>
    </>
  );
}

export default Form;
