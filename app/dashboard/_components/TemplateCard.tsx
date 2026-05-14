"use client";

import React from "react";
import { TEMPLATE } from "./TemplateListSection";
import Image from "next/image";
import Link from "next/link";

function TemplateCard(item: TEMPLATE) {
  return (
    <Link href={"/dashboard/content/" + item?.slug}>
      <div
        className="
        group p-5 rounded-2xl border 
        bg-white/70 dark:bg-gray-900/60 
        backdrop-blur-lg shadow-md 
        hover:shadow-2xl 
        transition-all duration-300 
        cursor-pointer 
        hover:-translate-y-2 hover:scale-[1.03]
      "
      >
        {/* Icon */}
        <div
          className="
          w-14 h-14 flex items-center justify-center 
          rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 
          shadow-lg mb-4 
          group-hover:rotate-6 transition
        "
        >
          <Image src={item.icon} alt="icon" width={28} height={28} />
        </div>

        {/* Title */}
        <h2
          className="
          font-semibold text-lg 
          text-gray-800 dark:text-white 
          group-hover:text-blue-600 transition
        "
        >
          {item.name}
        </h2>

        {/* Description */}
        <p
          className="
          text-sm text-gray-500 dark:text-gray-300 
          mt-2 line-clamp-2
        "
        >
          {item.desc}
        </p>

        {/* Bottom glow line */}
        <div
          className="
          mt-4 h-[3px] w-0 
          bg-gradient-to-r from-blue-500 to-purple-500 
          group-hover:w-full transition-all duration-300
        "
        ></div>
      </div>
    </Link>
  );
}

export default TemplateCard;