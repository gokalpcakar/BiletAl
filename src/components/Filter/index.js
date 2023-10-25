import { useState, useEffect } from "react";
import { useSearchContext } from '../../context/SearchContext';
import { useNavigate } from "react-router-dom";
import { useQuery } from "react-query";
import { getEvents } from "../../network/requests/EventServices";
import Styles from "./Styles.module.css";
import { Container, Grid, Typography } from "@mui/material";
import SingleInputDateRangePicker from "./DateFilter";

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

    
    useEffect(
        () => {
            handleSubmit();
        }, 
        [data,city,location]
    );

    const handleSubmit = () => {
        const results = data?.filter((event) => {
            if (city && !location) {
                return (
                    event.city.toLowerCase() === city.toLowerCase()
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
                    event.city.toLowerCase() === city.toLowerCase()
                );
            }
            else if (!location && !city) {
                return true;
            }else {
                console.error("Data is not available yet.");
            }
        })
        setSearchResults(results);
        navigate("/");
    }

    let Locations = () => data?.map(
        item => item.location).filter(
            (val, id, array) => {return array.indexOf(val) === id}).map( 
                (location, index) => <option key={index} value={location}>{location}</option>
    );

    let Cities = () => data?.map(
        item => item.city).filter(
            (val, id, array) => {return array.indexOf(val) === id}).map(
                (city, index) => <option key={index} value={city}>{city}</option>
    );

    return (
        <Container maxWidth="lg" sx={{ marginTop: "5rem" }}>
            <form onSubmit={(e) => e.preventDefault()}>
                <Grid container spacing={5} display="flex" justifyContent="space-between" alignItems="center">
                    <Grid item xs={12} sm={4} justifyContent="center">
                        <Typography gutterBottom variant="h5" sx={{ display: "flex", justifyContent: "center" }}>
                            Mekan Seç
                        </Typography>
                        <select
                            value={location}
                            onChange={locationHandleChange}
                        >
                            <option value="" defaultValue>Mekanlar...</option>
                            {Locations()}
                        </select>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Typography gutterBottom variant="h5" sx={{ display: "flex", justifyContent: "center" }}>
                            Şehir Seç
                        </Typography>
                        <select
                            value={city}
                            onChange={cityHandleChange}
                        >
                            <option value="" defaultValue>Şehirler...</option>
                            {Cities()}
                        </select>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Typography gutterBottom variant="h5" sx={{ display: "flex", justifyContent: "center" }}>
                            Zaman Aralığı Seç
                        </Typography>
                        <SingleInputDateRangePicker />
                    </Grid>
                </Grid>
            </form>
        </Container>
    );
}

export default Filter;