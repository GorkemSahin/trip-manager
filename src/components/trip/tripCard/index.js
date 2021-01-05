import React from 'react';
import {
  OuterDiv,
  Section,
  CountryH2,
  TitleDiv,
  LightSpan,
  Company,
  Address
} from './styled';
import Button from '../../button';
import { Edit, Next } from '../../../assets/icons';
import { useHistory } from 'react-router-dom';

const TripCard = ({ trip, editable, ...rest }) => {
  const history = useHistory();
  const { address, company, country, Flag, dates } = trip;

  return (
    <OuterDiv { ...rest }>
      <TitleDiv>
        <Flag style={{ height: '3.5em', width: '3.5em', marginRight: '1em' }}/>
        <CountryH2>{ country }</CountryH2>
      </TitleDiv>
      <Section>
        <LightSpan>Company</LightSpan>
        <Company>{ company }</Company>
        <Address>{ address }</Address>
      </Section>
      <Section>
        <LightSpan>Date</LightSpan>
        <span>{ dates }</span>
      </Section>
      <Button
        onClick={() => history.push(`/trip/${ trip.id }`)}
        text={ editable ? 'Edit trip' : 'View trip' }
        icon={ editable ? <Edit/> : <Next/> }
        style={{ width: '100%' }}></Button>
    </OuterDiv>
  );
};

export default TripCard;
