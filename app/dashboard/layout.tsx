import React from "react";
import SideNav from "./_components/SideNav";
import Header from "./_components/Header";
import { ThemeProvider } from "./_components/ThemeToggle";
// import { ThemeProvider } from "@/app/context/ThemeProvider"; // Import ThemeProvider

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <div className="bg-slate-100 dark:bg-slate-900 h-screen">
        <div className="md:w-64 hidden md:block fixed">
          <SideNav />
        </div>
        <div className="md:ml-64">
          <Header />
          {children}
        </div>
      </div>
    </ThemeProvider>
  );
}

export default Layout;
