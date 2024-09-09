import React from "react";
import MainLayout from "./Layout/MainLayout";
import { Route, Routes } from "react-router-dom";

//Pages
import HomePage from "./pages/HomePage";
import ProjectPage from "./pages/ProjectPage";
import TestimonialPage from "./pages/TestimonialPage";

function App() {
  return (
    <>
      <MainLayout>
        {/* Routes */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Project" element={<ProjectPage />} />
          <Route path="/Testimonial" element={<TestimonialPage />} />
        </Routes>
      </MainLayout>
    </>
  );
}

export default App;
