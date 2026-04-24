import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="h-auto md:h-16 flex flex-col md:flex-row items-center justify-between p-6 md:px-10 border-t border-zinc-200 dark:border-white/10 text-[9px] uppercase tracking-[0.3em] text-zinc-500 dark:text-white/30 font-medium bg-[#F5F5F5] dark:bg-[#0A0A0A]">
      <div className="mb-4 md:mb-0">© {new Date().getFullYear()} Next.js App Router</div>
      <div className="flex gap-4 items-center">
         <span className="w-1 h-1 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.6)]"></span>
         System Online
      </div>
    </footer>
  );
}

