import React from 'react'

export default function Alert(props) {
  return (
    //props.alert &&<div className={`alert alert-${props.alert.type} alelrt-disimissible fade show`} role="alert">

   <div style = {{height : '50px'}}>
   { props.alert &&<div className="alert alert-success alelrt-disimissible fade show" role="alert">
     <strong>{props.alert.type}</strong> :   {props.alert.msg}
  </div>
}
  </div>
  )
}
