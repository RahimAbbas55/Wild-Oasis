import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getBookings } from "../../services/apiBookings";
import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../../utils/constants";

export function useBookings() {
  const queryClient = useQueryClient()

  // 1) Filter
  const [searchParams] = useSearchParams();
  const filteredValue = searchParams.get('status')
  const filter = !filteredValue || filteredValue === 'all' ? null : { field : 'status' , value : filteredValue , method : 'eq' }

  // 2) Sort by
  const sortByRaw = searchParams.get('sortBy') || 'startDate-dsc'
  const [ field , direction ] = sortByRaw.split('-')
  const sortBy = { field , direction }

  // 3) Pagination
  const page = !searchParams.get('page') ? 1 : Number(searchParams.get('page'))

  // 4) Query
  const {
    isLoading,
    data: {data : bookings , count} = {},
    error,
  } = useQuery({
    queryKey: ["Bookings" , filter , sortBy , page],
    queryFn: () => getBookings({filter , sortBy , page}),
  });

  // 5) Pre-Fetching
  const pageCount = Math.ceil( count / PAGE_SIZE )
  if ( page < pageCount )
  queryClient.prefetchQuery({
    queryKey: ["Bookings" , filter , sortBy , page + 1],
    queryFn: () => getBookings({filter , sortBy , page : page + 1})
  })

  if ( page > 1 )
  queryClient.prefetchQuery({
    queryKey: ["Bookings" , filter , sortBy , page - 1],
    queryFn: () => getBookings({filter , sortBy , page : page - 1})
  })

  return { isLoading, bookings, error ,count};
}
