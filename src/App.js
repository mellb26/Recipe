import {Routes, Route, BrowserRouter } from "react-router-dom";
import './App.css';
import { Home } from './components/Home'
import { NavBar } from "./components/NavBar";
import { Dessert } from "./components/Dessert";
import { Mains } from "./components/Mains";
import { Starters } from "./components/Starters";
import { Footer } from "./components/Footer"
function App() {
  return (
    <>
 
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <NavBar />
                <Home />
              </>
            }
          />
          <Route
            path="Home/Dessert"
            element={
              <>
                <NavBar />
                <Dessert />
              </>
            }
          />
          <Route
            path="Home/Mains"
            element={
              <>
                <NavBar /> <Mains />
              </>
            }
          />
          <Route
            path="Home/Starters"
            element={
              <>
                <NavBar /> <Starters />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
  
    </>
  );
}

export default App;
