import { useQuery } from "react-query";
import { getEvents } from "../../network/requests/EventServices";
import PastEventsGrid from "../../components/PastEventsGrid";
function PastEvents() {

  const { isLoading, error, data} = useQuery("pastEvents",getEvents);
  
  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;
  const pastEvents = "/pastEvents";
  return <>
      
    
      <PastEventsGrid data={data} linkPath={pastEvents} />

  </>;
}

export default PastEvents;