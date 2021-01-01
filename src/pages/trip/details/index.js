/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { api } from '../../../api';
import Button from '../../../components/button';
import { CovidDiv, FieldDiv, StyledForm, StyledRadioGroup } from './styled';
import { Yes } from '../../../assets/icons';
import TextInput from '../../../components/textInput';
import CountrySelector from '../../../containers/countrySelector';
import DatePicker from '../../../components/datePicker';
import RadioButton from '../../../components/radioButton';
import { useParams, useLocation, useHistory } from 'react-router-dom';
import { numericDate, tripSchema } from '../../../utils';
import { mutate } from 'swr';
import { useTrip, useTripValidation } from '../../../hooks';
import Field from '../../../components/field';

// TODO improve the way trip object is formed
// TODO validation
// TODO skeleton while loading
const TripDetails = () => {
  const history = useHistory();
  const { id } = useParams();
  const [editable, setEditable] = useState(!id);
  const { trip, error } = useTrip(id);
  const resolver = useTripValidation();
  const { register, control, handleSubmit, watch, reset, errors } = useForm({ resolver });
  useEffect(() => {
    if (trip) {
      reset(trip);
      if (trip.start_date > new Date()) setEditable(true);
    } else {
      console.log('resetle..');
      reset({ });
    }
  }, [trip]);

  const onSubmit = async (data) => {
    console.log(data);
    try {
      await id ? api.put(`trip/${id}`, data) : api.post('trip', data);
      history.push('/trip');
      // TODO inject changes and mutate
      mutate('trip');
    } catch (e) {
      console.log(e);
    }
  };
  const watchCovid = watch('covid');

  return (
    <div style={{ display: 'flex', alignSelf: 'center' }}>
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <FieldDiv>
        <Field label='Where do you want to go?' error={ errors['address.country'] }>
          <Controller
            control={ control }
            name='address.country'
            render={({ onChange, value }) => (
              <CountrySelector
                onChange={ onChange }
                value={ value }
              />
            )}
          />
        </Field>
      </FieldDiv>
      <FieldDiv>
        <Field label='Start date' error={ errors.start_date }>
          <Controller
            control={ control }
            name="start_date"
            render={({ onChange, value }) => (
              <DatePicker
                onChange={ onChange }
                value={ value ? numericDate(value) : null }
              />
            )}
          />
        </Field>
        <Field label='End date' error={ errors.end_date }>
          <Controller
            control={ control }
            name="end_date"
            render={({ onChange, value }) => (
              <DatePicker
                onChange={ onChange }
                value={ value ? numericDate(value) : null }
              />
            )}
          />
        </Field>
      </FieldDiv>
      <FieldDiv>
        <Field label='Company name' error={ errors.company_name }>
          <TextInput type='text' name='company_name' inputRef={register}/>
        </Field>
        <Field label='City' error={ errors['address.city'] }>
          <TextInput type='text' name='address.city' inputRef={register}/>
        </Field>
        <Field label='Street' error={ errors['address.street'] }>
          <TextInput type='text' name='address.street' inputRef={register}/>
        </Field>
        <Field label='Street number' error={ errors['address.street_num'] }>
          <TextInput type='number' name='address.street_num' inputRef={register({ valueAsNumber: true })}/>
        </Field>
        <Field label='Zip code' error={ errors['address.zip'] }>
          <TextInput type='text' name='address.zip' inputRef={register}/>
        </Field>
      </FieldDiv>
      <FieldDiv>
        <Field label='Have you been recently tested for COVID-19?' error={ errors.covid }>
          <Controller
            control={ control }
            name="covid"
            render={({ onChange, value }) => (
              <StyledRadioGroup
                name='covid'
                selectedValue={ value }
                onChange={ onChange }>
                <RadioButton label='Yes' value={ true }/>
                <RadioButton label='No' value={ false }/>
            </StyledRadioGroup>
            )}
          />
        </Field>
        { watchCovid && <CovidDiv>
          <Field label='Date of receiving test results' error={ errors.covid_test_date }>
            <Controller
              control={ control }
              name="covid_test_date"
              render={({ onChange, value }) => (
                <DatePicker
                  onChange={ onChange}
                  value={ value ? numericDate(value) : null }
                />
              )}
            />
          </Field>
        </CovidDiv> }
      </FieldDiv>
      <Button mode='primary' type='submit' text='Save' icon={ <Yes/> }>
      </Button>
    </StyledForm>
    </div>
  );
};

export default TripDetails;
