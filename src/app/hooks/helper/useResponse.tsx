import { useToast } from "@chakra-ui/react";
import { useCallback } from "react";

const useResponse = () => {
  const toast = useToast();

  const showToast = useCallback(
    (
      title: string,
      status: "warning" | "error" | "success",
      message?: string
    ) => {
      toast({
        position: "top",
        title: title,
        description: message,
        status: status,
        duration: 3000,
        isClosable: true,
      });
    },
    [toast]
  );

  const handleSuccess = useCallback(
    (message?: string) => {
      showToast("Success", "success", message);
    },
    [showToast]
  );

  const handleError = useCallback(
    (errorCode: number, message?: string) => {
      switch (errorCode) {
        case 401:
          // Unauthorized
          console.log("[401]: Unauthorized", message);
          break;
        case 403:
          // Denied
          console.log("[403]: Denied", message);
          break;
        case 404:
          // Invalid / Not Found
          console.log("[404]: Not Found", message);
          break;
        case 500:
          // Server Error
          console.log("[500]:", message);
          showToast("Oops..", "error", message);
          break;
        case 400:
          // Client Error
          console.log("[400]:", message);
          break;
        default:
          // Unknown
          showToast("Ooops..", "error", message);
          break;
      }
    },
    [showToast]
  );

  return { handleSuccess, handleError };
};

export default useResponse;
