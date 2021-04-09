import React, { useState } from 'react'
import { Line } from 'react-chartjs-2';
import 'chartjs-plugin-streaming';

// const data = {
//   datasets: [
//     {
//       label: "Dataset 1",
//       borderColor: "rgb(255, 99, 132)",
//       backgroundColor: "rgba(255, 99, 132)",
//       fill: false,
//       lineTension: 0,
//       borderDash: [8, 4],
//       data: []
//     }
//   ]
// };

// function Chart(props) {
//   const { messages, device, borderColor } = props;
//   //set data
//   data.datasets[0].label = device;
//   data.datasets[0].borderColor = borderColor;
//   data.datasets[0].backgroundColor = borderColor;

//   const options = {
//     responsive: true,
//     scales: {
//       xAxes: [
//         {
//           type: "realtime",
//           realtime: {
//             onRefresh: function() {
//               data.datasets[0].data.push({
//                 x: Date.now(),
//                 y: messages
//               });
//               // console.log(data.datasets[0].data);
//             },
//             duration: 50000,
//             refresh: 1000,
//             delay: 1000,
//           }
//         }
//       ],
//       yAxes: [{
//         ticks: {
//           max: 4500,
//           min: 0,
//         },
//         scaleLabel: {
//           display: true,
//           labelString: 'value'
//         }
//       }]
//     }
//   };

//   return (
//     <div>
//       <p>{messages}</p>
//       <Line data={data} options={options} />
//     </div>
//   );
// }

// export default Chart;

//Otra forma de hacerlo pero tiene un bug cuando imprime los valores en el gráfico

function Chart(props) {
  const [charts, setCharts] = useState([]);
  const { messages, device, borderColor } = props;

  const data = {
    datasets: [
      {
        label: device,
        borderColor: borderColor,
        backgroundColor: borderColor,
        fill: false,
        lineTension: 0,
        borderDash: [8, 4],
        data: charts
      }
    ]
  };
  const options = {
    scales: {
      xAxes: [
        {
          type: "realtime",
          realtime: {
            onRefresh: function() {
              setCharts(oldCharts => [...oldCharts, {
                x: Date.now(),
                y: Number(messages)
              }])
              //console.log(charts);
            },
            duration: 50000,
            refresh: 1000,
            delay: 1000,
          }
        }
      ],
      yAxes: [{
        ticks: {
          max: 4500,
          min: 0,
        },
        scaleLabel: {
          display: true,
          labelString: 'value'
        }
      }]
    }
  };

  return (
    <div>
      <p>{props.messages}</p>
      <Line data={data} options={options} />
    </div>
  );
}

export default Chart;

// class Chart extends React.Component {
//   // [charts, setCharts] = useState([]);
//   // const { messages, device, borderColor } = props;
//   data = {
//     datasets: [
//       {
//         label: this.props.device,
//         borderColor: this.props.borderColor,
//         backgroundColor: "rgba(255, 99, 132, 0.5)",
//         fill: false,
//         lineTension: 0,
//         borderDash: [8, 4],
//         data: []
//       }
//     ]
//   };
  
//   options = {
//     scales: {
//       xAxes: [
//         {
//           type: "realtime",
//           realtime: {
//             // onRefresh: function() {
//             //   this.data.datasets[0].data.push({
//             //     x: Date.now(),
//             //     y: this.props.messages
//             //   });
//             //   // console.log(charts);
//             // },
//             duration: 50000,
//             refresh: 1000,
//             delay: 1000,
//           }
//         }
//       ],
//       yAxes: [{
//         ticks: {
//           max: 4500,
//           min: 0,
//         },
//         scaleLabel: {
//           display: true,
//           labelString: 'value'
//         }
//       }]
//     }
//   };

//   render(){
//     return (
//       <div>
//         <p>{this.props.messages}</p>
//         <Line data={this.data} options={this.options} />
//         {console.log(this.data.datasets[0].data.push)}
//       </div>
//     );
//   }
// }

// export default Chart;