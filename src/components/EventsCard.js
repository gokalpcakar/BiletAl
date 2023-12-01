import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { useSearchContext } from "../context/SearchContext";
import { SlLocationPin } from "react-icons/sl";
import moment from "moment";
import "moment/locale/tr";
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
  moment.locale("tr"); 

  const formattedDate = `${moment(item.startDate).format("D MMMM YYYY")}`;
  return (
    <Card>
      <Link to={`${linkPath}/${item.name}`} >
        <CardMedia
          sx={{ height:200, width: "100%", objectFit: "contain"}}
          image={item.images[0]}
        />
      </Link>
        <CardContent sx={{ backgroundColor: "#ffe7ba" }}>
          <Link to={`${linkPath}/${item.name}`} >
            <Typography gutterBottom variant="h5" component="div" color="primary" fontWeight={"bold"}sx={{textAlign:"center",textTransform:"uppercase"}} >
              {item.name}
            </Typography>
           
            <Typography variant="h5" fontWeight={"bold"} color={"text.secondary"} sx={{textAlign:"center",width:"100%"}}>
              <strong>{item.city}</strong> 
            </Typography>
            <Typography variant="h6" fontWeight={"bold"} sx={{textAlign:"center",color:"cdcdc1"}}>
            {formattedDate}
            </Typography>
           
          </Link>
          <Link to="/" onClick={handleClick}>
            <Typography variant="h5" color="text.primary" fontWeight={"bold"} sx={{border:"1px solid #cdcdc1",borderRadius:"10px",background:"#cdcdc1",textAlign:"center"}}>
                <strong>{item.location} </strong> 
                <SlLocationPin color="#1b8bb4" />
            </Typography>
          </Link>
          <Link to={`${linkPath}/${item.name}`} >
            <Typography variant="h6" sx={{textTransform:"uppercase",fontWeight:"bold",textAlign:"center"}}>
              <strong></strong> {item.eventType}
            </Typography>
            <Typography variant="h4" color="primary" fontWeight={"bold"} sx={{border:"1px solid #cdcdc1",borderRadius:"10px",background:"#cdcdc1",textAlign:"center"}}>
            {item.price}TL
            </Typography>
          </Link>
        </CardContent>
    </Card>
  );
}

export default EventsCard;