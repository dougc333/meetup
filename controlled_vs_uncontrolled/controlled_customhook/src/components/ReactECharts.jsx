import React, { useRef, useEffect } from "react";
import { init, getInstanceByDom } from "echarts";
// import type { CSSProperties } from "react";
// import type { EChartsOption, ECharts, SetOptionOpts } from "echarts";

//this is uncontrolled
export function ReactECharts({  option,
  style,
  settings,
  loading,
  theme}){
  
  const chartRef = useRef(null);
  //const [chartInstance, setChartInstance] = React.useState(null)

  useEffect(() => {
    // Initialize chart
    let chart;
    if (chartRef.current !== null) {
      chart = init(chartRef.current,theme );
    }
    console.log("useeffect1", theme)
    
    function resizeChart() {
      chart?.resize();
    }
    window.addEventListener("resize", resizeChart);

    return () => {
      chart?.dispose();
      window.removeEventListener("resize", resizeChart);
      console.log("window remove event listener")
    };
    }, [theme]);

  useEffect(() => {
    console.log("useeffect2", theme)
    
    if (chartRef.current !== null) {
      const chart = getInstanceByDom(chartRef.current);
      chart?.setOption(option, settings);
    }
  }, [option, settings, theme]); // Whenever theme changes we need to add option and setting due to it being deleted in cleanup function

  useEffect(() => {
    // Update chart
    console.log("useeffect3", theme)
    if (chartRef.current !== null) {
      const chart = getInstanceByDom(chartRef.current);
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      loading === true ? chart?.showLoading() : chart?.hideLoading();
    }
  }, [loading, theme]);

  return <div ref={chartRef} style={{ width: "100%", height: "300px", ...style }} />;
}
