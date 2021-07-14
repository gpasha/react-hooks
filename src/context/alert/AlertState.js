import React from 'react'
import { AlertContext } from './AlertContext'
import { useReducer } from 'react'
import { AlertReducer } from './AlertReducer'
import { ALERT_SHOW, ALERT_HIDE } from '../ActionTypes'

export const AlertState = ({ children }) => {

    const [state, dispatch] = useReducer(AlertReducer, null)

    const hide = () => dispatch({type: ALERT_HIDE})

    const show = (text, type = 'secondary') => dispatch({
        type: ALERT_SHOW,
        payload: { text, type}
    })

    return (
        <AlertContext.Provider value={{ show, hide, alert: state }}>
            { children }
        </AlertContext.Provider>
    )
}