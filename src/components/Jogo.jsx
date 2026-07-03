import React from 'react'

function Jogo({ j }) {
  return (
    <div className='cont-jogo'>
       {j.time1} x {j.time2}
    </div>
  )
}

export default Jogo