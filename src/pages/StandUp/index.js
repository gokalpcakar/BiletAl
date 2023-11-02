import { useQuery } from "react-query";
import { getAllStandUps } from "../../network/requests/StandUpServices";
import EventsGrid from "../../components/EventsGrid";
import Slider from "../../components/Slider";
import {useSearchContext} from "../../context/SearchContext"
import PageWithHelmet from "../../components/PageWithHelmet";
import { useEffect } from "react";

function StandUp() {

  const { searchResults,setSearchResults, setSearchData} = useSearchContext();

  const { data, isLoading, isError } = useQuery("standup", getAllStandUps);

  useEffect(() => {
    if (!isLoading && !isError) {
      setSearchResults(data);
    }
    window.scrollTo(0, 0);
  }, [isLoading, isError, data, setSearchData]);
 setSearchData(data)
 

  if (isLoading) {
    return <p>Loading...</p>; // Yükleniyor durumunda kullanıcıya mesaj göster
  }
  const standup = "/standup";
  return (
    <>
      <PageWithHelmet title={"Standup-Bilet Al"} />
      <Slider />
      <EventsGrid data={searchResults} linkPath={standup} />
    </>
  );
}

export default StandUp;
