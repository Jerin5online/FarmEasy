import { BASE_URL } from "./BaseURL";
import { commonAPI } from "./CommonAPI";

//Registration api

export const registrationAPI = async (user)=>{
return await commonAPI('POST',`${BASE_URL}/farmease/register/`,user,"")
}

//login api

export const loginAPI = async (user) => {
return await commonAPI("POST", `${BASE_URL}/farmease/login/`, user, "");
};