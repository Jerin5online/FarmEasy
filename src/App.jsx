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
import Addnews from "./newsadd/Addnews";
import Addcrops from "./cropadd/Addcrops";
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
        {/* <Route path="/loginsignup" element = {<LoginSignUp/>} /> */}

      </Routes>
    </BrowserRouter>
  );
}

export default App;
