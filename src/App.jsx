import React from "react";
import Spline from "@splinetool/react-spline";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

const App = () => {
	return (
		<div className="flex w-screen h-screen min-h-screen flex-col items-center justify-center relative ">
			{/* NAVBAR */}
			<Navbar />
			{/* <div className="w-screen md:w-10/12 h-screen flex flex-col-reverse md:flex-row justify-between items-center">
				<div className="w-full h-96  bg-bodybg text-textBase ">
					<Hero />
				</div> */}
			<div className="flex w-screen h-screen min-h-screen md:w-10/12 flex-col-reverse md:flex-row justify-center items-center relative">
				<div className="w-full bg-bodybg text-textBase p-4">
					<Hero />
				</div>
				<div className="w-full h-full">
					<Spline scene="https://prod.spline.design/oo6IxFu8UDjFUmjD/scene.spline" />
				</div>
			</div>

			{/* </div> */}

			<div className="absolute bottom-72 md:bottom-10 w-full flex justify-center items-center">
				<div className="rounded-2xl shadow-md p-4 flex items-center justify-center bg-zinc-800">
					<p className="text-slate-300 text-sm md:text-md">Press and Drag to Orbit</p>
				</div>
			</div>
		</div>
	);
};

export default App;
