import { useState } from "react";
import DashboardLayout from "./pages/DashboardLayout";
import NavigationBar from "./pages/NavigationBar";
import SideBar from "./pages/SideBar";
import "./index.css";

function App() {
  return (
    <>
      {/* <NavigationBar /> */}
      <SideBar />
    </>
  );
}

export default App;
