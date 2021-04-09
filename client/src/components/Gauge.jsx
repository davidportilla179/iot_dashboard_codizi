import React from 'react'
import GaugeChart from 'react-gauge-chart'

const chartStyle = {
  height: 250,
}

function Gauge(props) {
  const { values, units } = props;
  let valuesInNumber = Number(values);
  return (
    <div>
      <GaugeChart
              id="gauge-chart"
              style={chartStyle}
              textColor="#000"
              fontSize="30px"
              needleColor="#EA4228"
              nrOfLevels={30}
              colors={['#5BE12C', '#F5CD19', '#EA4228']}
              arcWidth={0.3}
              // animDelay={100}
              animateDuration={2000}
              percent={valuesInNumber/1000}
              formatTextValue={value => value + units}
            />
    </div>
  )
}

export default Gauge;
