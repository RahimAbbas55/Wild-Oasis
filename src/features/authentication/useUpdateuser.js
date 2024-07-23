import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateCurrUser } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useUpdateUser(){
    const queryCLient = useQueryClient();

  const { mutate: updateUser, isLoading: isUpdating } = useMutation({
    mutationFn: updateCurrUser,
    onSuccess: () => {
      toast.success("User updated successfully edited!");
      queryCLient.invalidateQueries({
        queryKey: ["Users"],
      });
    },
    onError: (err) => toast.error(err.message),
  });
  return { updateUser , isUpdating}
}