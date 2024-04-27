import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import Button from '@mui/material/Button';
import CalisthenicsIcon from '../../assets/street.png';
import './Navbar.scss';

export const Navbar = () => {

  const [isDarkMode, setIsDarkMode] = useState(() => true); // i guess by default it's dark mode, then switch to light
  const toggleSwitchMode = (checked: boolean) => { setIsDarkMode(checked) 
    if (!checked) {
      document.body.classList.add('light-mode');
    } else {
      document.body.classList.remove('light-mode');
    }
  };
  return (
    <div className="main-navbar">
      <a className='icon-link' href='/'><img src={CalisthenicsIcon} className='icon-img'></img></a>
      <div className="main-navbar-right">
        <nav className='navbar-links'>
          <NavLink className='link' to='/about'>
            <Button className='link-btn' variant='contained'>About</Button>
          </NavLink>
          <NavLink className='link' to='/projects'>
            <Button className='link-btn' variant='contained'>Projects</Button>
          </NavLink>
          <NavLink className='link' to='/experience'>
            <Button className='link-btn' variant='contained'>Experience</Button>
          </NavLink>
          <NavLink className='link' to='/skills'>
            <Button className='link-btn' variant='contained'>Skills</Button>
          </NavLink>
          <NavLink className='link' to='/calisthenics'>
            <Button className='link-btn' variant='contained'>Calisthenics</Button>
          </NavLink>

        </nav>
      </div>
      <div className="dark-light-toggle">
        <DarkModeSwitch className='switch-btn'
          checked={isDarkMode}
          onChange={toggleSwitchMode} />
      </div>
    </div>
  )
}

export default Navbar