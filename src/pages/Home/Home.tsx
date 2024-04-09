import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import Typography from "@mui/material/Typography";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import ArticleIcon from '@mui/icons-material/Article';
import { Link } from "react-router-dom";
import Typerwriter from 'typewriter-effect';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Paper } from '@mui/material';
import { TypescriptImg, JavascriptImg, CPPImg, MySQLImg, NextJSImg, ReactImg } from '../../assets';
import {Fade} from 'react-awesome-reveal';
import './Home.scss';

const Home = () => {
  const texts = ["Learner", "Software Engineer", "Web Developer", "Calisthenics Enthusiast"];
  const items = [
    { name: 'JavaScript', img: JavascriptImg },
    { name: 'TypeScript', img: TypescriptImg },
    { name: 'React', img: ReactImg },
    { name: 'NextJS', img: NextJSImg },
    { name: 'C++', img: CPPImg },
    { name: 'MySQL', img: MySQLImg }
  ];
  return (
    <div className='home'>
      <div className='container' >
        <Fade triggerOnce >
        <Grid2 className='description'>
          <Typography variant='h4' style={{fontFamily:'Manrope'}} >Hello there! My name is</Typography>
          <Typography variant='h1' style={{ fontFamily: "Dancing Script", fontStyle: "italic", paddingBottom: "2.5rem" }}>Huy Vo</Typography>
          <Typography variant='h5' className="desc">
            I&apos;m a&nbsp;
            <div className="typewriter" style={{ color: "cyan" }} >
              <Typerwriter options={{
                loop: true,
                autoStart: true,
                strings: texts,
                delay: 50,
                deleteSpeed: 50,
              }} />
            </div>
          </Typography>

          <div className='socials'>
            <Link className='links' to='https://www.linkedin.com/in/huyvodn/' target="_blank" title="My LinkedIn">
              <LinkedInIcon className='icon' />
            </Link>
            <Link className='links' to='https://github.com/HuyVoDN' target="_blank" title="My GitHub" >
              <GitHubIcon className='icon' />
            </Link>
            <Link className='links' to='mailto:huy.businesscontact@gmail.com' title="My Email" >
              <EmailIcon className='icon' />
            </Link>
            <Link className='links' to='https://drive.google.com/file/d/1adiW-AXqRRLpuCI20o3JEt-eO1mST6h1/view?usp=sharing' target="_blank" title="My Resume" >
              <ArticleIcon className='icon' />
            </Link>
          </div>

        </Grid2>
        <Grid2 className='carousel-grid'>
          <div className="carousel-container">
            <Carousel className="carousel" showIndicators={false} infiniteLoop={true} autoPlay={true} showStatus={false} showThumbs={false}>
              {
                items.map((item, i) => (
                  <Paper className="carousel-card" key={i} elevation={3} >
                    <img className="carousel-img" src={item.img} style={{ width: "150px", height: "150px", margin: "auto" }}></img>
                    <Typography variant='h6' style={{ color: "snow", fontFamily:'Manrope', fontSize: '16px'}}>{item.name}</Typography>

                  </Paper>
                ))
              }
            </Carousel>
          </div>
        </Grid2>
        </Fade>
      </div>
    </div>
  )
}

export default Home