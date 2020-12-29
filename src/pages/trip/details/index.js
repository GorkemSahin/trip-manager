/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import axios from '../../../utils/axios';
import Button from '../../../components/button';
import { CovidDiv, FieldDiv, StyledForm, StyledRadioGroup } from './styled';
import { Yes } from '../../../assets/icons';
import Label from '../../../components/label';
import TextInput from '../../../components/textInput';
import CountrySelector from '../../../containers/countrySelector';
import DatePicker from '../../../components/datePicker';
import RadioButton from '../../../components/radioButton';
import { useParams, useLocation } from 'react-router-dom';
import { numericDate } from '../../../utils/helpers';

// TODO improve the way trip object is formed
const TripDetails = () => {
  const { id } = useParams();
  const { state } = useLocation();
  console.log(state);
  const { register, control, handleSubmit, watch } = useForm({ defaultValues: state });
  const onSubmit = async (data) => {
    console.log(data);
    try {
      await id ? axios.put(`trip/${id}`, data) : axios.post('trip', data);
    } catch (e) {
      console.log(e);
    }
  };
  const watchCovid = watch('covid');

  return (
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
              onChange={ onChange}
              initialValue={ value ? numericDate(value) : null }
            />
          )}
        />
        <Label>End date</Label>
        <Controller
          control={ control }
          name="end_date"
          render={({ onChange, value }) => (
            <DatePicker
              onChange={ onChange}
              initialValue={ numericDate(value) }
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
              horizontal
              value={ value.toString() }
              onChange={(value) => onChange(value === 'true')}>
              <RadioButton name='covid' label='Yes' value={ 'true' }/>
              <RadioButton name='covid' label='No' value={ 'false' }/>
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
                initialValue={ numericDate(value) }
              />
            )}
          />
          </CovidDiv>
        }
      </FieldDiv>
      <Button primary type='submit' text='Save' icon={ <Yes/> }>
      </Button>
    </StyledForm>
  );
};

export default TripDetails;
