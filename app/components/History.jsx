'use client'

import { useState } from "react"
import { historyData } from "../data/historyData"



const History = () => {
  const historyFilters = ["3 Days", "7 Days", "10 Days", "30 Days"]


  const [active, setActive] = useState("3 Days")

  return (
    <div className="max-w-7xl mx-auto p-6  space-y-5 dark:bg-[#181818] rounded  ">
      <div className="flex  p-2">
        {historyFilters.map((item) => (
          <button key={item} onClick={() => setActive(item)}
            className={`px-4 py-2 text-sm font-medium transition-all cursor-pointer duration-200
                ${active === item ? "bg-red-500 text-white shadow-sm" : "bg-white text-gray-700 hover:bg-red-100"}`}>
            {item}
          </button>
        ))}
      </div>


      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 ">
        {historyData[active].map((entry, idx) => {
          const Icon = entry.icon
          return (
            <div
              key={idx}
              className="flex justify-center gap-x-4 items-center dark:bg-[#181818]  bg-white shadow p-6 space-y-3"
            >

              <Icon size={40} className=" text-red-400 " />

              <div className="space-y-2">
                <p className="text-gray-700 text-lg dark:text-white ">{entry.count}<span className="px-2">{entry.descript}</span></p>
                <hr className="text-gray-300" />
                <p className="text-gray-500">Amount: ₹{entry.amount.toLocaleString()}</p>
              </div>

            </div>
          )
        })}
      </div>
    </div>
  )
}

export default History
