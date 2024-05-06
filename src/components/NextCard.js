/* eslint-disable @next/next/no-img-element */

'use client';

import { useState, useEffect } from "react"

import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

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
		img_src: '/otterly.png',
		title: 'AI Ranking & Monitoring',
		category: 'No Code Development',
		link: '/projects/otterly',
	},
	{
		img_src: '/thenetworkstate.png',
		title: 'Book Reader & Podcast',
		category: 'Backend Development',
		link: '/projects/book-reader',
	},
];

export default function NextCard() {

    const [cur, setCurrent] = useState(null);
    const [imgClass, setImgClass] = useState("");
    const [boxClass, setBoxClass] = useState("");


	const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
		const index = portfolioCard.findIndex((item) => item.link === pathname);

		if (index === 4) {
			setCurrent(-1)
		}else {
			setCurrent(
				portfolioCard.findIndex(
				(item) => item.link === pathname
				)
			)
		}
    }, [pathname])


	const goToPrevious = () => {
		const index = portfolioCard.findIndex(
			(item) => item.link === pathname
		);
		const previousIndex =
			(index - 1 + portfolioCard.length) % portfolioCard.length;
		router.push(portfolioCard[previousIndex].link);
	};

	const goToNext = () => {
		const index = portfolioCard.findIndex(
			(item) => item.link === pathname
		);
		const nextIndex = (index + 1) % portfolioCard.length;
		router.push(portfolioCard[nextIndex].link);
	};

	return (
		<div className="block lg:fixed lg:right-10 lg:bottom-24 mb-5 lg:mb-0 lg:w-60 overflow-hidden rounded-lg text-black shadow-md "
            onMouseEnter={() => {
                setImgClass("opacity-100");
                setBoxClass("")
            }} 
            onMouseLeave={() => {
                setImgClass("opacity-0 hidden");
                setBoxClass("rounded-lg")
            }}
        >
			<img
				src={portfolioCard[cur+1].img_src}
				alt={portfolioCard[cur+1].title}
				className={`w-full hidden lg:block ${imgClass} transition-transform duration-500 ease-in-out`}
			/>
            <div className={`bg-white py-5 p-3 ${boxClass} hover:shadow-lg`} >
                <div className="flex flex-row justify-between mb-3">
                    <p className="font-medium">Next project</p>
                    <div>
                        <ArrowBackIcon className="h-5 w-5 hover:cursor-pointer"
                            onClick={goToPrevious}
                        />
                        <ArrowForwardIcon className="h-5 w-5 ml-5 hover:cursor-pointer"
                            onClick={goToNext}
                        />
                    </div>
                </div>

                <div className="">
                    <p className="lg:text-xl font-semibold">{portfolioCard[cur+1].title}</p>
                </div>
            </div>
		</div>
	);
}
