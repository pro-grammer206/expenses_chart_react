import React from 'react'
import Toast from './Toast'

const Bar = ({day,amount,handleMouseOverBar,maxDay,selectedAmount,setSelectedAmount}) => {
  const handleMusele = ()=>{

      setSelectedAmount(0)

  }
  return (<div style={{display:'flex',flexDirection:'column',gap:'0.5rem',height:'300px',position:'relative'}}>
          {amount===selectedAmount && <Toast amount={amount}/>}
      <section className="graph__diagram">
        <div className={`bar ${maxDay===day?'maxDay':''}`} style={{height:`${amount*3}px`,}}  onMouseEnter={handleMouseOverBar} data-amount={amount} onMouseLeave={handleMusele}></div>
      </section>
        <span>{day}</span>
    </div>
  )
}

export default Bar