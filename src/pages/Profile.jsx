import React, { useState } from 'react';

function Profile() {
  const [form, setForm] = useState({
    name: "John Doe", dob: "1990-01-01", account: "1234567890",
    address: "123 Street", phone: "9876543210", accountType: "savings"
  });

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <div>
      <input name="name" value={form.name} onChange={handleChange} />
      <input name="dob" value={form.dob} onChange={handleChange} />
      <input name="account" value={form.account} readOnly />
      <input name="address" value={form.address} onChange={handleChange} />
      <input name="phone" value={form.phone} onChange={handleChange} />
      <select name="accountType" value={form.accountType} onChange={handleChange}>
        <option value="savings">Savings</option>
        <option value="working">Working</option>
      </select>
      <button onClick={() => alert("Profile updated")}>Save</button>
      <button onClick={() => window.location.href = "/home"}>Cancel</button>
    </div>
  );
}

export default Profile;
