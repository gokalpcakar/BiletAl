
import { useQuery } from "react-query";
import { getAllConcerts } from "../../network/requests/ConcertServices";
import EventsGrid from "../../components/EventsGrid";
import Slider from "../../components/Slider";
function Concert() {

  const { isLoading, error, data } = useQuery("concert", getAllConcerts);

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;
  const concert = "/concert";
  return (
    <> 
    <Slider/>
    <EventsGrid data={data} linkPath={concert}/>
      </>

  )
}

export default Concert