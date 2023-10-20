import { baseServices } from "../BaseServices";

export const getAllFestivals = async () => {
  return baseServices.getAll("/events?eventType=festival");
};
