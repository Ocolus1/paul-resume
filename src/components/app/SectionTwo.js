/* eslint-disable @next/next/no-img-element */
"use client"

import React from 'react';
import Button from '@mui/material/Button';
import { useRouter } from 'next/navigation';

export default function SectionTwo({ myWork }) {
	const router = useRouter();
	return (
		<div className="flex justify-center px-5 sm:px-0 py-6" ref={myWork}>
			<div className="flex text-white w-full max-w-screen-lg sm:px-5 xl:px-0">
				<div className="flex flex-col md:flex-row items-center w-full">
					<div className="md:w-1/2">
						<h1 className="text-xl sm:text-[32px] md:text-[64px] lg:text-[80px] mdw:mb-3 leading-relaxed font-bold ">
							My Work
						</h1>
						<div className="smw:text-xs mdw:mb-3 md:max-w-md md:text-md lg:text-xl">
							I have experience deploying scalable travel, event,
							AI and telemedicine web applications using React
							Single Page Application (SPA) and Next Js
							technologies. I&apos;ve collaborated on over 140
							projects with more than 50 clients globally.
							Additionally, I&apos;m passionate about Passionate
							about SAAS, Web3 & Innovative Software Solutions. My
							skills span across frontend, backend, and full-stack
							development, and I&apos;m open to freelance
							opportunities in these areas.
						</div>
					</div>
					<div className="w-full md:w-1/2 flex flex-col justify-between h-full py-8 md:py-4 px-2">
						<img
							src="/learning-with.png"
							className="md:h-72 rounded-lg"
							alt="learning"
						/>
						<div className="mt-5 md:mt-0">
							<h4 className="text-sm my-1">Feature Project</h4>
							<h1 className="text-lg my-2">Learning With AI</h1>
							<Button
								variant="contained"
								className="py-2 px-4 bg-[#5fbdd3] hover:bg-[#5fbdd3] "
								onClick={() =>
									router.push('/projects/learning-with-ai')
								}
							>
								View Project
							</Button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
