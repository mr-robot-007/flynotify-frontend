import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { useUser } from "../../hooks/useUser";




function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  // 1.Load the authenicated user
  const { isLoading, user, isAuthenticated } = useUser();

  

  // 2. If there is no authenticated User, redirect to the /login
  useEffect(
    function () {
      if (!isAuthenticated && !isLoading) {
        navigate("/login");
      }
    },
    [isAuthenticated, isLoading, navigate]
  );

  // 3. while loading, show a spinner
  if (isLoading)
    return (
      <div className=" h-dvh flex items-center justify-center">
       <div
        className= " text-blue-400  text-c inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] text-primary motion-reduce:animate-[spin_1.5s_linear_infinite]"
        role="status">
        <span
          className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
        >Loading...</span>
      </div>
      </div>
    );

  // 4. If there is a User, render the app
  if (isAuthenticated) return children;
}

export default ProtectedRoute;
