/* eslint-disable @next/next/no-img-element */
import React from 'react';
import ImportantDevicesIcon from '@mui/icons-material/ImportantDevices';
import { FaReact } from 'react-icons/fa';
import { FaWebflow } from 'react-icons/fa6';
import Expert from '@/components/app/Expert';

const expertise = [
	{
		img_src: <ImportantDevicesIcon className=" w-6 h-6 md:w-8 md:h-8 lg:w-12 lg:h-12" />,
		title: 'Backend Development',
		description:
			'Experienced in both functional and OOP: R, Python, PHP, JavaScript, TypeScript.',
	},
	{
		img_src: <FaReact className="w-6 h-6 md:w-8 md:h-8 lg:w-12 lg:h-12" />,
		title: 'Frontend Dev React, NextJS',
		description:
			'Passionate about UI/UX. Over 5 years of development experience in HTML, CSS, JS, React and NextJS frameworks.',
	},
	{
		img_src: <FaWebflow className="w-6 h-6 md:w-8 md:h-8 lg:w-12 lg:h-12" />,
		title: 'No Code Development',
		description:
			'Skilled in developing No code apps and cross-platform solutions using Webflow and Bubble.',
	},
];

export default function SectionOne({ myExpertise }) {
	return (
		<div className="flex justify-center text-white" ref={myExpertise}>
			<div className="py-16">
				<h1 className=" text-2xl sm:text-[6vw] md:text-[5vw] lg:text-7xl font-bold text-center mb-10">
					My Expertise
				</h1>
				{/* flex flex-row flex-wrap max-w-screen-lg */}
				<div className="flex flex-col xsw:items-center smw:items-center mdw:items-center space-y-6 md:space-y-0 md:flex-row md:flex-wrap max-w-screen-lg sm:px-5 xl:px-0">
					{expertise.map((item, index) => {
						return <Expert key={index} {...item} />;
					})}
				</div>
				<div className="flex flex-row justify-center">
					<div
						className="px-10 lg:px-0"
						style={{ marginTop: '-1.5rem' }}
					>
						<img
							src="https://tamalsen.dev/wp-content/uploads/2021/12/hello-world-html-code-768x384.png"
							className="opacity-25"
							alt="code "
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
