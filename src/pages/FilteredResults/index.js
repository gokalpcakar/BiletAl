import EventsGrid from "../../components/EventsGrid";
import React, { useContext } from "react";
import Slider from "../../components/Slider";
import SearchContext from '../../context/SearchContext'

function FilteredResults() {

    const { searchResults } = useContext(SearchContext);

    const events = "/events";

    return (
        <>
            <Slider />
            <EventsGrid data={searchResults} linkPath={events} />
        </>
    );
}

export default FilteredResults;


