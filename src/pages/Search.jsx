import axios from "axios";
import { useEffect, useState } from "react";
import { IoArrowBackSharp } from "react-icons/io5";
import { formatDate } from "../helpers/helper";
import { useMoveBack } from "../hooks/useMoveBack";
import Header from "../ui/components/Header";
import toast, { Toaster } from "react-hot-toast";

function Dashboard() {
    const [id, setId] = useState("");
    const [error,setError] = useState(null);

    const [flightData, setFlightData] = useState(null);
    const moveBack = useMoveBack();
    const baseurl = import.meta.env.VITE_BACKEND_URL;

    async function handleSubmit(e){
        setError(null);
        e.preventDefault();
        if(id == "" ){
            setError("Please fill all the fields");
        }
        else {
            try {
                const {data ,error} = await axios.get(`${baseurl}/flights/${id}`);
                console.log(data);
                setFlightData(data);
            }
            catch(e)
            {
                console.log(e.response.data.detail);
                setError(e.response.data.detail);
                toast.error(e.response.data.detail);
            }
        }
    }
    const statusColor = {
        Delayed: 'bg-yellow-500',
        Cancelled: 'bg-red-500',
      };

    useEffect(() => {
        async function fetchSampleData(){
            try {
                const {data ,error} = await axios.get(`${baseurl}/flights/6E2341`);
                // console.log(data);
                setFlightData(data);
            }
            catch(e)
            {
                console.log(e.response.data.detail);
                setError(e.response.data.detail);
            }
            
        }

        fetchSampleData();

    }, [baseurl]);




    return (
        <div className="h-dvh w-full  bg-[#e7eef4] flex items-center justify-center m-auto">
                <div className="bg-white rounded-xl sm:max-w-[380px] sm:max-h-[700px] h-[90%] w-[80%] m-4 ">
                    <Header title="Search Flights" moveBack={moveBack}/>
                    <Toaster/>
                    <form>  
                        <div className="flex flex-col items-center  gap-4 mt-5">
                            <input className="border border-gray-300 bg-[#e7eef4]   w-[85%] rounded-lg p-2 " type="email"  placeholder="6E 2341" onChange={(e) => setId(e.target.value)} />
                            <button className=" bg-[#2194F2] text-white text-sm rounded-xl p-2 w-[85%] mt-3" onClick={handleSubmit}>Search</button>
                        </div>
                    </form>
                    {flightData && (
                    <div className="flex flex-col items-center  gap-4 mt-8">
                        <h2 className="text-lg font-semibold  w-[85%] py-2">Flight Information</h2>
                        <div className=" w-[85%] flex flex-col text-sm">

                            <p className="text-[#73787c]"><span className="font-semibold text-black">Flight Id:</span> {flightData?.flight_id}</p>
                            <p className="text-[#73787c]"><span className="font-semibold text-black">Airline: </span>{flightData?.airline}</p>
                            <p className="text-[#73787c]"><span className="font-semibold text-black">Status: </span> <span className={`py-1 px-2 rounded-xl text-white ${statusColor[flightData?.status] || 'bg-green-500'}`}>{flightData?.status}</span></p>
                            <p className="text-[#73787c]"><span className="font-semibold text-black">Arival Gate: </span>{flightData?.arrival_gate}</p>
                            <p className="text-[#73787c]"><span className="font-semibold text-black">Departure Gate: </span>{flightData?.departure_gate}</p>
                            <p className="text-[#73787c]"><span className="font-semibold text-black">Scheduled Departute: </span>{formatDate(flightData?.scheduled_departure.substr(0,19))}</p>
                            <p className="text-[#73787c]"><span className="font-semibold text-black">Scheduled Arrival: </span>{formatDate(flightData?.scheduled_arrival.substr(0,19))}</p>
                            <p className="text-[#73787c]"><span className="font-semibold text-black">Departure: </span>{flightData?.departure}</p>
                        </div>
                    </div>
                    )}
                    
                </div>

        </div>
    )
}

export default Dashboard
