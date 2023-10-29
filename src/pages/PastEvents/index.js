import { useQuery } from "react-query";
import { getEvents } from "../../network/requests/EventServices";
import PastEventsGrid from "../../components/PastEventsGrid";
import Slider from "../../components/Slider";
import PageWithHelmet from "../../components/PageWithHelmet";
import { useEffect } from "react";


function PastEvents() {
 
  const { data, isLoading } = useQuery("events", getEvents);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const pastEvents = "/pastEvents";

  return (
    <>
      <PageWithHelmet title={"Geçmiş Etkinlikler-Bilet Al"} />

      <Slider />

      {isLoading ? (
       
        <div>Loading...</div>
      ) : data ? (
     
        <PastEventsGrid data={data} linkPath={pastEvents} />
      ) : (
    
        <div>No data available.</div>
      )}
    </>
  );
}

export default PastEvents;
