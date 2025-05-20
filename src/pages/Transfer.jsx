import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Transfer() {
  const [form, setForm] = useState({ to: '', account: '', amount: '' });
  const navigate = useNavigate();

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSend = () => alert("Transfer initiated!");

  return (
    <div>
      <input name="to" placeholder="To Person" onChange={handleChange} />
      <input name="account" placeholder="Account Number" onChange={handleChange} />
      <input name="amount" placeholder="Amount" onChange={handleChange} />
      <button onClick={handleSend}>Send</button>
      <button onClick={() => navigate("/home")}>Cancel</button>
    </div>
  );
}

export default Transfer;
