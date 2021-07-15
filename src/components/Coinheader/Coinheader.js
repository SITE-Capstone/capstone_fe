import React from 'react'
import './Coinheader.css'

function Coinheader() {
    let coinSrc='https://cdn.worldvectorlogo.com/logos/dogecoin.svg'
    let coinName='DOGE'
    let coinPrice='$0.8'
    return (
        <div className='Coinheader'>
            <div id='details'>
                <img src={coinSrc} alt={coinName} />
                <span>{coinName}</span>
                <span>{coinPrice}</span>
            </div>
            <div id='button-container'>
                <span className='exchange-button'>BUY</span>
                <span className='exchange-button'>SELL</span>
            </div>
        </div>
    )
}

export default Coinheader
