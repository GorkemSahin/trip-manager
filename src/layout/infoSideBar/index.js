import React from 'react';
import Loading from '../../components/placeholders/loading';
import Error from '../../components/placeholders/error';
import Tips from '../../components/placeholders/tips';
import TripCard from '../../components/tripCard';
import { useResponsiveness, useTitle, useTrips } from '../../hooks';
import { StyledDiv, InnerDiv } from './styled';

// TODO fix style
const InfoSideBar = ({ ...rest }) => {
  const { hideInfoSideBar } = useResponsiveness();
  const title = useTitle();
  const { trips, error } = useTrips();

  return (
    <StyledDiv hide={ hideInfoSideBar } { ...rest }>
      {
        title === 'Your trips'
          ? <Tips/>
          : <InnerDiv>
            <h1>Your trips</h1>
            <div style={{ alignSelf: 'center' }}>
            { error
              ? <Error/>
              : !trips
                  ? <Loading/>
                  : trips.sort((t1, t2) => new Date(t2.start_date) - new Date(t1.start_date))
                    .map(trip => <TripCard style={{ marginTop: '1em' }} key={ trip.id } trip={ trip }/>)}
            </div>
          </InnerDiv>
      }
    </StyledDiv>
  );
};

export default InfoSideBar;
