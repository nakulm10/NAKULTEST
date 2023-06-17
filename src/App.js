import React, { useState } from 'react';
import './App.css'; // Import the CSS file

const App = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [guardianName, setGuardianName] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [parentOccupancy, setParentOccupancy] = useState('');
  const [gender, setGender] = useState('');
  const [pincode, setPincode] = useState('');
  const [contactNumber, setContactNumber] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic...
    if (name && age && guardianName && birthdate && parentOccupancy && gender && pincode && contactNumber) {
      alert('All details are entered!');
    } else {
      alert('Please fill in all the details.');
    }
  };

  return (
    <div className="container">
      <div className="form-box">
        <h1 className="form-title">Admission Form</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />

          <label htmlFor="age">Age:</label>
          <input type="number" id="age" value={age} onChange={(e) => setAge(e.target.value)} required />

          <label htmlFor="guardianName">Guardian's Name:</label>
          <input type="text" id="guardianName" value={guardianName} onChange={(e) => setGuardianName(e.target.value)} required />

          <label htmlFor="birthdate">Birthdate:</label>
          <input type="date" id="birthdate" value={birthdate} onChange={(e) => setBirthdate(e.target.value)} required />

          <label htmlFor="parentOccupancy">Parent's Occupancy:</label>
          <input type="text" id="parentOccupancy" value={parentOccupancy} onChange={(e) => setParentOccupancy(e.target.value)} required />

          <div className="radio-group">
            <label htmlFor="gender">Gender:</label>
            <div>
              <label htmlFor="male">
                <input type="radio" id="male" value="male" checked={gender === 'male'} onChange={(e) => setGender(e.target.value)} required />
                Male
              </label>
              <label htmlFor="female">
                <input type="radio" id="female" value="female" checked={gender === 'female'} onChange={(e) => setGender(e.target.value)} required />
                Female
              </label>
              <label htmlFor="other">
                <input type="radio" id="other" value="other" checked={gender === 'other'} onChange={(e) => setGender(e.target.value)} required />
                Other
              </label>
            </div>
          </div>

          <label htmlFor="pincode">Pincode:</label>
          <input type="text" id="pincode" value={pincode} onChange={(e) => setPincode(e.target.value)} required />

          <label htmlFor="contactNumber">Contact Number:</label>
          <input type="text" id="contactNumber" value={contactNumber} onChange={(e) => setContactNumber(e.target.value)} required />

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default App;
