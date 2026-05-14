"use client";

import React from "react";
import { Search, Bell } from "lucide-react";
import { UserButton } from "@clerk/nextjs";

function Header() {
  return (
    <div className="sticky top-0 z-50 flex items-center justify-between px-6 py-3 
    border-b border-gray-200 bg-white/70 backdrop-blur-xl">
      
      {/* Left - Title */}
      <div className="flex items-center gap-2">
        <h1 className="text-lg font-semibold text-gray-800 tracking-tight">
          AI Content Generator
        </h1>
      </div>

      {/* Center - Search (UPGRADED) */}
      <div className="hidden md:flex items-center w-[340px]">
        
        <div className="flex items-center gap-2 w-full bg-white border border-gray-200 
        px-4 py-2.5 rounded-xl shadow-sm 
        focus-within:ring-2 focus-within:ring-blue-500/30 
        hover:shadow-md transition-all duration-200">

          <Search size={18} className="text-gray-400" />

          <input
            type="text"
            placeholder="Search templates, content..."
            className="bg-transparent outline-none text-sm w-full text-gray-700 placeholder:text-gray-400"
          />

          {/* Shortcut Hint */}
          <span className="text-xs text-gray-400 border px-1.5 py-0.5 rounded">
            ⌘K
          </span>
        </div>

      </div>

      {/* Right */}
      <div className="flex items-center gap-4">
        
        {/* Notification */}
        <div className="relative cursor-pointer">
          <Bell className="text-gray-600 hover:text-black transition" size={20} />
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-blue-500 rounded-full"></span>
        </div>

        {/* Divider */}
        <div className="h-6 w-px bg-gray-200"></div>

        {/* User */}
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
}

export default Header;