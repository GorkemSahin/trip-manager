import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actions, selectors } from '../../../appState/trip';
import Trip from '../../../components/trip';

const TripList = () => {
  const dispatch = useDispatch();
  useEffect(() => dispatch(actions.fetchTrips()), []);
  const trips = useSelector(selectors.allTripsSelector);
  return (
    <div>
      {
        trips.map(trip => <Trip style={{ marginTop: '1em' }} key={ trip.id } trip={ trip }/>)
      }
    </div>
  );
};

export default TripList;
