import React from 'react';

import { Chart, Series, CommonSeriesSettings, Legend, ValueAxis, Title, Export, Tooltip } from 'devextreme-react/chart';
import service from '../Data/dataTauxDep.js';

const dataSource = service.getMaleAgeData();

class TauxDep extends React.Component {
  customizeTooltip(arg) {
    return {
      text: `${arg.seriesName } : ${ arg.valueText} %`
    };
  }
  render() {
    return (
      <Chart
        id="chart"
        title="Taux de départ"
        palette="Violet"

        dataSource={dataSource}
      >
        <CommonSeriesSettings argumentField="state" type="stackedBar" />
        <Series
          valueField="young"
          name="Démission"
        />
        <Series
          valueField="middle"
          name="Licenciement"
        />
        <ValueAxis position="right">
          <Title text="%" />
        </ValueAxis>
        <Legend
          verticalAlignment="bottom"
          horizontalAlignment="center"
          itemTextPosition="top"
        />
        <Export enabled={true} />
        <Tooltip
          enabled={true}
          location="edge"
          customizeTooltip={this.customizeTooltip}
        />
      </Chart>
    );
  }
}

export default TauxDep;