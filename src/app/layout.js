import { Inter } from "next/font/google";
import "./globals.css";
import AnimatedCursor from 'react-animated-cursor';
import Wrapper from "@/components/Wrapper"
import { Suspense } from 'react';



const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
		<html lang="en">
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
              backgroundColor: 'rgb(102, 217, 237)'
            }}
            outerStyle={{
              border: '3px solid rgb(102, 217, 237)'
            }}
            
          />
          <Wrapper>
            {children}
          </Wrapper>
        </Suspense>
        
			</body>
		</html>
  );
}
