import { baseServices } from "../BaseServices";

export const getAllStandUps = async () => {
  return baseServices.getAll("/events?eventType=standup");
};
