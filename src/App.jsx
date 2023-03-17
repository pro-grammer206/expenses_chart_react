import { useEffect, useState } from 'react'

import './App.css'
import data from '../src/data.json'
import Balance from './components/Balance'
import Graph from './components/Graph'
import Summary from './components/Summary'

function App() {
  const [count, setCount] = useState(0)
  const [maxDay,setMaxDay] = useState('')
  const [selectedAmount,setSelectedAmount] = useState(0)

  useEffect(()=>{
    findMaxExpenseDay()
  },[maxDay])

  const handleMouseOverBar = (event)=>{
  setSelectedAmount(Number(event.currentTarget.dataset.amount))

  }

  const findMaxExpenseDay= ()=>{
    const highestExpense= data.reduce((acc,curr)=>acc.amount<curr.amount?curr:acc)
    setMaxDay(highestExpense.day)
  }


  return (
    <>
    <Balance/>
    <Graph handleMouseOverBar={handleMouseOverBar} selectedAmount={selectedAmount} maxDay={maxDay} setSelectedAmount={setSelectedAmount}/>

    </>
  )
}

export default App
