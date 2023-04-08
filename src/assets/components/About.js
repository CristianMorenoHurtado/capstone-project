import chef from '../images/restaurant-chef-B.jpg';
import restaurant from '../images/restaurant.jpg';

const About = () => {
    return (
        <div id='mainAbout'>
            <div className='aboutHalf'>
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p className='aboutPara'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
            </div>
            <div className='aboutHalfImg'>
                <img className='aboutImg1' src={restaurant} alt='Restaurant' />
                <img className='aboutImg2' src={chef} alt='Chef' />
            </div>
        </div>
    );
}

export default About;