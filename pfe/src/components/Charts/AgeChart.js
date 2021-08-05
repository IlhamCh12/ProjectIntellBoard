import React from 'react';

import PieChart, {
  Legend,
  Series,
  Tooltip,
  Format,
  Label,
  Connector,
  Export
} from 'devextreme-react/pie-chart';

import { populationByRegions } from '../Data/data';

class AgeChart extends React.Component {

  render() {
    return (
      <PieChart
        id="pie"
        type="doughnut"
        title="Répartition des membres du personnel par temps de travail"
        palette="Soft Pastel"
        dataSource={populationByRegions}
        style={{  backgroundColor:"#ffffff", width:'100%'}}
      >
        <Series argumentField="region">
          <Label visible={true} >
            <Connector visible={true} />
          </Label>
        </Series>
        <Export enabled={true} />
        <Legend
          margin={0}
          horizontalAlignment="right"
          verticalAlignment="top"
          style={{  fontFamily:'Tw Cen MT',}}
        />
        <Tooltip enabled={true} customizeTooltip={this.customizeTooltip}>
          <Format type="Employés" />
        </Tooltip>
      </PieChart>
    );
  }

  customizeTooltip(arg) {
    return {
      text: `${arg.valueText} - ${(arg.percent * 100).toFixed(2)}%`
    };
  }
}

export default AgeChart;
