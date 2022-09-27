import React from 'react'

const Card = (props) => {
  return (
    <div>
             <div className="card my-3">
                <h1> title : {props.content_detail}   </h1>
             </div>
    </div>
  )
}

export default Card;