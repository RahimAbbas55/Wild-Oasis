import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteBooking as deleteBookingApi } from "../../services/apiBookings";
import toast from "react-hot-toast";

export function useDeleteBooking(){
    const queryCLient = useQueryClient();
    const { isDeleting, mutate : deleteBooking} = useMutation({
      mutationFn: deleteBookingApi,
      onSuccess: () => {
        toast.success('Booking deleted successfully!')
        queryCLient.invalidateQueries({
          queryKey : ["Bookings"]
        });
      },
      onError: (err) => toast.error(err.message)
    });
    return { isDeleting, deleteBooking };
}