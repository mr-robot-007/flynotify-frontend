import { Toaster } from "react-hot-toast";
import Header from "../ui/components/Header";
import { useMoveBack } from "../hooks/useMoveBack";
import { useEffect, useState } from "react";
import Select from "react-select";
import axios from "axios";
import DashboardItem from "../ui/components/DashboardItem";

function SearchFlight() {
  const moveBack = useMoveBack();
  const [selectedOption, setSelectedOption] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [flights, setFlights] = useState([]);
  
  const [options, setOptions] = useState([]);
  const baseurl = import.meta.env.VITE_BACKEND_URL;
  // const locations = ['Delhi','Dehradun','New Delhi','Chandigarh','Gujrat','Gwalior','Jaipur','Kota','Lucknow','Mumbai','Pune','Rajasthan','Surat','Udaipur','Varanasi','Vishakhapatnam']

  const handleChange = (option) => {
    setSelectedOption(option);
    console.log(`Option selected:`, option);
  };

  const handleInputChange = (inputValue) => {
    console.log(`Input changed:`, inputValue);
    if(inputValue.length >=3){
        setInputValue(inputValue);
    }
  };

  useEffect(() => {
    async function fetchAllFlights() {
      if(!selectedOption) return
      try {
        const { data, error } = await axios.post(
          `${baseurl}/searchflights`,
          {
            loc: selectedOption?.value,
          }
        );
        console.log(data);
        setFlights(data);
      } catch (e) {
        console.log(e.response.data.detail);
      }
    }

    fetchAllFlights();
  }, [baseurl,selectedOption]);

  useEffect(() => {
    console.log('inputvalue',inputValue)
    async function getData() {
      const response = await axios.post(`${baseurl}/locations`, {
        keyword: inputValue,
      });
      console.log(response);
      setOptions(response.data);
    }
    getData();

  }, [inputValue,baseurl]);

  return (
    <div className="h-dvh w-full  bg-[#e7eef4] flex items-center justify-center m-auto">
      <div className="bg-white rounded-xl sm:max-w-[380px] sm:max-h-[700px] h-[90%] w-[80%] m-4 ">
        <Header title="Search Flights" moveBack={moveBack} />
        <Toaster />
        <form>
          <div className="flex flex-col items-center  gap-4 mt-5">
            <label htmlFor="status" className="font-semibold">
              Search By Departure:
            </label>
            <Select
              value={selectedOption}
              onChange={handleChange}
              options={options}
              onInputChange={handleInputChange}
            />

          </div>
        </form>

        <ul className="flex flex-col gap-3 mt-4 w-full items-center">
          {flights.length == 0 ? (
            <li className="text-center">
              Search flight by Departure
            </li>
          ) : (
            flights.map((flight, i) => <DashboardItem key={i} {...flight} search_flight="search" />)
          )}
        </ul>
      </div>
    </div>
  );
}

export default SearchFlight;
