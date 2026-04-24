import { useTheme } from "./ThemeContext";
import { Moon, Sun, Menu } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "#top" },
    { name: "Services", path: "#services" },
    { name: "Work", path: "#work" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-200 dark:border-white/10 bg-[#F5F5F5]/80 dark:bg-[#0A0A0A]/80 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#top" className="flex items-center gap-3">
              <div className="w-8 h-8 bg-zinc-900 dark:bg-white rounded-full flex items-center justify-center">
                <span className="text-white dark:text-black font-bold text-xs tracking-tighter">JV</span>
              </div>
              <span className="text-sm font-semibold tracking-widest uppercase hidden sm:block">Portfolio Core</span>
            </a>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex md:items-center md:gap-8 cursor-pointer">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.path}
                className="text-[11px] uppercase tracking-[0.2em] font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white/60 transition-colors"
              >
                {link.name}
              </a>
            ))}
            
            <button
              id="theme-toggle"
              onClick={toggleTheme}
              className="px-3 py-1 border border-zinc-300 dark:border-white/20 rounded-none text-[10px] font-bold uppercase transition-colors"
              aria-label="Toggle Dark Mode"
            >
              {theme === "dark" ? "Light / Dark" : "Dark / Light"}
            </button>
          </nav>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden gap-4">
            <button
              onClick={toggleTheme}
              className="px-3 py-1 border border-zinc-300 dark:border-white/20 rounded-none text-[10px] font-bold uppercase transition-colors"
              aria-label="Toggle Dark Mode"
            >
              {theme === "dark" ? "Light" : "Dark"}
            </button>
            <button
              id="mobile-menu-toggle"
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 text-zinc-600 hover:bg-zinc-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 dark:text-zinc-400 dark:hover:bg-zinc-800 transition-colors"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950"
          >
            <div className="space-y-1 px-4 pb-3 pt-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.path}
                  className="block rounded-md px-3 py-2 text-base font-medium text-zinc-700 hover:bg-zinc-50 hover:text-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-white"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
