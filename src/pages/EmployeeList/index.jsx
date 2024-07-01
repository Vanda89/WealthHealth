import React, { useState, useMemo } from 'react'

import { columns } from '../../utils/columns'
import { employees } from '../../utils/employeesList'
import StaffTable from '../../components/StaffTable'

export default function EmployeeList() {
  return (
    <main className=" flex flex-col items-center justify-center py-44 px-8">
      <h1 className="text-4xl text-custom-green-300 mb-24">
        Current Employees
      </h1>
      <StaffTable columns={columns} rows={employees} />
    </main>
  )
}
