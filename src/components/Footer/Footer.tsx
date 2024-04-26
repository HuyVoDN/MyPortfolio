import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import { Link } from "react-router-dom";
import './Footer.scss';
const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-container'>
               
                <div className='footer-texts'>
                    Built by Huy Vo.
                </div>
                <div className='footer-links'>
                    <Link className='links' to='https://github.com/HuyVoDN/MyPortfolio' target="_blank" title="Porfolio Repos">
                        <GitHubIcon className='icon' />
                    </Link>
                    <Link className='links' to='mailto:huy.businesscontact@gmail.com' title="My Email" >
                        <EmailIcon className='icon' />
                    </Link>
                </div>
                <div className='footer-copyright'>
                    <p>© 2024 | All Rights Reserved.
                    </p>
                </div>

            </div>
        </div>
    )
}

export default Footer