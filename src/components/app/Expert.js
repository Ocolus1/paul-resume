import React from 'react'

export default function Expert({ img_src, title, description}) {
  return (
    <div className="border p-6 w-[90%] md:w-[33.33%]">
      <div className="flex flex-row space-x-4 sm:justify-center items-center py-4" >
        {img_src}
        <h3 className=" sm:text-2xl md:text-3xl font-bold" >{title}</h3>
      </div>
      <div
        className="relative after:opacity-25 after:content-[''] after:w-0 after:h-[55%] after:absolute after:bg-white after:border after:left-[17px] after:bottom-[22%]"
      >
        <div className="py-4 pl-9 before:ml-[-35px] before:content-['<h3>'] before:mb-1 before:block after:ml-[-35px] after:block after:mt-1 after:content-['</h3>'] ">{description}</div>
      </div>
    </div>
  )
}
