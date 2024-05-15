import './App.css';
import React from 'react'
import Boxes from './components/Boxes';
import BoxData from './data/BoxesData';


export default function App() {

  const [squares,setSquare] = React.useState(BoxData)
  
  function toggle(id){
    console.log(id)
    
    // setSquare(prevSquares=>{
    //   const newSquares =[]
    //   for(let i=0;i<prevSquares.length;i++){
    //     const currSquare = prevSquares[i]
    //     if(currSquare.id===id){
    //       const updatedSquare = {
    //         ...currSquare,
    //         on:!currSquare.on
    //       }
    //       newSquares.push(updatedSquare)
    //     }else{
    //       newSquares.push(currSquare)
    //     }
    //   }
    //   return newSquares
    // })

    setSquare(prevSquares =>{
      return prevSquares.map((square)=>{
        return square.id === id?{...square, on:!square.on} : square
      })
    })
  }
 
  const sqauresElements = squares.map(square=>(
    <Boxes  
      key={square.id} 
      id={square.id}
      on={square.on}
      toggle={()=>toggle(square.id)}
    />
  ))
    
  return(
    <main>
      {sqauresElements}
    </main>
  )
}

