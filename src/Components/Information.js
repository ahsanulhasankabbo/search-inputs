import React from 'react';

const Information = (props) => {
    const { firstName,  customerId, orders } = props?.information;
    return (
        <div className='block p-6 max-w-sm bg-gray-100 rounded-lg border border-gray-200 shadow-md hover:bg-gray-200 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700'>
            <h1 className='font-bold text-3xl'>{firstName}</h1>
            <p className='font-bold text-xl'>Customer ID : {customerId}</p>
            <div className='p-3 my-3 text-base font-bold text-gray-900 bg-gray-50 rounded-lg hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white'>
                <p>Amount : {orders[0]?.amount}</p>
                <p>Date : {orders[0]?.date}</p>
            </div>
            <div className='p-3 my-3 text-base font-bold text-gray-900 bg-gray-50 rounded-lg hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white'>
                <p>Amount : {orders[1]?.amount}</p>
                <p>Date : {orders[1]?.date}</p>
            </div>
            <div className='p-3 my-3 text-base font-bold text-gray-900 bg-gray-50 rounded-lg hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white'>
                <p>Amount : {orders[2]?.date !== undefined ? orders[2]?.date : <small className='text-red-400'>Amount is not available</small>}</p>
                <p>Date : {orders[2]?.date !== undefined ? orders[2]?.date : <small className='text-red-400'>Date is not available</small>}</p>
            </div>
            <div className='p-3 my-3 text-base font-bold text-gray-900 bg-gray-50 rounded-lg hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white'>
                <p>Amount : {orders[3]?.date !== undefined ? orders[3]?.date : <small className='text-red-400'>Amount is not available</small>}</p>
                <p>Date : {orders[3]?.date !== undefined ? orders[3]?.date : <small className='text-red-400'>Date is not available</small> }</p>
            </div>
        </div>
    );
};

export default Information;