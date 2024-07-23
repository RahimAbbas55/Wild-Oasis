import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCabin as deleteCabinApi } from "../../services/apiCabins";
import toast from "react-hot-toast";

export function useDeleteCabin(){
    const queryCLient = useQueryClient();
    const { isDeleting, mutate : deleteCabin} = useMutation({
      mutationFn: deleteCabinApi,
      onSuccess: () => {
        toast.success('Cabin deleted successfully!')
        queryCLient.invalidateQueries({
          queryKey : ["Cabins"]
        });
      },
      onError: (err) => toast.error(err.message)
    });
    return { isDeleting, deleteCabin };
}