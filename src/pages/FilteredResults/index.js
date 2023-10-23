import EventsGrid from "../../components/EventsGrid";
import Slider from "../../components/Slider";
import {useSearchContext} from '../../context/SearchContext'

function FilteredResults() {

    const { searchResults } = useSearchContext();

    const events = "/events";

    return (
        <>
            <Slider />
            <EventsGrid data={searchResults} linkPath={events} />
        </>
    );
}

export default FilteredResults;


