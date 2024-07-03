import React, { useRef, useEffect, CSSProperties } from "react";
import { EChartsOption, init  } from "echarts";


export type ThemeProps = {
  theme: 'light' | 'dark'
}

export type EChartProps = {
  option: EChartsOption,
  style: CSSProperties,
  theme: ThemeProps,
}


//this is uncontrolled
export function ReactECharts({  
  option,
  style,
  theme}:EChartProps){

  const chartRef = useRef(null);
  useEffect(() => {
    let chart = init(chartRef.current,theme );
    chart && chart.setOption(option);
  
    console.log(`useeffect1 ${theme}`)
    return () => {
      chart?.dispose();
    };
  }, [theme,option]);

  return <div ref={chartRef} style={{ width: "400px", height: "300px", ...style }} />;
}
