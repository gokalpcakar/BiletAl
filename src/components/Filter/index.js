import { useState, useEffect } from "react";
import { useSearchContext } from "../../context/SearchContext";
import { useNavigate } from "react-router-dom";
import { useQuery } from "react-query";
import { getEvents } from "../../network/requests/EventServices";
import Styles from "./Styles.module.css";
import { Container, Grid, Typography } from "@mui/material";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

function Filter() {
  const navigate = useNavigate();
  const { setSearchResults } = useSearchContext();

  const { data } = useQuery("events", getEvents);

  const [location, setLocation] = useState("");
  const [city, setCity] = useState("");

  const [showDateRangePicker, setShowDateRangePicker] = useState(false);
  const [selectedDateRange, setSelectedDateRange] = useState([
    {
      startDate: null,
      endDate: null,
      key: "selection",
    },
  ]);
  const locationHandleChange = (event) => {
    setLocation(event.target.value);
  };

  const cityHandleChange = (event) => {
    setCity(event.target.value);
  };
  const toggleDateRangePicker = () => {
    setShowDateRangePicker(!showDateRangePicker);
  };

  const handleDateRangeChange = (ranges) => {
    setSelectedDateRange([ranges.selection]);
  };

  const clearDateRange = () => {
    setSelectedDateRange([
      {
        startDate: null,
        endDate: null,
        key: "selection",
      },
    ]);
  };

  useEffect(() => {
    handleSubmit();
  }, [data, city, location, selectedDateRange]);

  const handleSubmit = () => {
    const results = data?.filter((event) => {
      const eventCity = event.city.toLowerCase();
      const eventLocation = event.location.toLowerCase();

      const cityMatch = !city || eventCity === city.toLowerCase();
      const locationMatch =
        !location || eventLocation.includes(location.toLowerCase());

      const startDate = new Date(event.startDate);
      const endDate = new Date(event.startDate);

      // İlgili etkinlik, seçilen tarih aralığına uygunsa filtrele
      const dateMatch =
        !selectedDateRange[0].startDate ||
        !selectedDateRange[0].startDate || // Hiç tarih aralığı seçilmemişse
        (startDate >= selectedDateRange[0].startDate &&
          startDate <= selectedDateRange[0].endDate);

      return cityMatch && locationMatch && dateMatch;
    });

    setSearchResults(results);
    navigate("/");
  };

  let Locations = () =>
    data
      ?.map((item) => item.location)
      .filter((val, id, array) => {
        return array.indexOf(val) === id;
      })
      .map((location, index) => (
        <option key={index} value={location}>
          {location}
        </option>
      ));

  let Cities = () =>
    data
      ?.map((item) => item.city)
      .filter((val, id, array) => {
        return array.indexOf(val) === id;
      })
      .map((city, index) => (
        <option key={index} value={city}>
          {city}
        </option>
      ));

  return (
    <Container maxWidth="lg" sx={{ marginTop: "3rem" }}>
      <form onSubmit={(e) => e.preventDefault()}>
        <Grid
          container
          spacing={5}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Grid
            xs={12}
            item
            md={4}
            justifyContent="center"
            alignSelf="flex-start"
          >
            <Typography
              gutterBottom
              variant="h5"
              sx={{ display: "flex", justifyContent: "center"}}
            >
             Lütfen Mekan Seçin
            </Typography>
            <select value={location} onChange={locationHandleChange}>
              <option value="" defaultValue>
                Mekanlar...
              </option>
              {Locations()}
            </select>
          </Grid>
          <Grid xs={12} item md={4} alignSelf="flex-start">
            <Typography
              gutterBottom
              variant="h5"
              sx={{ display: "flex", justifyContent: "center" }}
            >
            Lütfen Şehir Seçin
            </Typography>
            <select value={city} onChange={cityHandleChange}>
              <option value="" defaultValue>
                Şehirler...
              </option>
              {Cities()}
            </select>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography
              gutterBottom
              variant="h5"
              sx={{ display: "flex", justifyContent: "center" }}
            >
             Lütfen Tarih Aralığı Seçin
            </Typography>
            
            <Grid 
              container 
              direction="row"  
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Grid item xs={8}>            
                <input
                  className={Styles.input}
                  type="text"
                  onClick={toggleDateRangePicker} // Tarih aralığını seçmek için takvimi açar
                  defaultValue={
                    selectedDateRange[0].startDate && selectedDateRange[0].endDate
                      ? `${selectedDateRange[0].startDate.toLocaleDateString()} - ${selectedDateRange[0].endDate.toLocaleDateString()}`
                      : "Tarihler..."
                  }
                />
                {showDateRangePicker && (
                  <DateRange
                    editableDateInputs={true}
                    onChange={handleDateRangeChange}
                    moveRangeOnFirstSelection={false}
                    ranges={selectedDateRange}
                  />
                )}
              </Grid>  

              <Grid item xs={3}>
                <button type="button" onClick={clearDateRange}>
                  Tarihi Temizle
                </button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
}

export default Filter;
