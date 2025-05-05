import "../Styles/header.css";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <>
      <div className="header">
        <div>
          <nav className="nav flex justify-center items-center  ">
            <NavLink
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold  rounded-full h-9 w-18 items-center "
              to="/"
            >
              Accueil
            </NavLink>
            <NavLink
              className="bg-blue-500 hover:bg-blue-700 text-white font-boldb rounded-full h-9 w-18 items-center"
              to="/ok"
            >
              Toiture
            </NavLink>
            <NavLink
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold  rounded-full h-9 w-18 items-center"
              to="/ok"
            >
              Facade
            </NavLink>
            <NavLink
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold  rounded-full h-9 w-18 items-center"
              to="/ok"
            >
              Isolation
            </NavLink>
          </nav>
        </div>
      </div>
    </>
  );
}
export default Header;
