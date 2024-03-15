import { BASE_URL } from "./BaseURL";
import { commonAPI } from "./CommonAPI";

//Registration api

export const registrationAPI = async (user) => {
  return await commonAPI("POST", `${BASE_URL}/farmease/register/`, user, "");
};

//login api

export const loginAPI = async (user) => {
  return await commonAPI("POST", `${BASE_URL}/farmease/login/`, user, "");
};

//get crops information
export const cropsinfoAPI = async (reqHeader) => {
  return await commonAPI("GET", `${BASE_URL}/farmease/usercrops/`, "", reqHeader);
};

//get agriculture office details
export const agriofficeAPI = async (reqHeader) => {
  return await commonAPI("GET", `${BASE_URL}/farmease/user/agriculture-offices/`, "", reqHeader);
};


//get news

export const newsAPI = async (reqHeader) => {
return await commonAPI("GET", `${BASE_URL}/farmease/usernews/`, "", reqHeader);
};


//get disease solutions

export const diseaseAPI = async(reqHeader)=>{
 return await commonAPI("GET", `${BASE_URL}/farmease/solutions/`, "", reqHeader); 
}

//getproducts
export const productsAPI = async(reqHeader)=>{
  return await commonAPI("GET", `${BASE_URL}/farmease/farmer-products/`,"", reqHeader); 
 }

 //add news
 export const addnewsAPI = async(reqBody,reqHeader)=>{
  return await commonAPI("POST", `${BASE_URL}/farmease/news/`,reqBody, reqHeader); 
 }

  //add crop
  export const addcropAPI = async(reqBody,reqHeader)=>{
    return await commonAPI("POST", `${BASE_URL}/farmease/crops/`,reqBody, reqHeader); 
   }
   //addmin get
  //  export const getAdminInfoAPI = async(reqHeader)=>{
  //   return await commonAPI("GET", `${BASE_URL}/farmease/register/`,"", reqHeader); 
  //  }

  //add userdetails

 export const adduserAPI = async(reqHeader)=>{
    return await commonAPI("GET",`${BASE_URL}/farmease/users/`,"", reqHeader); 
   }