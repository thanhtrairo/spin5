import "./styles.css";
import React, { useCallback, useState } from "react";
import { PieChart, Pie, Cell } from "recharts";

const data = [
  { name: "network 1", value: 2 },
  { name: "network 3", value: 4 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const RADIAN = Math.PI / 180;
const RenderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
}) => {
  const RADIAN = Math.PI / 180;
  const radius = 25 + innerRadius + (outerRadius - innerRadius);
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + outerRadius * cos;
  const sy = cy + outerRadius * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 30 + 20;
  const ey = my;
  return (
    <>
      <text x={cx} y={cy} textAnchor="middle">
        a
      </text>
      <path
        d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
        stroke={"red"}
        fill="none"
      />
      <text
        x={x}
        y={y}
        fill="red"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    </>
  );
};
export default function App() {
  return (
    <PieChart width={400} height={400}>
      <Pie
        data={data}
        cx="50%"
        cy="50%"
        outerRadius={80}
        innerRadius={40}
        fill="#8884d8"
        dataKey="value"
        labelLine={false}
        label={<RenderCustomizedLabel />}
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
    </PieChart>
  );
}
