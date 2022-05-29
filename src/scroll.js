import React from 'react'

const Scroll = (props) => {
  return (
    <div
      style={{
        overflow: 'scroll',
        // overflowY: 'scroll',
        // borderTop: 'solid black 1px',
        height: '70vh',
      }}
    >
      {props.children}
    </div>
  )
}

export default Scroll
