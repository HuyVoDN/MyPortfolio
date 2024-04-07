import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import Button from '@mui/material/Button';
import './Navbar.scss';
const Navbar = () => {

  const [isDarkMode, setIsDarkMode] = useState(() => true);
  const toggleDarkMode = (checked: boolean) => { setIsDarkMode(checked) };
  return (
    <div className="main-navbar">
      <Link className='icon' to='/'>Huy Vo</Link>
      <div className="main-navbar-right">
        <nav className='navbar-links'>
          <NavLink className='link' to='/about'>
            <Button className='link-btn' variant='contained'>About</Button>
          </NavLink>
          <NavLink className='link' to='/projects'>
            <Button className='link-btn' variant='contained'>Projects</Button>
          </NavLink>
          <NavLink className='link' to='/education'>
            <Button className='link-btn' variant='contained'>Education</Button>
          </NavLink>
          <NavLink className='link' to='/skills'>
            <Button className='link-btn' variant='contained'>Skills</Button>
          </NavLink>
          <NavLink className='link' to='/calisthenics'>
            <Button className='link-btn' variant='contained'>Calisthenics</Button>
          </NavLink>



          {/* <Button className='link-btn' variant='contained'><NavLink className= 'link' to='/about'>About</NavLink></Button>
          <Button className='link-btn' variant='contained'><NavLink className= 'link' to='/projects'>Projects</NavLink></Button>
          <Button className='link-btn' variant='contained'><NavLink className= 'link' to='/education'>Education</NavLink></Button>
          <Button className='link-btn' variant='contained'><NavLink className= 'link' to='/skills'>Skills</NavLink></Button>
          <Button className='link-btn' variant='contained'><NavLink className= 'link' to='/calisthenics'>Calisthenics</NavLink></Button> */}
        </nav>
      </div>
      <div className="dark-light-toggle">
        <DarkModeSwitch className='switch-btn'
          checked={isDarkMode}
          onChange={toggleDarkMode} />
      </div>
    </div>
  )
}

export default Navbar