import React, { useEffect, useRef } from 'react';
import { View } from 'react-native';
import { SVGRenderer, SvgChart,echarts } from '@wuba/react-native-echarts';
import { BarChart } from 'echarts/charts';
import {
  TitleComponent,
  TooltipComponent,
  GridComponent,
} from 'echarts/components';

echarts.use([
  TitleComponent,
  TooltipComponent,
  GridComponent,
  BarChart,
  SVGRenderer,
]);

const MyEChart = () => {
  const chartRef = useRef(null);

  const option = {
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: [120, 200, 150, 80, 70, 110, 130],
        type: 'bar',
      },
    ],
  };

  useEffect(() => {
    let chart;
    if (chartRef.current) {
      chart = echarts.init(chartRef.current, 'light', {
        renderer: 'svg',
        width: 300,
        height: 200,
      });
      chart.setOption(option);
    }
    return () => {
      chart?.dispose();
    };
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <SvgChart ref={chartRef} />
    </View>
  );
};

export default MyEChart;
