import React from 'react';
import { dataSource } from '../Data/data2.js';

import Funnel, {
  Title,
  Margin,
  Export,
  Tooltip,
  Item,
  Border,
  Label
} from 'devextreme-react/funnel';

function PyramidChart() {
  return (
    <Funnel id="funnel"
      dataSource={dataSource}
      palette="Soft Pastel"
      argumentField="argument"
      valueField="value"
      style={{  backgroundColor:"#ffffff", width:'57%'}}

    >
      <Title text="Moyen Age des employés par département ">
        <Margin bottom={30} />
      </Title>
      <Export enabled={true} />
      <Tooltip enabled={true}  />
      <Item>
        <Border visible={true} />
      </Item>
      <Label
        visible={true}
        position="inside"
        backgroundColor="none"
        customizeText={formatLabel}
      />
    </Funnel>
  );
}

function formatLabel(arg) {
  return `<span class="label">${arg.item.argument}</span><br/>`;
}

export default PyramidChart;
