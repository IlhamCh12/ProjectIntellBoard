import React from 'react';

import Chart, {
  CommonSeriesSettings,
  ValueAxis,
  Label,
  Legend,
  Series,
  Tooltip
} from 'devextreme-react/chart';

import { dataSource } from '../Data/dataAge.js';

class PyramidAge extends React.Component {

  render() {
    return (
      <Chart
        title="Pyramide des Ages de l'entreprise"
        dataSource={dataSource}
        id="chart"
        rotated={true}
        barGroupWidth={18}
      >
        <CommonSeriesSettings
          type="stackedbar"
          argumentField="age"
        />
        <Series
          valueField="Homme"
          name="Homme"
          color="#3F7FBF"
        />
        <Series
          valueField="Femme"
          name="Femme"
          color="#F87CCC"
        />
        <Tooltip
          enabled={true}
          customizeTooltip={this.customizeTooltip}
        />
        <ValueAxis>
          <Label customizeText={this.customizeLabel} />
        </ValueAxis>
        <Legend
          verticalAlignment="bottom"
          horizontalAlignment="center"
          margin={{ left: 50 }}
        />

      </Chart>
    );
  }

  customizeTooltip(e) {
    return { text: Math.abs(e.valueText) };
  }

  customizeLabel(e) {
    return `${Math.abs(e.value)}%`;
  }
}

export default PyramidAge;
