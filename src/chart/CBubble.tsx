import { useState } from 'react';


import { Chart, Bubble } from 'react-chartjs-2'

var monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];
export default () => {
    const [data, setData] = useState({
        datasets: [{
            label: 'First Dataset',
            data: [{
                x: 20,
                y: 30,
                r: 15
            }, {
                x: 40,
                y: 10,
                r: 10
            }],
            backgroundColor: 'rgb(255, 99, 132)'
        }]
    })

    return (
        <>
            <Bubble data={data}
            ></Bubble >
        </>
    )
}