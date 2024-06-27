//uncontrolled wont rerender. 
import './App.css';
import { ReactECharts } from './components/ReactECharts';
import React from 'react'
import { 
        lineOption, 
        smoothLineOption,
        basicAreaOption,
        stackedLineOption,
        stackedAreaOption,
        gradientStackedAreaOption,
        bumpChartOptions,
        tempChangeOption,
        areaPiecesOption,    
  } from './ChartConfig';

function App() {
  const [themeColor,setThemeColor] = React.useState("light")
  
  function handleClick(){
    themeColor==="dark" ? setThemeColor("light") : setThemeColor("dark")
    console.log(`handleClick ${themeColor}`)//trigger rerender when theme changes
  }

  return (
    <>
    <div className="App">
      <ReactECharts option={lineOption} theme={themeColor} />
      <ReactECharts option={smoothLineOption} theme={themeColor} />
      <ReactECharts option={basicAreaOption} theme={themeColor} />
      <ReactECharts option={stackedLineOption} theme={themeColor} />
      <ReactECharts option={stackedAreaOption} theme={themeColor} />
      <ReactECharts option={gradientStackedAreaOption} theme={themeColor} />
      <ReactECharts option={bumpChartOptions} theme={themeColor} />
      <ReactECharts option={tempChangeOption} theme={themeColor} />
      <ReactECharts option={areaPiecesOption} theme={themeColor} />
    </div>
     <button onClick={handleClick}>Theme</button>
    </>
  );
}

export default App;
