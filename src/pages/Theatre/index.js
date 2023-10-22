import { useQuery } from "react-query";
import { getEventsTheatre } from "../../network/requests/TheatreServices";
import EventsGrid from "../../components/EventsGrid";
function Theatre() {

  const { isLoading, error, data} = useQuery("theatre",getEventsTheatre);
  
  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;
  const theatre = "/theatre";
  return (
    <EventsGrid data={data} linkPath={theatre}/>
  )
}

export default Theatre