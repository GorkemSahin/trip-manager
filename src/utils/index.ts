import { object, date, ref, boolean, string } from 'yup'

export const verbalDate = (date: string) =>
  new Date(date).toLocaleString('en-GB', { month: 'short', day: 'numeric' })

export const numericDate = (date: string) =>
  new Date(date).toLocaleString('en-GB', {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
  })

export const tripSchema = object().shape({
  start_date: date()
    .min(new Date(), 'Start date can not be earlier than today.')
    .required('Please select a start date.'),
  end_date: date()
    .min(ref('start_date'), 'End date can not be earlier than start date')
    .required('Please select an end date.'),
  covid: boolean()
    .required('COVID-19 test is necessary.')
    .oneOf([true], 'COVID-19 test is necessary.'),
  covid_test_date: date()
    .max(new Date(), 'Test date can not be later than today.')
    .required('Please select a date'),
  company_name: string().required('Please enter the company name.'),
  address: object().shape({
    country: string().required('Please select a country.'),
    zip: string().required('Please enter the zip code.'),
  }),
})

export const parseErrorSchema = (error: {
  inner: unknown[]
  path: never
  message: unknown
  type: unknown
}) => {
  return Array.isArray(error.inner) && error.inner.length
    ? error.inner.reduce((previous, { path, message, type }) => {
        const previousTypes = (previous[path] && previous[path].types) || {}
        const key = path || type
        return {
          ...previous,
          ...(key
            ? {
                [key]: {
                  ...(previous[key] || {
                    message,
                    type,
                  }),
                  types: {
                    ...previousTypes,
                    [type]: previousTypes[type]
                      ? [...[].concat(previousTypes[type]), message]
                      : message,
                  },
                },
              }
            : {}),
        }
      }, {})
    : { [error.path]: { message: error.message, type: error.type } }
}
