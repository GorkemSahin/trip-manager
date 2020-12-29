import React from 'react';
import TripCard from '../../../components/tripCard';
import TripRow from '../../../components/tripRow';
import { useMobile, useTrips } from '../../../hooks';

const TripList = () => {
  const { trips, error } = useTrips();
  const isMobile = useMobile();

  if (error) return <h1>Error...</h1>;
  if (!trips) return <h1>Loading...</h1>;

  return (
    <div>
      {
        trips.map(trip => (isMobile
          ? <TripCard style={{ marginTop: '1em' }} key={ trip.id } trip={ trip }/>
          : <TripRow style={{ marginTop: '1em' }} key={ trip.id } trip={ trip }/>))
      }
    </div>
  );
};

export default TripList;
