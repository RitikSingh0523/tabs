import React from 'react';
import './css/skeletonloader.css'

const SkeletonLoader = () => {
  return (
    <div className="skeleton-loader">
    <div className='topLeft'>
        <div className="skeleton-companyName"></div>
        <div className="skeleton-companyName"></div>
        <div className="skeleton-companyName"></div>
    </div>
      <div className='topRight'>
        <div className="skeleton-title"></div>
        <div className="skeleton-company"></div>
        <div className="skeleton-dates"></div>
        <div className="skeleton-duties"></div>
        <div className="skeleton-duties"></div>
        <div className="skeleton-duties"></div>
      </div>
    </div>
  );
};

export default SkeletonLoader;
