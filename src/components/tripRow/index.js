/* eslint-disable camelcase */
import React from 'react';
import {
  OuterDiv,
  InfoDiv,
  ButtonsDiv,
  LightSpan,
  StyledDiv,
  CountrySpan
} from './styled';
import Button from '../button';
import { Edit, Trash } from '../../assets/icons';
import { verbalDate } from '../../utils';
import { useHistory } from 'react-router-dom';
import { useCountryVisuals } from '../../hooks';

// TODO display address properly
const TripRow = ({ trip, ...rest }) => {
  const history = useHistory();
  const { label, Flag } = useCountryVisuals(trip.address.country);
  const { address: { city, street, street_num } } = trip;

  return (
    <OuterDiv { ...rest }>
      <Flag style={{ flex: 1, width: '100%', height: '100%', minWidth: '5em', marginRight: '1em' }}/>
      <InfoDiv>
        <StyledDiv>
          <CountrySpan>{ label }</CountrySpan>
          <LightSpan>{ `${verbalDate(trip.start_date)} - ${verbalDate(trip.end_date)}` }</LightSpan>
        </StyledDiv>
        <StyledDiv>
          <span style={{ marginRight: '1em' }}>{ trip.company_name }</span>
          <LightSpan>{ `${city}, ${street}, ${street_num}` }</LightSpan>
        </StyledDiv>
      </InfoDiv>
      <ButtonsDiv>
        <Button mode='danger' icon={ <Trash/> }/>
        <Button
          onClick={() => history.push(`/trip/${ trip.id }`, trip)}
          icon={ <Edit/> }/>
      </ButtonsDiv>
    </OuterDiv>
  );
};

export default TripRow;
