import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/homePage/Home";
import About from "./components/aboutUsPage/About";
import Office from "./components/agricultureOfficesLocator/Office";
import Crop from "./components/cropInformation/Crop";
import Disease from "./components/diseaseSolutions/Disease";
import Error from "./components/errorPage/Error";
import Feedback from "./components/feedbackOrSupport/Feedback";
import News from "./components/newsAndUpdates/News";
import Profile from "./components/userProfilePage/Profile";
import Privacy from "./components/termsOfServicesAndPrivacy/Privacy";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import Adminhome from "./components/Admin/Adminhome";
import MyHeader from "./components/myHeader/MyHeader";
import Addnews from "./components/newsadd/Addnews";
import Addcrops from "./components/cropadd/Addcrops";
import Farmerproduct from "./components/Farmerproduct/Farmerproduct";
import Addoffice from "./components/agriculture office/Addoffice";
import ProfilePage from "./components/profilepage/ProfilePage";
import Orderproduct from "./components/orderproduct/Orderproduct";
import ImageHealth from "./components/Healthassesment/ImageHealth";
import EditNews from "./components/EditNews/EditNews";
import Editoffice from "./components/Editoffice/Editoffice";
import Editcrop from "./components/EditCrop/Editcrop";
import Cart from "./components/Cart/Cart";
import Getfeedback from "./components/getfeedback/Getfeedback";
// import LoginSignUp from "./components/loginSignUp/LoginSignUp";


function App() {
  return (
    <BrowserRouter>
    
      <Routes>
        <Route path="/" element = {<Home/>} />
        <Route path="/about" element = {<About/>} />
        <Route path="/office" element = {<Office/>} />
        <Route path="/crop" element = {<Crop/>} />
        <Route path="/disease" element = {<Disease/>} />
        <Route element = {<Error/>} />
        <Route path="/feedback" element = {<Feedback/>} />
        <Route path="/news" element = {<News/>} />
        <Route path="/privacy" element = {<Privacy/>} />
        <Route path="/login" element = {<Profile />} />
        <Route path="/adminhome" element = {<Adminhome/>} />
        <Route path="/myheader" element = {<MyHeader/>} />
        <Route path="/addnews" element = {<Addnews/>} />
        <Route path="/profile" element = {<Profile register/>} />
        <Route path="/addcrop" element={<Addcrops/>}/>
        <Route path="/products" element={<Farmerproduct/>}/>
        <Route path="/addoffice" element={<Addoffice/>}/>
        <Route path="/profilepage" element={<ProfilePage/>}/>

        <Route path="/orderpage" element={<Orderproduct/>}/>
        <Route path="/imagehealth" element={<ImageHealth/>}/>
        <Route path="/editoffice" element={<EditNews/>}/>
        <Route path="/editnews" element={<Editoffice/>}/>
        <Route path="/editcrop" element={<Editcrop/>}/>
        <Route path="/addtocart" element={<Cart/>}/>
        <Route path="/feedbackview" element={<Getfeedback/>}/>

        {/* <Route path="/loginsignup" element = {<LoginSignUp/>} /> */}

      </Routes>
    </BrowserRouter>
  );
}

export default App;
