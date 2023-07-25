import { useDebugValue, useSyncExternalStore } from "react";

const useOnlineStatus = () => {
  const subscribe = (status) => {
    window.addEventListener("online", status);
    window.addEventListener("offline", status);
    return () => {
      window.removeEventListener("online", status);
      window.removeEventListener("offline", status);
    };
  };

  const isOnline = useSyncExternalStore(
    subscribe,
    () => navigator.onLine,
    () => true
  );
  useDebugValue(isOnline ? "Online" : "Offline");
  return isOnline;
};

export default useOnlineStatus;
