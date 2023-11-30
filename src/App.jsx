const url='https://course-api.com/react-tabs-project';
import React, { useEffect, useState } from 'react'
import SideButtons from './component/SideButtons';
import Jobs from './component/Jobs';
import './App.css'
import SkeletonLoader from './component/SkeletonLoader';

const App = () => {
  const[jobs,setJobs]=useState([])
  const[isLoading,setIsLoading]=useState(true);
  const [currentItem,setCurrentItem]=useState(0)
  useEffect(()=>{
    const fetchJobData=async ()=>{
      try{
    const response= await fetch(url);
    const jobProfiles=await response.json();
    setJobs(jobProfiles);
    setIsLoading(false)
  }catch(error){
    console.log('Error',error);
  }
  }
      fetchJobData();
  },[])

  if(isLoading){
    return  (
      <>
        <SkeletonLoader />
      </>
    )
  }
  
  return (
    <div className='mainContainer'>
      <SideButtons 
          jobs={jobs}
          currentItem={currentItem}
          setCurrentItem={setCurrentItem}
        />
        <Jobs jobs={jobs} currentItem={currentItem}/>
    </div>
  )
}

export default App

