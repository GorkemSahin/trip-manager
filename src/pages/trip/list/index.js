import React, { useCallback, useState, useEffect } from 'react';
import Loading from '../../../components/placeholders/loading';
import { useTrips } from '../../../hooks';
import { deleteTrip } from '../../../api';
import Error from '../../../components/placeholders/error';
import { useLocation } from 'react-router-dom';
import Trip from '../../../containers/trip';

const TripList = () => {
  const { trips, fetchError, mutate } = useTrips();
  const [error, setError] = useState();

  /*
    Check if any props are passed via router. Update the locally cached
    list accordingly and display the mutated list until the new list is fetched.
  */
  const { state: { id, newTrip } } = useLocation();
  useEffect(() => {
    (trips && newTrip) && mutate(id ? trips.map((trip) => trip.id === id ? newTrip : trip) : [...trips, newTrip]);
  }, [id, newTrip]);

  const onDelete = useCallback(async (id) => {
    try {
      await deleteTrip(id);
      mutate(trips.filter(trip => trip.id !== id));
    } catch (e) {
      setError(e);
    }
  }, [trips]);

  if (error || fetchError) return <Error/>;
  if (!trips) return <Loading/>;

  return (
    <div>
      { trips.sort((t1, t2) => new Date(t2.start_date) - new Date(t1.start_date)).map(trip => (
        <Trip onDelete={ onDelete } style={{ marginTop: '1em' }} key={ trip.id } trip={ trip }/>
      ))}
    </div>
  );
};

export default TripList;
