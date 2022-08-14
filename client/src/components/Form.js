import React from 'react';
import { useState } from "react";

export default function Form(){
    const [data, setData] = useState(null);
    return(
        <form className='border-2 rounded flex flex-wrap justify-center m-5'>
            <div className='flex flex-col justify-evenly'>
                <label htmlFor='name' className='m-4'>Name
                    <input className='border-2 m-2 rounded' type='text' name='name' />
                </label>
                <label htmlFor='id' className='m-4'>ID
                    <input className='border-2 m-2 rounded' type='text' name='id' />
                </label>
                <label htmlFor='email' className='m-4'>Email
                    <input className='border-2 m-2 rounded' type='email' name='email' />
                </label>
            </div>
            <div className='flex flex-col justify-evenly items-center'>
                <label htmlFor='department' className='m-4'>Department
                    <input className='border-2 m-2 rounded' type='text' name='department' />
                </label>
                <p>Employment Status</p>
                <label htmlFor='status' >
                    <input 
                        type='radio'
                        name='status'
                        value='employed'
                        className='m-2'
                    />
                    Employed
                </label>
                <label htmlFor='status' >
                    <input 
                        type='radio'
                        name='status'
                        value='unemployed'
                        className='m-2'
                    />
                    Unemployed
                </label>
                <div className="flex justify-center items-center m-5">
                    <label htmlFor="dropzone-file" className="flex flex-col justify-center items-center w-full h-32 p-5 bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                        <div className="flex flex-col justify-center items-center w-full pt-5 pb-6">
                            <svg aria-hidden="true" className="mb-3 w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span></p>
                        </div>
                        <input id="dropzone-file" type="file" className="hidden" />
                    </label>
                </div>
                <button className='border-2 rounded m-5 w-20 max-w-md'>Submit</button>
            </div>
        </form>
    )
}