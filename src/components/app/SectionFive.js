import React from 'react';
import Image from 'next/image';
import Button from '@mui/material/Button';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

const testimonials = [
    {
        img_src: "/card-img.jpg",
        description: "Since 2018 Tamal has been responsible for the development of our website which has been instrumental to the growth of our company."
    },
    {
        img_src: "/card-img.jpg",
        description: "Since 2018 Tamal has been responsible for the development of our website which has been instrumental to the growth of our company."
    },
    {
        img_src: "/card-img.jpg",
        description: "Since 2018 Tamal has been responsible for the development of our website which has been instrumental to the growth of our company."
    },
    {
        img_src: "/card-img.jpg",
        description: "Since 2018 Tamal has been responsible for the development of our website which has been instrumental to the growth of our company."
    },
]

const getRandomColor = () => {
	const colors = ['#bd61fb', '#0067dc', '#933ee6'];
	const randomIndex = Math.floor(Math.random() * colors.length);
	return colors[randomIndex];
};


export default function SectionFive({ myContact }) {
	return (
		<div className="text-white" ref={myContact}>
            <div className="pt-16">
                <div className="w-full flex flex-row min-h-dvh"> 
                    <div className="w-1/2 bg-black">
                        <div className="p-20 min-h-dvh flex flex-col justify-between">
                            <div>
                                <p className="text-4xl font-bold mb-12" >Available for select freelance opportunities</p>
                                <div className="max-w-96 my-8">
                                    <p className="leading-5 text-xl font-semibold">Have an exciting project you need help with?</p>
                                    <p className="leading-5 text-xl font-semibold">Send me an email or contact me via instant message!</p>
                                </div>
                            </div>
                            <div>
                                <p className="my-3 text-2xl font-semibold">
                                    <a href="https://paulawolesi.com" target="_blank" className="no-underline">paulawolesi.com</a>
                                </p>
                                <p className="my-2 font-semibold">
                                    <a href="https://twitter.com/PAwolesi" target="_blank" className="no-underline">Twitter</a>
                                </p>
                                <p className="my-2 font-semibold">
                                    <a href="https://www.linkedin.com/in/paul-awolesi" target="_blank" className="no-underline">LinkedIn</a>
                                </p>
                                <p className="my-2 font-semibold">
                                    <a href="https://github.com/ocolus1" target="_blank" className="no-underline">Github</a>
                                </p>
                                <p className="my-2 font-semibold">
                                    <a href="malto:bpawolesi@gmail.com" target="_blank" className="no-underline">Email</a>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="w-1/2 pl-4 pb-4">
                        <div className="flex flex-row flex-wrap w-full min-h-dvh gap-3">
                            {testimonials.map((item)=> {
                                const bgColor = getRandomColor();
                                return (
									<div
										key={item}
										className="min-w-56 max-w-56 p-4 rounded-lg"
										style={{ backgroundColor: bgColor }}
									>
										<div className="flex flex-row justify-between mb-2">
											<div>
												<FormatQuoteIcon className="h-10 w-10" />
											</div>
											<div>
												<img
													src={item.img_src}
													className="h-10 w-10 rounded-full"
												/>
											</div>
										</div>
										<div>{item.description}</div>
									</div>
								);
                            })}
                        </div>
                    </div>
                </div>
            </div>
		</div>
	);
}
