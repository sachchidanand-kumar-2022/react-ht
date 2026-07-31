import React from 'react'
import { useState } from 'react'

const App = () => {

  const [title, setTitle] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    if(title == ""){
      alert("input Required")
    }else{
      alert("Form submitted successfully")
    }
    setTitle('')
  }


  return (
    <div>
      <form onSubmit={ (e) => {
        submitHandler(e)
      }} >
        <input type="text" placeholder='Enter your name' onChange={ (e)=>{
          setTitle(e.target.value)
        }}
        value={title} />
        <button>submit</button>

      </form>
    </div>
  )
}

export default App