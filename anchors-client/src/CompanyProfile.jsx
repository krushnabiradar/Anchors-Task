// CompanyProfile.js
import React from 'react';

const CompanyProfile = ({ company }) => {
  return (
    <div>
      <h2>Company Profile</h2>
      <p>Name: {company.name}</p>
      <p>Email: {company.email}</p>
      <p>Rupees Balance: {company.totalRupees}</p>
      {/* Display job postings */}
      {/* Display rupees history */}
    </div>
  );
};

export default CompanyProfile;
