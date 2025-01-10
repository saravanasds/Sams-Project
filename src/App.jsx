import React, { useEffect, useState, Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"; // Import Navigate for redirects
import Layout from "./Layout";
import Loading from "./Components/Loading";

import AOS from "aos";
import "aos/dist/aos.css";

// Lazy load pages
const Home = lazy(() => import("./Pages/Home"));
const About = lazy(() => import("./Pages/About"));
const Services = lazy(() => import("./Pages/Services"));
const NotFound = lazy(() => import("./Pages/NotFound")); // Add a 404 page

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });

    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Routes>
          {/* Routes with Layout */}
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
          </Route>

          {/* 301 Redirect */}
          <Route path="/old-about" element={<Navigate to="/about" replace />} />

          {/* 404 Page */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
