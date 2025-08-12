import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router";
import Navigation from "./components/Navigation";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <div className="min-h-screen">
        <Navigation></Navigation>
        <Outlet></Outlet>
      </div>
    </>
  );
}

export default App;
