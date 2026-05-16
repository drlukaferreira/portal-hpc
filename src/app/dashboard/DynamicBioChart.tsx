"use client";

import dynamic from "next/dynamic";

type BioPoint = { data: string; peso: string; gordura: string; muscular: string };

const BioChartInner = dynamic(
  () => import("./BioChart").then((m) => m.BioChart),
  { ssr: false }
);

export function DynamicBioChart({ data }: { data: BioPoint[] }) {
  return <BioChartInner data={data} />;
}
