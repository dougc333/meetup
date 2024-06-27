import React, { useRef, useEffect } from "react";
import { init, getInstanceByDom } from "echarts";
// import type { CSSProperties } from "react";
// import type { EChartsOption, ECharts, SetOptionOpts } from "echarts";

//this is uncontrolled
export function ReactECharts({  
  option,
  style,
  theme}){

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
