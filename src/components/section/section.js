import React from 'react'

export const Section = (props) => {
  return (
    <div>
        <img src={props.src} alt={props.alt} />
        <div>{props.name}</div>
    </div>
  )
}
