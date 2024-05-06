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

export default function BookReader() {
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
			href="/projects/book-reader"
		>
			Portfolio
		</Link>,
		<Typography key="3">Book Reader & Podcast</Typography>,
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
							Backend Development
						</p>
						<p className="text-lg sm:text-[38px] md:text-[50px] lg:text-[64px] lgw:py-5 xl:py-0 leading-snug font-bold">
							Book Reader & Podcast
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
							A multimedia platform, crafted with Django, where
							users can immerse themselves in a diverse range of
							content, from e-books to podcast videos. What sets
							this apart is the groundbreaking feature:
							synchronized transcripts alongside the podcast
							videos, providing a seamless experience for
							individuals who enjoy reading while they listen.
							Gone are the days of toggling between mediums; this
							platform seamlessly integrates text and audio,
							catering to diverse learning styles and preferences.
							It&apos;s more than just a digital library;
							it&apos;s a dynamic space where knowledge meets
							convenience.
						</div>
					</div>
					<div>
						<img
							src="/thenetworkstate-full-page.png"
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
