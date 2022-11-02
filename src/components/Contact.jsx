import React from "react";
import { IoLogoGithub, IoLogoLinkedin, IoLogoTwitter } from "react-icons/io5";

const Contact = () => {
	return (
		<>
			<div className="flex flex-col items-center justify-center w-full my-12">
				<p className="text-2xl md:text-3xl text-gray-400 capitalize">Follow me on</p>
				<div className="flex items-center justify-center w-full my-12 flex-wrap gap-4 ">
					<a
						href="https://github.com/kartikpavan"
						target={"_blank"}
						rel="noreferrer"
						className="w-full md:w-auto px-3 md:px-8 py-5 border border-zinc-700 rounded-2xl hover:border-zinc-500 duration-200 ease-in-out flex items-center justify-between gap-3"
					>
						<IoLogoGithub className="text-textBase text-3xl cursor-pointer" />
						<p className="text-lg text-textBase ">Github</p>
					</a>
					<a
						href="https://www.linkedin.com/in/kartikpavan/"
						target={"_blank"}
						rel="noreferrer"
						className="w-full md:w-auto px-3 md:px-8 py-5 border border-zinc-700 rounded-2xl hover:border-zinc-500 duration-200 ease-in-out flex items-center justify-between gap-3"
					>
						<IoLogoLinkedin className="text-textBase text-3xl cursor-pointer" />
						<p className="text-lg text-textBase ">Linkedin</p>
					</a>
					<a
						href="https://twitter.com/kartik_im"
						target={"_blank"}
						rel="noreferrer"
						className="w-full md:w-auto px-3 md:px-8 py-5 border border-zinc-700 rounded-2xl hover:border-zinc-500 duration-200 ease-in-out flex items-center justify-between gap-3"
					>
						<IoLogoTwitter className="text-textBase text-3xl cursor-pointer" />
						<p className="text-lg text-textBase ">Twitter</p>
					</a>
				</div>
			</div>
		</>
	);
};

export default Contact;
