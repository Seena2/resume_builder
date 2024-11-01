import Footer from "./Footer";
import Header from "./Header";
import Resume from "./Resume";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <div>
        <Resume />
      </div>
      <Footer />
    </div>
  );
};
export default Home;
