
import { axiosInstance } from "./AxiosInstance";

export const baseServices={

getAll:async(entityUrl)=>{

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






}