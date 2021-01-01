import * as yup from 'yup';

const tripSchema = yup.object().shape({
  start_date: yup.date().min(new Date(), 'Start date can not be earlier than today.')
    .required('Please select a start date.'),
  end_date: yup.date().min(yup.ref('start_date'), 'End date can not be earlier than start date')
    .required('Please select an end date.'),
  covid: yup.boolean().required('COVID-19 test is necessary.').oneOf([true], 'COVID-19 test is necessary.'),
  covid_test_date: yup.date().max(new Date(), 'Test date can not be later than today.')
    .required('Please select a date'),
  company_name: yup.string().required('Please enter the company name.'),
  address: yup.object().shape({
    country: yup.string().required('Please select a country.'),
    zip: yup.string().required('Please enter the zip code.')
  })
});

export default tripSchema;
