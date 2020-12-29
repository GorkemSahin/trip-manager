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
import { Edit, World, Trash } from '../../assets/icons';
import { verbalDate } from '../../utils/helpers';
import { useHistory } from 'react-router-dom';

const TripRow = ({ trip, ...rest }) => {
  const history = useHistory();
  return (
    <OuterDiv { ...rest }>
      <World style={{ flex: 1, height: '100%', width: '100%', marginRight: '1em' }}/>
      <InfoDiv>
        <StyledDiv>
          <CountrySpan>{ trip.address.country }</CountrySpan>
          <LightSpan>{ `${verbalDate(trip.start_date)} - ${verbalDate(trip.end_date)}` }</LightSpan>
        </StyledDiv>
        <StyledDiv>
          <span style={{ marginRight: '1em' }}>{ trip.company_name }</span>
          <LightSpan>{ trip.street }</LightSpan>
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
