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
        let price=0.0
    
        apiClient.getCoinCurrentPrice(this.props.symbol).then( res => {
            if (res.data===null){
                console.log("#18 Chart JS Error:", res)
                price='Error'
                setTimeout(
                    apiClient.getCoinCurrentPrice(this.props.symbol).then( res2 => {
                        
                        if (res2.data===null){
                            console.log("#22 Chart JS Error:", res2)
                            price='Error'
                        }else{
                            price= res2.data.rate.toFixed(2)
                        }
                    }), 3000
                )
            }else{
                price= res.data.rate.toFixed(2)
            }
            this.setState({
                symbol:this.props.symbol,
                price: price,
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
