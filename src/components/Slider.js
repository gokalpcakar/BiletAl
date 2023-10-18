import React from "react";
import { Carousel } from "react-responsive-carousel";
import { Box } from "@mui/material";
import "../assets/css/Slider.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Slider() {
  return (
    <Box className="homePageCarouselBox">
      <Carousel
        autoPlay="true"
        emulateTouch="true"
        infiniteLoop="true"
        showArrows="true"
        className="homePageCarousel"
      >
        <div>
          <img
            src="https://www.elislab.com.tr/wp-content/uploads/2020/01/laboratuvar-sarf-malzemeleri.jpg"
            alt="carouselImage"
          />
        </div>

        <div>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJXjKaxu2Ha1cfkXx2-nrnnd2wQL3fYVCl7w&usqp=CAU"
            alt="carouselImage"
          />
        </div>

        <div>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV01Nskpen2mDWW_TI60EBpxTBUkAtvQircA&usqp=CAU"
            alt="carouselImage"
          />
        </div>
        <div>
          <img
            src="https://www.nasilbe.com/wp-content/uploads/2020/07/Laboratuvar-Malzemelerinin-isimleri-Nelerdir-1024x551.jpg"
            alt="carouselImage"
          />
        </div>
        <div>
          <img
            src="https://www.sentezlab.com/class/INNOVAEditor/assets/laboratuvar%20cam%20malzemeleri.jpg"
            alt="carouselImage"
          />
        </div>
        <div>
          <img
            src="https://www.kocar.com.tr/uploads/slider/images/000/000/049/medium"
            alt="carouselImage"
          />
        </div>
        <div>
          <img
            src="https://tetralaboratuvar.com/wp-content/uploads/2021/03/Ozel-Laboratuvar.jpg"
            alt="carouselImage"
          />
        </div>
      </Carousel>
    </Box>
  );
}

export default Slider;
