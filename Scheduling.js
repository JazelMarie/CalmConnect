import React, { useState, useEffect } from 'react';
import { format, isSameDay } from 'date-fns';

const Scheduling = () => {
  const [appointments, setAppointments] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [newAppointment, setNewAppointment] = useState('');

  // Function to handle adding a new appointment
  const handleAddAppointment = (e) => {
    e.preventDefault();
    if (newAppointment.trim() === '') return;

    const appointment = {
      id: Date.now(),
      date: selectedDate,
      description: newAppointment,
    };

    setAppointments((prev) => [...prev, appointment]);
    setNewAppointment('');
  };

  return (
    <div>
      <h2>Schedule an Appointment</h2>
      <form onSubmit={handleAddAppointment}>
        <input
          type="date"
          onChange={(e) => setSelectedDate(new Date(e.target.value))}
        />
        <input
          type="text"
          value={newAppointment}
          onChange={(e) => setNewAppointment(e.target.value)}
          placeholder="Appointment Description"
          required
        />
        <button type="submit">Add Appointment</button>
      </form>

      <h3>Appointments for {format(selectedDate, 'MMMM dd, yyyy')}</h3>
      <ul>
        {appointments
          .filter((appt) => isSameDay(new Date(appt.date), selectedDate))
          .map((appt) => (
            <li key={appt.id}>{appt.description}</li>
          ))}
      </ul>
    </div>
  );
};

export default Scheduling;
