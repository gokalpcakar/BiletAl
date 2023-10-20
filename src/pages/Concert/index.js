
import { useQuery } from "react-query";
import { getAllConcerts } from "../../network/requests/ConcertServices";
import EventsGrid from "../../components/EventsGrid";
function Concert() {

  const { isLoading, error, data } = useQuery("concert", getAllConcerts);

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;
  return (
    <EventsGrid data={data} />
  )
}

export default Concert