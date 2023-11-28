import { Outlet } from "react-router-dom";
import Footer from "../components/Shared/Footer";
import Navbar from "../components/Navbar/Navbar";

const Main = () => {
  return (
    <div>
      <Navbar />
      <main className="pt-[88px] min-h-[calc(100vh-312px)]">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Main;
