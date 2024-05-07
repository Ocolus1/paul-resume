import { Inter } from "next/font/google";
import "./globals.css";
import AnimatedCursor from 'react-animated-cursor';
import Wrapper from "@/components/Wrapper"
import { Suspense } from 'react';



const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Paul Awolesi -  Ocolus1",
  description: "Paul Awolesi Portfolio",
};

export default function RootLayout({ children }) {
  return (
		<html lang="en">
			<head>
				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="/apple-touch-icon.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/favicon-32x32.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="/favicon-16x16.png"
				/>
			</head>
			<body className={inter.className}>
				<Suspense>
					<AnimatedCursor
						innerSize={8}
						outerSize={35}
						innerScale={1}
						outerScale={2}
						outerAlpha={0}
						hasBlendMode={true}
						innerStyle={{
							backgroundColor: 'rgb(102, 217, 237)',
						}}
						outerStyle={{
							border: '3px solid rgb(102, 217, 237)',
						}}
					/>
					<Wrapper>{children}</Wrapper>
				</Suspense>
			</body>
		</html>
  );
}
