import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import Typography from "@mui/material/Typography";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Link } from "react-router-dom";
import { useState, useEffect, useMemo } from "react";
const Home = () => {
  const texts = useMemo(() => ["Software Engineer", "Web Developer", "Calisthenics Enthusiast"], []);
  
  useEffect(() => {

  }, []);

  useEffect(() => {

  }, []);
  return (
    <div className='container'>
      <div className='center'>
        <Grid2 className='description'>
          <Typography variant='h5' className="name" >Hello there! I'm</Typography>
          <Typography variant='h2' className="name">Huy Vo</Typography>
          <Typography variant='h5' className="desc">Software Engineer</Typography>
          <Typography variant='body1' className="desc-p">
          
          </Typography>
          <div className='socials'>
            <Link className='links' to='https://www.linkedin.com/in/huyvodn/' target="_blank" >
              <LinkedInIcon className='icon' />
            </Link>
            <Link className='links' to='https://github.com/HuyVoDN' target="_blank" >
              <GitHubIcon className='icon' />
            </Link>
          </div>

        </Grid2>
        <Grid2 className='carousel'>
          gay
        </Grid2>
      </div>
    </div>
  )
}

export default Home