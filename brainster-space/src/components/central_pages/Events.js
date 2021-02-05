import React, { useState } from 'react'
import moment from 'moment'
import Calendar from '../events_calendar/calendar'
import '../events_calendar/calendar/styles.css'


const Events = () => {
    const [selectedDate, setSelectedDate] = useState(moment());
  console.log(selectedDate);
    return ( 
    <div className="Events">
    <h2 className="text-bold">Календар</h2>
    <Calendar value={selectedDate} onChange={setSelectedDate} />
    </div> );
}
 
export default Events;


