import { useQuery } from "react-query";

import EventsGrid from "../../components/EventsGrid";
import Slider from "../../components/Slider";
import PageWithHelmet from "../../components/PageWithHelmet";
import Filter from "../../components/Filter";
import {useSearchContext} from '../../context/SearchContext'

function Home() {

  const { searchResults } = useSearchContext();
  

  const events = "/events";

  return (
    <>
      <PageWithHelmet title={"Anasayfa-Bilet Al"}/>

      <Slider />
      <Filter />
      <EventsGrid data={searchResults} linkPath={events} />
    </>
  );
}

export default Home;
