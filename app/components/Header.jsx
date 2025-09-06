'use client'

import Link from "next/link"
import {
    Menu, X
} from 'lucide-react'
import { useState } from "react"

const Header = () => {
    const [open, setOpen] = useState(false)


    const sitelinks = ["HOME", "CRM", "UTILITIES", "INSURANCE", "ASSETS", "MUTUAL", "RESEARCH", "TRANSACT ONLINE",
        "GOAL OPS", "FINANCIAL PLANNING", "WEALTH REPORT", "OTHER"]

    return (
        <nav className="mt-20 sm:mt-0 " aria-label="Main Navigation">
            <div className=" bg-red-500 flex px-8 py-4 lg:hidden justify-between">

                <h1 className="text-2xl">Site Links</h1>
                <button onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>


            </div>
            <ul className={` ${open ? "flex" : "hidden"} px-8 py-4  space-y-4 lg:space-y-0 flex-col bg-red-500 lg:flex lg:flex-row lg:gap-4 lg:px-6 lg:py-4 lg:items-center lg:justify-center`}>
                {sitelinks.map((item, idx) => (
                    <li key={idx} className="relative group">
                            <Link
                                href={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
                                className="text-white lg:text-sm text-base transition-colors group-hover:text-black"
                            >
                                {item}
                            </Link>
                            <div className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-black transition-all duration-300 group-hover:left-0 group-hover:w-full"></div>

                    </li>
                ))}
            </ul>

        </nav>
    )
}

export default Header