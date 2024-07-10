import React from 'react'
import './Home.css'
import axios from 'axios'
import { useEffect, useState } from 'react'

const Home = () => {

  const[flag, setFlag] = useState(0)
  const [data, setData] = useState([])
  useEffect(()=>{
    axios.get("http://localhost:5555/getcard")
    .then((res)=>{
      setData(res.data.result)
    }).catch((err)=>{
      console.log(err)
    });
  }, [flag])


 
  const handleDelete = (id) =>{
    if(window.confirm("Are You Sure?")){
      axios.delete(`http://localhost:5555/deletecard/${id}`)
      .then((res)=>{
        setFlag(flag+1);
        console.log(res);
      }).catch((err)=>{
        console.log(err)
      })
    }
  }


  const[formvisible, setFormVisible] = useState(false)
  const[addVisible, setAddVisible] = useState(false)
  return (
    <>
    <div className="container">
      <h1>TO-DO
      </h1>
      <button onClick={()=> setAddVisible(true)}>Add</button>
      <div className="content">

        {data.map((value)=>(<div className="card">
          <h1>{value.title}</h1>
          <p>{value.description}</p>
          <div className="btn">
            <button onClick={()=> handleDelete(value.id)}>Delete</button>
            <button onClick={()=>{setFormVisible(true)}}>Edit</button>
          </div>
        </div>
        ))}
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
     
      <form action="http://localhost:5555/createcard" encType='true' method='POST'>
      <button
              type="button"
              className="close-popup-btn"
              onClick={() => setAddVisible(false)}
            >
              &times;
            </button>
        <h1>Add Form</h1>
        <input type="text"  name='title'/>
        <textarea name="description" id=""></textarea>
        <button type='submit'>Add</button>
      </form>
    </div>}
    </>
  )
}

export default Home;
