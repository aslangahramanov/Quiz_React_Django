import React from 'react'
import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty';
import './LoadingPage.scss'

function LoadingPage() {
  return (
    <div className='Loading w-full h-[80vh] flex justify-center items-center'>
        <HourglassEmptyIcon fontSize='large' className='LoadingIcon text-blue'></HourglassEmptyIcon>
    </div>
  )
}

export default LoadingPage