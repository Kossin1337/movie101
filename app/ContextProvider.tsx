"use client";

import React, { createContext, useContext, useState, c } from "react";

interface ISearchOptions {
  title: string;
  page: number;
  startYear: number | null;
  endYear: number | null;
}

interface IContext {
  theme: string;
  searchOptions: ISearchOptions;
}

const initialSearchOptions = {
  title: "",
  page: 0,
  startYear: null,
  endYear: null,
};

const initialContextValues = {
  theme: "dark",
  searchOptions: initialSearchOptions,
};

/* DO A RESEARCH ON CREATE SERVER CONTEXT */
const AppContext = createContext<IContext>(initialContextValues);

const ContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [searchOptions, setSearchOptions] =
    useState<ISearchOptions>(initialSearchOptions);

  const updateSearchOptions = (
    key: keyof ISearchOptions,
    value: ISearchOptions[keyof ISearchOptions]
  ) => {
    setSearchOptions((prevSearchOptions) => ({
      ...prevSearchOptions,
      [key]: value,
    }));
  };

  // Define a helper function to use the context
  const useAppContext = (): IContext => {
    const context = useContext(AppContext);
    if (!context) {
      throw new Error(
        "useAppContext must be used within an AppContextProvider"
      );
    }
    return context;
  };

  return (
    <AppContext.Provider value={initialContextValues}>
      {children}
    </AppContext.Provider>
  );
};

// export default ContextProvider;
export { AppContext, ContextProvider };
