import React from 'react';
import TripCard from '../../../components/tripCard';
import TripRow from '../../../components/tripRow';
import { useResponsiveness, useTrips } from '../../../hooks';

// TODO reliable refresh after a post or put
// TODO skeleton while loading
const TripList = () => {
  const { trips, error } = useTrips();
  const { isMobile } = useResponsiveness();

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
