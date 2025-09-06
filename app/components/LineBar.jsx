'use client'

import { useRef } from 'react'
import { Chart } from 'react-chartjs-2'
import DownloadPdf from '../utils/DownloadPdf'
import { LineBarData } from '../data/chartData'

const LineBar = () => {
  const chartRef = useRef(null);

  return (
    <div className="w-full h-auto space-y-5">
      <div className='flex justify-between px-5 py-2'>
        <h1 className='text-lg font-semibold'>Client</h1>
        <DownloadPdf targetRef={chartRef} fileName="line-bar-chart.pdf"/>
      </div>

      <div ref={chartRef} className='h-auto flex flex-col items-center'>
        <Chart height={230} type="bar" data={LineBarData.data} options={LineBarData.options} />
      </div>
    </div>
  )
}

export default LineBar
