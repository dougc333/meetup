import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ReactECharts,ThemeProps, EChartProps } from './components/ReactECharts';


const lineOption:EChartProps["option"] = {
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: [150, 230, 224, 218, 135, 147, 260],
      type: 'line'
    }
  ]
}

const myTheme:EChartProps["theme"] ={
  theme: "light"
} 

function App() {
  return (
    <div className="App">
      <ReactECharts option={lineOption} style={{}} theme={myTheme}></ReactECharts>
    </div>
  );
}

export default App;
