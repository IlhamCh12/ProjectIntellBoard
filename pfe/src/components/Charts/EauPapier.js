import React from 'react';
import Chart, {
  CommonSeriesSettings,
  Series,
  Pane,
  ValueAxis,
  Export,
  Legend,
  Label,
  Title,
  Grid
} from 'devextreme-react/chart';
import { weatherData } from '../Data/dataEauPp.js';

class EauPapier extends React.Component {
  render() {
    return (
      <Chart
        id="chart"
        dataSource={weatherData}
        defaultPane="bottomPane"
        palette='Dark Moon'
        title="Consommation d'Eau et Papier"
        style={{height:540}}
      >
        <CommonSeriesSettings argumentField="month" />
        <Series
          pane="topPane"
          valueField="avgT"
          name="Eau, m3"
        >
          <Label
            visible={true}
            customizeText={temperatureCustomizeText}
          />
        </Series>
        <Series
          type="bar"
          valueField="prec"
          name="Papier, tonne"
        >
          <Label
            visible={true}
            customizeText={precipitationCustomizeText}
          />
        </Series>

        <Pane name="topPane" />
        <Pane name="bottomPane" />

        <ValueAxis pane="bottomPane">
          <Grid visible={true} />
          <Title text="Quantité Papier, tonne" />
        </ValueAxis>
        <ValueAxis pane="topPane">
          <Grid visible={true} />
          <Title text="Quantité Eau, m3" />
        </ValueAxis>

        <Legend
          verticalAlignment="bottom"
          horizontalAlignment="center"
        />
        <Export enabled={true} />
      </Chart>
    );
  }
}

function temperatureCustomizeText({ valueText }) {
  return `${valueText} m3`;
}

function precipitationCustomizeText({ valueText }) {
  return `${valueText} tonne`;
}

export default EauPapier;
