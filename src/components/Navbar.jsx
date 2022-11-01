import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";

const Navbar = () => {
	const [isActive, setIsActive] = useState(false);

	return (
		<nav className="w-full px-6 z-50 fixed inset-x-0 text-white top-2 flex justify-center items-center">
			<div className="w-full md:w-[880px] bg-navbarBg p-4 rounded-2xl flex items-center ">
				<p className="text-lg font-medium text-slate-200">Divya Kartik Pavan</p>
				<div className="hidden md:flex items-center gap-6 ml-6 flex-1">
					<a
						href="#home"
						className="text-textBase font-medium hover:text-slate-100 cursor-pointer ease-in-out duration-200"
					>
						Home
					</a>
					<a
						href="#home"
						className="text-textBase font-medium hover:text-slate-100 cursor-pointer ease-in-out duration-200"
					>
						About
					</a>
					<a
						href="#home"
						className="text-textBase font-medium hover:text-slate-100 cursor-pointer ease-in-out duration-200"
					>
						Projects
					</a>
					<a
						href="#home"
						className="text-textBase font-medium hover:text-slate-100 cursor-pointer ease-in-out duration-200"
					>
						Contact
					</a>
					<div className="rounded-2xl w-auto h-auto  bg-gradient-to-r p-[5px] from-[#6EE7B7] via-[#3B82F6] to-[#9333EA] ml-auto">
						<button className="bg-navbarBg text-slate-100 rounded-lg p-2">
							Download Resume
						</button>
					</div>
				</div>
				<div
					className="block md:hidden ml-auto cursor-pointer "
					onClick={() => setIsActive((prev) => !prev)}
				>
					<FiMenu size={26} />
				</div>
				{isActive && (
					<div className="p-4 w-[200px] bg-navbarBg rounded-2xl fixed top-20 right-10 flex flex-col items-start gap-6">
						<a
							href="#home"
							className="text-textBase font-medium hover:text-slate-100 cursor-pointer ease-in-out duration-200"
							onClick={() => setIsActive((prev) => !prev)}
						>
							Home
						</a>
						<a
							href="#home"
							className="text-textBase font-medium hover:text-slate-100 cursor-pointer ease-in-out duration-200"
							onClick={() => setIsActive((prev) => !prev)}
						>
							About
						</a>
						<a
							href="#home"
							className="text-textBase font-medium hover:text-slate-100 cursor-pointer ease-in-out duration-200"
							onClick={() => setIsActive((prev) => !prev)}
						>
							Projects
						</a>
						<a
							href="#home"
							className="text-textBase font-medium hover:text-slate-100 cursor-pointer ease-in-out duration-200"
							onClick={() => setIsActive((prev) => !prev)}
						>
							Contact
						</a>
						<div className="rounded-2xl w-auto h-auto  bg-gradient-to-r p-[5px] from-[#6EE7B7] via-[#3B82F6] to-[#9333EA] ">
							<button
								className="bg-navbarBg text-slate-100 rounded-lg p-2"
								onClick={() => setIsActive((prev) => !prev)}
							>
								Download Resume
							</button>
						</div>
					</div>
				)}
			</div>
		</nav>
	);
};

export default Navbar;
