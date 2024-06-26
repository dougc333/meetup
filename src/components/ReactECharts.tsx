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
      chart = init(chartRef.current, theme);
    }

    return () => {
      chart?.dispose();
    };
  }, [theme]);

  useEffect(() => {
    // Update chart where is theme in setOption? It is in the 
    // other useEffet. Why? you have to reinit another instance for theme? 
    if (chartRef.current !== null) {
      const chart = getInstanceByDom(chartRef.current);
      chart?.setOption(option, settings);
    }
  }, [option, settings, theme]); // Whenever theme changes we need to add option and setting due to it being deleted in cleanup function

  useEffect(() => {
    // Update chart
    if (chartRef.current !== null) {
      const chart = getInstanceByDom(chartRef.current);
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      loading === true ? chart?.showLoading() : chart?.hideLoading();
    }
  }, [loading, theme]);

  return <div ref={chartRef} style={{ width: "100%", height: "100px", ...style }} />;
}
