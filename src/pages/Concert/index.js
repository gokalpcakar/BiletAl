import { useQuery } from "react-query";
import { getAllConcerts } from "../../network/requests/ConcertServices";
import EventsGrid from "../../components/EventsGrid";
import Slider from "../../components/Slider";
import PageWithHelmet from "../../components/PageWithHelmet";
import { useEffect } from "react";
import { useSearchContext } from "../../context/SearchContext";

function Concert() {
  const { searchResults,setSearchResults, setSearchData } = useSearchContext();

  const { data, isLoading, isError } = useQuery("concert", getAllConcerts);

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
  const concert = "/concert";
  return (
    <>
      <PageWithHelmet title={"Konser-Bilet Al"} />
      <Slider />
      <EventsGrid data={searchResults} linkPath={concert} />
    </>
  );
}

export default Concert;
