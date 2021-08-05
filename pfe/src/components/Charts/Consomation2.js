import React from 'react';

import PieChart, {
  Series,
  Label,
  Legend
} from 'devextreme-react/pie-chart';

import { countries } from '../Data/dataConsm2.js';

const pieCharts = [{
  title: 'Pourcentage de déchets par type',
  palette: 'Soft',
  dataSource: countries
}];

function Consommation2() {
  const pies = pieCharts.map((options, i) => (
    <PieChart
      className="pie"
      key={i}
      title={options.title}
      palette='Dark Moon'
      sizeGroup="piesGroup"
      dataSource={options.dataSource}
    >
      <Series argumentField="name" valueField="area">
        <Label visible={true} format="percent" />
      </Series>
      <Legend
        verticalAlignment="bottom"
        horizontalAlignment="center"
        itemTextPosition="right"
        rowCount={2}
      />
    </PieChart>
  ));

  return (
    <div className="pies-container">
      {pies}
    </div>
  );
}

export default Consommation2;
