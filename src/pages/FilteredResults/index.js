import EventsGrid from "../../components/EventsGrid";
import Slider from "../../components/Slider";
import {useSearchContext} from '../../context/SearchContext'
import Filter from "../../components/Filter";


function FilteredResults() {

    const { searchResults } = useSearchContext();

    const events = "/events";

    return (
        <>
            <Slider />
            <Filter />
            <EventsGrid data={searchResults} linkPath={events} />
        </>
    );
}

export default FilteredResults;


