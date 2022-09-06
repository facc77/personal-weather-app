import React, { useState, createContext } from 'react';

export type Style = {
  opacity: number;
};

type StyleContextType = {
  style: Style;
  setStyle: React.Dispatch<React.SetStateAction<Style>>;
};

type StyleContextProviderProps = {
  children: React.ReactNode;
};

export const StyleContext = createContext({} as StyleContextType);

export const StyleContextProvider = ({
  children,
}: StyleContextProviderProps) => {
  const [style, setStyle] = useState<Style>({
    opacity: 1,
  });
  return (
    <StyleContext.Provider value={{ style, setStyle }}>
      {children}
    </StyleContext.Provider>
  );
};
