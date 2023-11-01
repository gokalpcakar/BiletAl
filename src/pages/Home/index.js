import EventsGrid from "../../components/EventsGrid";
import Slider from "../../components/Slider";
import PageWithHelmet from "../../components/PageWithHelmet";
import Filter from "../../components/Filter";
import { useSearchContext } from '../../context/SearchContext'
import { useEffect } from "react";
import { getEvents } from "../../network/requests/EventServices";
import { useQuery } from "react-query";
function Home() {

  const { searchResults,setSearchData } = useSearchContext();
  const { data } = useQuery("events", getEvents);


  useEffect(() => {
   
    if (data) {
      setSearchData(data);
    }
    
  }, [data]);


  const events = "/events";

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <PageWithHelmet title={"Anasayfa-Bilet Al"} />
      <Slider />
      <Filter />
      <EventsGrid data={searchResults} linkPath={events} />
    </>
  );
}

export default Home;
