import { Grid, Typography } from '@mui/material';
import "./About.scss";
import {HS, FL, Dope, Wtf } from '../../assets';
import { Carousel } from 'react-responsive-carousel';
import {Fade} from 'react-awesome-reveal';
const About = () => {
  const carouselItems = [
    { name: 'Handstand', img: HS },
    { name: 'Front Lever', img: FL },
    { name: 'Dope', img: Dope },
    { name: 'Wtf', img: Wtf },
  ];
  return (

    <div className="about">
      <Fade>
      <Typography variant='h4' className="title">About</Typography>
      
      <div className='container'>
        <Grid className='me-para'>
          <p>My name is Huy Vo. I'm currently a student at the University of Houston, pursuing a Bachelor's in Computer Science.</p>
          <p>I believe in being a well-rounded person and always strike to gain more knowledge from other domains. </p>
          <p>In my free time, I found an unyielding passion for Calisthenics.</p>
          <p>This year, I will achieve the <b>Handstand</b>, the <b>Handstand Push-Up</b> and the full <b>Front Lever</b>.</p>
        </Grid>
        <Grid className='img-carousel'>
          <Carousel className="carousel" transitionTime={250} dynamicHeight={true} showArrows={false} showIndicators={false} infiniteLoop={true} autoPlay={true} showStatus={false} showThumbs={false}>
            {
              carouselItems.map((item) => (
                <img src={item.img} 
                style={{ width: "500px", height: "500px", margin: "auto", objectFit:"cover"}}/>
              ))
            }
          </Carousel>
        </Grid>


      </div>
      </Fade>
    </div>
    

  )
}

export default About