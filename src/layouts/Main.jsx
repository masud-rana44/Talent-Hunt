import { Outlet } from "react-router-dom";
import Navbar from "../components/Shared/Navbar/Navbar";
import Footer from "../components/Shared/Footer";

const Main = () => {
  return (
    <div>
      <Navbar />
      <main className="pt-20 min-h-[calc(100vh-312px)]">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Main;
