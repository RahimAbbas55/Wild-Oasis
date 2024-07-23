import { useQuery } from "@tanstack/react-query";
import { getCurrUser } from "../../services/apiAuth";

export function useUser(){
    const { isLoading , data : user } = useQuery({
        queryKey : ['Users'],
        queryFn : getCurrUser
    })
    return { isLoading , user , isAuthenticated : user?.role === 'authenticated' }
}