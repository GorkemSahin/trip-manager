import React from 'react'
import Loading from '../../components/placeholders/loading'
import Error from '../../components/placeholders/error'
import Tips from '../../components/placeholders/tips'
import { useResponsiveness, useTitle, useTrips } from 'utils/hooks'
import { StyledDiv, InnerDiv } from './styled'
import Trip from '../../containers/trip'

const InfoSideBar = ({ ...rest }) => {
  const { hideInfoSideBar } = useResponsiveness()
  const title = useTitle()
  const { trips, error } = useTrips()

  return (
    <StyledDiv hide={hideInfoSideBar} {...rest}>
      {title === 'Your trips' ? (
        <Tips />
      ) : (
        <InnerDiv>
          <h2>Your trips</h2>
          {error ? (
            <Error />
          ) : !trips ? (
            <Loading />
          ) : (
            trips
              .sort(
                (t1, t2) => new Date(t2.start_date) - new Date(t1.start_date)
              )
              .map((trip) => (
                <Trip
                  narrow
                  key={trip.id}
                  trip={trip}
                  style={{ marginTop: '1em' }}
                />
              ))
          )}
        </InnerDiv>
      )}
    </StyledDiv>
  )
}

export default InfoSideBar
