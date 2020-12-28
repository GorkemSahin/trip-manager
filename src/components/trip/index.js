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

const Trip = ({ trip, ...rest }) => {
  console.log(trip);
  return (
    <OuterDiv { ...rest }>
      <World style={{ flex: 1, height: '100%', width: '100%', marginRight: '1em' }}/>
      <InfoDiv>
        <StyledDiv>
          <CountrySpan>{ trip.address.country }</CountrySpan>
          <LightSpan>{ trip.start_date }</LightSpan>
        </StyledDiv>
        <StyledDiv>
          <span style={{ marginRight: '1em' }}>{ trip.company_name }</span>
          <LightSpan>{ trip.address.street }</LightSpan>
        </StyledDiv>
      </InfoDiv>
      <ButtonsDiv>
        <Button danger icon={ <Trash/> }></Button>
        <Button icon={ <Edit/> }></Button>
      </ButtonsDiv>
    </OuterDiv>
  );
};

export default Trip;
