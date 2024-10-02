import React, { useState, useRef, useEffect } from 'react'

export default function Modal({
  isOpen,
  isHidden,
  onClose,
  closeIcon: CloseIcon,
  infoIcon: InfoIcon,
  infoIconColor,
  infoIconSize,
  infoContainerColor,
  actions = [],
}) {
  const modalRef = useRef(null)

  useEffect(() => {
    if (isOpen) {
      modalRef.current.focus()
    }
  }, [isOpen])

  const handleOverlayClick = (e) => {
    e.stopPropagation()
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      onClose()
    }
  }

  const modalClass = isOpen
    ? 'modal relative z-10 open visible'
    : 'modal relative z-10 invisible'

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      {isOpen && (
        <div
          className={modalClass}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          aria-hidden={isHidden}
          tabIndex={-1}
        >
          <div
            className="backdrop fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
            aria-hidden="true"
          ></div>

          <div className="modal-content fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center  text-center sm:items-center ">
              <div
                ref={modalRef}
                className="relative  transform overflow-hidden w-full transform-all sm:max-w-xl px-5 md:px-8 pt-5 pb-4 sm:pt-8 bg-white rounded-lg shadow"
              >
                <div className="flex flex-col gap-6 md:gap-10">
                  <div className="hidden sm:block absolute top-4 right-6 ">
                    <CloseIcon
                      className="h-6 w-6 text-gray-400 cursor-pointer"
                      onClick={onClose}
                      type="button"
                      aria-label="Close modal"
                      tabIndex={0}
                    />
                  </div>
                  <div className="flex flex-col sm:flex-row items-center sm:items-center gap-4 sm:gap-8 ">
                    <div
                      className={`flex p-2 flex-shrink-0 items-center justify-center rounded-full ${infoContainerColor}`}
                    >
                      <InfoIcon
                        className={`h-3 w-3 ${infoIconColor} ${infoIconSize}`}
                        aria-hidden="true"
                      />
                    </div>
                    <div className="flex justify-start text-left  ">
                      <h3
                        className="sm:text-lg md:text-xl font-medium leading-6 text-gray-900"
                        id="modal-title"
                      >
                        Employee has been added successfully
                      </h3>
                    </div>
                  </div>
                  <div className="actions flex flex-col sm:flex-row gap-3 justify-center sm:justify-end">
                    {actions.map((action, index) => (
                      <button
                        key={index}
                        type="button"
                        aria-label={`${action.label} button`}
                        tabIndex={1}
                        className={`font-bold py-2 px-3 rounded-md border `}
                        onClick={action.onClick}
                      >
                        {action.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
