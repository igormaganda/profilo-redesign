import { useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import Lenis from "lenis";
import { Toaster } from "@/components/ui/sonner";
import Home from "@/pages/Home";
import AtsLanding from "@/pages/AtsLanding";
import AuditA from "@/pages/AuditA";
import AuditB from "@/pages/AuditB";
import CvGallery from "@/pages/CvGallery";
import LinkedIn from "@/pages/LinkedIn";
import LinkedInAudit from "@/pages/LinkedInAudit";
import Bundle from "@/pages/Bundle";
import Privacy from "@/pages/Privacy";
import { CookieBanner } from "@/components/profilo/CookieBanner";

const ScrollReset = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  useEffect(() => {
    const lenis = new Lenis({ duration: 1.15, smoothWheel: true });
    let raf;
    const loop = (t) => {
      lenis.raf(t);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
    };
  }, []);

  return (
    <BrowserRouter>
      <ScrollReset />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ats" element={<AtsLanding />} />
        <Route path="/audit" element={<Navigate to="/audit-b" replace />} />
        <Route path="/audit-a" element={<AuditA />} />
        <Route path="/audit-b" element={<AuditB />} />
        <Route path="/cv" element={<CvGallery />} />
        <Route path="/linkedin" element={<LinkedIn />} />
        <Route path="/audit-linkedin" element={<LinkedInAudit />} />
        <Route path="/bundle" element={<Bundle />} />
        <Route path="/politique-confidentialite" element={<Privacy />} />
      </Routes>
      <CookieBanner />
      <Toaster position="top-center" richColors />
    </BrowserRouter>
  );
}

export default App;
