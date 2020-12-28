import React from 'react';
import { useDispatch } from 'react-redux';
import { useForm, Controller } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { actions } from '../../../appState/trip';
import Button from '../../../components/button';
import { CovidDiv, RadioGroup, FieldDiv, StyledForm } from './styled';
import { Yes } from '../../../assets/icons';
import Label from '../../../components/label';
import TextInput from '../../../components/textInput';
import CountrySelector from '../../../containers/countrySelector';
import DatePicker from '../../../components/datePicker';
import RadioButton from '../../../components/radioButton';

// TODO improve the way trip object is formed
// TODO city shouldn't be a number
const TripDetails = () => {
  const history = useHistory();
  const { register, control, handleSubmit, watch } = useForm();
  const dispatch = useDispatch();
  const onSuccess = () => history.push('/trip');
  const onFail = () => console.log('Fail log from TRIP DETAILS');
  const onSubmit = data => {
    console.log(data);
    dispatch(actions.postTrip({ ...data, covid: data.covid === 'true' }, onSuccess, onFail));
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
              onChange={onChange}
            />
          )}
        />
        <Label>End date</Label>
        <Controller
          control={ control }
          name="end_date"
          render={({ onChange, value }) => (
            <DatePicker
              onChange={onChange}
            />
          )}
        />
      </FieldDiv>
      <FieldDiv>
        <Label>Company name</Label>
        <TextInput name='company_name' inputRef={register}/>
        <Label>City</Label>
        <TextInput type='number' name='address.city' inputRef={register({ valueAsNumber: true })}/>
        <Label>Street</Label>
        <TextInput name='address.street' inputRef={register}/>
        <Label>Street number</Label>
        <TextInput type='number' name='address.street_num' inputRef={register({ valueAsNumber: true })}/>
        <Label>Zip code</Label>
        <TextInput name='address.zip' inputRef={register}/>
      </FieldDiv>
      <FieldDiv>
        <Label>Have you been recently tested for COVID-19?</Label>
        <RadioGroup>
          <RadioButton name='covid' inputRef={register} title='Yes' value={ true }/>
          <RadioButton name='covid' inputRef={register} title='No' value={ false }/>
        </RadioGroup>
        { watchCovid === 'true' && <CovidDiv>
          <Label>Date of receiving test results</Label>
          <Controller
            control={ control }
            name="covid_test_date"
            render={({ onChange, value }) => (
              <DatePicker
                onChange={onChange}
                selected={value}
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
