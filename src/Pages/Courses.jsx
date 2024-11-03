import Navbar from "../Components/Navbar";
import { useState } from "react";

const Courses = () => {
  //Traffic light demo state
  const [walk, setWalk] = useState(true);
  //Market app state
  const [pending, setPending] = useState(0);
  const [completed, setCompleted] = useState(0);

  function handleClick() {
    alert(walk ? "Stop is Next" : "Walk is Next");
    setWalk(!walk);
  }

  async function handleBuyClick() {
    //Updater function, to change the value of state before rerender
    setPending((p) => p + 1);
    await delay(3000);
    setPending((p) => p - 1);
    setCompleted((c) => c + 1);
  }
  function delay(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }

  return (
    <div>
      <div className="content">
        <h1>I'am from Skill page</h1>
        <div>
          <h4>Available Courses</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
            saepe magnam quam nobis quasi fugit assumenda dolor soluta cumque,
            necessitatibus vitae doloremque fugiat, eius ducimus, sapiente
            distinctio ipsum optio officiis.
          </p>
        </div>

        <h4>Traffic Light</h4>
        <h1 style={{ color: walk ? "darkgreen" : "darkred" }}>
          {walk ? "Walk" : "Stop"}
        </h1>

        <button onClick={handleClick}>
          change to {walk ? "Stop" : "Walk"}
        </button>
        <br />
        <br />

        <hr />
        <h2>Item to Buy</h2>
        <h4>Purchase Status</h4>
        <h3>Pending : {pending}</h3>
        <h3>Completed:{completed}</h3>
        <button onClick={handleBuyClick}>Buy</button>
      </div>
    </div>
  );
};

//exporting the default function
export default Courses;
