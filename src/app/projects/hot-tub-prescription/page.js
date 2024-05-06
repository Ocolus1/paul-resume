/* eslint-disable @next/next/no-img-element */

'use client';

import React, { useRef } from 'react';
import Navbar from '@/components/Navbar';
import Back from "@/components/projects/Back"
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Footer from "@/components/Footer.js"


export default function HotTubbPrescription() {

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
			href="/projects/hot-tub-prescription"
		>
			Portfolio
		</Link>,
		<Typography key="3" >
			Hot Tub Prescription
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
			<main className="flex flex-col items-center py-16">
            	<Back />
				<div className="max-w-screen-xl w-10/12 text-white py-8">
					<div className="w-1/2">
						<p className="text-[#c2c0c3] text-xs font-semibold after:text-[#66d9ed] after:content-['.'] after:inline-block after:align-top after:mt-[-3px] ">Web Development</p>
						<p className="text-[64px] font-bold">Hot Tub Prescription</p>
						<div>
							<Breadcrumbs
								separator={<NavigateNextIcon fontSize="small" />}
								aria-label="breadcrumb"
								className="text-white"
							>
								{breadcrumbs}
							</Breadcrumbs>
						</div>
						<div className="py-8" >
							Introducing HotTubPrescription.com, a pioneering 
                            platform revolutionizing the acquisition of medical 
                            device prescriptions, with a specialized focus on hot 
                            tubs for therapeutic use. Our website simplifies the 
                            often complex and time-consuming process of obtaining a 
                            doctor&apos;s prescription, empowering individuals seeking 
                            relief through hydrotherapy. By seamlessly connecting patients 
                            with healthcare professionals, HotTubPrescription.com ensures 
                            swift access to prescriptions tailored to therapeutic needs. 
                            Through our innovative approach, we aim to enhance accessibility 
                            to holistic wellness solutions, promoting the benefits of hot 
                            tub therapy for physical and mental well-being. Join us on the 
                            forefront of medical innovation as we prioritize comfort, health, 
                            and convenience for all.
						</div>
					</div>
					<div>
						<img src="/Hottubprescription-full-page.png" className="w-full mb-4" />
					</div>
					<Footer />
				</div>
			</main>
		</div>
	);
}
