import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login as loginApi} from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export function useLogin(){
    const navigate = useNavigate()
    const queryClient = useQueryClient()
   const { mutate : login , isLoading : isLoggingIn} = useMutation({
        mutationFn : ({email , password}) => loginApi({email , password}),
        onSuccess : (user) => {
            queryClient.setQueriesData('[user]' , user)
            navigate('/dashboard' , {
                replace : true
            })
            toast.success('User login successful!')
        },
        onError : err => {
            console.log('Error: ' , err)
            toast.error('Provided email and password are incorrect.')
        }
    })
    return { login , isLoggingIn }
}