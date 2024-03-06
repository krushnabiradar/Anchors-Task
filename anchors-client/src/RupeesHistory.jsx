// RupeesHistory.js
import React from 'react';

const RupeesHistory = ({ history }) => {
  return (
    <div>
      <h2>Rupees History</h2>
      {history.map(entry => (
        <div key={entry._id}>
          <p>Type: {entry.type}</p>
          <p>Amount: {entry.amount}</p>
          {/* Display job details for relevant entries */}
        </div>
      ))}
    </div>
  );
};

export default RupeesHistory;
