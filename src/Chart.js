import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  AreaChart,
  Area,
  ReferenceLine,
  BarChart,
  Bar,
  Rectangle,
} from "recharts";

const data = [
  {
    name: "Mon",
    uv: 40,
    pv: 24,
  },
  {
    name: "Tue",
    uv: 30,
    pv: 13,
  },
  {
    name: "Wen",
    uv: 20,
    pv: 48,
  },
  {
    name: "Thus",
    uv: 27,
    pv: 39,
  },
  {
    name: "Fri",
    uv: 18,
    pv: 48,
  },
  {
    name: "Sat",
    uv: 23,
    pv: 38,
  },
  {
    name: "Sun",
    uv: 34,
    pv: 20,
  },
];

const renderLegend = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        gap: "60px",
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <span
          style={{
            display: "inline-block",
            width: "24px",
            height: "24px",
            backgroundColor: "#e7e7e8",
            borderColor: "#e7e7e8",
            marginRight: "16px",
          }}
        ></span>
        <span
          style={{
            fontSize: "14px",
            fontWeight: "500",
            color: "#333333",
          }}
        >
          Previous time
        </span>
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <span
          style={{
            display: "inline-block",
            width: "24px",
            height: "24px",
            backgroundColor: "#ffa0a9",
            borderColor: "#ffa0a9",
            marginRight: "16px",
          }}
        ></span>
        <span
          style={{
            fontSize: "14px",
            fontWeight: "500",
            color: "#333333",
          }}
        >
          Selected time
        </span>
      </div>
    </div>
  );
};

export default function Chart() {
  return (
    <div style={{ padding: "50px" }}>
      <BarChart width={1110} height={282.5} data={data} barGap={0}>
        <XAxis
          dataKey="name"
          tick={{ fill: "#333333" }}
          tickMargin={16}
          tickLine={false}
          axisLine={{ stroke: "#e7e7e8" }}
          width={1040}
        />
        <YAxis
          type="number"
          domain={[0, 50]}
          height={218.5}
          tickCount={6}
          tick={{ fill: "#333333" }}
          tickMargin={16}
          tickLine={false}
          axisLine={{ stroke: "#e7e7e8" }}
        />
        <Tooltip />
        <Legend content={renderLegend} verticalAlign="top" />
        <Bar dataKey="pv" fill="#e7e7e8" barSize={32} />
        <Bar dataKey="uv" fill="#ffa0a9" barSize={32} />
      </BarChart>
    </div>
  );
}
