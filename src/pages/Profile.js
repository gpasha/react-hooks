import React, { useContext, useEffect } from 'react'
import { GithubContext } from '../context/github/GithubContext'
import { Link } from 'react-router-dom'
import { Repos } from '../components/Repos'

export const Profile = ({match}) => {

  const urlName = match.params.name

  const { getUser, getRepos, user, repos, loading} = useContext(GithubContext)

  useEffect(() => {
    getUser(urlName)
    getRepos(urlName)
  }, [])

  if (loading) {
    return <h1 className="text-center">Loading</h1>
  }

  const { name, company, avatar_url, location, blog, bio, login, html_url, followers, following, public_repos, public_gists } = user

  return (
    <>
      <Link to="/" className="btn btn-link">To Home page</Link>
      
      <div className="card mb-4">
        <div className="card-body">
          <div className="row">
            <div className="col-sm-3 text-center">
              <img src={avatar_url} alt={name} style={{width: '100%'}} />
              <h1>{name}</h1>
              {location && <p>Location: {location}</p>}
            </div>
            <div className="col">
              {
                bio && (
                  <>
                    <h3>BIO</h3>
                    <p>{bio}</p>
                  </>
                )
              }
              <a href={html_url} target="_blank" rel="noreferrer" className="btn btn-dark">Open the profile</a>
              <ul>
                {login && <li>
                            <strong>Username: </strong>
                            {login}
                          </li>}
                
                {company && <li>
                            <strong>Company: </strong>
                            {company}
                          </li>}
                
                {blog && <li>
                            <strong>Website: </strong>
                            {blog}
                          </li>}
              </ul>
              <div className="badge badge-primary bg-primary">Followers: {followers}</div>
              <div className="badge badge-success bg-success">Following: {following}</div>
              <div className="badge badge-info bg-info">Repos: {public_repos}</div>
              <div className="badge badge-dark bg-dark">Gists: {public_gists}</div>
            </div>
          </div>
        </div>
      </div>

      <Repos repos={repos} />
    </>
  )
}