import { baseServices } from "../BaseServices";

export const getEventsTheatre = async () => {
  return baseServices.getAll("/events?eventType=tiyatro");
};

export const getByEventsById = async (eventsId) => {
  return baseServices.getById("/events?eventType=tiyatro",eventsId);
};
