import React from "react";
import MainLayout from "./Layout/MainLayout";
import { Route, Routes } from "react-router-dom";

//Pages
import HomePage from "./pages/HomePage";
import ProjectPage from "./pages/ProjectPage";

function App() {
  return (
    <>
      <MainLayout>
        {/* Routes */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Project" element={<ProjectPage />} />
        </Routes>
      </MainLayout>
    </>
  );
}

export default App;
