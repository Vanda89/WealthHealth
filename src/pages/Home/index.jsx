import RegisterForm from '../../components/RegisterForm'
import Modal from 'modal-reactjs-tailwindcss'
import { data } from '../../utils/dropdownData'
import { useState } from 'react'
import { FaCheck } from 'react-icons/fa'
import { FaXmark } from 'react-icons/fa6'

export default function Home() {
  const [isOpen, setIsOpen] = useState(false)
  const handleFormSubmit = () => {
    setIsOpen(true)
  }

  const handleCloseModal = () => {
    setIsOpen(false)
  }

  return (
    <main className=" flex flex-col items-center justify-center gap-14 py-44">
      <h1 className="text-6xl text-custom-green-300">HRnet</h1>
      <RegisterForm dropdownData={data} onFormSubmit={handleFormSubmit} />
      <Modal
        isOpen={isOpen}
        onClose={handleCloseModal}
        closeIcon={FaXmark}
        infoIcon={FaCheck}
        infoContainerColor="bg-green-100"
        infoIconColor="text-green-500"
        infoIconSize="text-5xl"
      />
    </main>
  )
}
