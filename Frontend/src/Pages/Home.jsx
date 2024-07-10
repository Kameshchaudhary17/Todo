import React from 'react'
import './Home.css'
import { useEffect, useState } from 'react'

const Home = () => {

  const[formvisible, setFormVisible] = useState(false)
  const[addVisible, setAddVisible] = useState(false)
  return (
    <>
    <div className="container">
      <h1>TO-DO
      </h1>
      <button onClick={()=> setAddVisible(true)}>Add</button>
      <div className="content">
        <div className="card">
          <h1>Title</h1>
          <p>To show how the skills I learned fueled the project, I'll share screenshots of online courses and links to key resources. You can also explore the project's code on GitHub.</p>
          <div className="btn">
            <button>Delete</button>
            <button onClick={()=>{setFormVisible(true)}}>Edit</button>
          </div>
        </div>
      </div>
    </div>
    {formvisible &&
    <div className="layout">
     
      <form action="">
      <button
              type="button"
              className="close-popup-btn"
              onClick={() => setFormVisible(false)}
            >
              &times;
            </button>
        <h1>Edit Form</h1>
        <input type="text"  name=''/>
        <textarea name="" id=""></textarea>
        <button>Edit</button>
      </form>
    </div>}
    {addVisible &&
    <div className="layout">
     
      <form action="">
      <button
              type="button"
              className="close-popup-btn"
              onClick={() => setAddVisible(false)}
            >
              &times;
            </button>
        <h1>Add Form</h1>
        <input type="text"  name=''/>
        <textarea name="" id=""></textarea>
        <button>Edit</button>
      </form>
    </div>}
    </>
  )
}

export default Home
