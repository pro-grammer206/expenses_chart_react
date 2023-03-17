import React from 'react'
import logo from '../images/logo.svg'

const Balance = () => {
  return (
    <section className="balance">
        <div className="balance__desc">
        <p className='balance__title'>My Balance</p>
        <p className="balance__amount">$500</p>
        </div>
        <img src={logo} alt=""  className='balance__logo'/>
    </section>
  )
}

export default Balance