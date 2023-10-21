import { useQuery } from "react-query";
import { getEvents } from "../../network/requests/EventServices";
import PastEventsGrid from "../../components/PastEventsGrid";
function PastEvents() {

  const { isLoading, error, data} = useQuery("events",getEvents);
  
  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;
  
  return <>
      
    
      <PastEventsGrid data={data}/>

  </>;
}

export default PastEvents;