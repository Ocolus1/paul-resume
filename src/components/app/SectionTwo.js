import React from 'react'
import Image from 'next/image'
import Button from '@mui/material/Button';


export default function SectionTwo({ myWork }) {
  return (
		<div className="flex justify-center py-6" ref={myWork} >
			<div className="flex text-white w-full max-w-screen-lg">
				<div className="flex flex-row items-center w-full">
					<div className="w-1/2">
						<h1 className="text-[105px] font-bold w-32">My Work</h1>
						<div className="max-w-md text-xl">
							I have experience deploying scalable travel, event, AI
							and telemedicine web applications using React Single
							Page Application (SPA) and Next Js
							technologies. I've collaborated on over 140 projects
							with more than 50 clients globally. Additionally,
							I'm passionate about Passionate about SAAS, 
                            Web3 & Innovative Software Solutions. My skills span across frontend,
							backend, and full-stack development, and I&apos;m open to
							freelance opportunities in these areas.
						</div>
					</div>
					<div className="w-1/2 flex flex-col justify-between h-full py-4 px-2">
						<img
							src="/learning-with.png"
							className="h-72"
							alt="learning"
						/>
						<div>
							<h4 className="text-sm my-1">Feature Project</h4>
							<h1 className="text-lg my-2">Learning With AI</h1>
							<Button
								variant="contained"
								color="secondary"
								className="py-2 px-4"
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
