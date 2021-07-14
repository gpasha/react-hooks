import { GithubContext } from './GithubContext'
import { useReducer } from 'react'
import { GithubReducer } from './GithubReducer'
import { SEARCH_USERS, GET_REPOS, CLEAR_USERS, GET_USER, SET_LOADING } from "../ActionTypes"

export const GithubState = ({ children }) => {

    const initialState = {
        user: {},
        users: [],
        loading: false,
        repos: []
    }

    const [state, dispath] = useReducer(GithubReducer, initialState)

    const search = async value => {
        setLoading()
        //...

        dispath({
            type: SEARCH_USERS,
            payload: []
        })
    }

    const getUser = async name => {
        setLoading()
        //...

        dispath({
            type: GET_USER,
            payload: {}
        })
    }

    const getRepos = async name => {
        setLoading()
        //...

        dispath({
            type: GET_REPOS,
            payload: []
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