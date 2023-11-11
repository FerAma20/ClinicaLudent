import React, { useState } from "react";
import Swal from "sweetalert2"

const CreateClients = ({ customer, setCustomer, createCustomer, fetchData, customerUpdate, setCustomerUpdate }) => {

  const [loading, setLoading] = useState(false)

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setCustomer({
      ...customer,
      [name]: value,
    })
  }

  const handleForm = async (event) => {
    event.preventDefault()
    setLoading(true)
    const saveCustomer = await createCustomer(customer)
    if (saveCustomer.status == 200) {
      Swal.fire({
        title: 'Success Create',
        text: 'The customer has been created correctly',
        icon: 'success',
        confirmButtonText: 'OK'
      })
      fetchData()
      resetCustomer()
    } else {
      Swal.fire({
        title: 'Error Create',
        text: 'The client was created incorrectly',
        icon: 'error',
        confirmButtonText: 'OK'
      })
    }
  }

  const resetCustomer = () => {
    setCustomer({
      idCustomer: '0',
      nameCustomer: '',
      ageCustomer: '',
      phoneCustomer: '',
      typeCustomer: '',
      lastAppointmentCustomer: '',
      nextAppointmentCustomer: ''
    })
  }
  return (<>
    <br />
    <div >
      <h2 className="font-black text-3xl text-center">Customer Tracking</h2>
      <p className="text-lg mt-5 text-center mb-10">Create customer and {''}
        <span className="text-[#BAD034] font-bold">Manage them</span>
      </p>

      <form className="bg-white shadow-md rounded-lg py-8 px-5 mb-5" onSubmit={handleForm}>

        {/** Customer Name and Age */}
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="nameCustomer"
              id="nameCustomer"
              className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
              onChange={handleInputChange}
              value={customer.nameCustomer} />
            <label
              htmlFor="nameCustomer"
              className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
            >
              Customer Name
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="number"
              name="ageCustomer"
              id="ageCustomer"
              className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
              onChange={handleInputChange}
              value={customer.ageCustomer} />
            <label
              htmlFor="ageCustomer"
              className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
            >
              Customer Age
            </label>
          </div>
        </div>

        {/* Customer Type and Phone */}
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-6 group">
            <input
              maxLength={8}
              type="tel"
              name="phoneCustomer"
              id="phoneCustomer"
              className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
              onChange={handleInputChange}
              value={customer.phoneCustomer} />
            <label
              htmlFor="phoneCustomer"
              className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
            >
              Phone
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <label
              htmlFor="underline_select"
              className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
            >Customer Types</label>
            <select
              name="typeCustomer"
              id="underline_select"
              className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              required
              onChange={handleInputChange}
              value={customer.typeCustomer}>
              <option >Select...</option>
              <option value="1">CHILD</option>
              <option value="2">ADULT</option>

            </select>
          </div>
        </div>

        {/** Last Appointment and Next Appointment */}
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="datetime-local"
              name="lastAppointmentCustomer"
              id="lastAppointmentCustomer"
              className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
              onChange={handleInputChange}
              value={customer.lastAppointmentCustomer} />
            <label
              htmlFor="lastAppointmentCustomer"
              className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
            >
              Last Appointment
            </label>
          </div>

          <div className="relative z-0 w-full mb-6 group">
            <input
              type="datetime-local"
              name="nextAppointmentCustomer"
              id="nextAppointmentCustomer"
              className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
              onChange={handleInputChange}
              value={customer.nextAppointmentCustomer} />
            <label
              htmlFor="nextAppointmentCustomer"
              className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
            >
              Next Appointment
            </label>
          </div>

        </div>

        <button

          type="submit"
          className="text-white bg-[#84E8E5] hover:bg-[#BAD034] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          {customerUpdate == true ? "Update Customer" : "Create Customer"}
        </button>
      </form>
      
    </div>

  </>)

}

export default CreateClients