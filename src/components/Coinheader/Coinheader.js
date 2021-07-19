import React from 'react'
import './Coinheader.css'
import apiClient from "../Services/apiClient";
class Coinheader extends React.Component {
    
    state = {
        symbol: this.props.symbol,
        price:'0.00',
        url:"https://pics.freeicons.io/uploads/icons/png/17917263711578289008-512.png"
    }
    
    componentDidMount() {
        let url2 = `../../images/btc.png`;
        let url ="https://pics.freeicons.io/uploads/icons/png/17917263711578289008-512.png"
        apiClient.getCoinCurrentPrice(this.props.symbol).then( res => {
            this.setState({
                symbol:this.props.symbol,
                price: res.toFixed(2),
                url: url
            })
        })
    };
    render() {
        return (
            <div className='Coinheader'>
                <div id='details'>
                    <img src={this.state.url} alt={this.state.symbol} />
                    <span className='symbol'>{this.state.symbol}</span>
                    <span className='price'>${this.state.price}</span>
                </div>
                <div id='button-container'>
                    <span className='exchange-button'>BUY</span>
                    <span className='exchange-button'>SELL</span>
                </div>
            </div>
        )

    }
}

export default Coinheader
