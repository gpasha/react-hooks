import { GithubContext } from './GithubContext'
import { useReducer } from 'react'
import { GithubReducer } from './GithubReducer'

export const GithubState = ({ children }) => {

    const initialState = {
        user: {},
        users: [],
        loading: false,
        repos: []
    }

    const [state, dispath] = useReducer(GithubReducer, initialState)

    return (
        <GithubContext.Provider value={{
            
        }}>
            { children }
        </GithubContext.Provider>
    )
}