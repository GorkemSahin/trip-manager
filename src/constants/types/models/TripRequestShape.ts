/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type TripRequestShape = {
  start_date: string
  end_date: string
  company_name: string
  address: {
    street?: string
    street_num?: string
    city?: string
    country: string
    zip: string
  }
  covid: boolean
  covid_test_date?: string
}
