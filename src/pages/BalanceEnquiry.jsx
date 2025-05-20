import React, { useState } from 'react';

function BalanceEnquiry() {
  const [balance, setBalance] = useState(null);
  const [account, setAccount] = useState('');

  const handleCheck = () => {
    const randomBalance = Math.floor(Math.random() * 100000);
    setBalance(`₹ ${randomBalance}`);
  };

  return (
    <div>
      <input placeholder="Enter Account Number" onChange={(e) => setAccount(e.target.value)} />
      <button onClick={handleCheck}>Check Balance</button>
      {balance && <p>Your Balance: {balance}</p>}
    </div>
  );
}

export default BalanceEnquiry;
