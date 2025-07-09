import "chartjs-adapter-moment";

import { useEffect, useRef } from "react";

import type { ChartItem } from "chart.js";
import { Chart, Filler, LinearScale, LineController, LineElement, PointElement, TimeScale, Tooltip } from "chart.js";

import { AnalyticsDataView } from "store/business/analytics/types";

Chart.register(LineController, LineElement, Filler, PointElement, LinearScale, TimeScale, Tooltip);

function LineChart({
  pageViews,
  completions,
  width,
  height,
}: {
  pageViews: AnalyticsDataView[];
  completions: AnalyticsDataView[];

  width: number;
  height: number;
}) {
  const canvas = useRef(null);

  const labels = pageViews.map(({ date }) => date);
  const pageViewsData = pageViews.map(({ count }) => count);
  const completionsData = completions.map(({ count }) => count);
  useEffect(() => {
    const ctx: ChartItem = canvas.current as unknown as ChartItem;

    const chart: Chart = new Chart(ctx, {
      type: "line",
      data: {
        labels,
        datasets: [
          {
            label: "Page views",
            fill: true,
            backgroundColor: "transparent",
            borderColor: "#A855F7",
            borderWidth: 2,
            tension: 0,
            pointRadius: 0,
            pointHoverRadius: 3,
            pointBackgroundColor: "#A855F7",
            pointBorderColor: "black",
            clip: 20,
            data: pageViewsData,
          },
          {
            label: "Completions",
            fill: true,
            backgroundColor: "transparent",
            borderColor: "#3DD69E",
            borderWidth: 2,
            tension: 0,
            pointRadius: 0,
            pointHoverRadius: 3,
            pointBackgroundColor: "#3DD69E",
            pointBorderColor: "black",
            clip: 20,
            data: completionsData,
          },
        ],
      },
      options: {
        interaction: {
          intersect: false,
          mode: "index",
        },
        layout: {
          padding: 20,
        },
        scales: {
          y: {
            beginAtZero: true,
            grid: {},
          },
          x: {
            type: "time",
            time: {
              tooltipFormat: "MMM D",
              unit: "day",
              displayFormats: {
                day: "MMM D",
              },
            },

            grid: {
              display: false,
            },

            ticks: {
              autoSkipPadding: 48,
              maxRotation: 0,
            },
          },
        },
        plugins: {
          tooltip: {
            usePointStyle: true,
          },
          legend: {
            display: false,
          },
        },
        maintainAspectRatio: false,
        resizeDelay: 200,
      },
    });
    return () => chart.destroy();
  }, []);

  return <canvas ref={canvas} width={width} height={height} />;
}

export default LineChart;
