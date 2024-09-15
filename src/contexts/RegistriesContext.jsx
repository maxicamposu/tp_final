import React, { createContext } from 'react';
import useRegistries from '../hooks/useRegistries';

export const RegistriesContext = createContext();

export function RegistriesProvider({ children }) {
  const registries = useRegistries();

  return (
    <RegistriesContext.Provider value={registries}>
      {children}
    </RegistriesContext.Provider>
  );
}