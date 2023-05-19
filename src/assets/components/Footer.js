import { Center, Grid, GridItem, Image, Text, VStack } from "@chakra-ui/react";
import footerLogo from '../images/LittleLemonLogo.png'
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer>
            <Link to='/'>
                <img className="footerLogo" src={footerLogo} alt='Little Lemon Logo' />
            </Link>
            <div>
                <h3>Navigation</h3>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link className='noPage'>About</Link></li>
                    <li><Link className='noPage'>Menu</Link></li>
                    <li><Link to='/reserve'>Reservations</Link></li>
                    <li><Link className='noPage'>Order Online</Link></li>
                    <li><Link className='noPage'>Login</Link></li>
                </ul>
            </div>
            <div>
                <h3>Contact</h3>
                <ul>
                    <li><a className='noPage'>Address</a></li>
                    <li><a className='noPage'>phone</a></li>
                    <li><a className='noPage'>Email</a></li>
                </ul>
            </div>
            <div>
                <h3>Social Media</h3>
                <ul>
                    <li><a className='noPage'>Address</a></li>
                    <li><a className='noPage'>Phone</a></li>
                    <li><a className='noPage'>Email</a></li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;