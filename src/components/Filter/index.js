import { useState } from "react";
import { useSearchContext } from '../../context/SearchContext';
import { useNavigate } from "react-router-dom";
import { useQuery } from "react-query";
import { getEvents } from "../../network/requests/EventServices";
import Styles from "./Styles.module.css";
import { Container, Grid, Typography } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';


function Filter() {
    const navigate = useNavigate();
    const { setSearchResults } = useSearchContext();
    const { data } = useQuery("events", getEvents);

    const [location, setLocation] = useState("");
    const [city, setCity] = useState("");

    const locationHandleChange = (event) => {
        setLocation(event.target.value);
        /*console.log(location)
        const result = data.filter((item) => { 
            return item.location.toLowerCase()==(location.toLowerCase()) });
        setSearchResults(result);
        navigate("/filtered-results");*/
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
            }else if (dateBegin) { 
                return ( 
                    event.startDate > dateBegin
                );
            }
            /*else if (dateBegin && dateEnd) {
                return ( 
                    event.startDate > dateBegin && event.endDate < dateEnd
                );
            }*/
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
        
            <Container maxWidth="lg" sx={{ marginTop: "5rem" }}>
                <form onSubmit={handleSubmit} className={Styles.form}>  
                    <Grid container spacing={5} display="flex" justifyContent= "space-between" alignItems="center">
                        <Grid item xs={12} sm={4} direction="column" justifyContent="center">  
                            <Typography gutterBottom variant="h5"  sx={{display:"flex", justifyContent:"center"}}>
                                Mekan
                            </Typography>
                            <select
                                value={location} 
                                onChange={locationHandleChange}
                            >
                                <option value="" disabled selected hidden>Mekanlar...</option>
                                {Locations()}
                            </select>  
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Typography gutterBottom variant="h5" sx={{display:"flex", justifyContent:"center"}}>
                                Şehir
                            </Typography>
                            <select 
                                value={city} 
                                onChange={cityHandleChange}
                            >
                                <option value="" disabled selected hidden>Şehirler...</option>
                                {Cities()}
                            </select> 
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Typography gutterBottom variant="h5"  sx={{display:"flex", justifyContent:"center"}}>
                                Zaman
                            </Typography>
                            <label for="startDate"></label>
                            <input type="date" name="startDate" id="startDate" onChange={dateBeginHandleChange}></input>
                            <label for="endDate"></label>
                            <input type="date" name="endDate" id="endDate" onChange={dateEndHandleChange}></input>
                        </Grid>
                        <Grid item xs={12} sm={12} display="flex" justifyContent="center">
                            <button type="submit">
                                <SearchIcon />
                            </button>
                        </Grid>
                        </Grid>
                </form>
            </Container>
    );
}

export default Filter;
