"use client";

import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

type BioPoint = {
  data: string;
  peso: string;
  gordura: string;
  muscular: string;
};

export function BioChart({ data }: { data: BioPoint[] }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!ref.current || data.length < 2) return;

    const labels = data.map((d) => d.data);

    const datasets: Chart["data"]["datasets"] = [];

    if (data.some((d) => d.peso)) {
      datasets.push({
        label: "Peso (kg)",
        data: data.map((d) => (d.peso ? parseFloat(d.peso) : null)),
        borderColor: "#C9A84C",
        backgroundColor: "rgba(201,168,76,0.07)",
        tension: 0.4,
        fill: true,
        pointBackgroundColor: "#C9A84C",
        pointBorderColor: "#0e0e0e",
        pointBorderWidth: 2,
        pointRadius: 5,
        pointHoverRadius: 7,
      } as never);
    }

    if (data.some((d) => d.gordura)) {
      datasets.push({
        label: "Body Fat (%)",
        data: data.map((d) => (d.gordura ? parseFloat(d.gordura) : null)),
        borderColor: "#e06b6b",
        backgroundColor: "transparent",
        tension: 0.4,
        fill: false,
        pointBackgroundColor: "#e06b6b",
        pointBorderColor: "#0e0e0e",
        pointBorderWidth: 2,
        pointRadius: 5,
        pointHoverRadius: 7,
      } as never);
    }

    if (data.some((d) => d.muscular)) {
      datasets.push({
        label: "Massa Muscular (%)",
        data: data.map((d) => (d.muscular ? parseFloat(d.muscular) : null)),
        borderColor: "#4ecb7f",
        backgroundColor: "transparent",
        tension: 0.4,
        fill: false,
        pointBackgroundColor: "#4ecb7f",
        pointBorderColor: "#0e0e0e",
        pointBorderWidth: 2,
        pointRadius: 5,
        pointHoverRadius: 7,
      } as never);
    }

    const chart = new Chart(ref.current, {
      type: "line",
      data: { labels, datasets },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        interaction: { mode: "index", intersect: false },
        plugins: {
          legend: {
            position: "bottom",
            labels: {
              color: "#666",
              font: { size: 11 },
              padding: 16,
              usePointStyle: true,
              pointStyleWidth: 8,
            },
          },
          tooltip: {
            backgroundColor: "#141414",
            borderColor: "#282828",
            borderWidth: 1,
            titleColor: "#efefef",
            bodyColor: "#888",
            padding: 12,
            cornerRadius: 10,
          },
        },
        scales: {
          x: {
            ticks: { color: "#444", font: { size: 10 } },
            grid: { color: "rgba(255,255,255,0.04)" },
            border: { color: "transparent" },
          },
          y: {
            beginAtZero: false,
            ticks: { color: "#444", font: { size: 10 } },
            grid: { color: "rgba(255,255,255,0.04)" },
            border: { color: "transparent" },
          },
        },
      },
    });

    return () => chart.destroy();
  }, [data]);

  return <canvas ref={ref} />;
}
