import { baseServices } from "../BaseServices";

export const getProducts = async () => {
  return baseServices.getAll("/events");
};

export const getByProductId = async (eventsId) => {
  return baseServices.getById("/events",eventsId);
};
