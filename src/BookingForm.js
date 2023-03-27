import React, { useEffect, useState } from 'react'

function BookingForm(props) {
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [numGuest, setNumGuest] = useState(1);
    const [occasion, setOccasion] = useState('Birthday');
    const [formValid,setFormValid] = useState(false)



    function hundleSubmit(e) {
        e.preventDefault();
        console.log({ date, time, numGuest, occasion })
    }

    function handleInputChange(){
        setFormValid(date !=="" && time !=="" && numGuest >= 1 && numGuest <= 10)
    }

    useEffect(()=>{
        handleInputChange();
    },[date,time,numGuest])

    return (
        <form className='booking-form' onSubmit={hundleSubmit}>
            <h1>Book Now</h1>
            <label>
                Date:
                <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required className="form-input" />
            </label>

            <label >
                Time:
                <select value={time} onChange={(e) => setTime(e.target.value)} required className="form-input">
                    {props.times.map(t => (
                        <option key={t} value={t}>
                            {t}
                        </option>
                    ))}
                </select>
            </label>

            <label >
                Number of guests:
                <input type="number" min="1" max="10" value={numGuest} onChange={e => setNumGuest(parseInt(e.target.value))} required className="form-input" />
            </label>

            <label >
                Occasion:
                <select value={occasion} onChange={e => setOccasion(e.target.value)} className="form-input">
                    <option value="Birthday">Birthday</option>
                    <option value="Anniversary">Anniversary</option>
                </select>
            </label>
            <button aria-label="On Click" type='submit' className="submit-button">Submit Reservation</button>
        </form>
    )
}

export default BookingForm