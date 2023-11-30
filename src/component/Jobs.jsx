import React from 'react'
import Duties from './Duties'
import './css/jobs.css'

const Jobs = ({jobs,currentItem}) => {
    // console.log(jobs);
    const {company,dates,duties,title}=jobs[currentItem]
  return (
    <div className='jobDescription'>
        <h1>{title}</h1>
        <p className='company'>{company}</p>
        <p className='dates'>{dates}</p>
        <Duties duties={duties}/>
    </div>
  )
}

export default Jobs