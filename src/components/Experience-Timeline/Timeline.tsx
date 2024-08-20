import { useState } from 'react'; 
import { TimelineElements } from "../../constants/Experience-TimelineElements";
import TimelineItem from "./TimelineItem";
import "./Experience-Timeline.scss";
import {Fade} from 'react-awesome-reveal';

const Timeline = () => {
    const [currentIndex, setCurrentIndex] = useState(0); // State to track the current item

    const goToNextItem = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % TimelineElements.length); // Cycle forward through the items
    };

    const goToPreviousItem = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + TimelineElements.length) % TimelineElements.length); // Cycle backward through the items
    };

    return (
        TimelineElements.length > 0 && (
            <div className="experience-timeline-container">

                 <div className="btn-container">
                    <p className="btn prv-btn" onClick={goToPreviousItem}></p>
                    <p className="date">{TimelineElements[currentIndex].dateStarted}</p>
                    <p className="btn next-btn" onClick={goToNextItem}></p>
                </div>
                <Fade>
                <TimelineItem key={currentIndex} data={TimelineElements[currentIndex]} />
                </Fade>

            </div>
        )
    );
}

export default Timeline;