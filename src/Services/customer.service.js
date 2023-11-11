const HOST = 'http://localhost:8081'

//Gets all existing customers
export const readAllCustomers = async () =>{
    const url = `${HOST}/readAllCustomer`
    const response = await fetch(url)
    return await response.json()
}
//Save new customer
export const createCustomer = async (customer) =>{
    const url = `${HOST}/createCustomer`
    let output
    const requestOptions = {
        method: 'POST',
        headers: { 
            'Accept': 'application/json',
            'Content-Type': 'application/json' },
        body: JSON.stringify(customer)
    }
    const res = await fetch(url, requestOptions).
    then( async respon => {
        output = {
            status: respon.status,
            statusText: respon.statusText,
            data: await respon.json()
        }
    }).
    catch(error => {
        output = {
            status: 500,
            statusText: 'error',
            data: []
        }
    }).
    finally()

    return output
}
//Delete customers
export const deleteCustomers = async (idCustomer) =>{
    const url = `${HOST}/deleteCustomer/${idCustomer}`
    let output
    const requestOptions = {
        method: 'POST',
        headers: { 
            'Accept': 'application/json',
            'Content-Type': 'application/json' },
        body: ''
    }
    const res = await fetch(url, requestOptions).
    then( async respon => {
        output = {
            status: respon.status,
            statusText: respon.statusText,
            data: await respon.json()
        }
    }).
    catch(error => {
        output = {
            status: 500,
            statusText: 'error',
            data: []
        }
    }).
    finally()

    return output
}