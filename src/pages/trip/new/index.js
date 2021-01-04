import React, { useState, useCallback } from 'react';
import { postTrip } from '../../../api';
import TripForm from '../../../containers/tripForm';
import Error from '../../../components/placeholders/error';
import { useHistory } from 'react-router-dom';

const NewTrip = () => {
  const [error, setError] = useState();
  const history = useHistory();

  const onSubmit = useCallback(async (data) => {
    try {
      await postTrip(data);
      /*
        So as long as an exception is not thrown and a 2XX HTTP response is acquired,
        the second parameter here will be received by the TripList component to mutate
        the locally cached data until the new list is fetched and cache is validated.
      */
      history.push('/trip', { newTrip: data });
    } catch (e) {
      setError(e);
    }
  }, []);

  if (error) return <Error/>;

  return (
    <div style={{ display: 'flex', alignSelf: 'center' }}>
      <TripForm editable={ true } onSubmit={ onSubmit }/>
    </div>
  );
};

export default NewTrip;
