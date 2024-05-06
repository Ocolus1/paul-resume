/* eslint-disable @next/next/no-img-element */

'use client';

import React, { useRef } from 'react';
import Navbar from '@/components/Navbar';
import Back from '@/components/projects/Back';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Footer from '@/components/Footer';
import NextCard from "@/components/NextCard"

export default function Otterly() {
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
			href="/projects/otterly"
		>
			Portfolio
		</Link>,
		<Typography key="3">AI Ranking & Monitoring</Typography>,
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
						<p className="text-[#c2c0c3] text-xs font-semibold after:text-[#66d9ed] after:content-['.'] after:inline-block after:align-top after:mt-[-3px] ">
							No Code Development
						</p>
						<p className="text-lg sm:text-[38px] md:text-[50px] lg:text-[64px] lgw:py-5 xl:py-0 leading-snug font-bold">
							AI Ranking & Monitoring
						</p>
						<div>
							<Breadcrumbs
								separator={
									<NavigateNextIcon fontSize="small" />
								}
								aria-label="breadcrumb"
								className="text-white mdw:text-sm"
							>
								{breadcrumbs}
							</Breadcrumbs>
						</div>
						<div className="py-8 mdw:text-sm">
							Otterly.AI represents a transformative approach to
							content and brand monitoring, driven by AI-powered
							search experiences. Developed as a project to cater
							to our client&apos;s needs, it offers a comprehensive
							solution for monitoring brand performance, content
							engagement, competitor activity, and more. With
							Otterly.AI, users gain real-time insights into their
							brand&apos;s digital footprint, enabling informed
							decision-making and strategic planning. Our platform
							leverages cutting-edge AI technology to deliver
							actionable data and streamline the monitoring
							process. Whether tracking brand sentiment, analyzing
							competitor strategies, or monitoring industry
							trends, Otterly.AI empowers businesses to stay ahead
							in the digital landscape.
						</div>
					</div>
					<div>
						<img
							src="/otterly-full-page.png"
							className="w-full mb-4"
						/>
					</div>
					<NextCard />
					<Footer />
				</div>
			</main>
		</div>
	);
}
