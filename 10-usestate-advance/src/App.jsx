import React, { useState } from 'react'


// asynchronous process
// const App = () => {
//   const [num, setnum] = useState(10)

//   function btnclick(){
//     setnum(num+5)
//     console.log(num);
    
//   }

//   return (
//     <div>
//       <h1>{num}</h1>
//       <button onClick={btnclick} >click</button>
//     </div>
//   )
// }

// export default App

// destucturing in array and object
// const App = () => {

//   const [num, setNum] = useState({name:"anand,", age:22})
//   const btnClicked = () => {
//     const newNum = {...num, city: 'delhi'};
//     newNum.name = 'ritik,'
//     newNum.age = 21
//     setNum(newNum,)
//     console.log(num);
//   }
//   return (
//     <div>
//       <h1>{num.name} {num.age} {num.city }</h1>
//       <button onClick={btnClicked} >click</button>
//     </div>
//   )
// }

// export default App


// const App = () => {

//   const [Num, setNum] = useState([10,20,30])

//   const btnClicked = () => {
//     setNum(prev => ([...prev, 40]))
//     console.log(Num); 
    
//   }
//   return (
//     <div>
//       <h1>{Num}</h1>
//       <button onClick={btnClicked} >click</button>
//     </div>
//   )
// }

// export default App



// Batch Update
const App = () => {

  const [num, setNum] = useState(10)

  function btnClicked(){
    // setNum(num+1)
    // setNum(num+1)
    // setNum(num+1)
    // setNum(num+1)
    // setNum(num+1)
    setNum(prev => (prev+1))
    setNum(prev => (prev+1))
    setNum(prev => (prev+1))
    setNum(prev => (prev+1))
    setNum(prev => (prev+1))
  }

  return (
    <div>
      <h1>{num}</h1>
      <button onClick={btnClicked} >click</button>
    </div>
  )
}

export default App
