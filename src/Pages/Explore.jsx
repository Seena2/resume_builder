
import {
    BrowserRouter as Router,
    Routes, Route, Link, useNavigate, Outlet,
  } from 'react-router-dom';// to create router



const Contact = () => <h2>Contact Page</h2>;
const Team = () => <h2>Team Page</h2>;
const Company = () => <h2>Company Page</h2>;

const Explore = () => {
    return (
        <div >
           
          <div className="content">
          <h1>Explore page</h1>
          
            <ul>
                <li><Link to="team">Our Team</Link></li>
                <li><Link to="company">Our Company</Link> </li>
                <li><Link to="/Contacts">Contacts</Link></li>
               
            </ul>
        
          </div>
           
        </div>
        
    );
}

//exporting the default function
export default Explore;
