import React from 'react'
import data from '../data.json'
import Bar from './Bar'
import Summary from './Summary'
import Toast from './Toast'

const Graph = ({handleMouseOverBar,maxDay,selectedAmount,setSelectedAmount}) => {
  return (
    <section className='graph__tile'>
        <h2>Spending - Last 7 days</h2>
        <section className="graph__plot">
       {data.map(singleDay=>
        <Bar day={singleDay.day} amount={singleDay.amount} key={singleDay.day}  handleMouseOverBar={handleMouseOverBar}  maxDay={maxDay}  selectedAmount={selectedAmount} setSelectedAmount={setSelectedAmount}/>)}
        </section>
    
        <hr className='partition'/>
        <Summary/>

    </section>
  )
}

export default Graph