import React from 'react'
import {FaAngleDoubleRight} from 'react-icons/fa'
import './css/duties.css'

const Duties = ({duties}) => {
  return (
    <div>
        {duties.map((duty,index)=>{
            return (
                <div className='dutiesContainer' key={index}>
                <div className='icon'><FaAngleDoubleRight></FaAngleDoubleRight></div>
                <div className='dutyDesc'><p >{duty}</p></div>
                </div>
            )
        })}
    </div>
  )
}

export default Duties