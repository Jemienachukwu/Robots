import React from 'react'
import Cards from './Cards.js'

const CardList = ({ robots }) => {
  return (
    <div className="courier">
      {robots.length < 1 ? (
        <div>No item</div>
      ) : (
        robots.map((items, i) => {
          return (
            <Cards
              key={robots[i].id}
              name={robots[i].name}
              email={robots[i].email}
              id={robots[i].username}
            />
          )
        })
      )}
    </div>
  )
}

export default CardList
