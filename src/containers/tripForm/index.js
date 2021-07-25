import React, { useState, useEffect, useRef } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { Button } from '../../components/button/Button'
import { CovidDiv, FieldSet, StyledForm, StyledRadioGroup } from './styled'
import { Yes } from '../../assets/icons'
import TextInput from '../../components/textInput'
import CountrySelector from '../../containers/countrySelector'
import DatePicker from '../../components/datePicker'
import RadioButton from '../../components/radioButton'
import { numericDate } from '../../utils'
import { useTripValidation } from 'utils/hooks'
import Field from '../../components/field'

const TripForm = ({ trip, editable, onSubmit }) => {
  const resolver = useTripValidation()
  const { register, control, handleSubmit, watch, errors, reset, formState } =
    useForm({
      resolver,
    })
  const isLoading = formState.isSubmitting || formState.isValidating

  // To be able to scroll to controlled components without an input element that can receive focus
  const countryRef = useRef()
  const datesRef = useRef()

  useEffect(() => reset(trip), [trip, reset])

  const submit = async (data) => {
    await onSubmit(data)
  }

  const watchCovid = watch('covid')

  return (
    <div>
      <StyledForm onSubmit={handleSubmit(submit)}>
        <FieldSet ref={countryRef} disabled={!editable || isLoading}>
          <Field
            label="Where do you want to go?"
            error={errors.address?.country}
          >
            <Controller
              control={control}
              name="address.country"
              onFocus={() => countryRef.current.scrollIntoView()}
              render={({ onChange, value }) => (
                <CountrySelector onChange={onChange} value={value} />
              )}
            />
          </Field>
        </FieldSet>
        <FieldSet ref={datesRef} disabled={!editable || isLoading}>
          <Field label="Start date" error={errors.start_date}>
            <Controller
              control={control}
              onFocus={() => datesRef.current.scrollIntoView()}
              name="start_date"
              render={({ onChange, value }) => (
                <DatePicker
                  onChange={onChange}
                  value={value ? numericDate(value) : null}
                />
              )}
            />
          </Field>
          <Field label="End date" error={errors.end_date}>
            <Controller
              control={control}
              name="end_date"
              onFocus={() => datesRef.current.scrollIntoView()}
              render={({ onChange, value }) => (
                <DatePicker
                  onChange={onChange}
                  value={value ? numericDate(value) : null}
                />
              )}
            />
          </Field>
        </FieldSet>
        <FieldSet disabled={!editable || isLoading}>
          <Field label="Company name" error={errors.company_name}>
            <TextInput type="text" name="company_name" inputRef={register} />
          </Field>
          <Field label="City" error={errors.address?.city}>
            <TextInput type="text" name="address.city" inputRef={register} />
          </Field>
          <Field label="Street" error={errors.address?.street}>
            <TextInput type="text" name="address.street" inputRef={register} />
          </Field>
          <Field label="Street number" error={errors.address?.street_num}>
            <TextInput
              type="number"
              name="address.street_num"
              inputRef={register({ valueAsNumber: true })}
            />
          </Field>
          <Field label="Zip code" error={errors.address?.zip}>
            <TextInput type="text" name="address.zip" inputRef={register} />
          </Field>
        </FieldSet>
        <FieldSet disabled={!editable || isLoading}>
          <Field
            label="Have you been recently tested for COVID-19?"
            error={errors.covid}
          >
            <Controller
              control={control}
              name="covid"
              render={({ onChange, value }) => (
                <StyledRadioGroup
                  name="covid"
                  selectedValue={value}
                  onChange={onChange}
                >
                  <RadioButton label="Yes" value={true} />
                  <RadioButton label="No" value={false} />
                </StyledRadioGroup>
              )}
            />
          </Field>
          {watchCovid && (
            <CovidDiv>
              <Field
                label="Date of receiving test results"
                error={errors.covid_test_date}
              >
                <Controller
                  control={control}
                  name="covid_test_date"
                  render={({ onChange, value }) => (
                    <DatePicker
                      onChange={onChange}
                      value={value ? numericDate(value) : null}
                    />
                  )}
                />
              </Field>
            </CovidDiv>
          )}
        </FieldSet>
        {editable && (
          <Button
            icon={<Yes />}
            isLoading={isLoading}
            mode="primary"
            type="submit"
          >
            Save
          </Button>
        )}
      </StyledForm>
    </div>
  )
}

export default TripForm
