import { baseServices } from "../BaseServices";

export const getAllConcerts = async () => {
  return baseServices.getAll("/events?eventType=konser");
};