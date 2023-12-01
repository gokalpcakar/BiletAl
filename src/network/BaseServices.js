
import { axiosInstance } from "./AxiosInstance";

export const baseServices = {

  getAll: async (entityUrl) => {

    let response = [];

    await axiosInstance
      .get(entityUrl)
      .then(res => {
        response = res.data;
      })
    return response;
  },


  getById: async (entityUrl, id) => {
    try {
      const res = await axiosInstance.get(`${entityUrl}/${id}`);
      return res.data;
    } catch (error) {
      console.error('Hata oluştu:', error);
      throw error;
    }
  },

  deleteById: async (entityUrl, id) => {
    let response = [];
    try {
      await axiosInstance.delete(`${entityUrl}/${id}`).then(res => {
        console.log(`${id} Successfully Deleted`)
      });
    } 
    catch (err) {
      console.error("ERROR DELETE: ", err)
      throw err;
    }
  },

  postEvent: async(entityUrl, newEvent) => {
    try {
      await axiosInstance.post(entityUrl, newEvent).then(res => {
        console.log("Successfully added new event.")
      })
    }
    catch (err) {
      console.error("ERROR POST: ", err)
      throw err;
    }
  }
}