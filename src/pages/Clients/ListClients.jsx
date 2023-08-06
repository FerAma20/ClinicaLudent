import React from "react";

const ListClients = () => {
    console.log(navigator)
    return(
    <>
    <br />
    <br />
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
           <div className="flex justify-center">
           <h1 className="font-black text-3xl text-center">Customers List</h1>
           </div>
           <br/>
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <th className="px-6 py-3">Name</th>
                        <th className="px-6 py-3">Age</th>
                        <th className="px-6 py-3">Phone</th>
                        <th className="px-6 py-3">Customer Types</th>
                        <th className="px-6 py-3">Last Appointment</th>
                        <th className="px-6 py-3">Next Appointment</th>
                        <th className="px-6 py-3"></th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <td className="px-6 py-4">Fernando Amado Escobar Perez</td>
                        <td className="px-6 py-4">26</td>
                        <td className="px-6 py-4">47487661</td>
                        <td className="px-6 py-4">ADULT</td>
                        <td className="px-6 py-4">26/05/2022</td>
                        <td className="px-6 py-4">26/12/2022</td>
                        <td className="px-6 py-4">

                            <div className="flex justify-around">
                                <svg className="cursor-pointer w-[18px] h-[18px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 18">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.109 17H1v-2a4 4 0 0 1 4-4h.87M10 4.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Zm7.95 2.55a2 2 0 0 1 0 2.829l-6.364 6.364-3.536.707.707-3.536 6.364-6.364a2 2 0 0 1 2.829 0Z" />
                                </svg>
                                <svg className="cursor-pointer w-[18px] h-[18px] text-red-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h16M7 8v8m4-8v8M7 1h4a1 1 0 0 1 1 1v3H6V2a1 1 0 0 1 1-1ZM3 5h12v13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5Z" />
                                </svg>
                            </div>
                        </td>
                    </tr>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <td className="px-6 py-4">Fernando Amado Escobar Perez</td>
                        <td className="px-6 py-4">26</td>
                        <td className="px-6 py-4">47487661</td>
                        <td className="px-6 py-4">ADULT</td>
                        <td className="px-6 py-4">26/05/2022</td>
                        <td className="px-6 py-4">26/12/2022</td>
                        <td className="px-6 py-4">

                            <div className="flex justify-around">
                                <svg className="cursor-pointer w-[18px] h-[18px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 18">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.109 17H1v-2a4 4 0 0 1 4-4h.87M10 4.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Zm7.95 2.55a2 2 0 0 1 0 2.829l-6.364 6.364-3.536.707.707-3.536 6.364-6.364a2 2 0 0 1 2.829 0Z" />
                                </svg>
                                <svg className="cursor-pointer w-[18px] h-[18px] text-red-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h16M7 8v8m4-8v8M7 1h4a1 1 0 0 1 1 1v3H6V2a1 1 0 0 1 1-1ZM3 5h12v13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5Z" />
                                </svg>
                            </div>
                        </td>
                    </tr>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <td className="px-6 py-4">Fernando Amado Escobar Perez</td>
                        <td className="px-6 py-4">26</td>
                        <td className="px-6 py-4">47487661</td>
                        <td className="px-6 py-4">ADULT</td>
                        <td className="px-6 py-4">26/05/2022</td>
                        <td className="px-6 py-4">26/12/2022</td>
                        <td className="px-6 py-4">

                            <div className="flex justify-around">
                                <svg className="cursor-pointer w-[18px] h-[18px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 18">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.109 17H1v-2a4 4 0 0 1 4-4h.87M10 4.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Zm7.95 2.55a2 2 0 0 1 0 2.829l-6.364 6.364-3.536.707.707-3.536 6.364-6.364a2 2 0 0 1 2.829 0Z" />
                                </svg>
                                <svg className="cursor-pointer w-[18px] h-[18px] text-red-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h16M7 8v8m4-8v8M7 1h4a1 1 0 0 1 1 1v3H6V2a1 1 0 0 1 1-1ZM3 5h12v13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5Z" />
                                </svg>
                            </div>
                        </td>
                    </tr>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <td className="px-6 py-4">Fernando Amado Escobar Perez</td>
                        <td className="px-6 py-4">26</td>
                        <td className="px-6 py-4">47487661</td>
                        <td className="px-6 py-4">ADULT</td>
                        <td className="px-6 py-4">26/05/2022</td>
                        <td className="px-6 py-4">26/12/2022</td>
                        <td className="px-6 py-4">

                            <div className="flex justify-around">
                                <svg className="cursor-pointer w-[18px] h-[18px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 18">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.109 17H1v-2a4 4 0 0 1 4-4h.87M10 4.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Zm7.95 2.55a2 2 0 0 1 0 2.829l-6.364 6.364-3.536.707.707-3.536 6.364-6.364a2 2 0 0 1 2.829 0Z" />
                                </svg>
                                <svg className="cursor-pointer w-[18px] h-[18px] text-red-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h16M7 8v8m4-8v8M7 1h4a1 1 0 0 1 1 1v3H6V2a1 1 0 0 1 1-1ZM3 5h12v13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5Z" />
                                </svg>
                            </div>
                        </td>
                    </tr>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <td className="px-6 py-4">Fernando Amado Escobar Perez</td>
                        <td className="px-6 py-4">26</td>
                        <td className="px-6 py-4">47487661</td>
                        <td className="px-6 py-4">ADULT</td>
                        <td className="px-6 py-4">26/05/2022</td>
                        <td className="px-6 py-4">26/12/2022</td>
                        <td className="px-6 py-4">

                            <div className="flex justify-around">
                                <svg className="cursor-pointer w-[18px] h-[18px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 18">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.109 17H1v-2a4 4 0 0 1 4-4h.87M10 4.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Zm7.95 2.55a2 2 0 0 1 0 2.829l-6.364 6.364-3.536.707.707-3.536 6.364-6.364a2 2 0 0 1 2.829 0Z" />
                                </svg>
                                <svg className="cursor-pointer w-[18px] h-[18px] text-red-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h16M7 8v8m4-8v8M7 1h4a1 1 0 0 1 1 1v3H6V2a1 1 0 0 1 1-1ZM3 5h12v13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5Z" />
                                </svg>
                            </div>
                        </td>
                    </tr>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <td className="px-6 py-4">Fernando Amado Escobar Perez</td>
                        <td className="px-6 py-4">26</td>
                        <td className="px-6 py-4">47487661</td>
                        <td className="px-6 py-4">ADULT</td>
                        <td className="px-6 py-4">26/05/2022</td>
                        <td className="px-6 py-4">26/12/2022</td>
                        <td className="px-6 py-4">

                            <div className="flex justify-around">
                                <svg className="cursor-pointer w-[18px] h-[18px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 18">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.109 17H1v-2a4 4 0 0 1 4-4h.87M10 4.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Zm7.95 2.55a2 2 0 0 1 0 2.829l-6.364 6.364-3.536.707.707-3.536 6.364-6.364a2 2 0 0 1 2.829 0Z" />
                                </svg>
                                <svg className="cursor-pointer w-[18px] h-[18px] text-red-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h16M7 8v8m4-8v8M7 1h4a1 1 0 0 1 1 1v3H6V2a1 1 0 0 1 1-1ZM3 5h12v13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5Z" />
                                </svg>
                            </div>
                        </td>
                    </tr>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <td className="px-6 py-4">Fernando Amado Escobar Perez</td>
                        <td className="px-6 py-4">26</td>
                        <td className="px-6 py-4">47487661</td>
                        <td className="px-6 py-4">ADULT</td>
                        <td className="px-6 py-4">26/05/2022</td>
                        <td className="px-6 py-4">26/12/2022</td>
                        <td className="px-6 py-4">

                            <div className="flex justify-between">
                                <svg className="cursor-pointer w-[18px] h-[18px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 18">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.109 17H1v-2a4 4 0 0 1 4-4h.87M10 4.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Zm7.95 2.55a2 2 0 0 1 0 2.829l-6.364 6.364-3.536.707.707-3.536 6.364-6.364a2 2 0 0 1 2.829 0Z" />
                                </svg>
                                <div></div>
                                <svg className="cursor-pointer w-[18px] h-[18px] text-red-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h16M7 8v8m4-8v8M7 1h4a1 1 0 0 1 1 1v3H6V2a1 1 0 0 1 1-1ZM3 5h12v13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5Z" />
                                </svg>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <br />
    <br />
    </>
    )

}

export default ListClients