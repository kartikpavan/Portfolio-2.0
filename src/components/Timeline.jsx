import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experience } from "../utils/data";
import { IoCodeWorking } from "react-icons/io5";

const Timeline = () => {
	return (
		<div className="w-full h-full my-24">
			<VerticalTimeline>
				{experience.map((item) => {
					return (
						<VerticalTimelineElement
							key={item.id}
							className="vertical-timeline-element--work"
							contentStyle={{ background: "rgb(21, 24, 31)", color: "#888" }}
							contentArrowStyle={{ borderRight: "7px solid  rgb(21, 24, 31)" }}
							date={item.date}
							iconStyle={{ background: "rgb(21, 24, 31)", color: "#888" }}
							icon={<IoCodeWorking />}
						>
							<h3 className="vertical-timeline-element-title text-slate-200 text-lg">
								{item.title}
							</h3>
							<h4 className="vertical-timeline-element-subtitle">{item.location}</h4>
							<p>{item.description}</p>
						</VerticalTimelineElement>
					);
				})}
			</VerticalTimeline>
		</div>
	);
};

export default Timeline;
