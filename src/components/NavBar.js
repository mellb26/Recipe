import { NavLink } from "react-router-dom";
import { Starters } from "./Starters"
import { Dessert } from "./Dessert"
import { Mains } from "./Mains"
export const NavBar = () => {

    return (
      <>
        <NavLink>
          <nav>
            <ul>
              <li>
                <NavLink to="/"> Home</NavLink>
              </li>

              <li>
                <NavLink to="/Home/Dessert"> Dessert </NavLink>
              </li>
              <li>
                <NavLink to="/Home/Mains"> Mains</NavLink>
              </li>
              <li>
                <NavLink to="/Home/Starters"> Starters</NavLink>
              </li>
            </ul>
          </nav>
        </NavLink>
      </>
    );

}