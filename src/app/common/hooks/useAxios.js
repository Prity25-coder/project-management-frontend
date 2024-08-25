import { useEffect, useState } from "react";
import axiosInstance from "../../../config/axios.config";

// Import Axios to use the cancel token
import axios from "axios";

const useAxios = (endPoint) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState({});

  useEffect(() => {
    // Create a new cancel token source
    const source = axios.CancelToken.source();

    const getData = async () => {
      setLoading(true);
      try {
        const response = await axiosInstance.get(endPoint, {
          cancelToken: source.token, // Attach the cancel token to the request
        });
        setData(response.data);

        // Clear any previous errors
        setError(null);
      } catch (error) {
        if (axios.isCancel(error)) {
          // Request cancellation log
          console.log("Request canceled:", error.message);
        } else {
          setError(
            error.response?.data?.message ||
              error.message ||
              "An error occurred"
          );
        }
      } finally {
        setLoading(false);
      }
    };

    getData();

    return () => {
      // Cancel the request if the component is unmounted or the endpoint changes
      source.cancel("Operation canceled by the user.");
    };
  }, [endPoint]);

  return [loading, error, data];
};

export default useAxios;
