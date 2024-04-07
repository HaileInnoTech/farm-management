import SideBar from "./pages/SideBar";
import AuthenticationLayout from "./layouts/AuthenticationLayput";
import LoginSuccess from "./pages/LoginSuccess";
import ErrorPage from "./pages/ErrorPage";
import { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
function App() {
  return (
    <Routes>
      <Route path="/" element={<AuthenticationLayout />} />
      <Route path="/dashboard/:id" element={<SideBar />} />
      <Route path="/login/oauth2/google/success" element={<LoginSuccess />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default App;
