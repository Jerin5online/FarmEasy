// import React, { useState, useEffect, useContext } from 'react';
// import "./Addnews.css";
// import { Link } from 'react-router-dom';
// import Swal from 'sweetalert2';
// import { addnewsAPI } from '../../Services/AllAPI';
// import News from '../newsAndUpdates/News';
// import { addNewsResponseContext } from '../../contexts/ContextShare';

// const Addnews = () => {

//   const {addNewsResponse , setAddNewsResponse} = useContext(addNewsResponseContext)
//   const [addnews, setAddnews] = useState({
//     title: "",
//     content: ""
//   });

//   const [newsList, setNewsList] = useState([]);
//   const [token, setToken] = useState("");

//   useEffect(() => {
//     if (sessionStorage.getItem("token")) {
//       setToken(sessionStorage.getItem("token"));
//     } else {
//       setToken("");
//     }
//   }, []);

//   useEffect(() => {
//     const fetchNews = async () => {
//       const result = await addnewsAPI();
//       setNewsList(result.data);
//     };
//     fetchNews();
//   }, []);

//   const handleAdd = async (e) => {

//     const { title, content } = addnews;

//     if (!title || !content) {
//       Swal.fire({
//         title: "🚫",
//         icon: "info",
//         text: "Please fill the form completely"
//       });
//     } else {
//       const reqBody = new FormData();
//       reqBody.append("title", title);
//       reqBody.append("content", content);

//       if (token) {
//         const reqHeader = {
//           "Content-Type": "multipart/form-data",
//           "Authorization": `Token ${token}`
//         };

//         const result = await addnewsAPI(reqBody, reqHeader);
//         console.log(result);

//         if (result.status === 201) {
//           console.log(result);
//           Swal.fire({
//             title: "",
//             icon: "success",
//             text: "News successfully added"
//           });
//           // Update the news list after successfully adding the news
//           setNewsList([...newsList, result.data]);
//           // Clear the form fields after successful addition
//           setAddnews({ title: "", content: "" });
//           setAddNewsResponse(result.data)
//           // fetchNews()
//         } else {
//           console.log(result.response.data);
//         }
//       }
//     }
//   };

//   return (
//     <>
//       <div id="newsbg" className="d-flex align-items-center justify-content-center">
//         <div className="card">
//           <Link className="text-decoration-none" to={"/adminhome"}>
//             <i className="fa-solid fa-arrow-left"></i> Back to home
//           </Link>
//           <span className="title">ADD NEWS</span>
//           <form className="form">
//             <div className="group">
//               <textarea
//                 value={addnews.title}
//                 onChange={(e) => setAddnews({ ...addnews, title: e.target.value })}
//                 id="comment1"
//                 name="Title"
//                 rows="5"
//                 required=""
//               ></textarea>
//               <label htmlFor="comment1">Title</label>
//             </div>
//             <div className="group">
//               <textarea
//                 value={addnews.content}
//                 onChange={(e) => setAddnews({ ...addnews, content: e.target.value })}
//                 id="comment"
//                 name="Content"
//                 rows="5"
//                 required=""
//               ></textarea>
//               <label htmlFor="comment">Content</label>
//             </div>
//             <button onClick={handleAdd} type="submit">
//               Submit
//             </button>
//           </form>
//         </div>
//       </div>
//       <News newsList={newsList} />
//     </>
//   );
// };

// export default Addnews;

import React, { useState, useEffect, useContext } from 'react';
import "./Addnews.css";
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { addnewsAPI } from '../../Services/AllAPI';
import News from '../newsAndUpdates/News';
import { addNewsResponseContext } from '../../contexts/ContextShare';

const Addnews = () => {

  const {addNewsResponse , setAddNewsResponse} = useContext(addNewsResponseContext)
  const [addnews, setAddnews] = useState({
    title: "",
    content: ""
  });

  const [newsList, setNewsList] = useState([]);
  const [token, setToken] = useState("");

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      setToken(sessionStorage.getItem("token"));
    } else {
      setToken("");
    }
  }, []);

  useEffect(() => {
    const fetchNews = async () => {
      const result = await addnewsAPI();
      setNewsList(result.data);
    };
    fetchNews();
  }, []);

  const handleAdd = async (e) => {
    e.preventDefault();
  
    const { title, content } = addnews;
  
    if (!title || !content) {
      Swal.fire({
        title: "🚫",
        icon: "info",
        text: "Please fill the form completely"
      });
    } else {
      const reqBody = new FormData();
      reqBody.append("title", title);
      reqBody.append("content", content);
  
      if (token) {
        const reqHeader = {
          "Content-Type": "multipart/form-data",
          "Authorization": `Token ${token}`
        };
  
        const result = await addnewsAPI(reqBody, reqHeader);
        console.log(result);
  
        if (result.status === 201) {
          console.log(result);
          Swal.fire({
            title: "",
            icon: "success",
            text: "News successfully added"
          });
          setTimeout(() => {
            window.location.reload();
          }, 100);
  
          // Update the news list after successfully adding the news
          setNewsList([...newsList, result.data]);
          // Clear the form fields after successful addition
          setAddnews({ title: "", content: "" });
          setAddNewsResponse(result.data);
  
        
          
        } else {
          console.log(result.response.data);
        }
      }
    }
  };
  
  

  return (
    <>
      <div id="newsbg" className="d-flex align-items-center justify-content-center">
        <div className="card">
          <Link className="text-decoration-none" to={"/adminhome"}>
            <i className="fa-solid fa-arrow-left"></i> Back to home
          </Link>
          <span className="title">ADD NEWS</span>
          <form className="form">
            <div className="group">
              <textarea
                value={addnews.title}
                onChange={(e) => setAddnews({ ...addnews, title: e.target.value })}
                id="comment1"
                name="Title"
                rows="5"
                required=""
              ></textarea>
              <label htmlFor="comment1">Title</label>
            </div>
            <div className="group">
              <textarea
                value={addnews.content}
                onChange={(e) => setAddnews({ ...addnews, content: e.target.value })}
                id="comment"
                name="Content"
                rows="5"
                required=""
              ></textarea>
              <label htmlFor="comment">Content</label>
            </div>
            <button onClick={handleAdd} type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
      <News newsList={newsList} />
    </>
  );
};

export default Addnews;