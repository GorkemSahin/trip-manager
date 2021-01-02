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
      history.push('/trip', { newTrip: data });
    } catch (e) {
      console.log(e);
      setError(true);
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
