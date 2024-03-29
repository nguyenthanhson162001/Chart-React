import { useState } from 'react';


import { Chart, Bubble, Doughnut } from 'react-chartjs-2'

export default () => {
    const [data, setData] = useState({
        labels: [
            'Red',
            'Blue',
            'Yellow'
        ],
        datasets: [{
            label: 'My First Dataset',
            data: [300, 50, 100],
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 205, 86)'
            ],
            hoverOffset: 4
        }]
    })

    return (
        <>
            <Doughnut data={data}
            ></Doughnut >
        </>
    )
}