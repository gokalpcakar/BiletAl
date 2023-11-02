import {
    Tab,
    Tabs
} from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useSearchContext } from "../../context/SearchContext";

function NavbarTabs() {

    const [value, setValue] = useState(false);
    const { setSearchResults, data, searchData } = useSearchContext();

    const handleClick = () => {
        setSearchResults(data);
    };
    const handleSearchClick = () => {
        setSearchResults(searchData)
    }

    return (
        <Tabs
            sx={{ marginLeft: "25px", marginRight: "auto" }}
            indicatorColor="secondary"
            textColor="inherit"
            value={value}
            onChange={(e, value) => setValue(value)}
        >
            <Tab label="Anasayfa" component={Link} to="/" value="/" onClick={handleClick} />
            <Tab label="Konser" component={Link} to="/concert" value="/concert" onClick={handleSearchClick} />
            <Tab label="Festival" component={Link} to="/festival" value="/festival" onClick={handleSearchClick} />
            <Tab label="Stand-Up" component={Link} to="/standup" value="/standup" onClick={handleSearchClick} />
            <Tab label="Tiyatro" component={Link} to="/theatre" value="/theatre" onClick={handleSearchClick} />
            <Tab label="Geçmiş Etkinlikler" component={Link} to="/pastevents" value="/pastevents" />
        </Tabs>
    )
}

export default NavbarTabs