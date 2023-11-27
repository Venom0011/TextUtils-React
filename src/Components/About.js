import React from 'react'

export default function About() {
    const mystyle={
        height:'400px',
        width:'400px',
       float:"right"
    }
  return (
    <div className="container">
      
        <h1 className='my-3'>What is Text Utils</h1>
        <img style={mystyle} src='https://textinspector.com/wp-content/uploads/2022/05/what-is-img.png'></img>
      <p>Text Utils is the most widely used text analyser for preparing teaching materials, tests and evaluating text given as input.
</p>

<p>Created by Abhishek Mahajan.</p>
    </div>
  )
}
