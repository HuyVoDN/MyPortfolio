import { TimelineElements } from "../../constants/TimelineElements";
import TimelineItem from "./TimelineItem";
import "./Timeline.scss";
const Timeline = () => {
    return (
        TimelineElements.length > 0 && (
            <div className="timeline-container">
                {TimelineElements.map((data, idx) => (
                    <TimelineItem key={idx} data={data} />
                ))}
            </div>
        )
    );
}

export default Timeline;