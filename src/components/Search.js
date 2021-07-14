import React, { useState, useContext } from 'react'
import { AlertContext } from '../context/alert/AlertContext'
import { GithubContext } from '../context/github/GithubContext'

export const Search = () => {

    const [value, setValue] = useState('')

    const { show } = useContext(AlertContext)

    const { search } = useContext(GithubContext)

    const submitHandler = e => {
        if (e.key !== 'Enter') {
            return
        }

        if (value.trim()) {
            search(value.trim())
        } else {
            show("Please enter a user data!", 'warning')
        }
    }

    return (
        <div className="form-group mb-4">
            <input type="text"
                   className="form-control"
                   placeholder="Enter a user name"
                   value={value}
                   onChange={e => setValue(e.target.value)}
                   onKeyPress={submitHandler} />
        </div>
    )
}