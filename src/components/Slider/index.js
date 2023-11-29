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
        showThumbs={false}
        showStatus={false}
        showIndicators={false}
        className={styles.homePageCarousel}
      >
        <div>
          <img
            src="https://cdn.bubilet.com.tr/files/EtiketBanner/watergarden-performans-merkezi-39919.png"
            alt="carouselImage"

          />
        </div>


        <div>
          <img
            src="https://cdn.bubilet.com.tr/files/EtiketBanner/pubg-mobile-dunya-sampiyonasi-38867.png"
            alt="carouselImage"

          />
        </div>
        <div>
          <img
            src="	https://cdn.bubilet.com.tr/files/EtiketBanner/dada-salon-kabarett-bursa-10044.jpg"
            alt="carouselImage"

          />
        </div>
        <div>
          <img
            src="	https://cdn.bubilet.com.tr/files/EtiketBanner/ulker-spor-ve-etkinlik-salonu-62622.jpg	"
            alt="carouselImage"
          />
        </div>
        <div>
          <img
            src="	https://cdn.bubilet.com.tr/files/EtiketBanner/tayyare-kultur-merkezi-71542.jpg	"
            alt="carouselImage"
          />
        </div>
      </Carousel>
    </Box>
  );
}

export default Slider;
