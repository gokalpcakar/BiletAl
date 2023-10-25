import { useQuery } from "react-query";
import { getEvents } from "../../network/requests/EventServices";
import EventsGrid from "../../components/EventsGrid";
import Slider from "../../components/Slider";
import PageWithHelmet from "../../components/PageWithHelmet";
import Filter from "../../components/Filter";


function Home() {
  const { isLoading, error, data } = useQuery("events", getEvents);

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  const events = "/events";

  return (
    <>
      <PageWithHelmet title={"Anasayfa-Bilet Al"}/>

      <Slider />
      <Filter />
      <EventsGrid data={data} linkPath={events} />
    </>
  );
}

export default Home;
