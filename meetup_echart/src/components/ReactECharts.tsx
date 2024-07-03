import React, { useRef, useEffect } from "react";
import { init, getInstanceByDom } from "echarts";
import type { CSSProperties } from "react";
import type { EChartsOption, ECharts, SetOptionOpts } from "echarts";

export interface ReactEChartsProps {
  option: EChartsOption;
  style?: CSSProperties;
  settings?: SetOptionOpts;
  loading?: boolean;
  theme?: "light" | "dark";
}

export function ReactECharts({
  option,
  style,
  settings,
  loading,
  theme,
}: ReactEChartsProps): JSX.Element {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initialize chart
    let chart: ECharts | undefined;
    if (chartRef.current !== null) {
      chart = init(chartRef.current,theme );
    }
    
    console.log("useeffect1")
    return () => {
      chart?.dispose();
    };
  }, [theme]);

  useEffect(() => {
    console.log("useeffect2")
    
    if (chartRef.current !== null) {
      //const chart = init(chartRef.current,theme );
      const chart = getInstanceByDom(chartRef.current);
      chart?.setOption(option, settings);
    }
  }, [option, settings, theme]); // Whenever theme changes we need to add option and setting due to it being deleted in cleanup function

  // useEffect(() => {
  //   // Update chart
  //   console.log("useeffect3")
  //   if (chartRef.current !== null) {
  //     const chart = getInstanceByDom(chartRef.current);
  //     // eslint-disable-next-line @typescript-eslint/no-unused-expressions
  //     loading === true ? chart?.showLoading() : chart?.hideLoading();
  //   }
  // }, [loading, theme]);

  return <div ref={chartRef} style={{ width: "100%", height: "100px", ...style }} />;
}
