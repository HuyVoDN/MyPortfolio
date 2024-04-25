import React from 'react';
import "./TimelineItem.scss";
interface Link {
    githubLink: string;
    demoLink: string;
}

interface Category {
    tag: string;
    color: string;
}

interface TimelineElement {
    title: string;
    category: Category;
    date: string;
    subTitle: string;
    description: string;
    link: Link;
}

interface TimelineItemProps {
    data: TimelineElement;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ data }) => (
    <div className="timeline-item">
        <div className="timeline-item-content">
            <h2>{data.title}</h2>
            <span className="tag" style={{ background: data.category.color }}>
                {data.category.tag}
            </span>
            <time>{data.date}</time>
            <p>{data.subTitle}</p>
            <div className="timeline-links">
            {data.link && (
                <a
                    href={data.link.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link"
                >
                   GitHub
                </a>
            )}
            {data.link.demoLink && ( 
                <a
                    href={data.link.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link"
                >
                   Demo
                </a>
            )}
            </div>
           
           
        </div>
        <span className="circle"></span>
    </div>
)

export default TimelineItem;