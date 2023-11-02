import { useQuery } from "react-query";
import { getEventsTheatre } from "../../network/requests/TheatreServices";
import EventsGrid from "../../components/EventsGrid";
import Slider from "../../components/Slider";
import PageWithHelmet from "../../components/PageWithHelmet";
import { useEffect } from "react";
import {useSearchContext} from "../../context/SearchContext"
function Theatre() {

  const { searchResults,setSearchResults, setSearchData } = useSearchContext();

  const { data, isLoading, isError } = useQuery("theatre", getEventsTheatre);

  useEffect(() => {
    if (!isLoading && !isError) {
      setSearchResults(data);
    }
    window.scrollTo(0, 0);
  }, [isLoading, isError, data, setSearchData]);
 setSearchData(data)
 

  if (isLoading) {
    return <p>Loading...</p>; 
  }
  const theatre = "/theatre";
  return (
    <>
      <PageWithHelmet title={"Tiyatro-Bilet Al"} />
      <Slider />
      <EventsGrid data={searchResults} linkPath={theatre} />
    </>
  );
}

export default Theatre;
