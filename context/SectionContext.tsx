"use client";

import React, { createContext, useContext, useState } from "react";

interface SectionContextType {
  activeTitle: string | null;
  setActiveTitle: React.Dispatch<React.SetStateAction<string | null>>;
}

const SectionContext = createContext<SectionContextType | undefined>(undefined);

export const SectionProvider = ({ children }: { children: React.ReactNode }) => {
  const [activeTitle, setActiveTitle] = useState<string | null>(null);

  return (
    <SectionContext.Provider value={{ activeTitle, setActiveTitle }}>
      {children}
    </SectionContext.Provider>
  );
};

export const useSection = () => {
  const context = useContext(SectionContext);
  if (context === undefined) {
    throw new Error("useSection must be used within a SectionProvider");
  }
  return context;
};
