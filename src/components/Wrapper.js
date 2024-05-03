"use client"

import ScrollToTop from "react-scroll-to-top";

export default function Wrapper({children}) {
  return (
    <div className="cursor-auto">
       {children}
       <ScrollToTop smooth color="#6f00ff" style={{borderRadius: "50%", paddingLeft: ".3rem", }} />
    </div>
  );
}
