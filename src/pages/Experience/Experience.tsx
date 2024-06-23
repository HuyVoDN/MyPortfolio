import { Fade } from 'react-awesome-reveal';
import { Typography } from '@mui/material';
import "./Experience.scss";
import Timeline from '../../components/Experience-Timeline/Timeline';


const Experience = () => {
  return (
    <div className="experience">
      <Fade>
      <Typography variant='h4' className="title">Experience</Typography>
      <div className='experience-container'>
       <Timeline></Timeline>
        </div>
      </Fade>
     
      </div>
  )
}

export default Experience