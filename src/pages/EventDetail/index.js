import React from "react";
import { useParams } from "react-router-dom";
import { getAllSlug } from "../../network/requests/EventServices";
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
function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

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

  const { slug } = useParams();
  const { isLoading, error, data } = useQuery(["events", slug], () =>
    getAllSlug(slug)
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }


  const images = data[0]?.images.map((image, index) => ({
    original: image,
 
  }));
  return (
    <div>
     <ImageGallery items={images} />

      <Container maxWidth="lg">
        <Grid container spacing={1} sx={{ mb: "3rem", display: 'flex' }}>
          <Grid item={true} lg={6} xs={12}>
            <Box className={styles.tabPanelBox}>
              <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                  <Tab label="Açıklama" {...a11yProps(0)} />
                  <Tab label="Detay" {...a11yProps(1)} />
                </Tabs>
              </Box>
              <CustomTabPanel value={value} index={0}>
                {data[0].name}<br />
                {data[0].description}<br />
              </CustomTabPanel>
              <CustomTabPanel value={value} index={1}>
                {data[0].name}<br />
                Kategori: {data[0].eventType}<br />
                Şehir: {data[0].city}<br />
                Başlangıç tarihi: {data[0].startDate}<br />
                Bitiş tarihi: {data[0].endDate}<br />
                Ücret: {data[0].price}
              </CustomTabPanel>
            </Box>
          </Grid>
          <Grid item={true} lg={6} xs={12} mt={{ lg: 0, xs: 2 }} pl={{ lg: 2, xs: 0 }}>
            <div className={styles.map}>
              <iframe
                src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d304282.5343310836!2d32.52732558689937!3d39.9344112443957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cfbb769c32db85%3A0x2d276a630ac725b8!2s${data[0].city}!5e0!3m2!1str!2str!4v1698163533517`}
                width="100%"
                height="400"
                title={data[0].city}
                loading="lazy"
                style={{ borderRadius: "8px" }}
              ></iframe>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div >
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

export default EventDetail;
