
import { useQuery } from "react-query";
import { getAllConcerts } from "../../network/requests/ConcertServices";
import EventsGrid from "../../components/EventsGrid";
import Slider from "../../components/Slider";
import PageWithHelmet from "../../components/PageWithHelmet";
import { useEffect } from "react";

function Concert() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const { isLoading, error, data } = useQuery("concert", getAllConcerts);

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;
  const concert = "/concert";
  return (
    <> 
    <PageWithHelmet title={"Konser-Bilet Al"}/>
    <Slider/>
    <EventsGrid data={data} linkPath={concert}/>
      </>

  )
}

export default Concert