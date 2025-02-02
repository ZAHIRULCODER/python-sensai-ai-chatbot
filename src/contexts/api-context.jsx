"use client";

import { createContext, useContext, useState } from "react";

const ApiContext = createContext();

export function ApiProvider({ children }) {
  const [isKeyModalOpen, setIsKeyModalOpen] = useState(false);

  return (
    <ApiContext.Provider value={{ isKeyModalOpen, setIsKeyModalOpen }}>
      {children}
    </ApiContext.Provider>
  );
}

export function useApi() {
  const context = useContext(ApiContext);
  if (!context) throw new Error("useApi must be used within ApiProvider");
  return context;
}
