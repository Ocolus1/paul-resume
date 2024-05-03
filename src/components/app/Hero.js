import React from 'react'
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';

export default function Hero({ scrollToExpertise, myHome }) {

  return (
    <div className="max-h-dvh min-h-dvh flex justify-center" ref={myHome} >
      <div className="text-white text-center pt-48">
        <h1 className="text-[10vw]">PAUL AWOLESI</h1>
        <h3 className="text-2xl mb-12" >SOFTWARE ENGINEER, FRONT END & BACK END.</h3>

        <div className="flex justify-center">
            <KeyboardDoubleArrowDownIcon onClick={scrollToExpertise}className="animate-bounce h-12 w-12 text-white rounded-full shadow-lg shadow-white hover:cursor-pointer" />
        </div>
      </div>
    </div>
  )
}
