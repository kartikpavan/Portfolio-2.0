import html from "../assets/skills/html-5.png";
import css from "../assets/skills/css-3.png";
import express from "../assets/skills/express.png";
import firebase from "../assets/skills/firebase.png";
import github from "../assets/skills/github.png";
import js from "../assets/skills/js.png";
import ts from "../assets/skills/typescript.png";
import node from "../assets/skills/node-js.png";
import mongo from "../assets/skills/mongodb.png";
import sql from "../assets/skills/mysql.png";
import react from "../assets/skills/react.png";
import redux from "../assets/skills/redux.png";
import tailwind from "../assets/skills/tailwind.png";
import sass from "../assets/skills/sass.png";

const dataSource = [
	{ src: html, alt: "html" },
	{ src: css, alt: "css" },
	{ src: js, alt: "js" },
	{ src: ts, alt: "typescript" },
	{ src: react, alt: "react" },
	{ src: node, alt: "nodejs" },
	{ src: tailwind, alt: "tailwind" },
	{ src: redux, alt: "redux" },
	{ src: mongo, alt: "mongo" },
	{ src: sql, alt: "sql" },
	{ src: firebase, alt: "firebase" },
	{ src: github, alt: "github" },
	{ src: express, alt: "express" },
	{ src: sass, alt: "sass" },
];

const Skills = () => {
	return (
		<div className="flex flex-col items-center justify-center ">
			<h1 className="text-2xl md:text-4xl text-gray-400 capitalize mb-6"> SKILLS</h1>
			<h2 className="text-lg text-textBase capitalize text-center">
				SOME TECHONOLOGIES I'VE WORKED WITH:
			</h2>
			<div className="my-24">
				<div className="flex flex-wrap gap-8 justify-center md:max-w-2xl item-center max-w-xs">
					{dataSource.map(({ alt, src }) => (
						<img
							key={alt}
							className="object-contain fitler grayscale hover:grayscale-0 transition-all ease-out"
							src={src}
							width={60}
							height={60}
							alt={alt}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default Skills;
