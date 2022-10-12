import React from 'react'

export const section2 = (props) => {
  return (
    <div>
        <img src={props.src} alt={props.alt} className={Styles.pic} />
        <div className={Styles.name}>{props.name}</div>
    </div>
  )
}
