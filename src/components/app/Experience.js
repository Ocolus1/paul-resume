"use client";

import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import AddIcon from '@mui/icons-material/Add';
import Image from "next/image";

function StringSplitter({ text }) {
  // Split the string by "."
  const parts = text.split('.');

  return (
    <ul className="w-10/12">
      {/* Map through the parts and render each as an li */}
      {parts.map((part, index) => (
        <li className="leading-6" key={index}>{part}</li>
      ))}
    </ul>
  );
}

export default function Experience({ position, company, duration, img, description }) {
    const expanded = company == "Fessburn (Agency)" ? true : false;

    return (
        <>
            <Accordion className="rounded-lg mb-3 bg-transparent w-10/12" defaultExpanded={expanded} >
                <AccordionSummary
                    expandIcon={<AddIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                    className='rounded-lg bg-[#430d79]'
                >
                    <div className="flex flex-row justify-between w-full text-white font-bold  mr-3">
                        <p> {position} @ {company} </p>
                        <p>{duration}</p>
                    </div>
                </AccordionSummary>
                <AccordionDetails className="bg-[#251d40] mt-3 rounded-lg text-white">
                    <div className="flex flex-row justify-between w-full text-white text-xs">
                        <StringSplitter text={description} />
                        <div className="flex items-center w-2/12">
                            <div className="w-full text-center relative">
                                <Image 
                                    src={img} 
                                    alt="slash"
                                    width={100}
                                    height={100}
                                    style={{objectFit: "cover"}}
                                    className="rounded-full h-20 w-20"
                                />
                            </div>
                        </div>
                    </div>
                    
                </AccordionDetails>
            </Accordion>
        </>
    );
}
