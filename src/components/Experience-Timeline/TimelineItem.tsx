import React from 'react';
import "./Experience-TimelineItem.scss";


interface Category {
    tag: string;
    color: string;
    fontColor: string;
}

interface TimelineElement {
    title: string;
    category: Category;
    date: string;
    company: string;
    location: string;
    jobDescription: string;
    dateStarted: string;
}

interface TimelineItemProps {
    data: TimelineElement;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ data }) => (
    <div className="experience-timeline-item">
        <div className="timeline-item-content">
            <h2>{data.title}</h2>
            <h3>{data.company}</h3>

            <span className="tag" style={{ background: data.category.color, color: data.category.fontColor }}>
                {data.category.tag}
            </span>

            <div className= "date-location">
                <p>{data.date}</p>
                <p>{data.location}</p>
            </div>

            <p>{data.jobDescription}</p>
        </div>
        <span className="circle"></span>
    </div>
)

export default TimelineItem;