import React from 'react';

import { Chart, Series, CommonSeriesSettings, Label, Format, Legend, Export } from 'devextreme-react/chart';
import { grossProductData } from '../Data/dataESD.js';

class EmpSxDep extends React.Component {

  render() {
    return (
      <Chart id="chart"
        title="Effectif du Personnel"
        dataSource={grossProductData}
        onPointClick={this.onPointClick}
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
          name="Homme"
        />
        <Series
          valueField="mme"
          name="Femme"
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
