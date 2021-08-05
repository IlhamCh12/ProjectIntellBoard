import React from 'react';

import { Chart, Series, CommonSeriesSettings, Legend, Export, Tooltip, Title } from 'devextreme-react/chart';
import service from '../Data/dataHumeur.js';

const dataSource = service.dataSource();

class IndiceHumeur extends React.Component {
  customizeTooltip(arg) {
    return {
      text: `${arg.percentText} years: ${arg.valueText}`
    };
  }
  render() {
    return (
      <Chart
        id="chart"
        dataSource={dataSource}
        palette='Violet'
      >
        <Title
          text="indice d'humeur par departement"
        />
        <CommonSeriesSettings argumentField="country" type="fullstackedbar" />
        <Series valueField="hydro" name="High" />
        <Series valueField="oil" name="Low" />
        <Series valueField="gas" name="Medium" />
        <Series valueField="VH" name="Very High" />

        <Legend verticalAlignment="top"
          horizontalAlignment="center"
          itemTextPosition="right"
        />
        <Export enabled={true} />
        <Tooltip
          enabled={true}
          customizeTooltip={this.customizeTooltip}
        />
      </Chart>
    );
  }
}

export default IndiceHumeur;
