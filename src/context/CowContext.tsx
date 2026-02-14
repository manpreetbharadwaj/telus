import React, { createContext, useContext, useEffect, useState } from 'react';
import { Cow } from '../models/Cow';
import { loadCows, saveCows } from '../storage/cowStorage';

interface CowContextType {
  cows: Cow[];
  addCow: (cow: Cow) => void;
}

const CowContext = createContext<CowContextType | undefined>(undefined);

export const CowProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cows, setCows] = useState<Cow[]>([]);

  useEffect(() => {
    loadCows().then(setCows);
  }, []);

  const addCow = (cow: Cow) => {
    const updated = [...cows, cow];
    setCows(updated);
    saveCows(updated);
  };

  return (
    <CowContext.Provider value={{ cows, addCow }}>
      {children}
    </CowContext.Provider>
  );
};

export const useCows = () => {
  const ctx = useContext(CowContext);
  if (!ctx) throw new Error('useCows must be used inside CowProvider');
  return ctx;
};
