import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

import { useSearchContext } from "../context/SearchContext";

function EventsCard({ item,linkPath}) {
  const { setSearchResults, data } = useSearchContext();

  const results = data?.filter((event) => {
    return ( 
      event.location.toLowerCase().includes(item.location.toLowerCase())
    );
  });

  const handleClick = () => {
    setSearchResults(results);
  };

  return (
    <Card>
      <Link to={`${linkPath}/${item.slug}`} >
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
          <Link to="/" onClick={handleClick}>
            <Typography variant="body2" color="text.secondary">
                <strong>Location:</strong> {item.location}
            </Typography>
          </Link>
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