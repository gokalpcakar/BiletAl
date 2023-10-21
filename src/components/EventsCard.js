import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

function EventsCard({ item }) {
  return (
    <Card>
      <Link to={`events/${item.id}`} style={{ textDecoration: "none" }}>
        <CardMedia
          sx={{ height: 200, width: "100%", objectFit: "cover" }}
          image={item.images[0]}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {item.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {item.description}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <strong>City:</strong> {item.city}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <strong>Start Date:</strong> {item.startDate}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <strong>End Date:</strong> {item.endDate}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <strong>Location:</strong> {item.location}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <strong>Event Type:</strong> {item.eventType}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <strong>Price:</strong> ${item.price}
          </Typography>
        </CardContent>
      </Link>
    </Card>
  );
}

export default EventsCard;