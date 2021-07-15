import React from 'react'
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import {Data} from './Data'


const black =['rgb(0,0,0,.85)','rgb(0,0,0,.25)','rgb(0,0,0,.15)']//#F68A8A
const red =['rgb(246,138,138,.85)','rgb(246,138,138,.25)','rgb(246,138,138,.15)']//#F68A8A
const green=['rgb(138,246, 138,.85)','rgb(138,246, 138,.25)','rgb(138,246, 138,.15)']
const green2=['rgb(175, 243, 173,.85)','rgb(175, 243, 173,.25)','rgb(175, 243, 173,.15)']//#AFF3AD

function Chart() {
    let open = Data[0].rate_open
    let close = Data[Data.length-1].rate_open
    let color = black
    
    // close =.0001

    if (open>close){
        color=red;
    }
    if(close>open) {
        color=green;
    }

    const GlowLine =[
    <Line dataKey="rate_open"  animationDuration = "2200" stroke={color[0]} dot = {false}/>,
    <Line dataKey="rate_open" type="monotone" strokeWidth={2} animationDuration = "2200" stroke={color[1]} dot = {false}/>,
    <Line dataKey="rate_open" type="monotone" strokeWidth={4} animationDuration = "2200" stroke={color[2]} dot = {false}/>
    ]   
        


    return (
        <div>
        <LineChart width={600} height={300} data={Data}>
            {GlowLine }
            <YAxis dataKey="rate_open"  stroke="transparent"/>
            <XAxis dataKey="time_open"  stroke="transparent"/>
            <Tooltip  style/>
        </LineChart>
        </div>
    )
}

export default Chart
