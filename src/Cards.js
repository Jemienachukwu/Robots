import React from 'react'

const cards = (props) => {
  return (
    <div className="bg-green dib br3 pa3 ma2 grow bw2 shadow-5">
      <img src={`https://robohash.org/${props.id}?`} alt="img" />
      <div className="tc">
        <h2>{props.name}</h2>
        <p>{props.email}</p>
      </div>
    </div>
  )
}

export default cards
