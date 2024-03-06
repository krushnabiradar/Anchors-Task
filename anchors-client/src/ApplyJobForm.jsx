// ApplyJobForm.js
import React, { useState } from 'react';
import axios from 'axios';

const ApplyJobForm = ({ jobId, rupeesBalance, onUpdateRupeesHistory }) => {
  const [error, setError] = useState('');

  const applyForJob = async (jobId) => {
    try {
      const res = await axios.post('/job/apply', { jobId });
      console.log(res.data);
      // Update rupees balance and history
      onUpdateRupeesHistory();
    } catch (err) {
      setError(err.response.data.msg);
    }
  };

  return (
    <div>
      <button onClick={() => applyForJob(jobId)}>Apply for Job</button>
      {error && <p>{error}</p>}
    </div>
  );
};

export default ApplyJobForm;
