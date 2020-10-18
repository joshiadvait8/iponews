import React from 'react'
import {Line} from 'react-chartjs-2';
function Financials({info}) {
    const data = {
        labels: Object.keys(info.PAT),
        datasets: [
          {
            label:"values in INR crores",
            data: Object.values(info.PAT),
            backgroundColor: 'rgba(75,192,192,0.4)',
            pointRadius: 1,
          }
        ]
      };
    return (
        <div>
            
            <Line data={data}/>


        </div>
    )
}

export default Financials
