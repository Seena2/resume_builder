import { useNavigate } from "react-router-dom";
import Slider from "../Components/Slider";
import HomeCards from "./HomeCards";
import Footer from "./Footer";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="home">
      <Slider />
      <div className="content">
        <HomeCards />
        <div className="createResume-btn">
          <button
            onClick={() => {
              navigate("/resume");
            }}
          >
            Create resume
          </button>
        </div>
        <div>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint vero
            magni maiores nihil facilis quia tenetur! At iusto, libero
            distinctio, voluptatem voluptatibus consectetur earum ea quos ex
            impedit, est illo?
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Home;
