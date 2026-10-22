import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { HelmetProvider } from "react-helmet-async";
import { LanguageProvider } from "./i18n/LanguageContext";
import { destroyLenis, initLenis, scrollToTopNow } from "./lib/lenis";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Preloader from "./components/Preloader";
import ChatAssistant from "./components/ChatAssistant";
import PageTransition from "./components/PageTransition";
import Home from "./pages/Home";
import Properties from "./pages/Properties";
import PropertyDetail from "./pages/PropertyDetail";
import WhoWeAre from "./pages/WhoWeAre";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import Sell from "./pages/Sell";
import Rent from "./pages/Rent";
import Appointment from "./pages/Appointment";
import Contact from "./pages/Contact";
import { CookiePolicy, Privacy } from "./pages/Legal";
import NotFound from "./pages/NotFound";

const IntroContext = createContext(false);
export function useIntro() {
  return useContext(IntroContext);
}

function ScrollManager() {
  const { pathname } = useLocation();
  useEffect(() => {
    scrollToTopNow();
  }, [pathname]);
  return null;
}

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Home /></PageTransition>} />
        <Route path="/properties" element={<PageTransition><Properties /></PageTransition>} />
        <Route path="/properties/:slug" element={<PageTransition><PropertyDetail /></PageTransition>} />
        <Route path="/who-we-are" element={<PageTransition><WhoWeAre /></PageTransition>} />
        <Route path="/services" element={<PageTransition><Services /></PageTransition>} />
        <Route path="/projects" element={<PageTransition><Projects /></PageTransition>} />
        <Route path="/projects/:slug" element={<PageTransition><ProjectDetail /></PageTransition>} />
        <Route path="/sell" element={<PageTransition><Sell /></PageTransition>} />
        <Route path="/rent" element={<PageTransition><Rent /></PageTransition>} />
        <Route path="/appointment" element={<PageTransition><Appointment /></PageTransition>} />
        <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
        <Route path="/privacy" element={<PageTransition><Privacy /></PageTransition>} />
        <Route path="/cookie-policy" element={<PageTransition><CookiePolicy /></PageTransition>} />
        <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  const [showPreloader, setShowPreloader] = useState<boolean>(() => {
    if (typeof window === "undefined") return false;
    return !window.sessionStorage.getItem("ar-intro");
  });
  const [introDone, setIntroDone] = useState<boolean>(() => !showPreloader);

  useEffect(() => {
    initLenis();
    return () => destroyLenis();
  }, []);

  const finishIntro = useCallback(() => {
    window.sessionStorage.setItem("ar-intro", "1");
    setIntroDone(true);
    setShowPreloader(false);
  }, []);

  return (
    <HelmetProvider>
      <LanguageProvider>
        <IntroContext.Provider value={introDone}>
          <BrowserRouter>
            <ScrollManager />
            <AnimatePresence>
              {showPreloader && <Preloader onDone={finishIntro} />}
            </AnimatePresence>
            <Header />
            <AnimatedRoutes />
            <Footer />
            <ChatAssistant />
          </BrowserRouter>
        </IntroContext.Provider>
      </LanguageProvider>
    </HelmetProvider>
  );
}
