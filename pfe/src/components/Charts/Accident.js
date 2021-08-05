import React from 'react';

import Chart, {
  Legend,
  SeriesTemplate,
  Title,
  Subtitle,
  CommonSeriesSettings,
  Export
} from 'devextreme-react/chart';

import { dataSource } from '../Data/dataAcc.js';

class Accident extends React.Component {
  render() {
    return (
      <Chart
        id="chart"
        palette="Violet"
        dataSource={dataSource}>
        <SeriesTemplate
          nameField="year"
          customizeSeries={customizeSeries}
        />
        <CommonSeriesSettings
          argumentField="country"
          valueField="oil"
          type="bar"
        />
        <Title text="Nombre d'accident par département et sexe">
          <Subtitle text="(pendant l'année précédente)" />
        </Title>
        <Legend
          verticalAlignment="bottom"
          horizontalAlignment="center"
        />
        <Export enabled={true} />
      </Chart>
    );
  }
}

function customizeSeries(valueFromNameField) {
  return valueFromNameField === 2009 ? { type: 'line', label: { visible: true }, color: '#ff3f7a' } : {};
}

export default Accident;
