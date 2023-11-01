import axios from "axios";

//geçici olarak 
axios.interceptors.request.use(
    function (config) {
      const { origin } = new URL(config.url);
  
      const allowedOrigins = [process.env.REACT_APP_BASE_URL];
      const token =JSON.parse(localStorage.getItem("loginData")); //token gelecek
  
      if (allowedOrigins.includes(origin)) {
        config.headers.Authorization = token;
      }
  
      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );



export const fetchRegister=async(input)=>{

    const {data}= await axios.post(`${process.env.REACT_APP_BASE_API_URL}/users`,input)
    
    return data;
    
    
}


export const fetchMe=async()=>{

const {data}=await axios.get(`${process.env.REACT_APP_BASE_API_URL}}/users`)

return data;

}


export const fetchLogout=async()=>{

const {data}= await axios.post(`${process.env.REACT_APP_BASE_API_URL}/users`)

return data;

}



export const getAllUsers = async () => {
const { data } = await axios.get(`${process.env.REACT_APP_BASE_API_URL}/users`);

return data;
}

export const controllerUserMail = async (mail) => {

const allUser = await getAllUsers();


return allUser.find(user => user.email === mail);

};


export const fetchLogin = async (email) => {
const allUser = await getAllUsers();
const user = allUser.find((item) => item.email === email);

return user;
}

export const controllerUserPassword = async (password) => {
const allUser = await getAllUsers();

return allUser.find(user => user.password === password);
}
