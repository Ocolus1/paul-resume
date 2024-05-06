"use client"

import React, { useState } from 'react';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { useRouter } from 'next/navigation';

export default function Back() {
	const [hovered, setHovered] = useState(false);
	const router = useRouter();

	return (
		<div
			className="w-32 text-[#b2b0b2] fixed left-[20px] top-[100px] hover:cursor-pointer"
			onMouseEnter={() => setHovered(true)}
			onMouseLeave={() => setHovered(false)}
		>
			<KeyboardBackspaceIcon 
				className="p-4 h-14 w-14 bg-[#201e22] rounded-full"  
				onClick={() => router.push("/")}
			/>
			<span
				className={`absolute right-0 top-0 transform ${
					hovered ? 'translate-x-0' : 'translate-x-full opacity-0'
				} transition-transform duration-300 px-4 py-4`}
			>
				Back
			</span>
		</div>
	);
}
