import tableIcon from '../images/table.png'
import BookingForm from './BookingForm';

const BookingPage = () => {

    return (
        <div id='reservation'>
            <img className='reserveLogo' src={ tableIcon } alt='Reserve Table'/>
            <h1>Select Date and Party</h1>
            <BookingForm />
        </div>
    )
}

export default BookingPage;