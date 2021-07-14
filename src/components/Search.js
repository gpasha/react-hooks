import React, { useContext } from 'react'
import { AlertContext } from '../context/AlertContext'

export const Search = () => {

    const { show } = useContext(AlertContext)

    const testHandler = e => {
        if (e.key === 'Enter') {
            show("Test text for Alert ...", 'warning')
        }
    }

    return (
        <div className="form-group mb-4">
            <input type="text"
                   className="form-control"
                   placeholder="Enter a user name"
                   onKeyPress={testHandler} />
        </div>
    )
}