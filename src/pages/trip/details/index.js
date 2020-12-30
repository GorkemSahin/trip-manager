/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { api } from '../../../api';
import Button from '../../../components/button';
import { CovidDiv, FieldDiv, StyledForm, StyledRadioGroup } from './styled';
import { Yes } from '../../../assets/icons';
import Label from '../../../components/label';
import TextInput from '../../../components/textInput';
import CountrySelector from '../../../containers/countrySelector';
import DatePicker from '../../../components/datePicker';
import RadioButton from '../../../components/radioButton';
import { useParams, useLocation, useHistory } from 'react-router-dom';
import { numericDate } from '../../../utils';
import { mutate } from 'swr';
import { useTrip } from '../../../hooks';

// TODO improve the way trip object is formed
// TODO validation
// TODO skeleton while loading
const TripDetails = () => {
  const history = useHistory();
  const { id } = useParams();
  const [editable, setEditable] = useState(!id);
  const { trip, error } = useTrip(id);
  const { register, control, handleSubmit, watch, reset } = useForm();
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
      // TODO mutate
      mutate('trip');
    } catch (e) {
      console.log(e);
    }
  };
  const watchCovid = watch('covid');

  return (
    <div style={{ alignSelf: 'center' }}>
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <FieldDiv>
        <Label>Where do you want to go?</Label>
        <Controller
          control={ control }
          name="address.country"
          render={({ onChange, value }) => (
            <CountrySelector
              onChange={ onChange }
              value={ value }
            />
          )}
        />
      </FieldDiv>
      <FieldDiv>
        <Label>Start date</Label>
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
        <Label>End date</Label>
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
      </FieldDiv>
      <FieldDiv>
        <Label>Company name</Label>
        <TextInput type='text' name='company_name' inputRef={register}/>
        <Label>City</Label>
        <TextInput type='text' name='address.city' inputRef={register}/>
        <Label>Street</Label>
        <TextInput type='text' name='address.street' inputRef={register}/>
        <Label>Street number</Label>
        <TextInput type='number' name='address.street_num' inputRef={register({ valueAsNumber: true })}/>
        <Label>Zip code</Label>
        <TextInput type='text' name='address.zip' inputRef={register}/>
      </FieldDiv>
      <FieldDiv>
        <Label>Have you been recently tested for COVID-19?</Label>
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
        { watchCovid && <CovidDiv>
          <Label>Date of receiving test results</Label>
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
          </CovidDiv>
        }
      </FieldDiv>
      <Button primary type='submit' text='Save' icon={ <Yes/> }>
      </Button>
    </StyledForm>
    </div>
  );
};

export default TripDetails;
