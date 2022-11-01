import React from "react";
import Spline from "@splinetool/react-spline";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

const App = () => {
	return (
		<div className="flex w-screen h-screen min-h-screen flex-col items-center justify-center relative ">
			{/* NAVBAR */}
			<Navbar />
			<div className="h-screen grid grid-cols-2 items-center">
				<div className="w-full h-96  bg-bodybg text-textBase ">
					<Hero />
				</div>
				<div className="w-full h-full">
					<Spline scene="https://prod.spline.design/oo6IxFu8UDjFUmjD/scene.spline" />
				</div>
			</div>

			<div className="absolute bottom-10 w-full flex justify-center items-center">
				<div className="rounded-2xl shadow-md p-4 flex items-center justify-center bg-zinc-800">
					<p className="text-slate-300">Press and Drag to Orbit</p>
				</div>
			</div>
		</div>
	);
};

export default App;
