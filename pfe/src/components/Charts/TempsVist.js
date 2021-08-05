import React from 'react';
import { Chart, Series, CommonSeriesSettings, Label, Format, Legend, Export } from 'devextreme-react/chart';
import { grossProductData } from '../Data/dataTmpVst.js';


class TempsVist extends React.Component {
    
      render() {
        return (
          <Chart id="chart"
            title="Temps de visite par page en seconde"
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
              name="Pages"
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
    

export default TempsVist;
