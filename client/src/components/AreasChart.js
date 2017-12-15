import React from 'react'

import {
    Tooltip,
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid
} from 'recharts'


const data = [
    {
        name: 'Mondey',
        uv: 1000,
        pv: 100
    }, {
        name: 'Tuesday',
        uv: 1000,
        pv: 150
    }, {
        name: 'Wednesday',
        uv: 1000,
        pv: 170
    }, {
        name: 'Thursday',
        uv: 1000,
        pv: 400
    }, {
        name: 'Friday',
        uv: 1000,
        pv: 360
    }, {
        name: 'Saturday',
        uv: 1000,
        pv: 500
    }, {
        name: 'Sunday',
        uv: 1000,
        pv: 600
    }
];


const AreasChart = (props) => (
    <div>
        <h2
            style={{
            "textAlign": "center",
            "color": "white",
            "paddingRight": "70px"
        }}>Weekly costs</h2>
        <AreaChart
            width={1000}
            height={250}
            data={props.balance}
            margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0
        }}>
            <defs>
                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
                </linearGradient>
            </defs>
            <XAxis dataKey="name"/>
            <YAxis/>
            <CartesianGrid strokeDasharray="3 3"/>
            <Tooltip/>
            <Area
                type="monotone"
                dataKey="income"
                stroke="#8884d8"
                fillOpacity={1}
                fill="url(#colorUv)"/>
            <Area
                type="monotone"
                dataKey="expense"
                stroke="#82ca9d"
                fillOpacity={1}
                fill="url(#colorPv)"/>
        </AreaChart>
    </div>
)

export default AreasChart