import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ReactECharts, ReactEChartsProps,themeProps } from './components/ReactECharts';
import { EChartsOption } from 'echarts';


const lineOption:EChartsOption = {
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



function App() {
  let theme:themeProps= "light";
  console.log("APP")
  function handleClick(){
    (theme==="light") ? theme="dark" : theme="light"
    console.log("handleClick theme:",theme)
  }
  // const foo:ReactEChartsProps = {
  //   option:lineOption,
  //   theme:theme
  // }
  return (
    <div className="App">
      <ReactECharts option={lineOption} theme={theme} ></ReactECharts>
      <button onClick={handleClick}>Theme</button>
    </div>
  );
}

export default App;
