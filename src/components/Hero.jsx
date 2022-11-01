import React from "react";

const Hero = () => {
	return (
		<div className=" w-full md:w-[30rem] mx-auto bg-navbarBg rounded-2xl shadow-sm shadow-purple-300 px-5 py-5 text-lg">
			<h1 className="leading-relaxed">Hi, My name is</h1>
			<h1 className="text-4xl md:text-5xl text-slate-200 leading-relaxed">
				Divya Kartik Pavan
			</h1>
			<h1 className="font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
				I'm a Full-stack Web Developer
			</h1>
		</div>
	);
};

export default Hero;
