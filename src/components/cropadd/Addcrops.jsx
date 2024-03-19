// import React, { useEffect, useState } from 'react';
// import "./Addcrops.css";
// import { Link } from 'react-router-dom';
// import Swal from 'sweetalert2';
// import { addcropAPI } from '../../Services/AllAPI';
// import About from '../aboutUsPage/About';

// const Addcrops = () => {
//   const [addcrop, setAddCrop] = useState({
//     name: "",
//     description: "",
//     climate: "",
//     growth_period: "",
//     harvesting_time: "",
//     techniques:{
//       field1:"",
//       field2: ""
//     }

//   });

//   console.log(addcrop);

//   const [token, setToken] = useState("");

//   useEffect(() => {
//     const tokenFromSession = sessionStorage.getItem("token");
//     setToken(tokenFromSession || "");
//   }, []);

//   const handleAddCrop = async (e) => {
//     e.preventDefault();

//     const { name, description, climate, growth_period, harvesting_time ,} = addcrop;

//     if (!name || !description || !climate || !growth_period || !harvesting_time ||!techniques) {
//       Swal.fire({
//         title: "🚫",
//         icon: "info",
//         text: "Please fill the form completely"
//       });
//     } else {
//       const reqBody = new FormData();
//       reqBody.append("name", name);
//       reqBody.append("description", description);
//       reqBody.append("climate", climate);
//       reqBody.append("growth_period", growth_period);
//       reqBody.append("harvesting_time", harvesting_time);
//       reqBody.append("techniques", techniques);


//       if (token) {
//         const reqHeader = {
//           "Authorization": `Token ${token}`
//         };
//         try {
//           const result = await addcropAPI(reqBody, reqHeader);
//           console.log(result);

//           if (result.status === 201) {
//             console.log(result.data);
//             Swal.fire({
//               icon: "info",
//               title: "Added successfully"
//             });
//             // Clear the form fields after successful addition
//             setAddCrop({
//               name: "",
//               description: "",
//               climate: "",
//               growth_period: "",
//               harvesting_time: "",
//               // techniques:""
//             });
//           } else {
//             console.log(result.response.data);
//           }
//         } catch (error) {
//           console.error("Error:", error);
//         }
//       }
//     }
//   };

//   return (
//     <>
//       <div id='cropbg' className='d-flex align-items-center justify-content-center'>
//         <div className='card'>
//           <Link className='text-decoration-none' to={'/adminhome'}><i className="fa-solid fa-arrow-left"></i> Back to home</Link>

//           <div className="card-headerr mt-2">
//             <div className="text-header">ADD CROPS</div>
//           </div>
//           <div className="card-body">
//             <form>
//               <div className="form-group">
//                 <label htmlFor="username">Name</label>
//                 <input value={addcrop.name} onChange={(e) => setAddCrop({ ...addcrop, name: e.target.value })} required className="form-control" name="username" id="username" type="text" />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="text">Description</label>
//                 <input value={addcrop.description} onChange={(e) => setAddCrop({ ...addcrop, description: e.target.value })} required className="form-control" name="email" id="email" type="text" />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="password">Climate</label>
//                 <input value={addcrop.climate} onChange={(e) => setAddCrop({ ...addcrop, climate: e.target.value })} required className="form-control" name="password" id="password" type="text" />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="confirm-password">Growth Period</label>
//                 <input value={addcrop.growth_period} onChange={(e) => setAddCrop({ ...addcrop, growth_period: e.target.value })} required className="form-control" name="confirm-password" id="confirm-password" type="text" />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="confirm-password">Harvesting Period</label>
//                 <input value={addcrop.harvesting_time} onChange={(e) => setAddCrop({ ...addcrop, harvesting_time: e.target.value })} required className="form-control" name="confirm-password" id="confirm-password" type="text" />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="confirm-password">techniques</label>
//                 <input value={addcrop.techniques} onChange={(e) => setAddCrop({ ...addcrop, techniques: e.target.value })} required className="form-control" name="confirm-password" id="confirm-password" type="text" />
//               </div>
//               <input onClick={handleAddCrop} type="submit" className="btn1" value="Submit" />
//             </form>
//           </div>
//         </div>
//       </div>
//       <About />
//     </>
//   );
// };

// export default Addcrops;



import React, { useEffect, useState } from 'react';
import "./Addcrops.css";
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { addcropAPI } from '../../Services/AllAPI';
import About from '../aboutUsPage/About';

const Addcrops = () => {
  const [addcrop, setAddCrop] = useState({
    name: "",
    description: "",
    climate: "",
    growth_period: "",
    harvesting_time: "",
    techniques: [] // Initialize techniques as an empty array
  });

  console.log(addcrop);

  const [token, setToken] = useState("");

  useEffect(() => {
    const tokenFromSession = sessionStorage.getItem("token");
    setToken(tokenFromSession || "");
  }, []);

  const handleAddCrop = async (e) => {
    e.preventDefault();

    const { name, description, climate, growth_period, harvesting_time, techniques } = addcrop;

    if (!name || !description || !climate || !growth_period || !harvesting_time || techniques.length === 0) {
      Swal.fire({
        title: "🚫",
        icon: "info",
        text: "Please fill the form completely"
      });
    } else {
      const reqBody = {
        name,
        description,
        climate,
        growth_period,
        harvesting_time,
        techniques: JSON.stringify(techniques) // Convert techniques array to string
      };

      if (token) {
        const reqHeader = {
          "Authorization": `Token ${token}`
        };
        try {
          const result = await addcropAPI(reqBody, reqHeader);

          if (result.status === 201) {
            Swal.fire({
              icon: "info",
              title: "Added successfully"
            });
            // Clear the form fields after successful addition
            setAddCrop({
              name: "",
              description: "",
              climate: "",
              growth_period: "",
              harvesting_time: "",
              techniques: []
            });
          } else {
            console.log(result.response.data);
          }
        } catch (error) {
          console.error("Error:", error);
        }
      }
    }
  };

  return (
    <>
      <div id='cropbg' className='d-flex align-items-center justify-content-center'>
        <div className='card'>
          <Link className='text-decoration-none' to={'/adminhome'}><i className="fa-solid fa-arrow-left"></i> Back to home</Link>

          <div className="card-headerr mt-2">
            <div className="text-header">ADD CROPS</div>
          </div>
          <div className="card-body">
            <form onSubmit={handleAddCrop}>
              <div className="form-group">
                <label htmlFor="username">Name</label>
                <input value={addcrop.name} onChange={(e) => setAddCrop({ ...addcrop, name: e.target.value })} required className="form-control" name="username" id="username" type="text" />
              </div>
              <div className="form-group">
                <label htmlFor="text">Description</label>
                <input value={addcrop.description} onChange={(e) => setAddCrop({ ...addcrop, description: e.target.value })} required className="form-control" name="email" id="email" type="text" />
              </div>
              <div className="form-group">
                <label htmlFor="password">Climate</label>
                <input value={addcrop.climate} onChange={(e) => setAddCrop({ ...addcrop, climate: e.target.value })} required className="form-control" name="password" id="password" type="text" />
              </div>
              <div className="form-group">
                <label htmlFor="confirm-password">Growth Period</label>
                <input value={addcrop.growth_period} onChange={(e) => setAddCrop({ ...addcrop, growth_period: e.target.value })} required className="form-control" name="confirm-password" id="confirm-password" type="text" />
              </div>
              <div className="form-group">
                <label htmlFor="confirm-password">Harvesting Period</label>
                <input value={addcrop.harvesting_time} onChange={(e) => setAddCrop({ ...addcrop, harvesting_time: e.target.value })} required className="form-control" name="confirm-password" id="confirm-password" type="text" />
              </div>
              <div className="form-group">
                <label htmlFor="technique1">Technique 1</label>
                <input value={addcrop.techniques[0]} onChange={(e) => setAddCrop({ ...addcrop, techniques: [e.target.value, addcrop.techniques[1]] })} required className="form-control" name="technique1" id="technique1" type="text" />
              </div>
              <div className="form-group">
                <label htmlFor="technique2">Technique 2</label>
                <input value={addcrop.techniques[1]} onChange={(e) => setAddCrop({ ...addcrop, techniques: [addcrop.techniques[0], e.target.value] })} required className="form-control" name="technique2" id="technique2" type="text" />
              </div>
              <input onClick={handleAddCrop} type="submit" className="btn1" value="Submit" />
            </form>
          </div>
        </div>
      </div>
      <About />
    </>
  );
};

export default Addcrops;
