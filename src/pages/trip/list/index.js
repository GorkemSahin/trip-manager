import React, { useCallback, useState, useEffect } from 'react';
import Loading from '../../../components/loading';
import TripCard from '../../../components/tripCard';
import TripRow from '../../../components/tripRow';
import { useResponsiveness, useTrips } from '../../../hooks';
import { deleteTrip } from '../../../api';
import Error from '../../../components/placeholders/error';
import { useLocation } from 'react-router-dom';

const TripList = () => {
  const { trips, fetchError, mutate } = useTrips();
  const { isMobile } = useResponsiveness();
  const { id, newTrip } = useLocation();
  const [error, setError] = useState();

  useEffect(() => {
    (trips && newTrip) && mutate(id ? trips.map((trip) => trip.id === id ? newTrip : trip) : [...trips, newTrip]);
  }, [id, newTrip]);

  const onDelete = useCallback(async (id) => {
    try {
      await deleteTrip(id);
      mutate(trips.filter(trip => trip.id !== id));
    } catch (e) {
      console.log(e);
      setError(e);
    }
  }, [trips]);

  if (error || fetchError) return <Error/>;
  if (!trips) return <Loading/>;

  return (
    <div>
      { trips.sort((t1, t2) => new Date(t2.start_date) - new Date(t1.start_date)).map(trip => (isMobile
        ? <TripCard style={{ marginTop: '1em' }} key={ trip.id } trip={ trip }/>
        : <TripRow onDelete= { onDelete } style={{ marginTop: '1em' }} key={ trip.id } trip={ trip }/>))
      }
    </div>
  );
};

export default TripList;
