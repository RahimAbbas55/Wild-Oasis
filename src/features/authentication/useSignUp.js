import { useMutation } from "@tanstack/react-query";
import { signup as signupApi} from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useSignUp(){
    const { mutate : signup , isLoading } = useMutation({
        mutationFn : signupApi , 
        onSuccess : (user) => {
            console.log(user)
            toast.success('Account Created Successfully!\nPlease verify the account using the user\'s email address!' )
        }
    })
    return { signup , isLoading }
}