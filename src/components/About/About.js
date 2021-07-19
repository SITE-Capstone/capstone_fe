import React from 'react'
import './About.css'
import apiClient from "../Services/apiClient";
import { Link } from "react-router-dom";

class About extends React.Component {    
    state = {
        symbol: this.props.symbol,
        name:this.props.name,
        description:''
    }
    
    componentDidMount() {
        apiClient.getCoinDescription(this.props.name).then( res => {
            let description = res.data.description.en.split(".")
            description=description.slice(0,3)
            description=description.join(". ")
            let name =this.props.name.charAt(0).toUpperCase()+this.props.name.slice(1)
            this.setState({
                symbol: this.props.symbol,
                name:name,
                description:description
            })
        })
    };
    render() {
        return (
            <div className='About'>
                <h1>{this.state.name}</h1>
                <div id='details'>
                    <span className='description'>{this.state.description}</span>
                    <div id='learn-more'>
                        <span className='label'>Learn more about {this.state.name} and risk assessment</span>
                        <Link style={{ color: "white"}} to="/tutorial">Start Lesson</Link>
                    </div>
                </div>
            </div>
        )

    }
}

export default About
