import React from 'react';

import { Chart, Series, CommonSeriesSettings, Legend, Export, Title } from 'devextreme-react/chart';
import { dataSource } from '../Data/dataTauxRb.js';

class App extends React.Component {
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
          barPadding={0.5}
        />
        <Series valueField="page1" name="Page n°1" />
        <Series valueField="page2" name="Page n°2" />
        <Series valueField="page3" name="Page n°3" />
        <Series valueField="page4" name="Page n°4" />
        <Legend
          verticalAlignment="bottom"
          horizontalAlignment="center"
        />
        <Export enabled={true} />
        <Title text="Taux de Rebond Moyen" subtitle="( par Mois )" />
      </Chart>
    );
  }
}

export default App;
