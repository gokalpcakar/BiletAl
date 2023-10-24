import { useQuery } from "react-query";
import { getAllStandUps } from "../../network/requests/StandUpServices";
import EventsGrid from "../../components/EventsGrid";
import Slider from "../../components/Slider";

import { Helmet } from "react-helmet";

function StandUp() {
  const { isLoading, error, data } = useQuery("stand-up", getAllStandUps);

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;
  const standup = "/standup";
  return (
    <>
      <Helmet>
        <title>StandUp-Bilet Al</title>
        <meta name="description" content="Bilet Al" />
      </Helmet>
      <Slider />
      <EventsGrid data={data} linkPath={standup} />
    </>
  );
}

export default StandUp;
