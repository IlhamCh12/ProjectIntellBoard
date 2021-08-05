import React from 'react';
import {
  Chart,
  CommonSeriesSettings,
  Series,
  ArgumentAxis,
  Grid,
  Crosshair,
  Export,
  Legend,
  Point,
  Label,
  Font,
  Title,
  Subtitle,
  Tooltip
} from 'devextreme-react/chart';
import { energySources, countriesInfo } from '../Data/dataConsm.js';

class Consommation extends React.Component {

  render() {
    return (
      <Chart
        id="chart"
        dataSource={countriesInfo}
        palette='Soft Blue'
      >
        <CommonSeriesSettings
          type="spline"
          argumentField="country"
        >
          <Point hoverMode="allArgumentPoints" />
        </CommonSeriesSettings>
        {
          energySources.map(function(item) {
            return <Series key={item.value} valueField={item.value} name={item.name} />;
          })
        }
        <ArgumentAxis
          valueMarginsEnabled={false}
          discreteAxisDivisionMode="crossLabels"
        >
          <Grid visible={true} />
        </ArgumentAxis>
        <Crosshair
          enabled={true}
          color="#949494"
          width={3}
          dashStyle="dot"
        >
          <Label
            visible={true}
            backgroundColor="#949494"
          >
            <Font
              color="#fff"
              size={12}
            />
          </Label>
        </Crosshair>
        <Legend
          verticalAlignment="bottom"
          horizontalAlignment="center"
          itemTextPosition="bottom"
          equalColumnWidth={true}
        />
        <Title text=" Consommation d'Electricité et de Gaz (3 dernières années) ">
          <Subtitle text="( KWT )" />
        </Title>
        <Export enabled={true} />
        <Tooltip enabled={true} />
      </Chart>
    );
  }
}

export default Consommation;
