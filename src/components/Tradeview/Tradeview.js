import React from 'react'
import Chart from '../Chart/Chart'
import Coinheader from '../Coinheader/Coinheader'
import './Tradeview.css'
function Tradeview() {
    return (
        <div className='Tradeview' >
            <Chart />
            <Coinheader />
        </div>
    )
}

export default Tradeview
