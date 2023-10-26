import React from "react";
import { Carousel } from "react-responsive-carousel";
import { Box } from "@mui/material";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from './style.module.css'

function Slider() {
  return (
    <Box>
      <Carousel
        autoPlay={true}
        emulateTouch={true}
        infiniteLoop={true}
        showArrows={false}
        className={styles.homePageCarousel}
        showThumbs={false}
        showStatus={false}
        showIndicators={false}
      >
        <div>
          <img
            src="https://sepet.konya.bel.tr/wwwkonyasehirtiyatrosucom/sliders/nwNfkEXX7hYEgYpfHa07ePPwrmeDTq_C.jpeg"
            alt="carouselImage"

          />
        </div>

        <div>
          <img
            src="https://sepet.konya.bel.tr/wwwkonyasehirtiyatrosucom/sliders/5IdZVX2RXFoYgvpHPf5keuKlt75WiYmO.jpeg"
            alt="carouselImage"

          />
        </div>

        <div>
          <img
            src="	https://sepet.konya.bel.tr/wwwkonyasehirtiyatrosucom/sliders/6QtUH8cRilsCBhC8pbNgrYm8nSC7ewfG.jpeg"
            alt="carouselImage"

          />
        </div>
        <div>
          <img
            src="	https://sepet.konya.bel.tr/wwwkonyasehirtiyatrosucom/sliders/kAUUqb-3-XwPbze0vxfMVtRuv_JPjucb.jpeg"
            alt="carouselImage"

          />
        </div>
        <div>
          <img
            src="	https://sepet.konya.bel.tr/wwwkonyasehirtiyatrosucom/sliders/9gzw4ooV537pWjULfAK-WO_4zDqU0ueE.jpeg	"
            alt="carouselImage"
          />
        </div>
      </Carousel>
    </Box>
  );
}

export default Slider;
