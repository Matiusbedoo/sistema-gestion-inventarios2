import React from 'react';

import { Chart, Series } from 'devextreme-react/chart';

const dataEvolutionMovement = [{
  day: 'Hoy',
  Salidas: 3,
  Entradas: 6,
  Saldo: 9
}];

const GraphInventory = () => {


  return (
    <div>
      <Chart id="chart" dataSource={dataEvolutionMovement}>
        <Series
          valueField="Salidas"
          argumentField="day"
          name="Salidas Totales Diarias"
          type="bar"
          color="#FFA500" />
        
        <Series
          valueField="Entradas"
          argumentField="day"
          name="Entradas Totatales Diarias"
          type="bar"
          color="#E85D04" />
        
        <Series
          valueField="Saldo"
          argumentField="day"
          name="Saldo total Actual del Material"
          type="bar"
          color="#03071E" />
      </Chart>
    </div>
  )

}

export { GraphInventory }