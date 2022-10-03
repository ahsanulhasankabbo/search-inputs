import React, { useEffect, useState } from 'react';
import Information from './Information';

const SearchInputs = () => {
    const [informations, setInformations] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/infomations")
            .then(res => res.json())
            .then(data => setInformations(data))
    }, [])
    // console.log(informations)

    const handleNameFilter = (event) => {
        const searchName = event.target.value;
        const newName = informations?.filter((value) => {
            return value.firstName.toLowerCase().includes(searchName.toLowerCase());
        });
        setInformations(newName);
    }

    return (
        <div>

            <div className='w-1/2 mx-auto my-5'>
                <form>
                    <label htmlFor="default-name" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Search</label>
                    <div className="relative">
                        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                            <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                        </div>
                        <input onChange={handleNameFilter} type="search" id="default-name" className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search by First Name..." required="" />
                        <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                    </div>
                </form>

            </div>

            <div className='flex justify-between mx-16 mt-10'>
                {
                    informations?.map((information) => (<Information
                        key={information._id}
                        information={information}
                    ></Information>))
                }
            </div>
        </div>
    );
};

export default SearchInputs;