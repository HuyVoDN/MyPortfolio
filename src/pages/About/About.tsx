import { Grid, Link, Typography } from '@mui/material';
import "./About.scss";
import {FL, Wtf, TheBoys, FightLab, SingleLeg} from '../../assets';
import { Carousel } from 'react-responsive-carousel';
import {Fade} from 'react-awesome-reveal';

const About = () => {
  const carouselItems = [
    {name: 'The Boys', img: TheBoys},
    { name: 'Front Lever', img: FL },
    { name: 'Wtf', img: Wtf },
    {name: 'Fight Lab', img: FightLab},
    {name: 'Single Leg', img: SingleLeg}
    
  ];
  return (

    <div className="about">
      <Fade>
      <Typography variant='h4' className="title">About</Typography>
      
      <div className='container'>
        <Grid className='me-para'>
            <p>Hey there! My name is Huy Vo, I recently graduated on December 2025 from the University of Houston in Computer Science. </p>
            <p>My strongest suit is software development with a focused on database system from both my internships in 2025.</p>
            <p>I believe in being a well-rounded person and always strike to gain more knowledge from other domains. As I'm currently getting the Network+ Certification and developing a C# application with a focused on database security management. </p>
             <p>Outside of technical pursuing and professional work, you can find me actively training in MMA, Brazilian Jiu-Jitsu, and Calisthenics.</p>
            <p>I'm currently training at <Link href='https://thefightlabtx.com/' target ='_blank' className='fightlab-info' title='The Fight Lab TX'>The Fight Lab TX</Link>.</p> 

        </Grid>
        <Grid className='img-carousel'>
          <Carousel className="carousel" transitionTime={250} dynamicHeight={true} showArrows={false} showIndicators={true} infiniteLoop={true} autoPlay={true} showStatus={false} showThumbs={false}>
            {
              carouselItems.map((item) => (
                <img src={item.img} 
                style={{ width: "620px", height: "500px", margin: "auto", objectFit:"cover"}}/>
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