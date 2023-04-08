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
                    <li><a href='#mainAbout'>About</a></li>
                    <li><Link to='#'>Menu</Link></li>
                    <li><Link to='/reserve'>Reservations</Link></li>
                    <li><Link to='#'>Order Online</Link></li>
                    <li><Link to='#'>Login</Link></li>
                </ul>
            </div>
            <div>
                <h3>Contact</h3>
                <ul>
                    <li><a href='#'>Address</a></li>
                    <li><a href='#'>phone</a></li>
                    <li><a href='#'>Email</a></li>
                </ul>
            </div>
            <div>
                <h3>Social Media</h3>
                <ul>
                    <li><a href='#'>Address</a></li>
                    <li><a href='#'>Phone</a></li>
                    <li><a href='#'>Email</a></li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;