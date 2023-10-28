import EventsGrid from "../../components/EventsGrid";
import Slider from "../../components/Slider";
import PageWithHelmet from "../../components/PageWithHelmet";
import Filter from "../../components/Filter";
import { useSearchContext } from '../../context/SearchContext'
import { useEffect } from "react";

function Home() {

  const { searchResults } = useSearchContext();

  const events = "/events";

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <PageWithHelmet title={"Anasayfa-Bilet Al"} />
      <Slider />
      <Filter />
      <EventsGrid data={searchResults} linkPath={events} />
    </>
  );
}

export default Home;
