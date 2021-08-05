import React from 'react';

import { Chart, Series } from 'devextreme-react/chart';
import { dataSource } from '../Data/DataCA';

class CAChart extends React.Component {

  render() {
    return (
      <Chart id="chart" dataSource={dataSource}>
        <Series
          valueField="oranges"
          argumentField="day"
          name="Chiffre d'affaire pqr année"
          type="bar"
          color="#896DC1" />
      </Chart>
    );
  }
}

export default CAChart;
