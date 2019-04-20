import { useState, useEffect } from "react";

export const useNetwork = onChange => {
  const [status, setStatus] = useState(navigator.onLine || true);
  const handleChange = () => {
    if (onChange && typeof onChange === "function") {
      onChange(navigator.onLine);
    }
    setStatus(navigator.onLine);
  };
  useEffect(() => {
    window.addEventListener("online", handleChange);
    window.addEventListener("offline", handleChange);
    () => {
      window.removeEventListener("online", handleChange);
      window.removeEventListener("offline", handleChange);
    };
  }, []);
  return status;
};
