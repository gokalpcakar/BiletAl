import React from "react";
import { useParams } from "react-router-dom";
import { getByEventsById } from "../../network/requests/EventServices";
import { useQuery } from "react-query";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import styles from "./style.module.css";

function EventDetail() {
  const { id } = useParams();
  const { isLoading, error, data } = useQuery(["events", id], () =>
    getByEventsById(id)
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <Carousel showArrows={true} showStatus={false} showThumbs={false}>
        {data.images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Image ${index}`} />
          </div>
        ))}
      </Carousel>

      <h2>{data.name}</h2>
      <p>{data.description}</p>
      <p>
        <strong>City:</strong> {data.city}
      </p>
      <p>
        <strong>Start Date:</strong> {data.startDate}
      </p>
      <p>
        <strong>End Date:</strong> {data.endDate}
      </p>
      <p>
        <strong>Location:</strong> {data.location}
      </p>
      <p>
        <strong>Event Type:</strong> {data.eventType}
      </p>
      <p>
        <strong>Price:</strong> ${data.price}
      </p>

      <div className={styles.map}>
        <iframe
          src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d304282.5343310836!2d32.52732558689937!3d39.9344112443957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cfbb769c32db85%3A0x2d276a630ac725b8!2s${data.city}!5e0!3m2!1str!2str!4v1698163533517`}
          width="70%"
          height="400"
          title={data.city}
          loading="lazy"
          style={{ borderRadius: "8px" }}
        ></iframe>
      </div>
    </div>
  );
}

export default EventDetail;
