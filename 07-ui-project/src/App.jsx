import React from 'react'
import Section1 from './components/Section1/Section1'

const App = () => {

  const Users = [
    {
      img:'https://images.unsplash.com/photo-1615262067879-3db9428c653d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHdvbWVuJTIwd29raW5nJTIwcHJvZmVzc2lvbmFsJTIwcG9ydHJhaXR8ZW58MHx8MHx8fDA%3D',
      intro:'',
      color:'royalblue',
      tag:'Satisfied'
    },
    {
      img: 'https://images.unsplash.com/photo-1627356539797-35fcff6a93d0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHdvbWVuJTIwd29raW5nJTIwcHJvZmVzc2lvbmFsJTIwcG9ydHJhaXR8ZW58MHx8MHx8fDA%3D',
      intro:'',
      color:'gray',
      tag:'Underserved'
    },
    {
      img: 'https://images.unsplash.com/photo-1733578461869-2f48efc8afaf?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d29tZW4lMjB3b2tpbmclMjBwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdHxlbnwwfHwwfHx8MA%3D%3D',
      intro:'',
      color:'red',
      tag:'Underbanked'
    },
    {
      img: 'https://images.unsplash.com/photo-1733578461869-2f48efc8afaf?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d29tZW4lMjB3b2tpbmclMjBwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdHxlbnwwfHwwfHx8MA%3D%3D',
      intro:'',
      color:'pink',
      tag:'Underbanked'
    }
  ]
  return (
    <div>
      <Section1 users={Users}/>
    </div>
  )
}

export default App
