"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { Home, Settings } from 'lucide-react';
import { usePathname, useRouter } from "next/navigation";

function SideNav() {
    const router = useRouter();  
    const path = usePathname();  

    const MenuList = [
        { name: 'Home', icon: Home, path: '/dashboard' },
        { name: 'Setting', icon: Settings, path: '/dashboard/settings' },
    ];

    useEffect(() => {
        console.log(path);
    }, [path]);

    return (
        <div className='h-screen relative p-5 shadow-sm border bg-white'>
            {/* Logo + Title */}
            <div className="flex justify-center items-center bg-black/0 gap-3">
            <h1 className="flex justify-center items-center font-extrabold text-blue-400" >SENS
                <Image src={'/ai.png'} alt='Logo' width={30} height={30} />
            </h1>
            </div>

            <hr className="my-6 border" />

            <div className='mt-3'>
                {MenuList.map((menu) => (
                    <div 
                        key={menu.path} 
                        className={`flex gap-2 mb-2 p-3 hover:bg-primary hover:text-white rounded-lg cursor-pointer items-center bg-blue-700
                            ${path === menu.path ? 'bg-primary text-white' : ''}
                        `}
                        onClick={() => router.push(menu.path)}
                    >
                        <menu.icon />
                        <h2>{menu.name}</h2>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SideNav;
