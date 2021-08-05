import React from 'react';

import PieChart, {
  Legend,
  Series,
  Export,
  Label,
  SmallValuesGrouping,
  Connector
} from 'devextreme-react/pie-chart';

import { internetLanguages } from '../Data/dataEngEmp.js';

class EngagEmp extends React.Component {
  render() {
    return (
      <PieChart
        id="pie"
        type="doughnut"
        title="Engagement des Employés"
        palette='Office'
        dataSource={internetLanguages}
      >
        <Series argumentField="language" valueField="percent">
          <SmallValuesGrouping mode="topN" topCount={4} />
          <Label
            visible={true}
            format="fixedPoint"
            customizeText={this.customizeLabel}
          >
            <Connector visible={true} width={1} />
          </Label>
        </Series>
        <Export enabled={true} />
        <Legend horizontalAlignment="center" verticalAlignment="bottom" />
      </PieChart>
    );
  }

  customizeLabel(point) {
    return `${point.argumentText }: ${ point.valueText }%`;
  }
}

export default EngagEmp;
