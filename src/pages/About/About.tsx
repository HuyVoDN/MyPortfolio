import { Grid, Typography } from '@mui/material';
import "./About.scss";
//import { Carousel } from 'react-responsive-carousel';

const About = () => {
  return (

    <div className="about">
      <Typography variant='h4' className="title">About</Typography>
      <div className='container'>
        <Grid className='me-para'>
          <p>My name is Huy Vo. I'm currently a college student at the University of Houston, pursuing a Bachelor's in Computer Science.</p>
            <p>I believe in being a well-rounded person and always strike to gain more knowledge from other domains. </p>
            <p>In my free time, I found an unyielding passion for Calisthenics.</p>
            <p>A few goals in this year I've set out for me are achieving the Handstand, the Handstand Push-up and the Front Lever.</p>
        </Grid>
        <Grid className='img-carousel'>
          <p>A carousel of me </p>
        </Grid>


      </div>

    </div>

  )
}

export default About