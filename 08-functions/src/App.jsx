import React from 'react'

const App = () => {

  function inputChanging(val){
    console.log(val);
  }

  return (
    <input onChange={(elem) =>{
      inputChanging(elem.target.value)
    }}  type="text" placeholder='Enter name' />

  )
}

export default App
