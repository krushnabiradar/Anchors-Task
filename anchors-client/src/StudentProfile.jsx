// StudentProfile.js
import React from 'react';

const StudentProfile = ({ student }) => {
  return (
    <div>
      <h2>Student Profile</h2>
      <p>Name: {student.name}</p>
      <p>Email: {student.email}</p>
      <p>Rupees Balance: {student.totalRupees}</p>
      {/* Display rupees history */}
    </div>
  );
};

export default StudentProfile;
