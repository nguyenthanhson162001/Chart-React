import { useState } from 'react';


import { Chart, Bubble, Radar, Scatter } from 'react-chartjs-2'
var monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];

export default () => {
    const [data, setData] = useState({
        datasets: [{
            label: 'Scatter Dataset',
            data: [{
                x: -10,
                y: 0
            }, {
                x: 0,
                y: 10
            }, {
                x: 10,
                y: 5
            }, {
                x: 0.5,
                y: 5.5
            }],
            backgroundColor: 'rgb(255, 99, 132)'
        }],
    })

    return (
        <>
            <Scatter data={data}
            ></Scatter >
        </>
    )
}