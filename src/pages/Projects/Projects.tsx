import { Fade } from 'react-awesome-reveal';
import { Typography } from '@mui/material';
import Timeline from '../../components/Timeline/Timeline';
// import { useEffect, useState } from 'react';
import "./Projects.scss";

const Projects = () => {
//   const [isLightMode, setIsLightMode] = useState(document.body.classList.contains('light-mode'));

// useEffect(() => {
//     const classListObserver = new MutationObserver(() => {
//         setIsLightMode(document.body.classList.contains('light-mode'));
//     });

//     classListObserver.observe(document.body, { attributes: true, attributeFilter: ['class'] });

//     return () => {
//         classListObserver.disconnect();
//     };
// }, []);
  return (
    <div className="projects">
      <Fade>
        <Typography variant='h4' className="title">Projects</Typography>

        <div className='projects-container'>
       <Timeline></Timeline>
        </div>
      </Fade>


    </div>
  )
}

export default Projects