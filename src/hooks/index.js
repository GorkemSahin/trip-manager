import { useEffect, useState, useCallback } from 'react';
import tripSchema from '../constants/tripSchema';
import { useWindowWidth } from '@react-hook/window-size';
import { useLocation } from 'react-router-dom';
import useSWR from 'swr';
import { COUNTRY, TRIP } from '../constants/env';
import { getFlag } from '../assets/icons';

export const useResponsiveness = () => {
  const width = useWindowWidth();
  return {
    isMobile: width < 700,
    hideInfoSideBar: width < 1000
  };
};

export const useTitle = () => {
  const { pathname } = useLocation();
  const [title, setTitle] = useState('Trip Manager');

  useEffect(() => {
    switch (pathname) {
      case '/trip':
        setTitle('Your trips');
        break;
      case '/trip/new':
        setTitle('New trip');
        break;
      default:
        setTitle('View trip');
        break;
    }
  }, [pathname]);

  return title;
};

export const useCountries = () => {
  const { data, error } = useSWR(COUNTRY);
  return { countries: data, error };
};

export const useTrip = (id) => {
  const { data, error } = useSWR(id ? `${TRIP}/${id}` : null);
  return { trip: data, fetchError: error };
};

export const useTrips = () => {
  const { data, error, mutate } = useSWR(TRIP);
  return { trips: data, fetchError: error, mutate };
};

export const useCountryVisuals = (value) => {
  const { countries } = useCountries();
  const [label, setLabel] = useState(value);
  const Flag = getFlag(value);
  useEffect(() => (countries && value) && setLabel(countries.find(c => c.value === value).label), [countries, value]);
  return { label, Flag };
};

export const useTripValidation = () =>
  useCallback(
    async data => {
      try {
        const values = await tripSchema.validate(data, {
          abortEarly: false
        });
        return {
          values,
          errors: {}
        };
      } catch (errors) {
        return {
          values: {},
          errors: errors.inner.reduce(
            (allErrors, currentError) => ({
              ...allErrors,
              [currentError.path]: {
                type: currentError.type ?? 'validation',
                message: currentError.message
              }
            }),
            {}
          )
        };
      }
    }, [tripSchema]
  );
