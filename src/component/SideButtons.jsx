import React from 'react'
import './css/sidebutton.css'
const SideButtons = ({jobs,currentItem,setCurrentItem}) => {
  return (
    <div className='btnContainer'>
        {jobs.map((job,index)=>{
            return (
                <button
                    key={index}
                    className={index === currentItem ? 'job-btn active-btn' : 'job-btn'}
                    onClick={()=>setCurrentItem(index)}
                >
                    {job.company}
                </button>
            );
        })}
    </div>
  )
}

export default SideButtons