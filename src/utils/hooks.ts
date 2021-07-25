import { useState, useCallback, useEffect, useRef } from 'react'
import { useWindowWidth } from '@react-hook/window-size'
import { useLocation } from 'react-router-dom'
import useSWR from 'swr'
import { COUNTRY, TRIP } from '../constants/env'
import { getFlag } from '../assets/icons'
import { tripSchema, parseErrorSchema } from '../utils'
import { transformToNestObject } from 'react-hook-form'
import { Country, TripResponseShape } from 'constants/types'

export const useIsMounted = () => {
  const mounted = useRef<boolean>()

  useEffect(() => {
    mounted.current = true

    return () => {
      mounted.current = false
    }
  }, [])

  return mounted
}

export const useLoadingCallback = (
  callback: (...args: any[]) => void
): [typeof callback, boolean] => {
  const [loading, setLoading] = useState<boolean>(false)
  const isMounted = useIsMounted()

  const loadingCallback = useCallback(
    (...args) => {
      setLoading(true)
      ;(async () => {
        try {
          await callback(...args)
        } finally {
          if (isMounted.current) setLoading(false)
        }
      })()
    },
    [callback, isMounted]
  )

  return [loadingCallback, loading]
}

export const useResponsiveness = () => {
  const width = useWindowWidth()
  return {
    isMobile: width < 700,
    hideInfoSideBar: width < 1200,
  }
}

export const useTitle = () => {
  const { pathname } = useLocation()
  const [title, setTitle] = useState<string>()

  useEffect(() => {
    switch (pathname) {
      case '/trip':
        setTitle('Your trips')
        break
      case '/trip/new':
        setTitle('New trip')
        break
      default:
        setTitle('View trip')
        break
    }
  }, [pathname])

  return title
}

export const useCountries = () => {
  const { data, error } = useSWR<Country[]>(COUNTRY)
  return { countries: data, error }
}

export const useTrip = (id: number | string) => {
  const { data, error, mutate } = useSWR<TripResponseShape>(`${TRIP}/${id}`)
  return { trip: data, fetchError: error, mutate }
}

export const useTrips = () => {
  const { data, error, mutate } = useSWR<TripResponseShape[]>(TRIP)
  return { trips: data, fetchError: error, mutate }
}

export const useCountryVisuals = (value: string) => {
  const { countries } = useCountries()
  const [label, setLabel] = useState<string | undefined>(value)
  const Flag = getFlag(value)
  const country = countries?.find((c) => c.value === value)
  useEffect(() => setLabel(country?.label), [country])
  return { label, Flag }
}

export const useTripValidation = () =>
  useCallback(async (data) => {
    try {
      const values = await tripSchema.validate(data, {
        abortEarly: false,
      })
      return {
        values,
        errors: {},
      }
    } catch (errors) {
      const parsedErrors = parseErrorSchema(errors)
      return {
        values: {},
        errors: transformToNestObject(parsedErrors),
      }
    }
  }, [])
