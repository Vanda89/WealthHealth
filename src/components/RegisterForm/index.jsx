import React, { useState, useEffect } from 'react'
import FloatingLabel from '../../components/FloatingLabel'
import DatePicker from '../../components/Datepicker'
import Dropdown from '../../components/Dropdown'
import { Select, Option } from '@material-tailwind/react'
import { useSelector, useDispatch } from 'react-redux'
import { addUser } from '../../store/slices/userSlice'

export default function RegisterForm({ dropdownData }) {
  const dispatch = useDispatch()
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    startDate: '',
    dateOfBirth: '',
    street: '',
    city: '',
    state: '',
    zipCode: '',
    department: '',
    errors: {},
  })

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
    if (!formData.firstName) {
      errors.firstName = 'First name is required'
    }
    if (!formData.lastName) {
      errors.lastName = 'Last name is required'
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
    if (!formData.state) {
      errors.state = 'State is required'
    }
    if (!formData.zipCode) {
      errors.zipCode = 'ZipCode is required'
    }
    if (!formData.department) {
      errors.department = 'Department is required'
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

    const user = {
      ...formData,
      startDate: formData.startDate.toISOString().split('T')[0],
      dateOfBirth: formData.dateOfBirth.toISOString().split('T')[0],
    }

    console.log(user)
    dispatch(addUser(user))
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col w-full md:w-10/12 lg:w-8/12 xl:w-6/12 p-12 rounded-xl border-3 border-custom-gray-400 bg-white gap-8"
    >
      <div className="identifiers flex gap-6">
        <FloatingLabel
          id="firstName"
          label="First Name"
          type="text"
          value={formData.firstName}
          onChange={(e) => handleFieldChange(e, 'firstName')}
          errorMessage={formData.errors.firstName}
        />

        <FloatingLabel
          id="lastName"
          label="Last Name"
          type="text"
          value={formData.lastName}
          onChange={(e) => handleFieldChange(e, 'lastName')}
          errorMessage={formData.errors.lastName}
        />
      </div>

      <DatePicker
        className="startDate"
        label="Start Date"
        onChange={(startDate) =>
          handleFieldChange(
            { target: { name: 'startDate', value: startDate } },
            'startDate',
          )
        }
        errorMessage={formData.errors.startDate}
      />

      <DatePicker
        className="dateOfBirth"
        label="Date of Birth"
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
        items={dropdownData.states.map((state) => state.name)}
        onChange={(states) =>
          handleFieldChange(
            { target: { name: 'state', value: states } },
            'state',
          )
        }
        errorMessage={formData.errors.state}
      />

      <FloatingLabel
        id="zipCode"
        label="Zip Code"
        type="number"
        value={formData.zipCode}
        onChange={(e) => handleFieldChange(e, 'zipCode')}
        errorMessage={formData.errors.zipCode}
      />

      <div className="department">
        <Dropdown
          label="Department"
          items={dropdownData.departments}
          onChange={(department) =>
            handleFieldChange(
              { target: { name: 'department', value: department } },
              'department',
            )
          }
          errorMessage={formData.errors.department}
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
