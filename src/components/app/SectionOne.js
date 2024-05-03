/* eslint-disable @next/next/no-img-element */
import React from 'react';
import ImportantDevicesIcon from '@mui/icons-material/ImportantDevices';
import { FaReact } from 'react-icons/fa';
import { FaWebflow } from 'react-icons/fa6';
import Expert from '@/components/app/Expert';

const expertise = [
	{
		img_src: <ImportantDevicesIcon className="w-12 h-12" />,
		title: 'Backend Development',
		description:
			'Experienced in both functional and OOP: R, Python, PHP, JavaScript, TypeScript.',
	},
	{
		img_src: <FaReact className="w-12 h-12" />,
		title: 'Frontend Dev React, NextJS',
		description:
			'Passionate about UI/UX. Over 5 years of development experience in HTML, CSS, JS, React and NextJS frameworks.',
	},
	{
		img_src: <FaWebflow className="w-12 h-12" />,
		title: 'No Code Development',
		description:
			'Skilled in developing No code apps and cross-platform solutions using Webflow and Bubble.',
	},
];

export default function SectionOne({ myExpertise }) {
	return (
		<div className="flex justify-center text-white" ref={myExpertise}>
			<div className="py-16">
				<h1 className="text-7xl font-bold text-center mb-10">
					My Expertise
				</h1>
				<div className="flex flex-row flex-wrap max-w-screen-lg">
					{expertise.map((item) => {
						return <Expert key={item} {...item} />;
					})}
				</div>
				<div className="flex flex-row justify-center">
					<div className="" style={{ marginTop: '-1.5rem' }}>
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
