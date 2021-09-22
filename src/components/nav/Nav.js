import React from 'react'
import Styles from './Nav.module.css'
export default function Nav () {
  return (

    <div className={Styles.content}>
      <div className={Styles.icon}>
        <i className='fa fa-bell'></i>
      </div>
      <div className={Styles.icon}>
        <i className='fa fa-envelope'></i>
      </div>
      <div className={Styles.icon}>
        <i className='fa fa-cog'></i>
      </div>
      <div className={Styles.icon} style={{border: '1px solid rgb(252,179,12)',padding: '7px 9px',borderRadius: '20px'}}>
        <i className='fa fa-user'></i>
      </div>
    </div>

  )
}
