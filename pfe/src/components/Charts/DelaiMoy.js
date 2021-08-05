import React from 'react';

import { Chart, Series } from 'devextreme-react/chart';
import { dataSource } from '../Data/DataDelai';

class DelaiMoy extends React.Component {

  render() {
    return (
      <Chart id="chart" dataSource={dataSource}>
        <Series
          valueField="oranges"
          argumentField="day"
          name="Délai moyen de paiement client"
          type="bar"
          color="#EF7F8F" />
      </Chart>
    );
  }
}

export default DelaiMoy;
