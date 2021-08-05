import React from 'react';

import { Chart, Series, CommonSeriesSettings, Label, Format, Legend, Export } from 'devextreme-react/chart';
import { grossProductData } from '../Data/dataPlt.js';

class PlainteInfo extends React.Component {

  render() {
    return (
      <Chart id="chart"
        title="Nombre de plaintes par gravité et satisfaction"
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
          valueField="year2001"
          name="Satisfait"
        />
        <Series
          valueField="year1998"
          name="Non Satisfait"
        />
       
        
         <Series
          argumentField="state"
          valueField="year2004"
          name="Très satisfait"
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

export default PlainteInfo;
