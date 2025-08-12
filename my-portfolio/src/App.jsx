import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router";
import Navigation from "./components/Navigation";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Navigation></Navigation>
      <Outlet></Outlet>
    </>
  );
}

export default App;
