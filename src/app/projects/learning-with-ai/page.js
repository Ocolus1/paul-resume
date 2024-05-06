/* eslint-disable @next/next/no-img-element */

'use client';

import React, { useRef } from 'react';
import Navbar from '@/components/Navbar';
import Back from "@/components/projects/Back"
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Footer from "@/components/Footer"
import NextCard from "@/components/NextCard"


export default function LearningWithAI() {
	const scrollToRef = (ref) => {
		if (ref && ref.current) {
			window.scrollTo({
				top: ref.current.offsetTop,
				behavior: 'smooth',
			});
		}
	};

	const myHome = useRef(null);
	const scrollToHome = () => scrollToRef(myHome);

	const myExpertise = useRef(null);
	const scrollToExpertise = () => scrollToRef(myExpertise);

	const myWork = useRef(null);
	const scrollToWork = () => scrollToRef(myWork);

	const myExperience = useRef(null);
	const scrollToExperience = () => scrollToRef(myExperience);

	const myContact = useRef(null);
	const scrollToContact = () => scrollToRef(myContact);

	const breadcrumbs = [
		<Link underline="hover" key="1" color="inherit" href="/">
			Home
		</Link>,
		<Link
			underline="hover"
			key="2"
			color="inherit"
			href="/projects/learning-with-ai"
		>
			Portfolio
		</Link>,
		<Typography key="3" >
			Learning With AI
		</Typography>,
	];

	return (
		<div>
			<Navbar
				scrollToHome={scrollToHome}
				scrollToExpertise={scrollToExpertise}
				scrollToWork={scrollToWork}
				scrollToExperience={scrollToExperience}
				scrollToContact={scrollToContact}
			/>
			<main className="flex flex-col items-center mdw:py-8 lg:py-16">
            	<Back />
				
				<div className="max-w-screen-xl px-5 sm:px-1 sm:w-10/12 text-white py-8">
					<div className="md:w-2/3 lg:w-1/2">
						<p className="text-[#c2c0c3] text-xs font-semibold after:text-[#66d9ed] after:content-['.'] after:inline-block after:align-top after:mt-[-3px] ">Web Development</p>
						<p className="text-lg sm:text-[38px] md:text-[50px] lg:text-[64px] lgw:py-5 xl:py-0 leading-snug font-bold">Learning With AI</p>
						<div>
							<Breadcrumbs
								separator={<NavigateNextIcon fontSize="small" />}
								aria-label="breadcrumb"
								className="text-white mdw:text-sm"
							>
								{breadcrumbs}
							</Breadcrumbs>
						</div>
						<div className="py-8 mdw:text-sm" >
							Introducing Sensei, an innovative AI tailored to 
							your learning journey. Combining the finest AI 
							technologies globally, Sensei is designed to adapt 
							to your unique needs, facilitating a dynamic learning 
							experience. Unlike traditional systems, Sensei goes 
							beyond mere information retrieval; it actively engages 
							with you by posing insightful follow-up questions, tapping 
							into your untapped learning potential. With Sensei by your 
							side, you&apos;re not just accessing knowledge—you&apos;re embarking 
							on a personalized educational voyage where every interaction 
							fosters growth and exploration. Discover the future of learning 
							with Sensei, your companion in unlocking boundless knowledge and possibilities.
						</div>
					</div>
					<div>
						<img src="/learning-with-full-page.png" className="w-full mb-4" />
					</div>
					<NextCard />
					<Footer />
				</div>
			</main>
		</div>
	);
}
