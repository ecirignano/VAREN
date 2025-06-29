import React from 'react';
import { useParams } from 'react-router-dom';

function PropertyDetail() {
  const { id } = useParams();
  return <div className="p-4">Details for property ID: {id}</div>;
}

export default PropertyDetail;