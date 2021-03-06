import React from 'react';
import {
  PolarChart,
  CommonSeriesSettings,
  Series,
  Export,
  Tooltip
} from 'devextreme-react/polar-chart';
import { fruitSources, productionData } from '../Data/data1';

class App extends React.Component {

  render() {
    return (
      <PolarChart
        id="chart"
        dataSource={productionData}
        useSpiderWeb={true}
        
        title="Fruit Production in 2010 (Millions of Tons)"
        style={{ backgroundColor:"#ffffff",height:600}}
      >
        <CommonSeriesSettings type="line" />
        { 
          fruitSources.map(function(item) {
            return <Series key={item.value} valueField={item.value} name={item.name} />;
          })
        }
        <Export enabled={true} />
        <Tooltip enabled={true} />
      </PolarChart>
    );
  }
}

export default App;
