import React from 'react'

import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official'


 
export const HighChartWid = (options) =>( <div>
  <HighchartsReact
    highcharts={Highcharts}
    options={options}
  />
</div>)
export default HighChartWid
