// JobListings.js
import React from 'react';

const JobListings = ({ jobs }) => {
  return (
    <div>
      <h2>Job Listings</h2>
      {jobs.map(job => (
        <div key={job._id}>
          <h3>{job.roleName}</h3>
          <p>Company: {job.companyName}</p>
          <p>Location: {job.location}</p>
          <p>CTC: {job.minCTC} - {job.maxCTC}</p>
           {/* Display apply button with logic to check rupees balance */}

          <button onClick={() => applyForJob(job._id)}>Apply</button>
        </div>
      ))}
    </div>
  );
};

export default JobListings;
