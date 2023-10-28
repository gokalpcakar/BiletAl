import { useQuery } from "react-query";
import { getEventsTheatre } from "../../network/requests/TheatreServices";
import EventsGrid from "../../components/EventsGrid";
import Slider from "../../components/Slider";
import PageWithHelmet from "../../components/PageWithHelmet";
import { useEffect } from "react";
function Theatre() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const { isLoading, error, data } = useQuery("theatre", getEventsTheatre);

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;
  const theatre = "/theatre";
  return (
    <>
      <PageWithHelmet title={"Tiyatro-Bilet Al"} />
      <Slider />
      <EventsGrid data={data} linkPath={theatre} />
    </>
  );
}

export default Theatre;
