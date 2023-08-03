import React from "react";
import { useState } from "react";

import CreateClients from "./CreateClient";
import ListClients from "./ListClients";

const Clients = () => {

    const {customer, setCustomer } = useState({})
    const {customers, setCustomers} = useState([])

    return(<div className="container mx-auto max-w-screen-lg pt-8 ">
    <CreateClients 
    customer={customer}
    setCustomer = {setCustomer}/>
    <ListClients/>
    </div>)

}

export default Clients