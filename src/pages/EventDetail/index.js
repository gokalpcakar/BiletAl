import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getEvents } from "../../network/requests/EventServices";
import { useQuery } from "react-query";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from "./style.module.css";
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import ImageGallery from "react-image-gallery";
import ShareButtons from "../../components/ShareButtons";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function EventDetail() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function slugify(text) {
    if (text && text.toString) {
      return text.toString().toLowerCase()
        .replace(/\s+/g, '/') // Boşlukları tire ile değiştir
        .replace(/[^\w-]+/g, '') // Alfanümerik olmayan karakterleri kaldır
        .replace(/--+/g, '-') // Ardışık tireleri birleştir
        .replace(/^-+/, '') // Başındaki tıreleri kaldır
        .replace(/-+$/, ''); // Sonundaki tıreleri kaldır
    } else {
      return '';
    }
  }

  const { name = ' ' } = useParams();
  const { isLoading, error, data } = useQuery("events", getEvents);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const matchedEvent = data.find((item) =>
    slugify(item.name).includes(slugify(name))
  );

  if (!matchedEvent) {
    return <div>Event not found</div>;
  }

  const images = matchedEvent.images.map((image, index) => ({
    original: image,
  }));

  return (
    <div>
      <div className={styles.gallery}>
        <ImageGallery items={images} showPlayButton={false} />
      </div>

      <Container maxWidth="xl">
        <Grid container spacing={1} sx={{ mb: "3rem", display: 'flex', mt: "3rem" }}>
          <Grid item={true} lg={4} xs={12}>
            <Box className={styles.tabPanelBox}>
              <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                  <Tab label="Açıklama" {...a11yProps(0)} />
                  <Tab label="Detay" {...a11yProps(1)} />
                </Tabs>
              </Box>
              <CustomTabPanel value={value} index={0}>
                {matchedEvent.name}<br />
                {matchedEvent.description}<br />
              </CustomTabPanel>
              <CustomTabPanel value={value} index={1}>
                {matchedEvent.name}<br />
                Kategori: {matchedEvent.eventType}<br />
                Şehir: {matchedEvent.city}<br />
                Başlangıç tarihi: {matchedEvent.startDate}<br />
                Bitiş tarihi: {matchedEvent.endDate}<br />
                Ücret: {matchedEvent.price}
              </CustomTabPanel>
            </Box>
          </Grid>
          <Grid item={true} lg={8} xs={12} mt={{ lg: 0, xs: 2 }} pl={{ lg: 2, xs: 0 }}>
            <div className={styles.map}>
              <iframe
                src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d304282.5343310836!2d32.52732558689937!3d39.9344112443957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cfbb769c32db85%3A0x2d276a630ac725b8!2s${matchedEvent.city}!5e0!3m2!1str!2str!4v1698163533517`}
                width="100%"
                height="400"
                title={matchedEvent.city}
                loading="lazy"
                style={{ borderRadius: "8px" }}
              ></iframe>
            </div>
          </Grid>
        </Grid>
      </Container>
      <ShareButtons
        eventName={matchedEvent.name}
        eventType={matchedEvent.eventType}
        eventDescription={matchedEvent.description}
      />
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

export default EventDetail;
