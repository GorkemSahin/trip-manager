import React, { useEffect, useState, useCallback } from 'react';
import { putTrip } from '../../../api';
import { useParams, useHistory } from 'react-router-dom';
import { useTrip } from '../../../hooks';
import TripForm from '../../../containers/tripForm';
import Loading from '../../../components/placeholders/loading';
import Error from '../../../components/placeholders/error';

const TripDetails = () => {
  const history = useHistory();
  const { id } = useParams();
  const { trip, fetchError, mutate } = useTrip(id);

  const [editable, setEditable] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    setEditable(false);
    setError(fetchError);
    trip && new Date(trip.start_date) > new Date() && setEditable(true);
  }, [trip, fetchError]);

  const onSubmit = useCallback(async (data) => {
    try {
      await putTrip(id, data);
      // Updates the locally cached trip.
      mutate(data);
      /*
        So as long as an exception is not thrown and a 2XX HTTP response is acquired,
        the second parameter here will be received by the TripList component to mutate
        the locally cached data until the new list is fetched and cache is validated.
      */
      history.push('/trip', { id, newTrip: data });
    } catch (e) {
      setError(true);
    }
  }, [id]);

  if (error) return <Error/>;
  if (!trip) return <Loading/>;

  return (
    <div style={{ display: 'flex', alignSelf: 'center' }}>
      <TripForm trip={ trip } editable={ editable } onSubmit={ onSubmit }/>
    </div>
  );
};

export default TripDetails;
