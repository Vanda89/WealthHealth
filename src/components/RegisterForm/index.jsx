import React, { useState, useEffect } from 'react'
import FloatingLabel from '../../components/FloatingLabel'
import DatePicker from '../../components/Datepicker'
import Dropdown from '../../components/Dropdown'
import FormatData from '../../utils/formatData'
import { Select, Option } from '@material-tailwind/react'
import { data } from '../../utils/dropdownData'

export default function RegisterForm() {
  const statesData = data.states
  const formatData = new FormatData(statesData)
  const statesNames = formatData.formatStatesNames()

  const departmentsData = data.departments

  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    startDate: '',
    dateOfBirth: '',
    street: '',
    city: '',
    stateSelected: '',
    zipcode: '',
    departmentSelected: '',
    errors: {},
  })

  useEffect(() => {
    console.log(formData)
  }, [formData])

  const handleFieldChange = (e, fieldName) => {
    const { name, value } = e.target || { name: fieldName, value }
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
      errors: {
        ...prevState.errors,
        [name]: value ? '' : prevState.errors[name],
      },
    }))
  }
  const validateForm = (formData) => {
    const errors = {}

    if (!formData.firstname) {
      errors.firstname = 'First name is required'
    }

    if (!formData.lastname) {
      errors.lastname = 'Last name is required'
    }

    if (!formData.startDate) {
      errors.startDate = 'Date of contrat beginning is required'
    }

    if (!formData.dateOfBirth) {
      errors.dateOfBirth = 'Date of birth is required'
    }

    if (!formData.street) {
      errors.street = 'Street is required'
    }

    if (!formData.city) {
      errors.city = 'City is required'
    }

    if (!formData.stateSelected) {
      errors.stateSelected = 'State is required'
    }

    if (!formData.zipcode) {
      errors.zipcode = 'Zipcode is required'
    }

    if (!formData.departmentSelected) {
      errors.departmentSelected = 'Department is required'
    }

    return errors
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const validationErrors = validateForm(formData)

    if (Object.keys(validationErrors).length > 0) {
      setFormData((prevState) => ({
        ...prevState,
        errors: validationErrors,
      }))

      return
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col w-full md:w-10/12 lg:w-8/12 xl:w-6/12 p-12 rounded-xl border-3 border-custom-gray-400 bg-white gap-8"
    >
      <div className="identifiers flex gap-6">
        <FloatingLabel
          id="firstname"
          label="First Name"
          type="text"
          value={formData.firstname}
          onChange={(e) => handleFieldChange(e, 'firstname')}
          errorMessage={formData.errors.firstname}
        />

        <FloatingLabel
          id="lastname"
          label="Last Name"
          type="text"
          value={formData.lastname}
          onChange={(e) => handleFieldChange(e, 'lastname')}
          errorMessage={formData.errors.lastname}
        />
      </div>

      <DatePicker
        onChange={(startDate) =>
          handleFieldChange(
            { target: { name: 'startDate', value: startDate } },
            'startDate',
          )
        }
        errorMessage={formData.errors.startDate}
      />

      <DatePicker
        onChange={(date) =>
          handleFieldChange(
            { target: { name: 'dateOfBirth', value: date } },
            'dateOfBirth',
          )
        }
        errorMessage={formData.errors.dateOfBirth}
      />

      <FloatingLabel
        id="street"
        label="Street"
        type="text"
        value={formData.street}
        onChange={(e) => handleFieldChange(e, 'street')}
        errorMessage={formData.errors.street}
      />
      <FloatingLabel
        id="city"
        label="City"
        type="text"
        value={formData.city}
        onChange={(e) => handleFieldChange(e, 'city')}
        errorMessage={formData.errors.city}
      />
      <Dropdown
        label="States"
        items={statesNames}
        onChange={(states) =>
          handleFieldChange(
            { target: { name: 'stateSelected', value: states } },
            'stateSelected',
          )
        }
        errorMessage={formData.errors.stateSelected}
      />
      <FloatingLabel
        id="zipcode"
        label="Zip Code"
        type="number"
        value={formData.zipcode}
        onChange={(e) => handleFieldChange(e, 'zipcode')}
        errorMessage={formData.errors.zipcode}
      />

      <div className="department">
        <Dropdown
          label="Department"
          items={departmentsData}
          onChange={(department) =>
            handleFieldChange(
              { target: { name: 'departmentSelected', value: department } },
              'departmentSelected',
            )
          }
          errorMessage={formData.errors.departmentSelected}
        />
      </div>

      <button
        type="submit"
        className=" w-full md:w-32 py-3 rounded-md font-bold bg-custom-green-300 "
      >
        Save
      </button>
    </form>
  )
}
