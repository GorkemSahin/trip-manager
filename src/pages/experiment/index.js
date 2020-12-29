import React from 'react';
import { useTrip } from '../../hooks';
import TripCard from '../../components/tripCard';

const Experiment = () => {
  const { trips, error } = useTrip();

  if (error) return <h1>Error...</h1>;
  if (!trips) return <h1>Loading...</h1>;

  return (
    <div>
      {
        trips.map(trip => <TripCard style={{ marginTop: '1em' }} key={ trip.id } trip={ trip }/>)
      }
    </div>
  );
};

export default Experiment;
