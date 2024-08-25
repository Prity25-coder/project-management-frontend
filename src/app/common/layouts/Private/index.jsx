import { Outlet } from "react-router-dom";
import { Footer, Navbar } from "../../components";

const PrivateLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default PrivateLayout;
