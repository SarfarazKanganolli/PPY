'use client'
import "@/app/chartSetup";  
import { useRef } from 'react'
import { Bubble } from 'react-chartjs-2'
import { bubbleData } from '@/app/data/chartData'
import DownloadPdf from '../utils/DownloadPdf'

const BubbleChart = () => {
  const chartRef = useRef(null);

  return (
    <div className='flex flex-col space-y-10'>
      <div className='flex justify-between px-5 py-2'>
        <h1 className='font-semibold'>Client</h1>
        <DownloadPdf targetRef={chartRef} fileName="bubble-chart.pdf"/>
      </div>

      <div ref={chartRef} className='h-auto flex flex-col items-center'>
        <Bubble data={bubbleData.data} options={bubbleData.options} height={230} />
      </div>
    </div>
  )
}

export default BubbleChart
