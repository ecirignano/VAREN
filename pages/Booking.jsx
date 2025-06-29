import React from 'react';
import { useParams } from 'react-router-dom';

function Booking() {
  const { id } = useParams();
  return <div className="p-4">Booking flow for property ID: {id}</div>;
}

export default Booking;