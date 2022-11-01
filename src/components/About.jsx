import React from "react";
import Profile from "../assets/profile.jpg";

const About = () => {
	return (
		<section className="w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 my-24" id="about">
			{/* Image */}
			<div className="w-full h-[420px] flex items-center justify-center">
				<div className="w-[275px] h-[340px] bg-[#e26279] rounded-md relative">
					<img
						src={Profile}
						alt="dp"
						className="w-full h-full absolute -right-3 top-3 object-cover rounded-md drop-shadow-xl"
					/>
				</div>
			</div>
			{/* Content */}
			<div className="w-full h-[420px] flex items-center justify-center">
				<p className="text-xl text-textBase text-center md:text-left leading-relaxed md:leading-loose">
					Hey! My name is Divya Kartik Pavan and I am a Full-stack web developer with a
					passion for front-end and back-end development. I am currently doing my Master
					of Computer Application (MCA) from Amity University. I aspire toward a career
					that will allow me to channel my creativity through crafting beautiful software
					and engaging experiences.
				</p>
			</div>
		</section>
	);
};

export default About;
