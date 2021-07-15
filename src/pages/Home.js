import React, { useContext } from 'react'
import { Card } from '../components/Card'
import { Search } from '../components/Search'
import { GithubContext } from '../context/github/GithubContext'

export const Home = () => {

    const { users, loading} = useContext(GithubContext)

    return (
        <div className="container pt-4">
          <Search />
          <div className="row">
                  {
                    loading
                        ? <h1 className="text-center">Loading ...</h1>
                        : users.map(user => (
                                <div key={user.id} className="col-4 ml-4 mb-4">
                                    <Card user={user} />
                                </div>
                            )
                          )
                  }
          </div>
        </div>
    )
}