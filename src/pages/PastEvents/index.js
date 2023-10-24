import { useQuery } from "react-query";
import { getEvents } from "../../network/requests/EventServices";
import PastEventsGrid from "../../components/PastEventsGrid";
import Slider from "../../components/Slider";
import {Helmet} from "react-helmet";
function PastEvents() {
  const { isLoading, error, data } = useQuery("pastEvents", getEvents);

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;
  const pastEvents = "/pastEvents";
  return (
    <>
      <Helmet>
      
        <title>Geçmiş Etkinlikler -Bilet Al</title>
     
      </Helmet>

      <Slider />
      <PastEventsGrid data={data} linkPath={pastEvents} />
    </>
  );
}

export default PastEvents;
