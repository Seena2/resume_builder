import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  NavLink,
  useNavigate,
  Outlet, //NavLink allow as to style active links
} from "react-router-dom"; // to create router

const Navbar = () => {
  return (
    <div className="navbar">
      <nav className="nav">
        <div>
          <Link to="/" className="nav-logo">{`<Seena2/>`}</Link>
        </div>

        <div className="nav-menu">
          <NavLink to="/explore" className="menuLink">
            Explore
          </NavLink>

          <NavLink to="/courses" className="menuLink">
            Courses
          </NavLink>
          <NavLink to="/resume" className="menuLink">
            Resume builder
          </NavLink>
          <NavLink to="/job" className="menuLink">
            Job
          </NavLink>
          <NavLink to="/account" className="nav-login">
            Account
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
