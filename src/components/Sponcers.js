import React from 'react'
import './Sponcer.css'
import Sponcer1 from './sp1nobg.png'
import Sponcer2 from './bounce.jpg'
import Sponcer3 from './sp3.jpg'

function Sponcers() {
  return (
    <div>
      <div className="mainbody">
        <div className="one mx-4"><img src={Sponcer1} alt="" srcset="" id='sp1'/><br /><div className='role my-2'>Desert Partner</div></div>
        <div className="two mx-4"><img src={Sponcer2} alt="" srcset="" id='sp2'/> <div className="role my-2">Fun & Fitness Partner</div></div>
        <div className="three mx-4"><img src={Sponcer3} alt="" srcset="" id='sp3' /> <div className="role my-2">Beverage Partner</div></div>
      </div>
    </div>
  )
}

export default Sponcers
