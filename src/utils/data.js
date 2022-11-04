import React from "react";

import Ecom from "../assets/fullstack ecom.jpg";
import Playwind from "../assets/playwind.jpg";
import Github from "../assets/github finder.jpg";
import GoldenGym from "../assets/golden gyn.jpg";
import MyTube from "../assets/mytube.jpg";
import Chat from "../assets/Realtime Chat App.jpg";
import Camp from "../assets/Expert Expiditions.jpg";
import { IoLogoGithub, IoLogoLinkedin, IoLogoTwitter } from "react-icons/io5";

export const experience = [
	// {
	// 	id: 1,
	// 	date: "2022(march) - 2022(April)",
	// 	title: "Frontend Internship",
	// 	location: "Delhi, India",
	// 	description: "Frontend Intern role at Eternity Technologies",
	// },
	{
		id: 1,
		date: "2022() - 2022()",
		title: "Frontend Internship",
		location: "Delhi, India",
		description: "Frontend Intern role ",
	},
	{
		id: 2,
		date: "2021 - present",
		title: "Master Of Computer Application (MCA)",
		location: "Delhi, India",
		description: "Amity University Online",
	},
	{
		id: 3,
		date: "2018-2021",
		title: "Bachelor Of Computer Application (BCA)",
		location: "Delhi, India",
		description: "Institute of Information technology, Janakpuri",
	},
];

export const Projects = [
	{
		id: 1,
		name: "Fullstack Ecommerce",
		imageURL: Ecom,
		technologies: "React Js, Redux, Firebase",
		description:
			"A Full-Stack App where user can start shopping at the right go.Login using Email/Pass OR Sign in using Google, start adding products to cart and checkout securly using Stripe Payment Gateway.Track Orders is user Dashboard and Add review of the product and share your thoughts with others. Special Admin privileges with CRUD operations in Firestore Database.",
		github: "https://github.com/kartikpavan/Fullstack-Ecommerce",
		live: "https://eshop-firebase.vercel.app/",
	},
	{
		id: 2,
		name: "Playwind",
		imageURL: Playwind,
		description:
			"Playwind is a large Movie and Actor Tracking Website.Trending / Upcoming / Top Rated Categories for better access to quality Movies .Start browsing hundreds or thousands of Movies and add them as Favorites or create a custom Watch-later list. Recommender System to show movies according to your taste. Watch Latest Trailers and surf through information at ease. ",
		technologies: "React Js, Redux, TMDB, Tailwind",
		github: "https://github.com/kartikpavan/Playwind",
		live: "https://playwind.vercel.app/",
	},
	{
		id: 3,
		name: "Github Finder",
		imageURL: Github,
		description:
			"Githhub Finder is a Web Application made using Github Rest API.Input Username and get upto 30 results. Find users and visit their github profile and repositories. Track number of followers and other useful Information .",
		technologies: "React Js, Tailwind, DaisyUI",
		github: "https://github.com/kartikpavan/REACT_GithubFinder",
		live: "https://react-github-finder-mu.vercel.app/",
	},
	{
		id: 4,
		name: "My Tube",
		imageURL: MyTube,
		description:
			" My tube is a small scale Video Sharing Platform where you and your friends can upload and dowload videos. Sign up with google and start sharing sweet moments with your friend circle. All these Videos are public and can be downloaded by anyone. Made possible with React, Firebase Storage and Firestore.",
		technologies: "React Js, Firestore",

		github: "https://github.com/kartikpavan/React-MYTUBE",
		live: "https://react-mytube.vercel.app/",
	},
	{
		id: 5,
		name: "Golden Gym",
		imageURL: GoldenGym,
		description:
			" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum et est expedita sunt accusantium! Rerum debitis animi asperiores, aliquam in sint et ullam facilis velit a quibusdam aliquid vero nihil consequatur omnis nesciunt quidem, natus eum similique libero exercitationem aspernatur! Corrupti non a, facere voluptatibus nihil consectetur fugiat cumque dolores.",
		technologies: "React Js, Material UI",
		github: "https://github.com/kartikpavan/CryptoBin",
		live: "https://react-gym-seven.vercel.app/",
	},
	{
		id: 6,
		name: "Expert Expiditions",
		imageURL: Camp,
		description:
			" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum et est expedita sunt accusantium! Rerum debitis animi asperiores, aliquam in sint et ullam facilis velit a quibusdam aliquid vero nihil consequatur omnis nesciunt quidem, natus eum similique libero exercitationem aspernatur! Corrupti non a, facere voluptatibus nihil consectetur fugiat cumque dolores.",
		technologies: "Express Js, Node Js",
		github: "https://github.com/kartikpavan/Expert_Expidition",
		live: "https://whispering-hamlet-31036.herokuapp.com/", // ! CHANGE IT
	},
	{
		id: 7,
		name: "Real Time Chat",
		imageURL: Chat,
		description:
			" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum et est expedita sunt accusantium! Rerum debitis animi asperiores, aliquam in sint et ullam facilis velit a quibusdam aliquid vero nihil consequatur omnis nesciunt quidem, natus eum similique libero exercitationem aspernatur! Corrupti non a, facere voluptatibus nihil consectetur fugiat cumque dolores.",
		technologies: "Node Js,Socket IO",
		github: "https://github.com/kartikpavan/Realtime-Chat-App",
		live: "https://agile-shelf-48554.herokuapp.com/", //! Change it
	},
];

//
