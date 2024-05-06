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

export default function MomandDadTales() {
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
			href="/projects/mom-and-dad-tales"
		>
			Portfolio
		</Link>,
		<Typography key="3">Learning With AI</Typography>,
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
					<div className="w-1/2">
						<p className="text-[#c2c0c3] text-xs font-semibold after:text-[#66d9ed] after:content-['.'] after:inline-block after:align-top after:mt-[-3px] ">
							No code Development
						</p>
						<p className="text-lg sm:text-[38px] md:text-[50px] lg:text-[64px] lgw:py-5 xl:py-0 leading-snug font-bold">
							Mom And Dad Tales
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
							Introducing MomAndDadTales.com, a groundbreaking
							platform revolutionizing bedtime storytelling with
							our innovative app. Parents can now effortlessly
							record their voices just once, enabling our app to
							transform any book into a personalized audio
							experience for their children. Gone are the days of
							struggling to find time for nightly readings; with
							MomAndDadTales.com, cherished stories come to life
							at the touch of a button. Additionally, our app
							offers the enchanting option of celebrity voices,
							adding an extra layer of excitement to every tale.
							Join us in fostering a love for reading and bonding
							through storytelling like never before. Visit
							MomAndDadTales.com and embark on a magical journey
							of imagination and connection today!
						</div>
					</div>
					<div>
						<img
							src="/momanddadtales-full-page.png"
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
