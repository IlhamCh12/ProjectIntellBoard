import React from 'react';

import { Chart, Series, CommonSeriesSettings, Legend, Export, Tooltip, Title } from 'devextreme-react/chart';
import service from '../Data/dataPerDep.js';

const dataSource = service.dataSource();

class PerDep extends React.Component {
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
      >
        <Title
          text="Performnace des employés par departement"
        />
        <CommonSeriesSettings argumentField="country" type="fullstackedbar" />
        <Series valueField="hydro" name="Excelent" />
        <Series valueField="oil" name="Good" />
        <Series valueField="gas" name="Outstanding" />
      

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

export default PerDep;
