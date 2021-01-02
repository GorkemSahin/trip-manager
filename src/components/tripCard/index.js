/* eslint-disable no-unused-vars */
import React from 'react';
import {
  OuterDiv,
  Section,
  CountryH2,
  TitleDiv
} from './styled';
import Button from '../button';
import { World, Next } from '../../assets/icons';
import { verbalDate } from '../../utils';
import { useHistory } from 'react-router-dom';
import { useCountryVisuals } from '../../hooks';
import { TRIP } from '../../constants/env';

// TODO test ellipsis
const TripCard = ({ trip, ...rest }) => {
  const history = useHistory();
  const { label, Flag } = useCountryVisuals(trip?.address?.country);

  return (trip
    ? <OuterDiv { ...rest }>
      <TitleDiv>
        <Flag style={{ height: '3em', width: '3em', marginRight: '1em' }}/>
        <CountryH2>{ label }</CountryH2>
      </TitleDiv>
      <Section>
        <span mode='light'>Company</span>
        <strong mode='heavy'>{ trip.company_name }</strong>
        <span>{ trip.address.street }</span>
      </Section>
      <Section>
        <span mode='light'>Date</span>
        <span>{ `${verbalDate(trip.start_date)} - ${verbalDate(trip.end_date)}` }</span>
      </Section>
      <Button
        onClick={() => history.push(`${TRIP}/${ trip.id }`, trip)}
        text={ 'View trip' }
        icon={ <Next/> }
        style={{ width: '100%' }}></Button>
    </OuterDiv>
    : null
  );
};

export default TripCard;
