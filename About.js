import React from 'react'

export default function About(props) {
//   let myStyle = {
//     color: props.mode ==='dark'?'white':'#042743',
//     backgroundColor: props.mode ==='dark'?'rgb(36 74 104)':'white', 
// }
  return (
    <div className="container style={{color: props.mode ==='dark'?'white':'#042743'}}">
    <h1>404</h1>
    <h2>Page not found</h2>
    <p>The page you are looking for does not exist.</p>
    <p><a href="/">Visit Homepage</a></p>
  </div>
  )
}
