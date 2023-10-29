import { useQuery } from "react-query";
import { getAllFestivals } from "../../network/requests/FestivalServices";
import EventsGrid from "../../components/EventsGrid";
import Slider from "../../components/Slider";
import PageWithHelmet from "../../components/PageWithHelmet";
import { useEffect } from "react";
import { useSearchContext } from "../../context/SearchContext";
function Festival() {

  const { searchResults,setSearchResults, setSearchData} = useSearchContext();

  const { data, isLoading, isError } = useQuery("festival", getAllFestivals);

  console.log(data)
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
  const festival = "/festival";
  return (
    <>
      <PageWithHelmet title={"Festival-Bilet Al"} />
      <Slider />
      <EventsGrid data={searchResults} linkPath={festival} />
    </>
  );
}

export default Festival;
