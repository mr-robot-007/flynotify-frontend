import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

function Login() {
    const [email, setEmail] = useState("admin@flynotify.com");
    const [password, setPassword] = useState("password");
    const [isloading, setIsloading] = useState(false);
    const navigate = useNavigate();
    const baseurl = import.meta.env.VITE_BACKEND_URL;
    console.log(baseurl);
    async function handleSubmit(e){
        setIsloading(true);
        e.preventDefault();
        if(email == "" || password == ""){
            toast.error("Please fill all the fields");
            setIsloading(false);
        }
        else {
            console.log(email, password);
            try {
                const {data ,error} = await axios.post(`${baseurl}/login`,{username:email, password: password});
                // console.log(data);
                localStorage.setItem("token", data);
                setIsloading(false);
                navigate('/dashboard');

            }
            catch(e)
            {
                console.log(e.response.data.detail);
                toast.error(e.response.data.detail);
                setIsloading(false);
            }
        }
        setIsloading(false);
    }

    return (
        <div className="h-dvh w-full  bg-[#e7eef4] flex items-center justify-center m-auto">
                <Toaster/>
                <div className="bg-white rounded-xl sm:max-w-[380px] sm:max-h-[700px] h-[90%] w-[80%] m-4 ">
                    <h1 className="text-center font-bold text-2xl py-4 rounded-t-lg bg-[#2194F2] text-white">FlyNotify</h1>
                    <h2 className="text-center font-bold text-xl mt-4">Login in to your account</h2>
                    <form>  
                        <div className="flex flex-col items-center  gap-4 mt-5">
                            <input className="border border-gray-300 bg-[#e7eef4]   w-[85%] rounded-lg p-2 " type="email" value={email} placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                            <input className="border border-gray-30 bg-[#e7eef4] w-[85%]  rounded-lg p-2 " type="password" value={password} placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                            <Link to="/forgotpassword" className="text-[#2194F2] w-[85%] text-sm underline ">Forgot Password?</Link>
                            <button className=" bg-[#2194F2] text-white text-sm rounded-xl p-2 w-[85%] mt-3" onClick={handleSubmit} disabled={isloading} >{isloading ? "Loading..." : "Login"}</button>
                            or
                            <button className=" bg-[#2194F2] text-white text-sm rounded-xl p-2 w-[85%]" onClick={() => navigate("/search")}>Check Flight Status</button>
                            or
                            <button className=" bg-[#2194F2] text-white text-sm rounded-xl p-2 w-[85%]" onClick={() => navigate("/searchflight")}>Search Flights</button>
                        </div>
                    </form>
                </div>

        </div>
    )
}

export default Login
