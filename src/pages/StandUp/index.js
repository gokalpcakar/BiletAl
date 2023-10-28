import { useQuery } from "react-query";
import { getAllStandUps } from "../../network/requests/StandUpServices";
import EventsGrid from "../../components/EventsGrid";
import Slider from "../../components/Slider";

import PageWithHelmet from "../../components/PageWithHelmet";
import { useEffect } from "react";

function StandUp() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const { isLoading, error, data } = useQuery("stand-up", getAllStandUps);

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;
  const standup = "/standup";
  return (
    <>
      <PageWithHelmet title={"Standup-Bilet Al"} />
      <Slider />
      <EventsGrid data={data} linkPath={standup} />
    </>
  );
}

export default StandUp;
