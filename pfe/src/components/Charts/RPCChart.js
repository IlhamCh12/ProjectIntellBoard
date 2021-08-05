import React from 'react';

import { Chart, Series, CommonSeriesSettings, Legend, Export, Title } from 'devextreme-react/chart';
import { dataSource } from '../Data/dataRPC.js';

class RPCChart extends React.Component {
  render() {
    return (
      <Chart
        id="chart"
        palette="Soft"
        dataSource={dataSource}
      >
        <CommonSeriesSettings
          argumentField="state"
          type="bar"
          barPadding={0.2}
        />
        <Series valueField="Ug" name="Urgent" />
        <Series valueField="Vhg" name="Very High" />
        <Series valueField="hg" name="High" />
        <Series valueField="nrml" name="Normal" />
        <Series valueField="low" name="Low" />
        <Legend
          verticalAlignment="bottom"
          horizontalAlignment="center"
        />
        <Export enabled={true} />
        <Title text="RPC Taux de résolution au premier contact" subtitle="( par %)" />
      </Chart>
    );
  }
}

export default RPCChart;
