import { Fade } from 'react-awesome-reveal';
import { Typography } from '@mui/material';
import Timeline from '../../components/Timeline/Timeline';
import "./Projects.scss";

const Projects = () => {

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