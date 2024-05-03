import React from 'react';
import Experience from "./Experience"

const experienceCard = [
	{
		position: 'Software Engineer',
		company: 'Fessburn (Agency)',
		duration: 'Mar 2020 - Present',
        img: "/card-img.jpg",
        description: "Developed and delivered custom software solutions for over 50 clients, harnessing tools including Git, Docker, and Python. Architected future software plans, and rigorously tested software to ensure optimal performance and user experience. Masterfully used Git for source code management, integrated various web services API, and integrated third-party software solutions. Enhanced code quality through rigorous unit testing using pytest, automation, and code reviews. Leveraged POST/GET methods on RESTful API services for property management, deploying tools like Axios within a React JS framework. Assured continuous software maintenance encompassing programs, web interfaces, and databases. Successfully containerized production-ready applications using Docker. Engineered an intuitive Payment system, incorporating Stripe and PayPal integrations for seamless financial transactions. Developed a multi-user application system using technologies like Django, DRF and Swagger UI for API documentation. Integrated third party applications like Intercom for customer help desk and in house communication Implemented a PDF generation system that involves electronic signature, PDF viewer and dynamic input of customer information to the PDF using technology like Apryse."
	},
	{
		position: 'Software Engineer',
		company: 'HashAnalytics',
		duration: 'Jul. 2019 - Sep. 2020',
        img: "/card-img.jpg",
        description: "Collaborated with design and development teams, spearheading the definition of user interface requirements and wireframe creation. Enhanced user experience by integrating Google and Twitter for authentication. Proficiently managed data using SQLite and Postgres for local storage and comprehensive database management. Co-authored a pivotal technical document detailing project requirements."
	},
	{
		position: 'Software Engineer',
		company: 'Lifecare Ventures Limited',
		duration: 'Dec. 2018 - Jul. 2019',
        img: "/card-img.jpg",
        description: "Pioneered the design and development of dynamic front-end interfaces using React Js, JSX, CSS3, Bootstrap, and JavaScript. Innovated a customer service attendance system to foster seamless communication between prospective clients and the managerial team. Celebrated team achievement by securing the 2nd prize in the final project evaluation."
	},
];

export default function SectionFour({ myExperience }) {
	return (
		<div className="flex justify-center text-white" ref={myExperience} >
            <div className="py-16">
                <h1 className="text-7xl font-bold text-center mb-4 block" >Professional</h1>
                <h1 className="text-7xl font-bold text-center mb-10 block" >Experience</h1>
                <div className="flex text-white w-full max-w-screen-lg">
                    <div className="flex flex-row flex-wrap w-full justify-center max-w-screen-lg">
                        {experienceCard.map((item) => {
                            return <Experience key={item.company} {...item} />;
                        })}
                    </div>
                </div>
            </div>
		</div>
	);
}
