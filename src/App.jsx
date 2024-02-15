import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Home from "./components/homePage/Home";
import About from "./components/aboutUsPage/About";
import Office from "./components/agricultureOfficesLocator/Office";
import Crop from "./components/cropInformation/Crop";
import Disease from "./components/diseaseSolutions/Disease";
import Error from "./components/errorPage/Error";
import Feedback from "./components/feedbackOrSupport/Feedback";
import News from "./components/newsAndUpdates/News";
import Profile from "./components/userProfilePage/Profile";
import MyHeader from "./components/myHeader/MyHeader";
import Privacy from "./components/termsOfServicesAndPrivacy/Privacy";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";


function App() {
  return (
    <BrowserRouter>
      <MyHeader/>
      <Routes>
        <Route path="/" element = {<Home/>} />
        <Route path="/about" element = {<About/>} />
        <Route path="/office" element = {<Office/>} />
        <Route path="/crop" element = {<Crop/>} />
        <Route path="/disease" element = {<Disease/>} />
        <Route path="#" element = {<Error/>} />
        <Route path="/feedback" element = {<Feedback/>} />
        <Route path="/news" element = {<News/>} />
        <Route path="/privacy" element = {<Privacy/>} />
        <Route path="/profile" element = {<Profile/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
