/* eslint-disable camelcase */
import React from 'react';
import { verbalDate } from '../../utils';
import { useCountryVisuals, useResponsiveness } from '../../hooks';
import TripCard from './tripCard';
import TripRow from './tripRow';

/*
  NOTE
  Trip rows and trip cards looked quite different but shared a lot of code that prepared
  what to display, so I thought creating a trip component that serves as some sort of
  a high-order component would make sense to avoid repeating code.
  The prop "narrow" displays cards regardless of whether the user is on a mobile device or not
  and it is used by the right side bar.
*/

const Trip = ({ trip, narrow, ...rest }) => {
  const { isMobile } = useResponsiveness();
  const displayCard = narrow || isMobile;
  const { label, Flag } = useCountryVisuals(trip.address.country);
  const { address: { city, street, street_num, zip } } = trip;
  const address = `${street}, ${street_num}, ${zip}, ${city}`;
  const editable = new Date(trip.start_date) > new Date();
  const dates = `${verbalDate(trip.start_date)} - ${verbalDate(trip.end_date)}`;
  const tripVisuals = {
    ...trip,
    Flag,
    country: label,
    address,
    dates,
    company: trip.company_name
  };

  return (displayCard
    ? <TripCard trip={ tripVisuals } editable={ editable } { ...rest }/>
    : <TripRow trip={ tripVisuals } editable={ editable } { ...rest }/>
  );
};

export default Trip;
