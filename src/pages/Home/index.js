import { useQuery } from "react-query";
import { getEvents } from "../../network/requests/EventServices";
import EventsGrid from "../../components/EventsGrid";
import Slider from "../../components/Slider";
import { Helmet } from "react-helmet";
function Home() {
  const { isLoading, error, data } = useQuery("events", getEvents);

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  const events = "/events";

  return (
    <>
      <Helmet>
     
        <title>Anasayfa - Bilet Al</title>
        <meta name="description" content="Bilet Al" />
      </Helmet>

      <Slider />
      <EventsGrid data={data} linkPath={events} />
    </>
  );
}

export default Home;
