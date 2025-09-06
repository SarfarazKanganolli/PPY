'use client'

import { TrendingUp, TrendingDown } from 'lucide-react'
import Link from 'next/link'

const Cards = () => {
    const cards = [
        {
            title: "AUM",
            value: "₹12.5 Cr",
            change: "+4.2%",
            isPositive: true,
        },
        {
            title: "SIP",
            value: "₹3.8 Cr",
            change: "-1.3%",
            isPositive: false,
        },
    ]

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-7xl mx-auto p-6">
            {cards.map((card, idx) => (
                <div key={idx} className="cards-shadow bg-white dark:bg-[#181818] rounded-xl py-3 px-6 space-y-2 flex flex-col justify-between items-center">
                    <button className='border-2 dark:bg-red-400 dark:text-white py-1 px-2 text-sm rounded text-red-500  border-red-400 self-end cursor-pointer'>View Report</button>
                    <h1 className='text-2xl'>Current</h1>



                    <div className='flex gap-x-4 items-center'>

                        <h2 className="text-3xl font-semibold dark:text-blue-500 text-gray-700">{card.title}</h2>
                        <p className="text-3xl font-bold ">{card.value}</p>
                    </div>
                    <div className={`flex items-center  text-sm font-medium ${card.isPositive ? "text-green-600" : "text-red-600"
                        }`}>
                        {card.isPositive ? (
                            <TrendingUp className="w-5 h-5 mr-1" />
                        ) : (
                            <TrendingDown className="w-5 h-45mr-1" />
                        )}
                        <span>{card.change} MoM</span>
                    </div>

                    <Link className='self-end text-sm text-green-600' href="/">View Trend</Link>
                </div>
            ))}
        </div>
    )
}

export default Cards
