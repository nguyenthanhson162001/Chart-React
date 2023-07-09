import { useState } from 'react';


import { Chart, Bubble, Line, } from 'react-chartjs-2'
var monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];

export default () => {
    const [data, setData] = useState({
        labels: monthNames,
        datasets: [{
            label: 'My First Dataset',
            data: [65, 59, 80, 81, 56, 55, 40],
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
        }]
    })

    return (
        <>
            <Line data={data}
            ></Line >
        </>
    )
}