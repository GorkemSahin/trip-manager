import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import Button from '../../../components/button';
import Div from '../../../components/div';
import { RadioGroup, StyledForm } from './styled';
import { Yes } from '../../../assets/icons';
import Label from '../../../components/label';
import TextInput from '../../../components/textInput';
import Select from '../../../components/select';
import DatePicker from '../../../components/datePicker';
import RadioButton from '../../../components/radioButton';

const TripDetails = () => {
  const { register, control, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <Div>
        <Label>Where do you want to go?</Label>
        <Controller
          control={ control }
          name="country"
          render={({ onChange, value }) => (
            <Select
              onChange={onChange}
              selected={value}
            />
          )}
        />
      </Div>
      <Div>
        <Label>Start date</Label>
        <Controller
          control={ control }
          name="startDate"
          render={({ onChange, value }) => (
            <DatePicker
              onChange={onChange}
              selected={value}
            />
          )}
        />
        <Label>End date</Label>
        <Controller
          control={ control }
          name="endDate"
          render={({ onChange, value }) => (
            <DatePicker
              onChange={onChange}
              selected={value}
            />
          )}
        />
      </Div>
      <Div>
        <Label>Company name</Label>
        <TextInput name='company' inputRef={register}/>
        <Label>City</Label>
        <TextInput name='city' inputRef={register}/>
        <Label>Street</Label>
        <TextInput name='street' inputRef={register}/>
        <Label>Street number</Label>
        <TextInput name='no' inputRef={register}/>
        <Label>Zip code</Label>
        <TextInput name='zip' inputRef={register}/>
      </Div>
      <Div>
        <Label>Have you been recently tested for COVID-19?</Label>
        <RadioGroup>
          <RadioButton name='covid' inputRef={register} title='Yes' value={ true }/>
          <RadioButton name='covid' inputRef={register} title='No' value={ false }/>
        </RadioGroup>
      </Div>
      <Button primary type='submit' text='Save' icon={ <Yes/> }>
      </Button>
    </StyledForm>
  );
};

export default TripDetails;
