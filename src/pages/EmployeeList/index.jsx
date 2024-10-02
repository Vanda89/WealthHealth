import React, { useState, useMemo } from 'react'
import { selectUsers } from '../../store/slices/selectors'
import { useSelector } from 'react-redux'
import { columns } from '../../utils/columns'
import StaffTable from '../../components/StaffTable'
import { v4 as uuidv4 } from 'uuid'

export default function EmployeeList() {
  const usersWithIds = useSelector(selectUsers).map((user) => ({
    ...user,
    id: uuidv4(),
  }))

  return (
    <main className=" flex flex-col items-center justify-center py-44 px-8">
      <h1 className="text-4xl text-custom-green-300 mb-24">
        Current Employees
      </h1>
      <StaffTable columns={columns} rows={usersWithIds} />
    </main>
  )
}
