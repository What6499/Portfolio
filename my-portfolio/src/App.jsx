import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Outlet></Outlet>
    </>
  );
}

export default App;
