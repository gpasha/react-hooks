import React from 'react'
import { Card } from '../components/Card'
import { Search } from '../components/Search'

export const Home = () => {

    const cards = new Array(14).fill('').map((_, i) => i)

    return (
        <div className="container pt-4">
          <Search />
          <div className="row">
                  {
                    cards.map(card => {
                        return (
                            <div key={card} className="col-4 ml-4 mb-4">
                                <Card  />
                            </div>
                        )
                    })
                  }
          </div>
        </div>
    )
}