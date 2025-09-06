'use client'
import "@/app/chartSetup";  
import { Line } from 'react-chartjs-2'
import { useRef } from 'react'
import DownloadPdf from '../utils/DownloadPdf'
import { areaData } from '@/app/data/chartData'

const AreaChart = () => {
  const chartRef = useRef(null);

  return (
    <div className="w-full h-auto space-y-5">
      <div className='flex justify-between px-5 py-2'>
        <h1 className='font-semibold'>Client</h1>
        <DownloadPdf targetRef={chartRef} fileName='area-chart.pdf'/>
      </div>

      <div ref={chartRef} className='h-auto flex flex-col items-center'>
        <Line data={areaData.data} height={230} options={areaData.options} />
      </div>
    </div>
  )
}

export default AreaChart
