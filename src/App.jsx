import React, { useState, useEffect } from "react";
import Header from "./components/LandingPage/Header";
import Hero from "./components/LandingPage/Hero";
import Marquee from "./components/LandingPage/Marquee";
import ProblemSection from "./components/LandingPage/ProblemSection";
import HowItWorks from "./components/LandingPage/HowItWorks";
import UserTypes from "./components/LandingPage/UserTypes";
import Stats from "./components/LandingPage/Stats";
import Testimonials from "./components/LandingPage/Testimonials";
import FinalCTA from "./components/LandingPage/FinalCTA";
import Footer from "./components/LandingPage/Footer";
import PrivacyPolicy from "./components/LandingPage/PrivacyDocs";
import TermsOfService from "./components/LandingPage/TermsOfService";
import SafetyGuidelines from "./components/LandingPage/SafetyGuidelines";

function App() {
  const [page, setPage] = useState("home");

  // Simple hash-based router
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "");
      if (["privacy-policy", "terms-of-service", "safety-guidelines"].includes(hash)) {
        setPage(hash);
        window.scrollTo(0, 0);
      } else {
        setPage("home");
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    handleHashChange(); // Check on initial load

    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const renderPage = () => {
    switch (page) {
      case "privacy-policy":
        return <PrivacyPolicy />;
      case "terms-of-service":
        return <TermsOfService />;
      case "safety-guidelines":
        return <SafetyGuidelines />;
      default:
        return (
          <>
            <Hero />
            <Marquee />
            <ProblemSection />
            <HowItWorks />
            <UserTypes />
            <Stats />
            <Testimonials />
            <FinalCTA />
          </>
        );
    }
  };

  return (
    <div style={{ background: "var(--bg)", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Header />
      <main style={{ flex: 1 }}>
        {page !== "home" && (
          <div style={{ maxWidth: 1200, margin: "20px auto 0", padding: "0 40px" }}>
            <a href="#" style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              textDecoration: "none",
              color: "#fe713e",
              fontWeight: 600,
              fontSize: "0.95rem"
            }}>
              <span className="material-symbols-outlined" style={{ fontSize: "20px" }}>arrow_back</span>
              Back to Home
            </a>
          </div>
        )}
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}

export default App;
