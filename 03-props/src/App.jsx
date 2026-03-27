import React from 'react'
import Card from './components/card'
const App = () => {
  return (
    <div className='parent'>
      <Card user='ritik' age={22} img='https://images.unsplash.com/photo-1772441936562-b7136602856e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5MHx8fGVufDB8fHx8fA%3D%3D' />
      <Card user='sachchidanand' age={21} img='https://images.unsplash.com/photo-1773240307047-8412fcf1d866?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5MXx8fGVufDB8fHx8fA%3D%3D' /> 
    </div>
  )
}

export default App
