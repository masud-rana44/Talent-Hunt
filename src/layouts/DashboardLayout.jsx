import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar";
import Header from "../components/Shared/Header";
import { useState } from "react";

const DashboardLayout = () => {
  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="relative min-h-screen">
      <Header handleToggle={handleToggle} />
      <Sidebar isActive={isActive} />
      <div className="flex-1 mt-[60px] ml-[256px] bg-gray-50">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
