import React from 'react';
import SelectBox from 'devextreme-react/select-box';
import {
  Chart,
  Series,
  ArgumentAxis,
  CommonSeriesSettings,
  Export,
  Legend,
  Margin,
  Title,
  Subtitle,
  Tooltip,
  Grid
} from 'devextreme-react/chart';
import service from '../Data/dataNbrVs.js';

const countriesInfo = service.getCountriesInfo();
const energySources = service.getEnergySources();
const types = ['line', 'stackedline', 'fullstackedline'];

class NbrVisiteur extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: 'line'
    };
    this.handleChange = this.handleChange.bind(this);
  }

  render() {
    return (
      <React.Fragment>
        <Chart
          palette="Violet"
          dataSource={countriesInfo}
          style={{height:480}}
        >
          <CommonSeriesSettings
            argumentField="country"
            type={this.state.type}
          />
          {
            energySources.map(function(item) {
              return <Series key={item.value} valueField={item.value} name={item.name} />;
            })
          }
          <Margin bottom={20} />
          <ArgumentAxis
            valueMarginsEnabled={false}
            discreteAxisDivisionMode="crossLabels"
          >
            <Grid visible={true} />
          </ArgumentAxis>
          <Legend
            verticalAlignment="bottom"
            horizontalAlignment="center"
            itemTextPosition="bottom"
          />
          <Export enabled={true} />
          <Title text="Nombre de visites par Page">
          </Title>
          <Tooltip enabled={true} />
        </Chart>
        
      </React.Fragment>
    );
  }

  handleChange(e) {
    this.setState({ type: e.value });
  }
}

export default NbrVisiteur;
