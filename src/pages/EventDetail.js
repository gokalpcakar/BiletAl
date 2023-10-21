import React from 'react';
import { useParams } from 'react-router-dom';
import { getByEventsById } from '../network/requests/EventServices';
import { useQuery } from 'react-query';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';

function EventDetail() {
  const { id } = useParams();
  const { isLoading, error, data } = useQuery(["events", id], () => getByEventsById(id));

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
      <p><strong>City:</strong> {data.city}</p>
      <p><strong>Start Date:</strong> {data.startDate}</p>
      <p><strong>End Date:</strong> {data.endDate}</p>
      <p><strong>Location:</strong> {data.location}</p>
      <p><strong>Event Type:</strong> {data.eventType}</p>
      <p><strong>Price:</strong> ${data.price}</p>
    </div>
  );
}

export default EventDetail;