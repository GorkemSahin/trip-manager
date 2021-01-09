import React from 'react';
import {
  OuterDiv,
  InfoDiv,
  ButtonsDiv,
  Company,
  LightSpan,
  Row,
  Country
} from './styled';
import Button from '../../../components/button';
import { Edit, Next, Trash } from '../../../assets/icons';
import { useHistory } from 'react-router-dom';

const TripRow = ({ trip, editable, onDelete, ...rest }) => {
  const history = useHistory();
  const { address, company, country, Flag, dates } = trip;

  return (
    <OuterDiv { ...rest }>
      <Flag style={{ flex: 1, width: '100%', height: '100%', minWidth: '5em', marginRight: '1em' }}/>
      <InfoDiv>
        <Row>
          <Country>{ country }</Country>
          <LightSpan>{ dates }</LightSpan>
        </Row>
        <Row>
          <Company>{ company }</Company>
          <LightSpan>{ address }</LightSpan>
        </Row>
      </InfoDiv>
      <ButtonsDiv>
        <Button
          onClick={ () => onDelete(trip.id) }
          mode='danger'
          icon={ <Trash/> }/>
        <Button
          onClick={ () => history.push(`/trip/${ trip.id }`)}
          icon={ editable ? <Edit/> : <Next/> }/>
      </ButtonsDiv>
    </OuterDiv>
  );
};

export default TripRow;
