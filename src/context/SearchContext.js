import React, { createContext, useContext, useState } from 'react';
import { useQuery } from "react-query";
import { getEvents } from "../network/requests/EventServices";

const SearchContext = createContext();

export function SearchContextProvider({ children }) {
    const { data } = useQuery("events", getEvents);
    const [searchResults, setSearchResults] = useState(data);

    const values = {
      searchResults,
      setSearchResults
    }

  return (
    <SearchContext.Provider value={values}>
      {children}
    </SearchContext.Provider>
  );
}

export function useSearchContext() {
  return useContext(SearchContext);
}