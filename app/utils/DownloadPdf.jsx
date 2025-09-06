'use client'

import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'

const DownloadPdf = ({ targetRef, fileName = 'report.pdf', label = 'Download Report' }) => {
    const handleDownload = async () => {
        if (!targetRef?.current) return

        const canvas = await html2canvas(targetRef.current)
        const imgData = canvas.toDataURL('image/png')

    
        const pdf = new jsPDF({
            orientation: 'landscape',
            unit: 'px',
            format: [canvas.width, canvas.height],
        })

        pdf.addImage(imgData, 'PNG', 0, 0, canvas.width, canvas.height)
        pdf.save(fileName)
    }

    return (
        <button onClick={handleDownload} className='self-end rounded border-1 px-3 text-sm py-1 bg-red-400 text-white border-none cursor-pointer'>{label}</button>

    )
}

export default DownloadPdf