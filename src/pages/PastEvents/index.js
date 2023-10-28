import { useQuery } from "react-query";
import { getEvents } from "../../network/requests/EventServices";
import PastEventsGrid from "../../components/PastEventsGrid";
import Slider from "../../components/Slider";
import PageWithHelmet from "../../components/PageWithHelmet";
import { useEffect } from "react";

function PastEvents() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  const { isLoading, error, data } = useQuery("pastEvents", getEvents);

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;
  const pastEvents = "/pastEvents";
  return (
    <>
       <PageWithHelmet title={"Geçmiş Etkinlikler-Bilet Al"}/>

      <Slider />
      <PastEventsGrid data={data} linkPath={pastEvents} />
    </>
  );
}

export default PastEvents;
