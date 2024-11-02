import { useNavigate } from "react-router-dom";

import Slider from "../Components/Slider";
import Footer from "./Footer";
import Resume from "./Resume";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="home">
      <Slider />
      <div className="content">
        <button
          onClick={() => {
            navigate("/Contact");
          }}
        >
          Go to Contact
        </button>
        <Resume />
      </div>
      <Footer />
    </div>
  );
};
export default Home;
