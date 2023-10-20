import { useQuery } from "react-query";
import { getEvents } from "../../network/requests/EventServices";
import EventsGrid from "../../components/EventsGrid";
function Home() {

  const { isLoading, error, data} = useQuery("events",getEvents);
  
  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;
  
  return <>
      
    
      <EventsGrid data={data}/>

  </>;
}

export default Home;
