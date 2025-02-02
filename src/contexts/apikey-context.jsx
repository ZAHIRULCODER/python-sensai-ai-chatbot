"use client";

import { createContext, useState, useContext, useEffect } from "react";
import Cookies from "js-cookie";

const ApiKeyContext = createContext();

export const ApiKeyProvider = ({ children }) => {
  const [apiKey, setApiKey] = useState("");

  useEffect(() => {
    // Read the API key from cookie when the component mounts
    const key = Cookies.get("geminiApiKey") || "";
    setApiKey(key);
  }, []);

  const updateApiKey = (newKey) => {
    Cookies.set("geminiApiKey", newKey, { expires: 365 }); // Cookie expires in 1 year
    setApiKey(newKey);
  };

  return (
    <ApiKeyContext.Provider value={{ apiKey, updateApiKey }}>
      {children}
    </ApiKeyContext.Provider>
  );
};

export const useApiKey = () => useContext(ApiKeyContext);
