
import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "../services/apiAuth";


export function useUser(){
   const {isLoading, data} = useQuery({
      queryKey: ['user'],
      queryFn : getCurrentUser,
   });
   console.log(data)
   return {
      isLoading,
      user:data?.user,
      isAuthenticated: data?.user?.aud === "authenticated",
    };
}