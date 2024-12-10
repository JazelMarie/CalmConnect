import React, { useState } from 'react';

const AppointmentForm = () => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [patientName, setPatientName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle appointment submission logic here
    console.log({ date, time, patientName });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Schedule Appointment</h2>
      <input
        type="text"
        placeholder="Patient Name"
        value={patientName}
        onChange={(e) => setPatientName(e.target.value)}
        required
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />
      <input
        type="time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        required
      />
      <button type="submit">Schedule</button>
    </form>
  );
};

export default AppointmentForm;
