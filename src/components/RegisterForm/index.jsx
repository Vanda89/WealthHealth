import React, { useState, useEffect } from 'react'
import FloatingLabel from '../../components/FloatingLabel'
import DatePicker from '../../components/Datepicker'
import Dropdown from '../../components/Dropdown'
import { Select, Option } from '@material-tailwind/react'
import { useSelector, useDispatch } from 'react-redux'
import { addUser } from '../../store/slices/userSlice'

export default function RegisterForm({ dropdownData, onFormSubmit }) {
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
    if (e.target) {
      const { name, value } = e.target
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
        errors: {
          ...prevState.errors,
          [name]: value ? '' : prevState.errors[name],
        },
      }))
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [fieldName]: e,
        errors: {
          ...prevState.errors,
          [fieldName]: e ? '' : prevState.errors[fieldName],
        },
      }))
    }
  }
  const validateForm = (formData) => {
    const errors = {}
    if (!formData.firstName) {
      errors.firstName = 'First name is required'
    } else if (!/^[a-zA-Z]+$/.test(formData.firstName)) {
      errors.firstName = 'First name can only contain letters'
    } else if (formData.firstName.length < 3) {
      errors.firstName = 'First name must be at least 3 characters long'
    }

    if (!formData.lastName) {
      errors.lastName = 'Last name is required'
    } else if (!/^[a-zA-Z]+$/.test(formData.lastName)) {
      errors.lastName = 'Last name can only contain letters'
    } else if (formData.lastName.length < 3) {
      errors.lastName = 'Last name must be at least 3 characters long'
    }

    if (!formData.startDate) {
      errors.startDate = 'Date of contrat beginning is required'
    }

    if (!formData.dateOfBirth) {
      errors.dateOfBirth = 'Date of birth is required'
    } else {
      const dateOfBirth = new Date(formData.dateOfBirth)
      const currentDate = new Date()
      const minDateOfBirth = new Date()
      minDateOfBirth.setFullYear(currentDate.getFullYear() - 15) // Calculating the date 15 years ago

      if (dateOfBirth > currentDate) {
        errors.dateOfBirth = 'The date of birth must be in the past'
      } else if (dateOfBirth > minDateOfBirth) {
        errors.dateOfBirth = 'The date of birth must be at least 15 years old'
      }
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

  const handleFormReset = () => {
    setFormData((prevState) => ({
      ...prevState,
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
    }))
  }

  const handleFormSubmit = (e) => {
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

    dispatch(addUser(user))
    handleFormReset()
    window.scrollTo({ top: 0, behavior: 'smooth' })

    // Call onFormSubmit callback function to open the confirmation dialog modal
    onFormSubmit()
  }

  return (
    <form
      onSubmit={handleFormSubmit}
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
        value={formData.startDate}
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
        value={formData.dateOfBirth}
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
        id="state"
        label="States"
        items={dropdownData.states.map((state) => state.name)}
        value={formData.state}
        onChange={(e) => handleFieldChange(e, 'state')}
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
          id="department"
          label="Department"
          items={dropdownData.departments}
          value={formData.department}
          onChange={(e) => handleFieldChange(e, 'department')}
          errorMessage={formData.errors.department}
        />
      </div>

      <button
        type="submit"
        className=" w-full mx-auto md:w-32 py-3 rounded-md font-bold bg-custom-green-300 "
      >
        Save
      </button>
    </form>
  )
}
