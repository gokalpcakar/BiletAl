import { baseServices } from "../BaseServices";

export const getEvents = async () => {
  return baseServices.getAll("/events");
};

export const getByEventsById = async (eventsId) => {
  return baseServices.getById("/events",eventsId);
};

export const deleteEventsById = async (eventsId) => {
  return baseServices.deleteById("/events", eventsId);
}