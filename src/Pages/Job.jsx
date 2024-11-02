import { useNavigate } from "react-router-dom";


//Note, you must create jobDescription route and page for the link below to work

const Job = () => {
    const navigate=useNavigate();
    return (
        <div> 
          <div className="content">
            <div className="title">
            <h1>Jobs page</h1>
            </div>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus atque perspiciatis corrupti quisquam quae, repudiandae aperiam omnis quaerat fugit. Aliquid a sit nemo sequi in vero maiores commodi, dolor inventore?</p>
            <button onClick={()=>navigate('jobDescription') }>View Details</button>
            <button onClick={()=>navigate(-1)}>Go back</button>
          </div>        
        </div>
        
    );
}

//exporting the default function
export default Job;
