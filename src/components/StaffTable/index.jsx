import React, { useState, useMemo } from 'react'
import stateCodes from 'us-state-codes'

import { FaMagnifyingGlass } from 'react-icons/fa6'
import { TiArrowSortedUp, TiArrowSortedDown } from 'react-icons/ti'
import { FaPencilAlt } from 'react-icons/fa'
import { HiXMark } from 'react-icons/hi2'
import { FaChevronDown } from 'react-icons/fa'
import { format } from 'date-fns'

import {
  Card,
  CardHeader,
  Typography,
  Button,
  CardBody,
  Chip,
  CardFooter,
  Tabs,
  TabsHeader,
  Tab,
  Avatar,
  IconButton,
  Tooltip,
} from '@material-tailwind/react'

export default function StaffTable({ columns, rows }) {
  const [searchTerm, setSearchTerm] = useState('')
  const [page, setPage] = useState(1)
  const [rowsPerPage, setRowsPerPage] = useState(10)
  const [sortConfig, setSortConfig] = useState({
    direction: 'asc',
    field: 'lastName',
  })

  // Helper functions for formatting dates and state abbreviations
  const formatDate = (date) => {
    if (!date) return ''
    return format(new Date(date), 'dd/MM/yyyy')
  }

  const getStateAbbreviation = (stateName) => {
    return stateCodes.getStateCodeByStateName(stateName.trim()) || stateName
  }

  // Filter, sort, and format logic
  const filteredRows = useMemo(() => {
    return searchTerm === ''
      ? rows
      : rows.filter((row) => {
          const values = [
            row.firstName,
            row.lastName,
            row.startDate,
            row.department,
            row.dateOfBirth,
            row.street,
            row.city,
            row.state,
            row.zipCode,
          ].map((value) => value.toUpperCase())
          return values.some((value) =>
            value.includes(searchTerm.toUpperCase()),
          )
        })
  }, [rows, searchTerm])

  const sortedRows = useMemo(() => {
    return [...filteredRows].sort((a, b) => {
      const valueA = a[sortConfig.field]
      const valueB = b[sortConfig.field]

      return sortConfig.direction === 'asc'
        ? valueA.localeCompare(valueB)
        : valueB.localeCompare(valueA)
    })
  }, [filteredRows, sortConfig])

  const formattedData = useMemo(() => {
    return sortedRows.map((row) => ({
      ...row,
      startDate: formatDate(row.startDate),
      dateOfBirth: formatDate(row.dateOfBirth),
      state: getStateAbbreviation(row.state),
    }))
  }, [sortedRows])

  // Pagination
  const totalEntries = formattedData.length
  const startIndex = (page - 1) * rowsPerPage
  const endIndex = startIndex + rowsPerPage

  const lastIndex = Math.min(endIndex, totalEntries)
  const firstIndex = startIndex + 1

  // Main array of data sorted and formatted
  const currentData = formattedData.slice(startIndex, endIndex)

  // Handlers for pagination
  const handleRowsPerPageChange = (event) => {
    setRowsPerPage(Number(event.target.value))
    setPage(1)
  }
  const handlePreviousPage = () => {
    if (page > 1) {
      setPage(page - 1)
    }
  }
  const handleNextPage = () => {
    if (page < Math.ceil(filteredRows.length / rowsPerPage)) {
      setPage(page + 1)
    }
  }

  // Handler for Search
  const handleClearSearch = () => {
    setSearchTerm('')
  }

  return (
    <Card className="h-full w-full shadow-none">
      <CardHeader className=" mx-0 border-0 shadow-none flex items-center justify-between mb-8 rounded-md">
        <div className="search-container w-full md:w-72 relative border rounded-lg">
          <label htmlFor="search" className="sr-only">
            Search
          </label>
          <input
            id="search"
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search"
            className="w-full pl-16 align-middle py-2 border-2 border-gray-400 text-custom-gray-900 rounded-md"
          />
          <FaMagnifyingGlass className="absolute top-3 left-2 text-custom-gray-700" />
          <HiXMark
            className="absolute top-3 text-custom-gray-700 stroke-2 right-2 cursor-pointer scale-125"
            onClick={handleClearSearch}
          />
        </div>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <label htmlFor="rowsPerPage"> Rows per page :</label>

            <select
              id="rowsPerPage"
              name="rowsPerPage"
              label=" Rows per page :"
              value={rowsPerPage}
              onChange={handleRowsPerPageChange}
              className="bg-gray-50 border-2 border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-custom-gray-900 focus:border-custom-gray-900 block w-20 p-2.5"
            >
              <option value="10" className="hover:bg-custom-green-300">
                10
              </option>
              <option value="20">20</option>
              <option value="30">30</option>
            </select>
          </div>
          <Typography>
            {`Showing ${firstIndex} to ${lastIndex} of ${totalEntries} entries`}{' '}
          </Typography>
        </div>
      </CardHeader>
      <CardBody className="border-b  rounded-md box-border p-0 shadow-md	">
        <table className="min-w-full table-auto text-left ">
          <thead className="text-sm text-gray-400 bg-custom-gray-200 ">
            <tr className="">
              {columns.map((column, index) => (
                <th
                  key={index}
                  className={`relative py-4 px-4 font-bold text-custom-gray-900 uppercase  ${
                    index === 0 ? 'rounded-tl-md' : ''
                  } ${index === columns.length - 1 ? 'rounded-tr-md' : ''}`}
                >
                  <div
                    className={`heading-container ${column.title} flex items-center gap-6`}
                  >
                    {column.title}
                    <div className="sortingIcons flex flex-col text-gray-700 scale-150">
                      <TiArrowSortedUp
                        className={` cursor-pointer ${
                          sortConfig.direction === 'asc' &&
                          sortConfig.field === column.data
                            ? 'fill-green-500 scale-125'
                            : ''
                        }`}
                        onClick={() =>
                          setSortConfig({
                            direction: 'asc',
                            field: column.data,
                          })
                        }
                      />
                      <TiArrowSortedDown
                        className={`cursor-pointer ${
                          sortConfig.direction === 'desc' &&
                          sortConfig.field === column.data
                            ? ' fill-green-500 scale-125'
                            : ''
                        }`}
                        onClick={() =>
                          setSortConfig({
                            direction: 'desc',
                            field: column.data,
                          })
                        }
                      />
                    </div>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="text-sm font-light">
            {currentData.map((data, rowIndex) => (
              <tr
                key={data.id}
                className={`${rowIndex % 2 === 0 ? '' : 'bg-gray-200'} ${
                  rowIndex === currentData.length - 1
                    ? 'border-b-0'
                    : 'border-b-3 border-custom-gray-100 '
                } `}
              >
                {columns.map((column, index) => {
                  return (
                    <td key={index} className="p-4  ">
                      <Typography className="font-normal">
                        {data[column.data]}
                      </Typography>
                    </td>
                  )
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </CardBody>

      <CardFooter className="flex justify-center items-center gap-3 mt-8">
        <Button
          className="bg-custom-green-300 text-custom-gray-900 border-2 border-custom-green-300 focus:border-custom-gray-900 hover:bg-custom-gray-900 hover:text-white hover:border-custom-gray-900"
          onClick={handlePreviousPage}
          disabled={page === 1}
        >
          Previous
        </Button>

        <Button className="bg-custom-gray-400 text-custom-gray-900 py-3.5 px-5 border-2 border-custom-gray-400 cursor-default shadow-none hover:shadow-none ">
          {page}
        </Button>

        <Button
          className="bg-custom-green-300 text-custom-gray-900 border-2 border-custom-green-300 focus:border-custom-gray-900 hover:bg-custom-gray-900 hover:text-white hover:border-custom-gray-900"
          onClick={handleNextPage}
          disabled={endIndex >= filteredRows.length}
        >
          Next
        </Button>
      </CardFooter>
    </Card>
  )
}
