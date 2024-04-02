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
   //admin get
  //  export const getAdminInfoAPI = async(reqHeader)=>{
  //   return await commonAPI("GET", `${BASE_URL}/farmease/register/`,"", reqHeader); 
  //  }

  // add agricultural office
  export const addAgriofficeAPI = async (reqBody,reqHeader) => {
    return await commonAPI("POST", `${BASE_URL}/farmease/agriculture-offices/`, reqBody, reqHeader);
  };

  //add userdetails

 export const adduserAPI = async(reqHeader)=>{
    return await commonAPI("GET",`${BASE_URL}/farmease/users/`,"", reqHeader); 
   }

   //Edit userprofile
   export const EdituserprofileAPI = async(userId,reqBody,reqHeader)=>{
    return  await commonAPI('PUT',`${BASE_URL}/farmease/profile/${userId}/`,reqBody,reqHeader)
 } 

 // add product
export const addProductAPI = async (reqBody , reqHeader)=>{
  return await commonAPI('POST',`${BASE_URL}/farmease/farmer-products/`, reqBody , reqHeader)
}
   
 //Add feedback
 export const AddfeedbackAPI = async(reqBody,reqHeader)=>{
  return  await commonAPI('POST',`${BASE_URL}/farmease/orderfeedback/`,reqBody,reqHeader)
} 

//get feedback
export const getfeedbackAPI = async(reqHeader)=>{
  return  await commonAPI('GET',`${BASE_URL}/farmease/orderfeedback/`,"",reqHeader)
} 
   
//delete feedback
export const DeleteFeedbackAPI = async(id,reqHeader)=>{
  return  await commonAPI('DELETE',`${BASE_URL}/farmease/feedbackdelete/${id}/`,{},reqHeader)
}
   
//edit news

export const EditNewsAPI = async(Id,reqBody,reqHeader)=>{
  return  await commonAPI('PUT',`${BASE_URL}/farmease/newsupdate/${Id}/`,reqBody,reqHeader)
} 

//delete news

export const DeleteNewsAPI = async(id,reqHeader)=>{
  return  await commonAPI('DELETE',`${BASE_URL}/farmease/newsdelete/${id}/`,{},reqHeader)
}

//edit crop

export const EditCropAPI = async(Id,reqBody,reqHeader)=>{
  return  await commonAPI('PUT',`${BASE_URL}/farmease/cropupdate/${Id}/`,reqBody,reqHeader)
}  

//delete crop

export const DeleteCropAPI = async(id,reqHeader)=>{
  return  await commonAPI('DELETE',`${BASE_URL}/farmease/cropdelete/${id}/`,{},reqHeader)
}

//edit office 
export const editofficeAPI = async (projectId,reqBody,reqHeader)=>{
  // project id passed as path parameter
  return await commonAPI('PUT',`${BASE_URL}/farmease/agriofficeupdate/${projectId}`,reqBody, reqHeader)
}

// delete office 
export const deleteofficeAPI = async (projectId,reqHeader)=>{
  // project id passed as path parameter
  return await commonAPI('DELETE',`${BASE_URL}/farmease/agridelete/${projectId}`,{}, reqHeader)
}

//add cart

export const addtoCartAPI = async (reqBody,reqHeader)=>{
  return await commonAPI('POST',`${BASE_URL}/farmease/farmcart/`, reqBody ,reqHeader)
}

//add cart producta
export const getCartproducts = async (reqHeader)=>{
  return await commonAPI('GET',`${BASE_URL}/farmease/farmcart/`,"",reqHeader)
}

//to post the cart address details
export const postcartAPI = async (reqBody , reqHeader)=>{
  return await commonAPI('POST',`${BASE_URL}/farmease/farm-orders/`, reqBody , reqHeader)
}

//to get the cart address details
export const getcartAPI = async (reqHeader)=>{
  return await commonAPI('GET',`${BASE_URL}/farmease/farm-orders/`, "" , reqHeader)
}

// product payment 
export const paymentAPI = async (reqBody , reqHeader)=>{
  return await commonAPI('POST',`${BASE_URL}/farmease/payments/`, reqBody , reqHeader)
}




//health assessment

export const imagehealthAPI = async (reqBody) => {
  return await commonAPI('POST',`${BASE_URL}/farmease/health-assessment/`,reqBody,{});
}

//get health assessment

export const gethealthassessmentAPI = async () => {
  return await commonAPI('GET',`${BASE_URL}/farmease/health-assessment/`,{});
}
