import tableIcon from '../images/table.png'
import { useState } from 'react';
import ReactDOM from 'react-dom/client'
import { Link } from 'react-router-dom';

const Reserve = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [guests, setGuests] = useState('');

    let isReserveModalOpen = false;
    const handleSubmit = (e) => {
        e.preventDefault();
        // alert(`You're form was submitted`)
        if(isReserveModalOpen){
            isReserveModalOpen = false
            return document.body.classList.remove("reserve--modal--open")
        }

        isReserveModalOpen = true
        document.body.classList += ' reserve--modal--open'

    }

    function toggleReserveModal(){
        if(isReserveModalOpen){
            isReserveModalOpen = false
            return document.body.classList.remove("reserve--modal--open")
        }

        isReserveModalOpen = true
        document.body.classList += ' reserve--modal--open'
    }


    return (
        <div id='reservation'>
            <img className='reserveLogo' src={ tableIcon } alt='Reserve Table'/>
            <h1>Select Date and Party</h1>
            <form onSubmit={handleSubmit}>
                <div className='dateTime'>
                    <div className='dateTimeWrapper'>
                        <label for="date">Date</label>
                        <input
                            type="date"
                            id="date"
                            name="date"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            min="01-01-2023"
                            max="12-31-2023"
                            required
                        />
                    </div>
                    <div className='dateTimeWrapper'>
                        <label for="time">Time</label>
                        <input
                            type="time"
                            id="time"
                            name="time"
                            min="09:00"
                            max="22:00"
                            value={time}
                            onChange={(e) => setTime(e.target.value)}
                            required
                            placeholder=' '
                        />
                    </div>
                    <div className='dateTimeWrapper'>
                        <label for="quantity">Guests</label>
                        <input
                            type="number"
                            id="guests"
                            name="guests"
                            min="1"
                            max="20"
                            value={guests}
                            onChange={(e) => setGuests(e.target.value)}
                            placeholder=' '
                            required
                        />
                    </div>
                </div>
                <div className='customerNameWrapper'>
                    <div className='customerName'>
                        <label for='firstName'>First Name</label>
                        <input
                            type='text'
                            name='firstName'
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            placeholder=' '
                            required
                        />
                    </div>
                    <div className='customerName'>
                        <label for='lastName'>Last Name</label>
                        <input
                            type='text'
                            name='lastName'
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            placeholder=' '
                            required
                        />
                    </div>
                </div>
                <div className='formEntries'>
                    <label for='email'>Email Address</label>
                    <input
                        type='email'
                        name='email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder=' '
                        required
                    />
                    <label for='phoneNumber'>Phone Number</label>
                    <input
                        type='tel'
                        name='phoneNumber'
                        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                        placeholder='123-456-7890'
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        required
                    />
                    <label for='specialRequest'>Special Requests (if any)</label>
                    <textarea
                        className='customerSpecial'
                        name='specialRequest'
                    />
                </div>
                <input
                    className='submitBtn'
                    type='submit'
                    value='Reserve'
                />
            </form>
            <div className='reserveModal'>
                <h1 className='reserveModalHeader'>Thank you for your reservation!</h1>
                <button
                    onClick={toggleReserveModal}
                    className='reserveBtn'>
                        <Link to='/'>Return Home</Link>
                </button>
            </div>
            <div className='overlay'></div>
        </div>
    )
}

export default Reserve;