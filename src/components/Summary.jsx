import React from 'react'

const Summary = () => {
  return (
   <article className="summary">
    <section className="summary__left">
    <h3>Total this month</h3>
    <p className='totalAmt'>$478.33</p>

    </section>
    <section className="summary__right">
        <p className="percent">+2.4%</p>
        <p>from last month</p>
    </section>
   </article>
  )
}

export default Summary