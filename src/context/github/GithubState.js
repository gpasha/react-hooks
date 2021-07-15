import { GithubContext } from './GithubContext'
import { useReducer } from 'react'
import { GithubReducer } from './GithubReducer'
import { SEARCH_USERS, GET_REPOS, CLEAR_USERS, GET_USER, SET_LOADING } from "../ActionTypes"
import axios from 'axios'

export const GithubState = ({ children }) => {
    
    const CLIENT_ID = process.env.REACT_APP_CLIENT_ID
    const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET

    const withCreads = url => {
        return `${url}client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`
    }

    const initialState = {
        user: {},
        users: [],
        loading: false,
        repos: []
    }

    const [state, dispath] = useReducer(GithubReducer, initialState)

    const search = async value => {
        setLoading()

        const response = await axios.get(
            withCreads(`https://api.github.com/search/users?q=${value}&`)
        )

        dispath({
            type: SEARCH_USERS,
            payload: response.data.items
        })
    }

    const getUser = async name => {
        setLoading()

        const response = await axios.get(
            withCreads(`https://api.github.com/users/${name}?`)
        )

        dispath({
            type: GET_USER,
            payload: response.data
        })
    }

    const getRepos = async name => {
        setLoading()

        const response = await axios.get(
            withCreads(`https://api.github.com/users/${name}/repos?per_page=5&`)
        )

        dispath({
            type: GET_REPOS,
            payload: response.data
        })
    }

    const clearUser = () =>  dispath({ type: CLEAR_USERS })

    const setLoading = () =>  dispath({ type: SET_LOADING })

    const { user, users, repos, loading } = state

    return (
        <GithubContext.Provider value={{
            search, getUser, getRepos, clearUser, setLoading,
            user, users, repos, loading
        }}>
            { children }
        </GithubContext.Provider>
    )
}