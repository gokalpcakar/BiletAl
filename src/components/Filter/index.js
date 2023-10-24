import { useState } from "react";
import { useSearchContext } from '../../context/SearchContext';
import { useNavigate } from "react-router-dom";
import { useQuery } from "react-query";
import { getEvents } from "../../network/requests/EventServices";
import Styles from "./Styles.module.css";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Container, CssBaseline, Typography } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';


function Filter() {
    const navigate = useNavigate();
    const { setSearchResults } = useSearchContext();
    const { data } = useQuery("events", getEvents);

    const [location, setLocation] = useState("");
    const [city, setCity] = useState("");

    const locationHandleChange = (event) => {
        setLocation(event.target.value);
    }
    const cityHandleChange = (event) => {
        setCity(event.target.value);
    }
    
    const [dateBegin, setDateBegin] = useState(new Date());
    const [dateEnd, setDateEnd] = useState(new Date());
    const dateBeginHandleChange = (event) => {
        setDateBegin(event.target.value);
    }
    const dateEndHandleChange = (event) => {
        setDateEnd(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const results = data.filter((event) => {
            if (city && !location) {
                return (
                    event.city.toLowerCase()==(city.toLowerCase())
                );
            }
            else if (!city && location) {
                return (
                    event.location.toLowerCase().includes(location.toLowerCase()) 
                );
            }
            else if (location && city) {
                return (
                    event.location.toLowerCase().includes(location.toLowerCase()) &&
                    event.city.toLowerCase().includes(city.toLowerCase()) 
                );
            }else { 
                return ( 
                    event.startDate > dateBegin
                );
            }
        })
        setSearchResults(results);
        //setLocation("");
        navigate("/filtered-results");
    }

    let Locations = () => data?.map(
        item => item.location).filter(
            (val, id, array) => {return array.indexOf(val) == id}).map( 
                (location, index) => <option key={index} value={location}>{location}</option>
    );
    
    let Cities = () => data?.map(
        item => item.city).filter(  //Filter all data items' city value.
            (val, id, array) => {return array.indexOf(val) == id}).map( //Remove dublicates.
                (city, index) => <option key={index} value={city}>{city}</option>);//Wrap with <option>


    return (
                <form onSubmit={handleSubmit} className={Styles.form}>
                        
                        <select
                            value={location} 
                            onChange={locationHandleChange}
                            className={Styles.location}
                            name="Mekan"
                        >
                            <option value="" disabled selected hidden>Mekanlar...</option>
                            {Locations()}
                        </select>  
                        <select 
                            value={city} 
                            onChange={cityHandleChange}
                            className={Styles.city}
                        >
                            <option value="" disabled selected hidden>Şehirler...</option>
                            {Cities()}
                        </select> 
                        <div className={Styles.dateContainer}>
                <label for="startDate">Filter Start Date</label>
                <input type="date" name="startDate" id="startDate" onChange={dateBeginHandleChange}></input>
                <label for="endDate"></label>
                <input type="date" name="endDate" id="endDate" onChange={dateEndHandleChange}></input>
            </div>
                        <button type="submit">
                            <SearchIcon />
                        </button>
                </form>
    );
}

export default Filter;
