"use client"

import React, { useEffect, useState } from 'react'
import Logo from '@/images/logoBright.png'
import Link from 'next/link';
import { useActivePath } from './functions/useActivePath';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

type NavigationItem = {
    link: string,
    display: string
}

const desktopNav: NavigationItem[] = [
    {
        display: "Home",
        link: "/"
    },
    {
        display: "About",
        link: "/about"
    },
    {
        display: "Portoflio",
        link: "/portfolio"
    },
    {
        display: "Connect",
        link: "/connect"
    }
];

export default function Nav() {
    const checkActivePath = useActivePath();
    const pathname = usePathname();
    const [menu, setMenu] = useState(true);

    useEffect(() => {
        if(pathname.length <=2) {
            setMenu(true);
        } else {
            setMenu(false);
        }
    }, [pathname])


    return (
        <div className="w-full">
            <nav className="lg:hidden text-center w-full md:w-auto mx-auto">
                <Image alt="JTP Logo" priority={true} className={`mx-auto pt-2 pb-2 cursor-pointer`} onClick={() => setMenu(!menu)} width={60} src={Logo} />
                <div className={`w-full z-50  ${pathname.length<=2 ? "" : menu ? "content-show changeHeight" : "content-hide changeHeightR"}`}>
                    <div className={`space-x-6 text-center w-full md:w-auto mx-auto p-3`}>
                        {desktopNav.map(({link, display}) => {
                            const isActive = checkActivePath(link);
                                return (
                                <Link
                                    key={display}
                                    href={link}
                                    className={
                                        isActive
                                            ? 'text-white border-b-white border-b-2'
                                            : 'text-white hover:border-b-white border-b-transparent border-b-2'}>
                                    {display}
                                </Link>
                                )
                            }
                        )}
                    </div>
                </div>
            </nav>
            <nav className="hidden lg:block text-center w-full md:w-auto mx-auto">
                <div className="flex flex-row">
                    <div>
                        <Link href="/" ><Image alt="JTP Logo" className={`mx-auto pt-2 pb-2`} width={50} src={Logo} /></Link>
                    </div>
                    <div className="flex-grow"></div>
                    <div className="self-end">
                        <div className="space-x-6 text-center w-full md:w-auto mx-auto p-3">
                            {desktopNav.map(({link, display}) => {
                            const isActive = checkActivePath(link);
                                return (
                                <Link
                                    key={display}
                                    href={link}
                                    className={
                                        isActive
                                            ? 'text-white border-b-white border-b-2'
                                            : 'text-white hover:border-b-white border-b-transparent border-b-2'}>
                                    {display}
                                </Link>
                                )
                            }
                            )}
                        </div>
                    </div>
                </div>
            </nav>
        </div>
  )
}