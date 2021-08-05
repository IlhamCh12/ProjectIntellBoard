import React from 'react';

import { Chart, Series, CommonSeriesSettings, Label, Format, Legend, Export } from 'devextreme-react/chart';
import { grossProductData } from '../Data/dataFor.js';

class EmpSxDep extends React.Component {

  render() {
    return (
      <Chart id="chart"
        title="Taux de participation et réussite aux formations en %"
        dataSource={grossProductData}
        onPointClick={this.onPointClick}
        palette='Harmony Light'

      >
        <CommonSeriesSettings
          argumentField="state"
          type="bar"
          hoverMode="allArgumentPoints"
          selectionMode="allArgumentPoints"
        >
          <Label visible={true}>
            <Format type="fixedPoint" precision={0} />
          </Label>
        </CommonSeriesSettings>
        <Series

          argumentField="state"
          valueField="mr"
          name="Participation"
        />
        <Series
          argumentField="state"
          valueField="mme"
          name="Réussite"
        />
        <Legend verticalAlignment="bottom" horizontalAlignment="center"></Legend>
        <Export enabled={true} />
      </Chart>
    );
  }

  onPointClick(e) {
    e.target.select();
  }
}

export default EmpSxDep;
