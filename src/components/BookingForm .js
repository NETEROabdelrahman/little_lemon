import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useGlobalContext } from '../Context';





const BookingForm = () => {

    

    const { date, time, guests, occasion,dispatch,fetchAPI,submitAPI } = useGlobalContext()
    const navigate = useNavigate()
    

    const handleSubmit = (e) => {
        e.preventDefault()
        if (date !== '' && time !== '' && guests !== '' && occasion !== '') {
            submitAPI({date, time, guests, occasion})
            navigate('/ConfirmedBooking')
            console.log({ date, time, guests, occasion })
            localStorage.setItem('data',JSON.stringify({date, time, guests, occasion}))
        }
    }
    const chosenDate = fetchAPI(new Date(date));
    console.log(chosenDate)

    return (
        <form aria-label="On Click" className=' d-grid form' onSubmit={handleSubmit} >
            <label htmlFor="res-date">Choose date</label>
            <input required type="date" id="res-date" value={date} onChange={e=>dispatch({type:'date',payload:e.target.value}) } />
            <label htmlFor="res-time">Choose time</label>
            <select required id="res-time " value={time} onChange={e=>dispatch({type:'time',payload:e.target.value}) }>
                {chosenDate.map((oneDate, index) => {
                    return (
                        <option key={index}>{oneDate }</option>
                    )
                })}
            </select>
            <label htmlFor="guests">Number of guests</label>
            <input required type="number" placeholder="1" min="1" max="10" id="guests" value={guests} onChange={e=>dispatch({type:'guests',payload:e.target.value})} />
            <label htmlFor="occasion">Occasion</label>
            <select required id="occasion" value={occasion} onChange={e=>dispatch({type:'occasion',payload:e.target.value})}>
                <option>Birthday</option>
                <option>Anniversary</option>
            </select>
            <button disabled={date !== '' && time !== '' && guests !== '' && occasion !== '' ? false:true} type="submit" value="Make Your reservation" >Make Your reservation</button>
        </form>
    )
};

export default BookingForm 