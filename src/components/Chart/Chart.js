import React from 'react'
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import {Data} from './Data'


function Chart() {
    return (
        <div>
        <LineChart width={600} height={300} data={Data}>
            {/* <Line dataKey="rate_open" animationDuration = "2200" stroke="#AFF3AD" dot = {false}/> */}
            <Line dataKey="rate_open"  animationDuration = "2200" stroke="#F68A8A" dot = {false}/>
            <Line dataKey="rate_open" strokeWidth={4} animationDuration = "2200" stroke="rgb(246,138,138,.15)" dot = {false}/>
            <CartesianGrid stroke="" />
            <YAxis dataKey="rate_open"  stroke="transparent"/>
            <XAxis dataKey="time_open"  stroke="transparent"/>
            <Tooltip style/>
        </LineChart>
        </div>
    )
}

export default Chart
