import { useEffect, useState, useCallback } from 'react';
import { useWindowWidth } from '@react-hook/window-size';
import { useLocation } from 'react-router-dom';
import useSWR from 'swr';
import { COUNTRY, TRIP } from '../constants/env';
import { getFlag } from '../assets/icons';
import { tripSchema, parseErrorSchema } from '../utils';
import { transformToNestObject } from 'react-hook-form';

export const useResponsiveness = () => {
  const width = useWindowWidth();
  return {
    isMobile: width < 700,
    hideInfoSideBar: width < 1200
  };
};

export const useTitle = () => {
  const { pathname } = useLocation();
  const [title, setTitle] = useState();

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
  const { data, error, mutate } = useSWR(`${TRIP}/${id}`);
  return { trip: data, fetchError: error, mutate };
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
        const parsedErrors = parseErrorSchema(errors);
        console.log(parsedErrors);
        return {
          values: {},
          errors: transformToNestObject(parsedErrors)
        };
      }
    }, [tripSchema]
  );
