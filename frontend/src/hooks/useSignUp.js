import { useMutation, useQueryClient } from "@tanstack/react-query";
import { signup } from "../lib/api";

const useSignUp = () => {
  const queryClient = useQueryClient();

  const { mutate, isPending, error } = useMutation({
    mutationFn: signup,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["authUser"] }),  // onsuccess is used to automatically update the ui according to the response basically it is the feature of tan stack query means it refetch the data on success.In the simple words we can say it reload the data and replace the old data with new data provided.
  });

  return { isPending, error, signupMutation: mutate };
};
export default useSignUp;
