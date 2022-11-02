import React from "react";
import Spline from "@splinetool/react-spline";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Timeline from "./components/Timeline";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Skills from "./components/Skills";

const App = () => {
	return (
		<>
			<div
				className="flex w-screen h-screen min-h-screen flex-col items-center justify-center"
				id="home"
			>
				<Navbar />
				<div className="flex w-screen h-screen md:w-10/12 flex-col-reverse md:flex-row justify-center items-center relative">
					<div className="w-full bg-bodybg text-textBase p-4">
						<Hero />
					</div>
					<div className="w-full h-screen">
						<Spline scene="https://prod.spline.design/oo6IxFu8UDjFUmjD/scene.spline" />
					</div>
				</div>

				<div className="absolute bottom-72 md:bottom-10 w-full flex justify-center items-center">
					<div className="rounded-2xl shadow-md p-4 flex items-center justify-center bg-zinc-900">
						<p className="text-slate-500 text-xs md:text-md">Press and Drag to Orbit</p>
					</div>
				</div>
			</div>
			{/* About Section */}
			<main className="w-[90%] mx-auto " id="about">
				<About />
			</main>
			{/* Vertical Timeline section */}
			<main className="w-[90%] mx-auto ">
				<Timeline />
			</main>
			{/* Skills Section */}
			<main className="w-[90%] mx-auto " id="skills">
				<Skills />
			</main>
			{/* Projects Section */}
			<main className="w-[90%] mx-auto " id="projects">
				<Projects />
			</main>
			{/* Contact Section */}
			<main className="w-[90%] mx-auto " id="contact">
				<Contact />
			</main>
			<main className="w-[90%] mx-auto ">
				<div className="flex items-center justify-center pb-12">
					<p className="text-white text-xl">
						Made with <span className="text-purple-300 text-2xl">&hearts; </span> by{" "}
						<span className="text-purple-300"> Divya Kartik Pavan </span>
					</p>
				</div>
			</main>
		</>
	);
};

export default App;
