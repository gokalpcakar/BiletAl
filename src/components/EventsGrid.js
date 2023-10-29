import React, { useState } from "react";
import EventsCard from "./EventsCard";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Pagination from "@mui/material/Pagination";

function EventsGrid({ data, linkPath }) {
  const currentDate = new Date();
  const itemsPerPage = 6; // Sayfa başına görüntülenecek etkinlik sayısı

  const [currentPage, setCurrentPage] = useState(1); 

  if (!data) {
    return "Yükleniyor...";
  }

  const futureEvents = data.filter((event) => new Date(event.startDate) >= currentDate);
  const totalPageCount = Math.ceil(futureEvents.length / itemsPerPage);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = currentPage * itemsPerPage;
  const displayedEvents = futureEvents.slice(startIndex, endIndex);

  return (
    <Container maxWidth="lg" sx={{ marginTop: "3rem",marginBottom:"3rem" }}>
      <Grid container spacing={5} sx={{ mb: "3rem", display: 'flex' }}>
        {displayedEvents.map((item) => (
          <Grid item lg={4} md={6} xs={12} key={item.id}>
            <EventsCard item={item} linkPath={linkPath} />
          </Grid>
        ))}
      </Grid>
      <Grid container justifyContent="center">
        <Pagination
          count={totalPageCount}
          page={currentPage}
          onChange={handlePageChange}
          color="primary"
        />
      </Grid>
    </Container>
  );
}

export default EventsGrid;
