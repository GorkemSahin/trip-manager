/* eslint-disable no-unused-vars */
import React from 'react';
import {
  OuterDiv,
  LightSpan,
  StyledDiv,
  CountrySpan,
  TitleDiv
} from './styled';
import Button from '../button';
import { World, Next } from '../../assets/icons';
import { verbalDate } from '../../utils/helpers';
import { useHistory } from 'react-router-dom';

// TODO test ellipsis
const TripCard = ({ trip, ...rest }) => {
  const history = useHistory();
  return (
    <OuterDiv { ...rest }>
      <TitleDiv>
        <World style={{ height: '3em', width: '3em', marginRight: '1em' }}/>
        <CountrySpan>{ trip.address.country }</CountrySpan>
      </TitleDiv>
      <StyledDiv>
        <LightSpan>Company</LightSpan>
        <span style={{ marginRight: '1em' }}>{ trip.company_name }</span>
        <LightSpan>{ trip.address.street }</LightSpan>
      </StyledDiv>
      <StyledDiv>
        <span>Date</span>
      < LightSpan>{ `${verbalDate(trip.start_date)} - ${verbalDate(trip.end_date)}` }</LightSpan>
      </StyledDiv>
      <Button
        onClick={() => history.push(`/trip/${ trip.id }`)}
        text={ 'View trip' }
        icon={ <Next/> }
        style={{ width: '100%' }}></Button>
    </OuterDiv>
  );
};

export default TripCard;
