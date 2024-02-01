import React from 'react';

import Navbar from './navbar';

import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'

const localizer = momentLocalizer(moment)

import './test.css'

function Test() {
  return (
    <>
      <div className='contentTest'>
        <p>Teste</p>
        
        <Calendar
          localizer={localizer}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 500 }}
        />
        
        <Navbar />
      </div>
    </>
  )
}

export default Test
