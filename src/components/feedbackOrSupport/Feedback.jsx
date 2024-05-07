// import Swal from "sweetalert2";
// import { AddfeedbackAPI } from "../../Services/AllAPI";
// import Footer from "../footer/Footer";
// import MyHeader from "../myHeader/MyHeader";
// import "./Feedback.css";
// import React, { useEffect, useState } from "react";

// const Feedback = () => {
//   // State variables to store form data

//   const [ addFeedback, setAddFeedback] = useState({
//     order:"",
//     crop_names:"",
//     content:""
//   });
//   const [token, setToken] = useState("");

//  useEffect(() => {
//    if (sessionStorage.getItem("token")) {
//      setToken(sessionStorage.getItem("token"));
//    } else {
//      setToken("");
//    }
//  }, []);

//   console.log(addFeedback);

//   const handlesubmit = async (e)=>{
//     e.preventDefault()
  
//     const {order,crop_names,content}= addFeedback
  
//     if(!order || !crop_names || !content){
//       Swal.fire({
//         title: "🚫",
//         icon: "info",
//         text: "please fill the form completely"
//     });
  
//     }else{
//       const reqBody = {
//         order: order,
//         crop_names: crop_names,
//         content: content,
//       };
//       if (token) {
//         const reqHeader = {
//           "Content-Type": "application/json",
//           "Authorization": `Token ${token}`
//         };
  
//         const result = await AddfeedbackAPI(reqBody, reqHeader);
//         console.log(result);
  
//         if (result.status === 201) {
//           console.log(result);
//           Swal.fire({
//             title: "",
//             icon: "success",
//             text: "feedback successfully sented"
//           });
//           // setTimeout(() => {
//           //   window.location.reload();
//           // }, 100);
//           // Update the news list after successfully adding the news
//           // Clear the form fields after successful addition
//           setAddFeedback({
//             order:"",
//             crop_names:"",
//             content:""
//           })
//         } else {
//           console.log(result.response.data);
//         }
//       }
      
//     }
   
    
//    }
 
//   return (
//     <>
//     <MyHeader/>
//     <div className="feedbackbg">
//     <form>
//     <div className="container d-flex justify-content-center align-items-center vh-100">
//       <div className="mx-auto text-center" style={{ maxWidth: "500px" }}>
//         <h1 className="display-5">Please Feel Free To Contact Us</h1>
//       </div>
//       <div className="row ">
//         <div className="col">
//           <div className="bg-primary h-100 p-5 me-5 rounded"  style={{width:"600px"}}>
//             <form >
//               <div className="row g-3" >
//                 <div className="col-12">
//                   <input
//                     type="text"
//                     id="text"
//                     value={addFeedback.order}
//                     onChange={(e)=>setAddFeedback({...addFeedback,order:e.target.value})}
//                     required
//                     className="form-control bg-light border-0 px-4"
//                     placeholder="Your order id"
//                     style={{ height: "55px" }}
//                   />
                  
//                 </div>
//                 <div className="col-12">
//                   <input
//                     type="text"
//                     id="text"
//                     value={addFeedback.crop_names}
//                     onChange={(e)=>setAddFeedback({...addFeedback,crop_names:e.target.value})}
//                     required
//                     className="form-control bg-light border-0 px-4"
//                     placeholder="crop name"
//                     style={{ height: "55px" }}
//                   />
                  
//                 </div>
//                 <div className="col-12">
//                   <textarea
//                     id="feedback"
//                     value={addFeedback.content}
//                     onChange={(e)=>setAddFeedback({...addFeedback,content:e.target.value})}
//                     required
//                     className="form-control bg-light border-0 px-4 py-3"
//                     rows="2"
//                     placeholder="Message"
//                   ></textarea>
//                 </div>
//                 <div className="col-12">
//                   <button onClick={handlesubmit} className="btn btn-secondary w-100 py-3" type="submit">
//                     Send Feedback
//                   </button>
//                 </div>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//     </form>
//     </div>
   
//    <Footer/>
//     </>
//   );
// };

// export default Feedback;


import Swal from "sweetalert2";
import { AddfeedbackAPI } from "../../Services/AllAPI";
import Footer from "../footer/Footer";
import MyHeader from "../myHeader/MyHeader";
import "./Feedback.css";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Feedback = () => {
  // State variables to store form data

  const [addFeedback, setAddFeedback] = useState({
    order: "",
    crop_names: "",
    content: ""
  });
  const [token, setToken] = useState("");

  const [isToken, setIsToken] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      setToken(sessionStorage.getItem("token"));
      setIsToken(true); // Set isToken to true when token is present
    } else {
      setToken("");
      setIsToken(false); // Set isToken to false when token is not present
    }
  }, []);

  console.log(addFeedback);

  const handlesubmit = async (e) => {
    e.preventDefault();

    const { order, crop_names, content } = addFeedback;

    if (!order || !crop_names || !content) {
      Swal.fire({
        title: "🚫",
        icon: "info",
        text: "please fill the form completely"
      });
    } else {
      const reqBody = {
        order: order,
        crop_names: crop_names,
        content: content
      };
      if (token) {
        const reqHeader = {
          "Content-Type": "application/json",
          Authorization: `Token ${token}`
        };

        const result = await AddfeedbackAPI(reqBody, reqHeader);
        console.log(result);

        if (result.status === 201) {
          console.log(result);
          Swal.fire({
            title: "",
            icon: "success",
            text: "feedback successfully sented"
          });
          // setTimeout(() => {
          //   window.location.reload();
          // }, 100);
          // Update the news list after successfully adding the news
          // Clear the form fields after successful addition
          setAddFeedback({
            order: "",
            crop_names: "",
            content: ""
          });
        } else {
          console.log(result.response.data);
        }
      }
    }
  };

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      setIsToken(true);
    }
  }, []);

  return (
    <>
      <MyHeader />
      <div className="feedbackbg">
        {isToken && ( // Render form only if user is logged in
          <form>
            <div className="container d-flex justify-content-center align-items-center vh-100">
              <div className="mx-auto text-center" style={{ maxWidth: "500px" }}>
                <h1 className="display-5">Please Feel Free To Contact Us</h1>
              </div>
              <div className="row g-0">
                <div className="col">
                  <div
                    className="bg-primary h-100 p-5 me-5 rounded"
                    style={{ width: "600px" }}
                  >
                    <form>
                      <div className="row g-3">
                        <div className="col-12">
                          <input
                            type="text"
                            id="text"
                            value={addFeedback.order}
                            onChange={(e) =>
                              setAddFeedback({ ...addFeedback, order: e.target.value })
                            }
                            required
                            className="form-control bg-light border-0 px-4"
                            placeholder="Your order id"
                            style={{ height: "55px" }}
                          />
                        </div>
                        <div className="col-12">
                          <input
                            type="text"
                            id="text"
                            value={addFeedback.crop_names}
                            onChange={(e) =>
                              setAddFeedback({ ...addFeedback, crop_names: e.target.value })
                            }
                            required
                            className="form-control bg-light border-0 px-4"
                            placeholder="crop name"
                            style={{ height: "55px" }}
                          />
                        </div>
                        <div className="col-12">
                          <textarea
                            id="feedback"
                            value={addFeedback.content}
                            onChange={(e) =>
                              setAddFeedback({ ...addFeedback, content: e.target.value })
                            }
                            required
                            className="form-control bg-light border-0 px-4 py-3"
                            rows="2"
                            placeholder="Message"
                          ></textarea>
                        </div>
                        <div className="col-12">
                          <button
                            onClick={handlesubmit}
                            className="btn btn-secondary w-100 py-3"
                            type="submit"
                          >
                            Send Feedback
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </form>
        )}:
        <div>
          {isToken ?
            <p className=' text-danger text-center'></p> :
            <div className='d-flex justify-content-center align-items-center flex-column mb-5'>
              <img src="https://cdn-icons-png.flaticon.com/512/6360/6360303.png" alt="login gif" height={'300px'} width={'300px'} style={{marginTop:"100px"}}/>
              <p className='mt-5' style={{ textDecoration: "ActiveBorder" }}>PLEASE<Link style={{ textDecoration: "none", color: "purple" }} to={'/login'}> LOGIN</Link></p>
            </div>
          }
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Feedback;
