'use client'

import Image from "next/image"
import Logo from "@/public/images/logo.webp"
import {
    Menu, X, LayoutDashboard, Wrench, Shield, Wallet, BarChart3, Search,
    ShoppingCart, Compass, ClipboardList, FileText, MoreHorizontal
} from 'lucide-react'
import { useState } from "react"

const Navbar = () => {
    const [open, setOpen] = useState(false)

    const navItems = [
        { label: 'CRM', icon: LayoutDashboard },
        { label: 'Utilities', icon: Wrench },
        { label: 'Insurance', icon: Shield },
        { label: 'Assets', icon: Wallet },
        { label: 'Mutual', icon: BarChart3 },
        { label: 'Research', icon: Search },
        { label: 'Transact Online', icon: ShoppingCart },
        { label: 'Goal GPS', icon: Compass },
        { label: 'Financial Planning', icon: ClipboardList },
        { label: 'Wealth Report', icon: FileText },
        { label: 'Other', icon: MoreHorizontal },
    ]


    return (
        <div className="flex w-full justify-between items-center px-6 py-4 lg:gap-x-4 dark:bg-[#232b2b]  relative ">

            <div className="relative w-28 h-12">
                <Image src={Logo} fill alt="Wealth Elite" className="object-contain" />
            </div>

            <div className="absolute -bottom-14 sm:relative sm:bottom-0 sm:block w-[90%] sm:w-[60%] h-10 bg-neutral-200 rounded-md">
                <input className="absolute px-4 text-black w-full h-full rounded-md outline-none" type="text" placeholder="Search..." />
                <button className="absolute right-0 h-full px-4 bg-gray-400 rounded-r-md cursor-pointer hover:bg-black/70 text-white"> <Search /></button>
            </div>

            <button onClick={() => setOpen(!open)} className="lg:hidden ">
                {open ? <X size={28} /> : <Menu size={28} />}
            </button>

            <div
                className={`absolute lg:relative top-20 lg:top-0 left-0 w-full lg:w-auto bg-[#2C2C2C] lg:bg-transparent 
        flex flex-col lg:flex-row lg:items-center gap-4 lg:px-2 lg:gap-0  px-6 py-4 lg:py-0 transition-all duration-300 
        ${open ? "flex" : "hidden"} lg:flex`}
            >
                {navItems.map((item, idx) => {
                    const Icon = item.icon
                    return (
                        <span key={idx} className="flex items-start gap-4 lg:px-2 lg:gap-0 px-4 space-y-4 lg:space-y-0 cursor-pointer hover:text-amber-600">
                            <Icon size={20} />
                            <label className="text-lg font-medium lg:hidden">{item.label}</label>
                        </span>
                    )
                })}
            </div>


        </div>
    )
}

export default Navbar
