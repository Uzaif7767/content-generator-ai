"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Home, Settings, History } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

function SideNav() {
  const router = useRouter();
  const path = usePathname();

  // 🔥 History state
  const [historyList, setHistoryList] = useState<any[]>([]);

  const MenuList = [
    { name: "Home", icon: Home, path: "/dashboard" },
    { name: "History", icon: History, path: "/dashboard/history" }, // ✅ added
    { name: "Settings", icon: Settings, path: "/dashboard/settings" },
  ];

  // 🔥 Load history (localStorage demo)
  useEffect(() => {
    const stored = localStorage.getItem("aiHistory");
    if (stored) {
      setHistoryList(JSON.parse(stored));
    }
  }, []);

  return (
    <div className="h-screen w-64 p-5 border-r bg-white shadow-sm flex flex-col">
      
      {/* Logo */}
      <div className="flex items-center justify-center gap-2 mb-6">
        <h1 className="text-2xl font-extrabold text-blue-500 flex items-center gap-1">
          SENS
          <Image src={"/ai.png"} alt="Logo" width={28} height={28} />
        </h1>
      </div>

      <hr className="mb-6" />

      {/* Menu */}
      <div className="space-y-2">
        {MenuList.map((menu) => {
          const isActive = path === menu.path;

          return (
            <div
              key={menu.path}
              onClick={() => router.push(menu.path)}
              className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-all duration-200
                ${
                  isActive
                    ? "bg-blue-500 text-white shadow-md"
                    : "text-gray-600 hover:bg-blue-100 hover:text-blue-600"
                }
              `}
            >
              <menu.icon size={20} />
              <span className="text-sm font-medium">{menu.name}</span>
            </div>
          );
        })}
      </div>

      {/* 🔥 RECENT HISTORY PREVIEW */}
      <div className="mt-6 flex-1 overflow-y-auto">
        <h2 className="text-xs text-gray-400 mb-2">Recent</h2>

        {historyList.length === 0 ? (
          <p className="text-xs text-gray-400">No history</p>
        ) : (
          historyList.slice(0, 5).map((item, index) => (
            <div
              key={index}
              className="text-xs p-2 rounded-md cursor-pointer 
              hover:bg-gray-100 line-clamp-2"
              onClick={() => router.push(`/dashboard/history`)}
            >
              {item.prompt?.slice(0, 40)}...
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default SideNav;