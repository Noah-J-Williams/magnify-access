import React from 'react';
import { useState } from "react";

export default function Form(){
    const [data, setData] = useState(null);
    return(
        <form className='border-2 flex flex-wrap'>
            <label htmlFor='name'>Name
                <input className='border-2' type='text' name='name' />
            </label>
            <label htmlFor='id'>ID
                <input className='border-2' type='text' name='id' />
            </label>
            <label htmlFor='department'>Department
                <input className='border-2' type='text' name='department' />
            </label>
            <label htmlFor='email'>Email
                <input className='border-2' type='email' name='email' />
            </label>
            <label htmlFor='status' >
                <input 
                    type='radio'
                    name='status'
                    value='employed'
                />
                Employed
            </label>
            <label htmlFor='status' >
                <input 
                    type='radio'
                    name='status'
                    value='unemployed'
                />
                Unemployed
            </label>
            <label htmlFor='upload'>
                Upload Documents:
                <input type='file' name='upload'/>
            </label>
        </form>
    )
}