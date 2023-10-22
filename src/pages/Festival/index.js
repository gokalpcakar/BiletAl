import { useQuery } from "react-query";
import { getAllFestivals } from "../../network/requests/FestivalServices";
import EventsGrid from "../../components/EventsGrid";
import Slider from "../../components/Slider";
function Festival() {
  const { isLoading, error, data } = useQuery("festival", getAllFestivals);

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;
  const festival = "/festival";
  return (
    <>
      <Slider />
      <EventsGrid data={data} linkPath={festival} />
    </>
  );
}

export default Festival;
