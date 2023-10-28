import React from "react";
import EventsCard from "./EventsCard";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

function EventsGrid({ data, linkPath }) {
  const currentDate = new Date();
  if (!data) {
    return "Loading...";
  }
  const futureEvents = data.filter(event => new Date(event.startDate) >= currentDate);

  return (
    <Container maxWidth="lg" sx={{ marginTop: "3rem" }}>
      <Grid container spacing={5} sx={{ mb: "3rem", display: 'flex' }}>
        {futureEvents.map((item) => (
          <Grid item lg={4} md={6} xs={12} key={item.id}>
            <EventsCard item={item} linkPath={linkPath} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default EventsGrid;
