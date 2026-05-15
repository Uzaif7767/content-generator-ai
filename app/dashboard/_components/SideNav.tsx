"use client";

import React from "react";
import Image from "next/image";
import { Home, Settings } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

function SideNav() {
  const router = useRouter();
  const path = usePathname();

  const MenuList = [
    { name: "Home", icon: Home, path: "/dashboard" },
    { name: "Settings", icon: Settings, path: "/dashboard/settings" },
  ];

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
    </div>
  );
}

export default SideNav;