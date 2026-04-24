import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { ThemeProvider } from "./ThemeContext";
import { motion, AnimatePresence } from "motion/react";

export default function Layout() {
  const location = useLocation();

  return (
    <ThemeProvider>
      <div className="flex min-h-screen flex-col bg-[#F5F5F5] text-[#0A0A0A] dark:bg-[#0A0A0A] dark:text-[#F5F5F5] font-sans transition-colors duration-300">
        <Navbar />
        
        <main className="flex-grow flex flex-col relative w-full h-full overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="flex flex-col flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12"
            >
              <Outlet />
            </motion.div>
          </AnimatePresence>
        </main>

        <Footer />
      </div>
    </ThemeProvider>
  );
}
