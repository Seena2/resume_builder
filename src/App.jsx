import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
  Outlet,
} from "react-router-dom"; // to create router
//components
import Navbar from "./Components/Navbar";
import Home from "./components/Home";
import Explore from "./Pages/Explore";
import Skill from "./Pages/Skill";
import Resume from "./Pages/Resume";
import Job from "./Pages/Job";
import Login from "./Pages/Login";
import Contacts from "./Pages/Contacts";
import Contact from "./Pages/Contact";

import PageNotFound from "./Pages/NoMatch"; //When the requested route is not found

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Explore" element={<Explore />} />
        <Route path="/Skill" element={<Skill />} />
        <Route path="/Resume" element={<Resume />} />
        <Route path="/Job" element={<Job />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Contacts" element={<Contacts />} />
        <Route path="contacts/:contactId" element={<Contact />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Home />
    </div>
  );
}

export default App;
