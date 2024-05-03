"use client"

import React, { useRef } from "react"
import Hero from "@/components/app/Hero"
import Navbar from "@/components/Navbar"
import SectionOne from "@/components/app/SectionOne"
import SectionTwo from "@/components/app/SectionTwo"
import SectionThree from "@/components/app/SectionThree"
import SectionFour from "@/components/app/SectionFour"
import SectionFive from "@/components/app/SectionFive"

export default function Home() {

  const scrollToRef = (ref) => {
    if (ref && ref.current) {
      window.scrollTo({
        top: ref.current.offsetTop,
        behavior: 'smooth'
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

  return (
    <div >
        <Navbar 
          scrollToHome={scrollToHome} 
          scrollToExpertise={scrollToExpertise} 
          scrollToWork={scrollToWork} 
          scrollToExperience={scrollToExperience} 
          scrollToContact={scrollToContact} 
        />
      <div className="top-img">
        <Hero scrollToExpertise={scrollToExpertise} myHome={myHome} />
      </div>
      <main className="">
        <SectionOne myExpertise={myExpertise} />
        <SectionTwo myWork={myWork} />
        <SectionThree />
        <SectionFour myExperience={myExperience} />
        <SectionFive myContact={myContact} />
      </main>
    </div>
  );
}
