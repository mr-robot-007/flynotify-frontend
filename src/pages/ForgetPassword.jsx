import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";




function ForgetPassword() {
    const [email, setEmail] = useState("");
    const [isloading, setIsloading] = useState(false);
    const [error,setError] = useState(null);
    const navigate = useNavigate();
    const baseurl = import.meta.env.VITE_BACKEND_URL;

    async function handleSubmit(e){
        setIsloading(true);
        setError(null);
        e.preventDefault();
        if(email == "" ){
            setError("Please fill all the fields");
            setIsloading(false);
        }
        else {
            console.log(email);
            try {
                const {data ,error} = await axios.post(`${baseurl}/forgotpassword`,{email:email});
                toast.success(data.message);
                setIsloading(false);
                navigate('/dashboard');

            }
            catch(e)
            {
                toast.error(e.response.data.detail)
                setIsloading(false);
            }
        }
        setIsloading(false);
    }


    return (
        <div className="h-dvh w-full  bg-[#e7eef4] flex items-center justify-center m-auto">
                <div className="bg-white rounded-xl sm:max-w-[380px] sm:max-h-[700px] h-[90%] w-[80%] m-4 ">
                    <Toaster/>
                    <h1 className="text-center font-bold text-3xl py-4 rounded-t-lg bg-[#2194F2] text-white">FlyNotify</h1>
                    <h2 className="text-center font-bold text-xl mt-4">Forgot Password</h2>
                    <form>  
                        <div className="flex flex-col items-center  gap-4 mt-5">
                            <input className="border border-gray-300 bg-[#e7eef4]   w-[85%] rounded-lg p-2 " type="email" value={email} placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                            <button className=" bg-[#2194F2] text-white text-sm rounded-xl p-2 w-[85%] mt-3" onClick={handleSubmit} disabled={isloading} >{isloading ? "Sending..." : "Send Reset Link"}</button>
                            or
                            <button className=" bg-[#2194F2] text-white text-sm rounded-xl p-2 w-[85%]" onClick={() => navigate("/Login")}>Login</button>
                        </div>
                    </form>
                </div>

        </div>
    )
}

export default ForgetPassword
