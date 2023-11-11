import React, { useEffect, useState } from "react";

import ListClients from "./ListClients";
import ModalCustomer from "./ModalCustomer";
import { readAllCustomers, createCustomer } from "../../Services/customer.service";

const Clients = () => {

    const [customerUpdate, setCustomerUpdate] = useState(false)
    const [customers, setCustomers] = useState([])
    const [customer, setCustomer] = useState({
        idCustomer: '0',
        nameCustomer: '',
        ageCustomer: '',
        phoneCustomer: '',
        typeCustomer: '',
        lastAppointmentCustomer: '',
        nextAppointmentCustomer: ''
    })

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        setCustomers(await readAllCustomers())
    }


    return (<div className="container mx-auto max-w-screen-lg pt-8  p-2">
        <br />
        <br/>
        <button data-modal-target="authentication-modal" data-modal-toggle="authentication-modal" className="text-white bg-[#84E8E5] hover:bg-[#BAD034] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
            Create Customer
        </button>
        <ModalCustomer
            customer={customer}
            setCustomer={setCustomer}
            createCustomer={createCustomer}
            fetchData={fetchData}
            customerUpdate={customerUpdate}
            setCustomerUpdate={setCustomerUpdate}
        />
        <ListClients
            customers={customers}
            fetchData={fetchData}
            setCustomer={setCustomer}
            customerUpdate={customerUpdate}
            setCustomerUpdate={setCustomerUpdate}
        />
    </div>)

}

export default Clients