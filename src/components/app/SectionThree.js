"use client";

import React, { useState } from 'react'
import Button from '@mui/material/Button';
import Portofolio from './PortfolioCard';

const portfolioCard = [
	{
		img_src: '/learning-with.png',
		title: 'Learning With AI',
		category: 'Full-stack Web Development',
		link: '/projects/learning-with-ai',
	},
	{
		img_src: '/Hottubprescription.png',
		title: 'Hot Tub Prescription',
		category: 'Full-stack Web Development',
		link: '/projects/hot-tub-prescription',
	},
	{
		img_src: '/momanddadtales.png',
		title: 'Mom And Dad Tales',
		category: 'No Code Development',
		link: '/projects/mom-and-dad-tales',
	},
	{
		img_src: '/convertdfile.png',
		title: 'Image Conversion Tool',
		category: 'Backend Development',
		link: '/projects/image-conversion-tool',
	},
	{
		img_src: '/thenetworkstate.png',
		title: 'Book Reader & Podcast',
		category: 'Backend Development',
		link: '/book-reader',
	},
];


export default function SectionTwo() {
    const [filter, setFilter] = useState('All');

    const filterItems = (category) => {
        setFilter(category);
    };

    const filteredCards = filter === 'All' ? portfolioCard : portfolioCard.filter(card => card.category.includes(filter));

  return (
		<div className="flex justify-center py-16">
			<div className="flex text-white w-full max-w-screen-lg">
				<div className="flex flex-row items-center w-full">
					<div className="flex flex-row flex-wrap max-w-screen-lg">
						<div className="flex flex-col w-full mb-8">
							<div className="flex justify-between items-center mb-4">
								<div className="flex gap-3 mb-4">
									<Button
										variant={
											filter === 'All'
												? 'contained'
												: 'outlined'
										}
										onClick={() => filterItems('All')}
										className="bg-[#5fbdd3]"
									>
										All ({portfolioCard.length})
									</Button>
									<Button
										variant={
											filter ===
											'Full-stack Web Development'
												? 'contained'
												: 'outlined'
										}
										onClick={() =>
											filterItems(
												'Full-stack Web Development'
											)
										}
										className="text-[#5fbdd3] border-[#5fbdd3] hover:border-[#5fbdd3]"
									>
										Full-stack (
										{
											portfolioCard.filter(
												(card) =>
													card.category ===
													'Full-stack Web Development'
											).length
										}
										)
									</Button>
									<Button
										variant={
											filter === 'Backend Development'
												? 'contained'
												: 'outlined'
										}
										onClick={() =>
											filterItems('Backend Development')
										}
										className="text-[#5fbdd3] border-[#5fbdd3] hover:border-[#5fbdd3]"
									>
										Backend (
										{
											portfolioCard.filter(
												(card) =>
													card.category ===
													'Backend Development'
											).length
										}
										)
									</Button>
									<Button
										variant={
											filter === 'No Code Development'
												? 'contained'
												: 'outlined'
										}
										onClick={() =>
											filterItems('No Code Development')
										}
										className="text-[#5fbdd3] border-[#5fbdd3] hover:border-[#5fbdd3]"
									>
										No code (
										{
											portfolioCard.filter(
												(card) =>
													card.category ===
													'No Code Development'
											).length
										}
										)
									</Button>
								</div>
							</div>
							<div className="grid grid-cols-3 gap-5">
								{filteredCards.map((item, index) => {
									return <Portofolio key={index} {...item} />;
								})}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
  );
}
