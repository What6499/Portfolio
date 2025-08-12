import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router";
import Navigation from "./components/Navigation";
import ProjectDetails from "./components/ProjectDetails";

function App() {
  return (
    <>
      <Navbar></Navbar>

      <div className="min-h-[calc(100vh-69px)]">
        <Outlet></Outlet>
      </div>
    </>
  );
}

export default App;
