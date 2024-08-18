import { Fade } from 'react-awesome-reveal';
import { Typography } from '@mui/material';
import { useState } from 'react';
import './Calisthenics.scss';

const Calisthenics = () => {
  // draggable shits
  const draggableSkills =[
    { id: 1, skillName: "Front Lever" },
    { id: 2, skillName: "Back Lever" },
    { id: 3, skillName: "Handstand" },
    { id: 4, skillName: "Handstand Push Up" },
    { id: 5, skillName: "Planche" },
    { id: 6, skillName: "One Arm Pull Up" },
    { id: 7, skillName: "90 Degree Hold" }
  ];

  //droppable shits
  const droppableAreaSkills = [
    { id: 1, skillTitle: "Front Lever", skillDescription: "a bodyweight exercise that involves lowering from an inverted hang until the body is completely horizontal and straight, with the front facing up" },
    { id: 2, skillTitle: "Back Lever", skillDescription: "a static hold in gymnastics where a gymnast hangs from a bar or rings with their body parallel to the ground and facing the floor" },
  ];

  //states and condition shits
  const [isDragging, setIsDragging] = useState(false);
  const [isDropped, setDropped] = useState(false);
  return (
    <div className="calisthenics">
      <Fade>
        <Typography variant='h4' className="title">Calisthenics</Typography>
      </Fade>
      <div className="calisthenics-container">
       
          <div className="skills-container">

          </div>

          <div className="display-container">

          </div>
    </div>
    </div>
  );
};


export default Calisthenics;