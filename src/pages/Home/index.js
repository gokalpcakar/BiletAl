import { useQuery } from "react-query";
import { getEvents } from "../../network/requests/EventServices";
import EventsGrid from "../../components/EventsGrid";
import EventSearchBar from "../../components/SearchBarEvents";
import React, { useState,useEffect } from "react";
import Slider from "../../components/Slider";

function Home() {
  const { isLoading, error, data } = useQuery("events", getEvents);
  const [searchResults, setSearchResults] = useState(data);

  useEffect(() => {
    if (!isLoading) {
      setSearchResults(data);
    }
  }, [isLoading, data]);

  if (error) return "An error has occurred: " + error.message;
 

  const handleSearch = (newResults) => {
    setSearchResults(newResults);
  };
  const events = "/events";

  return (
    <>
      <Slider/>
      <EventSearchBar data={data} onSearch={handleSearch} />
      <EventsGrid data={searchResults} linkPath={events}  />
    </>
  );
}

export default Home;


