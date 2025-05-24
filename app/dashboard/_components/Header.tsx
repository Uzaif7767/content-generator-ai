import React from "react";
import { Search } from 'lucide-react'
import { UserButton } from "@clerk/nextjs";

function Header() {
    return (
        <div className="relative p-2 shadow-sm border-b-2 flex justify-between items-center">
        {/* Animated Background */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-purple-600 via-blue-500 to-green-400 animate-pulse">
            <div className="absolute inset-0 opacity-50 bg-animated-circles"></div>
        </div>
    
        <div className="flex font-bold gap-2 items-center ml-2">
            <h1 className="text-2xl bg-gradient-to-r text-black inline-block bg-clip-text">
                AI Content Generator
            </h1>
        </div>
        <div className="flex justify-between items-center">
            {/* <h2 className="bg-primary p-1 rounded-full text-xs text-white px-2">Join Membership just for $9.99/Month</h2> */}
            <UserButton />
        </div>
    </div>
    
    );
}

export default Header;