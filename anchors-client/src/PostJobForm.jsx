// PostJobForm.js
import React, { useState } from 'react';
import axios from 'axios';

const PostJobForm = ({ company, onUpdateJobPostings }) => {
  const [formData, setFormData] = useState({
    roleName: '',
    minCTC: '',
    maxCTC: '',
    location: ''
  });

  const { roleName, minCTC, maxCTC, location } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const postJob = async () => {
    try {
      await axios.post('/job/post', formData);
      setFormData({
        roleName: '',
        minCTC: '',
        maxCTC: '',
        location: ''
      });
      // Update job postings
      onUpdateJobPostings();
    } catch (err) {
      console.error(err.response.data);
      // Show error message
    }
  };

  return (
    <div>
      <h2>Post a Job</h2>
      <input type="text" placeholder="Role Name" name="roleName" value={roleName} onChange={onChange} />
      <input type="text" placeholder="Min CTC" name="minCTC" value={minCTC} onChange={onChange} />
      <input type="text" placeholder="Max CTC" name="maxCTC" value={maxCTC} onChange={onChange} />
      <input type="text" placeholder="Location" name="location" value={location} onChange={onChange} />
      <button onClick={postJob}>Post Job</button>
    </div>
  );
};

export default PostJobForm;
