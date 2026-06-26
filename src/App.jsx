import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import Footer from "./sections/Footer";
import ScrollProgressBar from "./components/ScrollProgressBar";
import BackToTop from "./components/BackToTop";
import MouseGlow from "./components/MouseGlow";
import AnimatedBackground from "./components/AnimatedBackground";
import Home from "./pages/Home";

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <BrowserRouter>
      <Loader onDone={() => setLoading(false)} />

      {!loading && (
        <>
          <AnimatedBackground />
          <MouseGlow />
          <ScrollProgressBar />
          <Navbar />

          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="*" element={<Home />} />
            </Routes>
          </main>

          <Footer />
          <BackToTop />
        </>
      )}
    </BrowserRouter>
  );
}
