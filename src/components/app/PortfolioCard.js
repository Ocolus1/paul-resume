/* eslint-disable @next/next/no-img-element */
"use client"

import React, {useState} from 'react';
import TextTransition, { presets } from 'react-text-transition';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';

export default function Portofolio({img_src, title, category, link}) {
    const [text, setText] = useState(category);
    const [imgClass, setImgClass] = useState("");

    const spanier = (
        <span className="">Show project <KeyboardDoubleArrowRightIcon className="w-4 h-4" /></span>
    )

	return (
		<>
            <div className=" bg-[#211f22] rounded-lg shadow hover:cursor-pointer" 
                onMouseEnter={() => {
                    setText(spanier);
                    setImgClass("scale-110");
                }} 
                onMouseLeave={() => {
                    setText(category);
                    setImgClass("");
                }}
                >
                <div className="">
                    <div className="overflow-hidden rounded-t-lg " >
                        <a href={link} className='no-underline'>
                            <img
                                src={img_src}
                                alt="unsplash"
                                className={`w-full min-h-48 bg-cover bg-center rounded-t-lg ${imgClass} transition-transform duration-500 ease-in-out`}
                            />
                        </a>
                    </div>
                    <div className="p-6">
                        <h2 className='sm:text-xl text-white font-bold'>
                            {title}
                        </h2>
                        <div className="smw:text-xs text-[#c3c3c4]">
                            <TextTransition springConfig={presets.wobbly}>{text}</TextTransition>
                        </div>
                    </div>
                </div>
            </div>
        </>
	);
}
