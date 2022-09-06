import React, { useState, createContext } from 'react';

export type Query = {
  query: string;
};

type QueryContextType = {
  query: Query;
  setQuery: React.Dispatch<React.SetStateAction<Query>>;
};

type QueryContextProviderProps = {
  children: React.ReactNode;
};

export const QueryContext = createContext({} as QueryContextType);

export const QueryContextProvider = ({
  children,
}: QueryContextProviderProps) => {
  const [query, setQuery] = useState<Query>({
    query: 'London',
  });
  return (
    <QueryContext.Provider value={{ query, setQuery }}>
      {children}
    </QueryContext.Provider>
  );
};
