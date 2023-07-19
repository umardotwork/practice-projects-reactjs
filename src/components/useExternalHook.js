import { useEffect, useState } from "react";

// Custom React Hook

const useExternalHook = (url) => {
  const [data, setData] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setData(json);
      } catch (error) {
        console.log(error);
        setError(error);
      }
    };

    fetchData();
  }, [url]);

  return { data, error };
};

export default useExternalHook;
