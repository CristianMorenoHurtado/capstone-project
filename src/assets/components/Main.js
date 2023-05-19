import restaurantFood from '../images/restauranfood.jpg';
import greekSalad from '../images/greek salad.jpg'
import bruchetta from '../images/bruchetta.svg'
import lemonDessert from '../images/lemon dessert.jpg'
import AppUser from './User';
import About from './About';
import { Link } from 'react-router-dom';

const Main = () => {
    return (
        <main>
            <div className='mainReserve'>
                <div className='mainWrapper'>
                    <h1 className='mainH1'>Little Lemon</h1>
                    <h3 className='mainH3'>Chicago</h3>
                    <p className='mainPara'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <button className='mainBtn'><Link to='/reserve'>Reserve a Table</Link> </button>
                </div>
                <div className='mainImgWrapper'>
                    <img className='mainImg' src={restaurantFood} />
                </div>
            </div>
            <div className='mainSpecials'>
                <div className='specialOrder'>
                    <h2>Specials</h2>
                    <button className='mainBtn noPage'>Order Online</button>
                </div>
                <div className='specialCardWrapper'>
                    <div className='specialCard'>
                        <img className='cardImg' src={greekSalad} alt='Greek Salad' />
                        <div className='specialTextWrapper'>
                            <div className='specialHeading'>
                                <h3>Greek Salad</h3>
                                <span className='price'>$12.99</span>
                            </div>
                            <p className='specialPara'>
                                The famous greek salad of crispy lettuce, peppers, olives and out Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.
                            </p>
                            <h3>Order Online</h3>
                        </div>
                    </div>
                    <div className='specialCard'>
                        <img className='cardImg' src={bruchetta} alt='Bruchetta' />
                        <div className='specialTextWrapper'>
                            <div className='specialHeading'>
                                <h3>Bruchetta</h3>
                                <span className='price'>$5.99</span>
                            </div>
                            <p className='specialPara'>
                                Our Bruchetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.
                            </p>
                            <h3>Order Online</h3>
                        </div>
                    </div>
                    <div className='specialCard'>
                        <img className='cardImg' src={lemonDessert} alt='Lemon Dessert' />
                        <div className='specialTextWrapper'>
                            <div className='specialHeading'>
                                <h3>Lemon Dessert</h3>
                                <span className='price'>$5.00</span>
                            </div>
                            <p className='specialPara'>
                                This comes straight from grandma's recipe book, every last ingredient has been sourcedandis an authentic as can be imagined
                            </p>
                            <h3>Order Online</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mainTestimonials'>
                <h1 className='testHeader'>Testimonials</h1>
                <AppUser />
            </div>
            <About />
        </main>
    );
}

export default Main;