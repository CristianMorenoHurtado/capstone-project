import { Link } from 'react-router-dom';
import navLogo from '../images/Logo1.svg'
import hamMenu from '../images/hamburger-menu.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Nav = () => {
    let isModalOpen = false;
    function toggleModal(){
        if(isModalOpen){
            isModalOpen = false
            return document.body.classList.remove("modal--open")
        }

        isModalOpen = true
        document.body.classList += ' modal--open'
    }


    return (
            <nav>
                <Link to='/' className='navImgWrapper'>
                    <img src={navLogo} alt='Little Lemon Logo' />
                </Link>
                <ul className='navList'>
                    <li className='navListItem'><Link to="/">Home</Link></li>
                    <li className='navListItem'><Link className='noPage'>About</Link></li>
                    <li className='navListItem'><Link className='noPage'>Menu</Link></li>
                    <li className='navListItem'><Link to='/reserve'>Reservations</Link></li>
                    <li className='navListItem'><Link className='noPage'>Order Online</Link></li>
                    <li className='navListItem'><Link className='noPage'>Login</Link></li>
                </ul>
                <div className='overlay'>
                </div>
                <img className='hamburgerMenu' onClick={toggleModal} src={hamMenu} />
                <ul className='navList-mobile'>
                    <FontAwesomeIcon className='modalX' onClick={toggleModal} icon="fa-solid fa-x" />
                    <div className='mobileNavList'>
                        <li className='navListItem-mobile' onClick={toggleModal}><Link to="/">Home</Link></li>
                        <li className='navListItem-mobile' onClick={toggleModal}><Link className='noPage'>About</Link></li>
                        <li className='navListItem-mobile' onClick={toggleModal}><Link className='noPage'>Menu</Link></li>
                        <li className='navListItem-mobile' onClick={toggleModal}><Link to='/reserve'>Reservations</Link></li>
                        <li className='navListItem-mobile' onClick={toggleModal}><Link className='noPage'>Order Online</Link></li>
                        <li className='navListItem-mobile' onClick={toggleModal}><Link className='noPage'>Login</Link></li>
                    </div>
                </ul>
            </nav>
    );
}

export default Nav;