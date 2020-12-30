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

  return (
    <OuterDiv { ...rest }>
      <Flag style={{ flex: 1, height: '100%', width: '100%', marginRight: '1em' }}/>
      <InfoDiv>
        <StyledDiv>
          <CountrySpan>{ label }</CountrySpan>
          <LightSpan>{ `${verbalDate(trip.start_date)} - ${verbalDate(trip.end_date)}` }</LightSpan>
        </StyledDiv>
        <StyledDiv>
          <span style={{ marginRight: '1em' }}>{ trip.company_name }</span>
          <LightSpan>{ trip.address.street }</LightSpan>
        </StyledDiv>
      </InfoDiv>
      <ButtonsDiv>
        <Button danger icon={ <Trash/> }/>
        <Button
          onClick={() => history.push(`/trip/${ trip.id }`, trip)}
          icon={ <Edit/> }/>
      </ButtonsDiv>
    </OuterDiv>
  );
};

export default TripRow;
