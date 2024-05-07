/* eslint-disable @next/next/no-img-element */
import React from 'react';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

const testimonials = [
	{
		img_src: '/card-img.jpg',
		name: 'Noahwbragg',
		color: "#bd61fb",
		description:
			'Paul did a fantastic job! I"m impressed and would definitely collaborate with him again. Thank you for your hard work.',
	},
	{
		img_src: '/card-img.jpg',
		name: 'SalmanHaider4',
		color: "#0067dc",
		description:
			'Paul"s development skills are top-notch, and his communication regarding changes is exceptional. I highly recommend collaborating with him.',
	},
	{
		img_src: '/card-img.jpg',
		name: 'BrandonF7',
		color: "#933ee6",
		description:
			'Paul"s efficiency was impressive! Thanks for the great work.',
	},
	{
		img_src: '/card-img.jpg',
		name: 'Ajitador',
		color: "#0067dc",
		description:
			'Working was a pleasure -- Paul went above and beyond to ensure the task was done well, and were very communicative.',
	},
	{
		img_src: '/card-img.jpg',
		name: 'Samuel Smith',
		color: "#bd61fb",
		description:
			'Paul absolutely killed it! One of the most highly communicative, proficient developers I"ve had.',
	},
	{
		img_src: '/card-img.jpg',
		name: 'John Happer',
		color: "#0067dc",
		description:
			'Their expertise is evident in the efficient, well-structured code and polished user interface. Working with them has been a pleasure.',
	},
];


export default function SectionFive({ myContact }) {
	return (
		<div className="text-white" ref={myContact}>
			<div className="pt-16">
				<div className="w-full flex gap-6 md:gap-0 md:space-y-0 flex-col-reverse md:flex-row">
					<div className=" w-full md:w-1/2 bg-black">
						<div className="p-10 md:p-20 flex flex-col justify-between">
							<div>
								<p className=" text-2xl md:text-3xl font-bold mb-10">
									Available for select freelance opportunities
								</p>
								<div className="my-6">
									<p className="leading-5 md:text-xl font-semibold">
										Have an exciting project you need help
										with?
									</p>
									<p className="leading-5 md:text-xl font-semibold">
										Send me an email or contact me via
										instant message!
									</p>
								</div>
							</div>
							<div>
								<p className="my-3 md:text-2xl font-semibold">
									<a
										href="https://paulawolesi.com"
										target="_blank"
										className="no-underline"
									>
										paulawolesi.com
									</a>
								</p>
								<p className="my-2 text-xs md:text-base font-semibold">
									<a
										href="https://twitter.com/PAwolesi"
										target="_blank"
										className="no-underline"
									>
										Twitter
									</a>
								</p>
								<p className="my-2 text-xs md:text-base font-semibold">
									<a
										href="https://www.linkedin.com/in/paul-awolesi"
										target="_blank"
										className="no-underline"
									>
										LinkedIn
									</a>
								</p>
								<p className="my-2 text-xs md:text-base font-semibold">
									<a
										href="https://github.com/ocolus1"
										target="_blank"
										className="no-underline"
									>
										Github
									</a>
								</p>
								<p className="my-2 text-xs md:text-base font-semibold">
									<a
										href="malto:bpawolesi@gmail.com"
										target="_blank"
										className="no-underline"
									>
										Email
									</a>
								</p>
							</div>
						</div>
					</div>
					<div className=" w-full md:w-1/2 pl-4 pr-4 lg:pr-0 pb-4">
						<div className="flex flex-row flex-wrap w-full gap-6 md:gap-3">
							{testimonials.map((item, index) => {
								return (
									<div
										key={index}
										className="lg:min-w-56 lg:max-w-56 p-4 rounded-lg"
										style={{ backgroundColor: item.color }}
									>
										<div className="flex flex-row justify-between mb-2">
											<div>
												<FormatQuoteIcon className=" h-6 w-6 md:h-10 md:w-10" />
											</div>
											<div>
												{/* <img
													src={item.img_src}
													className="h-10 w-10 rounded-full"
													alt="profile"
												/> */}
											</div>
										</div>
										<div>{item.description}</div>
										<div className="mt-2"> - {item.name}</div>
									</div>
								);
							})}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
