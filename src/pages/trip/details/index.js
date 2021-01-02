/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { api, post } from '../../../api';
import Button from '../../../components/button';
import { CovidDiv, FieldSet, StyledForm, StyledRadioGroup, ErrorSpan } from './styled';
import { Yes } from '../../../assets/icons';
import TextInput from '../../../components/textInput';
import CountrySelector from '../../../containers/countrySelector';
import DatePicker from '../../../components/datePicker';
import RadioButton from '../../../components/radioButton';
import { useParams, useHistory } from 'react-router-dom';
import { numericDate } from '../../../utils';
import { useTrip, useTripValidation } from '../../../hooks';
import Field from '../../../components/field';
import { TRIP } from '../../../constants/env';

// TODO skeleton while loading
const TripDetails = () => {
  const history = useHistory();
  const resolver = useTripValidation();
  const { register, control, handleSubmit, watch, reset, errors } = useForm({ resolver });
  const { id } = useParams();
  const [editable, setEditable] = useState(!id);
  const [isLoading, setIsLoading] = useState(false);
  const [callError, setCallError] = useState(null);
  const { trip, error } = useTrip(id);

  useEffect(() => {
    setEditable(false);
    if (trip) {
      reset(trip);
      (new Date(trip.start_date) > new Date()) && setEditable(true);
    } else {
      reset({ });
      setEditable(true);
    }
  }, [trip]);

  const onSubmit = async (data) => {
    setIsLoading(true);
    try {
      const resp = await post(id, data);
      history.push(TRIP);
    } catch (e) {
      setCallError('An error occured.');
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  };

  const watchCovid = watch('covid');

  console.log('id: ' + id + ' editable: ' + editable);

  return (
    <div style={{ display: 'flex', alignSelf: 'center' }}>
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <FieldSet disabled={ !editable || isLoading }>
        <Field label='Where do you want to go?' error={ errors['address.country'] }>
          <Controller
            control={ control }
            name='address.country'
            defaultValue={ null }
            render={({ onChange, value }) => (
              <CountrySelector
                onChange={ onChange }
                value={ value }
              />
            )}
          />
        </Field>
      </FieldSet>
      <FieldSet disabled={ !editable || isLoading }>
        <Field label='Start date' error={ errors.start_date }>
          <Controller
            control={ control }
            name="start_date"
            defaultValue={ null }
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
            defaultValue={ null }
            render={({ onChange, value }) => (
              <DatePicker
                onChange={ onChange }
                value={ value ? numericDate(value) : null }
              />
            )}
          />
        </Field>
      </FieldSet>
      <FieldSet disabled={ !editable || isLoading }>
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
      </FieldSet>
      <FieldSet disabled={ !editable || isLoading }>
        <Field label='Have you been recently tested for COVID-19?' error={ errors.covid }>
          <Controller
            control={ control }
            name="covid"
            defaultValue={ null }
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
              defaultValue={ null }
              render={({ onChange, value }) => (
                <DatePicker
                  onChange={ onChange}
                  value={ value ? numericDate(value) : null }
                />
              )}
            />
          </Field>
        </CovidDiv> }
      </FieldSet>
      { callError && <ErrorSpan>{ callError }</ErrorSpan>}
      { editable && <Button loading={ isLoading } mode='primary' type='submit' text='Save' icon={ <Yes/> }/> }
    </StyledForm>
    </div>
  );
};

export default TripDetails;
