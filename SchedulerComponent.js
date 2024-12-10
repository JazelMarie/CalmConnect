import React from 'react';
import { BryntumScheduler } from '@bryntum/scheduler-react';
import './SchedulerComponent.css'; // Optional: for custom styles

const SchedulerComponent = () => {
  // Sample data for events and resources
  const events = [
    {
      id: 1,
      resourceId: 1,
      startDate: new Date(2024, 11, 9, 10, 0),
      endDate: new Date(2024, 11, 9, 12, 0),
      name: 'Meeting with Client',
    },
    {
      id: 2,
      resourceId: 2,
      startDate: new Date(2024, 11, 9, 13, 0),
      endDate: new Date(2024, 11, 9, 14, 0),
      name: 'Project Review',
    },
  ];

  const resources = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' },
  ];

  // Scheduler configuration options
  const schedulerConfig = {
    events,
    resources,
    startDate: new Date(2024, 11, 9, 8, 0),
    endDate: new Date(2024, 11, 9, 18, 0),
    viewPreset: 'hourAndDay', // Preset view (e.g., day, week, month)
    tooltip: {
      template: ({ eventRecord }) => `<b>${eventRecord.name}</b>`,
    },
    tbar: {
      items: [
        {
          type: 'button',
          text: 'Add Event',
          onAction: () => {
            // Logic to add a new event
            console.log('Add Event clicked');
          },
        },
      ],
    },
    // Additional configuration options can be added here
  };

  return (
    <div>
      <h1>Scheduler</h1>
      <BryntumScheduler {...schedulerConfig} />
    </div>
  );
};

export default SchedulerComponent;
