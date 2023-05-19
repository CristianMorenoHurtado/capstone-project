import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const BookingForm = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState('');
    const [users, setUsers] = useState([])

    /*
    const fetchUserData = () => {
        fetch("https://raw.githubusercontent.com/Meta-Front-End-Developer-PC/capstone/master/api.js", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Credentials' : true,
                'Access-Control-Allow-Origin':'*',
                'Access-Control-Allow-Methods':'GET',
                'Access-Control-Allow-Headers':'application/json',
            },
        })
          .then(response => {
            return response.json()
          })
          .then(data => {
            setUsers(data)
          })
    }

    useEffect(() => {
        fetchUserData()
    }, [])
    console.log(users)
    */



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
        <form onSubmit={handleSubmit}>
            <div className='dateTime'>
                <div className='dateTimeWrapper'>
                    <label htmlFor="date">Date</label>
                    <input
                        type="text"
                        id="date"
                        name="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        onFocus={(e) => (e.target.type = "date")}
                        min="01-01-2023"
                        max="12-31-2023"
                        placeholder='05/17/2023'
                        required
                    />
                </div>
                <div className='dateTimeWrapper'>
                    <label htmlFor="time">Time</label>
                    <input
                        type="text"
                        id="time"
                        name="time"
                        min="09:00"
                        max="22:00"
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                        onFocus={(e) => (e.target.type = "time")}
                        required
                        placeholder='12:00 PM'
                    />
                </div>
                <div className='dateTimeWrapper'>
                    <label htmlFor="quantity">Guests</label>
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
                    <label htmlFor='firstName'>First Name</label>
                    <input
                        type='text'
                        name='firstName'
                        data-testid='firstName'
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        placeholder='John'
                        required
                    />
                </div>
                <div className='customerName'>
                    <label htmlFor='lastName'>Last Name</label>
                    <input
                        type='text'
                        name='lastName'
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        placeholder='Doe'
                        required
                    />
                </div>
            </div>
            <div className='formEntries'>
                <label htmlFor='occasion'>Occasion</label>
                <select
                    name='occasion'
                    value={occasion}
                    onChange={(e) => setOccasion(e.target.value)}
                >
                    <option>Birthday</option>
                    <option>Anniversary</option>
                </select>
                <label htmlFor='email'>Email Address</label>
                <input
                    type='email'
                    name='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder='jdoe@email.com'
                    required
                />
                <label htmlFor='phoneNumber'>Phone Number</label>
                <input
                    type='tel'
                    name='phoneNumber'
                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                    placeholder='123-456-7890'
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    required
                />
                <label htmlFor='specialRequest'>Special Requests (if any)</label>
                <textarea
                    aria-label="On Click"
                    className='customerSpecial'
                    name='specialRequest'
                />
            </div>
            <input
                className='submitBtn'
                type='submit'
                value='Reserve'
            />
            <div className='reserveModal'>
                <h1 className='reserveModalHeader'>Thank you for your reservation!</h1>
                <button
                    data-testid='submit-btn'
                    onClick={toggleReserveModal}
                    className='reserveBtn'>
                        <Link to='/'>Return Home</Link>
                </button>
            </div>
            <div className='overlay'></div>
        </form>
    )
}

export default BookingForm;