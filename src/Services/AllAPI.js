import { BASE_URL } from "./BaseURL";
import { commonAPI } from "./CommonAPI";

export const registrationAPI = async (user)=>{
return await commonAPI('POST',`${BASE_URL}/farmease/register/`,user,"")
}