import { useDebugValue, useEffect, useState } from "react";

const useExternalHook = () => {
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);
  const [httpResponse, setHttpResponse] = useState();

  const url = "https://jsonplaceholder.typicode.com/posts";
  useDebugValue(url);

  const Developer = "Umar";
  useDebugValue(`Developer - ${Developer}`);

  useDebugValue(
    httpResponse ? "status code " + httpResponse.status : "no response"
  );

  useDebugValue(error, (e) =>
    e ? `fetch failed due to ${e.message}` : "fetch successful"
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        setHttpResponse(response);
        const json = await response.json();
        setData(json);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default useExternalHook;
