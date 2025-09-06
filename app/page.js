'use client'

import Cards from "./components/Cards"
import "@/app/chartSetup";  
// import ChartSection from "./components/ChartSection"
import Header from "./components/Header"
import History from "./components/History"
import Info from "./components/Info"
import Navbar from "./components/Navbar"

import dynamic from 'next/dynamic'


const ChartSection = dynamic(() => import('@/app/components/ChartSection'), { ssr: false })

const Page = () => {


  return (
    <div className="bg-gray-100 dark:bg-[#2C2C2C]">
<Info/>
      <Navbar /> 
      <Header />
      <Cards />
      <History />



        <ChartSection /> 
      
    </div>
  )
}

export default Page
