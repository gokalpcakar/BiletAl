import React from "react";
import EventsCard from "./EventsCard";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

function EventsGrid({data,linkPath}) {

  const currentDate = new Date();
  if (!data) {
    return "Loading..."; 
  }
  const futureEvents = data.filter(event => new Date(event.startDate) >= currentDate);

  return <Container maxWidth="lg" sx={{
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    marginTop:"5rem"

  }}>
    <Grid container spacing={2} sx={{ mb: "3rem", display: 'flex' }} maxWidth="lg">

      <Grid container spacing={5}>
        {futureEvents.map((item) => (
          <Grid item lg={4} md={6} xs={12} key={item.id}>
            <EventsCard item={item} linkPath={linkPath} />
          </Grid>
        ))}
      </Grid>

    </Grid>
  </Container>;
}

export default EventsGrid;
