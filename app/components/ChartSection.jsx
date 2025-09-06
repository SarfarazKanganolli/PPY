'use client'


import LineBar from './LineBar'
import AreaChart from './AreaChart'
import BubbleChart from './BubbleChart'


const ChartSection = () => {



  return (
    <div className="w-full h-auto grid gap-6 dark:bg-[#2C2C2C] bg-gray-100 grid-cols-1 p-6 md:grid-cols-2 lg:grid-cols-3">
  <div className="bg-white dark:bg-[#181818] rounded-xl shadow-lg p-4 flex flex-col">
      <BubbleChart />
  </div>

  <div className="bg-white dark:bg-[#181818] rounded-xl shadow-lg p-4 flex flex-col">
      <LineBar />
  </div>

  <div className="bg-white dark:bg-[#181818] rounded-xl shadow-lg p-4 flex flex-col">
      <AreaChart />
  </div>
</div>

  )
}

export default ChartSection
