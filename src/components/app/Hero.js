import React from 'react'
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';

export default function Hero({ scrollToExpertise, myHome }) {

  return (
    <div className="max-h-dvh lg:min-h-dvh flex justify-center" ref={myHome} >
      <div className="text-white text-center pt-12 sm:pt-28 md:pt-32 lg:pt-48">
        <h1 className=" text-2xl smw:mb-2 sm:text-[6vw] md:text-[5vw] lg:text-[10vw] sm:mb-5 md:mb-6 lg:mb-10 xl:mb-20">PAUL AWOLESI</h1>
        <h3 className="smw:text-md md:text-xl lg:text-2xl mb-12" >SOFTWARE ENGINEER, FRONT END & BACK END.</h3>

        <div className="flex justify-center">
            <KeyboardDoubleArrowDownIcon onClick={scrollToExpertise}className="animate-bounce h-12 w-12 text-white rounded-full shadow-lg hover:cursor-pointer" />
        </div>
      </div>
    </div>
  )
}
