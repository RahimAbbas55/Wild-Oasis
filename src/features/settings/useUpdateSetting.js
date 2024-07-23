import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { updateSetting as updateSettingApi} from "../../services/apiSettings";

export function useUpdateSetting(){
    const queryCLient = useQueryClient();

  const { mutate: updateSetting, isLoading: isUpdating } = useMutation({
    mutationFn: updateSettingApi,
    onSuccess: () => {
      toast.success("Settings successfully edited!");
      queryCLient.invalidateQueries({
        queryKey: ["Settings"],
      });
    },
    onError: (err) => toast.error(err.message),
  });
  return { isUpdating , updateSetting } 
}