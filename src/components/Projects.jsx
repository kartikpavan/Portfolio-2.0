import React from "react";
import Profile from "../assets/profile.jpg";
import { AiFillGithub } from "react-icons/ai";
import { BiLinkExternal } from "react-icons/bi";
import { Projects as proj } from "../utils/data";
const Projects = () => {
	return (
		<>
			<h1 className="text-4xl text-white text-center pt-10">PROJECTS</h1>
			<div className=" flex flex-wrap items-center justify-center my-8 gap-8">
				{proj &&
					proj.map((item) => {
						const { id, name, imageURL, technologies, github, live } = item;
						return (
							<div
								className="border border-zinc-700 rounded-2xl p-2 min-w-[300px] md:max-w-[300px] hover:border-zinc-400 duration-200 ease-out "
								key={id}
							>
								<p className="text-lg text-textBase font-medium uppercase">
									{name}
								</p>
								<img
									src={imageURL}
									alt="name"
									className="w-full h-full object-cover rounded-md my-2 "
								/>
								<div className="flex flex-1 items-center justify-between ">
									<p className="text-lg text-gray-300 ">
										{technologies}
										<span className="block text-gray-500 ">
											React js , Firebase
										</span>{" "}
									</p>
									<div className="flex flex-col gap-2">
										<a href={github} rel="noreferrer" target={"_blank"}>
											<AiFillGithub
												size={26}
												className="text-gray-500 hover:text-gray-100"
											/>
										</a>
										<a href={live} rel="noreferrer" target={"_blank"}>
											<BiLinkExternal
												size={26}
												className="text-gray-500 hover:text-gray-100"
											/>
										</a>
									</div>
								</div>
							</div>
						);
					})}
			</div>
		</>
	);
};

export default Projects;
