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
  const { trip, fetchError } = useTrip(id);

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
      history.push('/trip', { id, newTrip: data });
    } catch (e) {
      console.log(e);
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
