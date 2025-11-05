import React from 'react';
import { BarChart3 } from 'lucide-react';

// Simple responsive SVG line chart without external deps
const LineChart = ({ labels, values }) => {
  const width = 600;
  const height = 220;
  const padding = 32;
  const maxVal = Math.max(...values, 1);
  const minVal = Math.min(...values, 0);
  const range = Math.max(maxVal - minVal, 1);

  const points = values.map((v, i) => {
    const x = padding + (i * (width - padding * 2)) / (values.length - 1 || 1);
    const y = height - padding - ((v - minVal) / range) * (height - padding * 2);
    return [x, y];
  });

  const pathD = points
    .map((p, i) => (i === 0 ? `M ${p[0]} ${p[1]}` : `L ${p[0]} ${p[1]}`))
    .join(' ');

  return (
    <svg viewBox={`0 0 ${width} ${height}`} className="h-60 w-full">
      <defs>
        <linearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#6366f1" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
        </linearGradient>
      </defs>
      {/* Axes */}
      <line x1={padding} y1={height - padding} x2={width - padding} y2={height - padding} stroke="#e5e7eb" />
      <line x1={padding} y1={padding} x2={padding} y2={height - padding} stroke="#e5e7eb" />

      {/* Area fill */}
      {points.length > 1 && (
        <path
          d={`${pathD} L ${width - padding} ${height - padding} L ${padding} ${height - padding} Z`}
          fill="url(#grad)"
        />
      )}
      {/* Line */}
      <path d={pathD} fill="none" stroke="#6366f1" strokeWidth="2" />
      {/* Points */}
      {points.map(([x, y], idx) => (
        <circle key={idx} cx={x} cy={y} r="3" fill="#6366f1" />
      ))}
      {/* X labels */}
      {labels.map((label, i) => {
        const x = padding + (i * (width - padding * 2)) / (labels.length - 1 || 1);
        return (
          <text key={label} x={x} y={height - padding + 20} fontSize="10" textAnchor="middle" fill="#6b7280">
            {label}
          </text>
        );
      })}
    </svg>
  );
};

const SalesAnalytics = ({ data }) => {
  const bestDayIndex = data.values.indexOf(Math.max(...data.values));
  const bestDay = data.labels[bestDayIndex];
  const total = data.values.reduce((a, b) => a + b, 0);

  return (
    <section id="analytics" className="mx-auto max-w-6xl px-6 py-14">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h3 className="text-2xl font-bold text-gray-900">Analisi vendite</h3>
          <p className="text-gray-600">Trend settimanale e riassunti rapidi</p>
        </div>
        <div className="inline-flex items-center gap-2 rounded-lg bg-indigo-50 px-3 py-2 text-indigo-700">
          <BarChart3 className="h-5 w-5" />
          <span className="text-sm font-medium">Totale: {total.toFixed(2)}€</span>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <div className="md:col-span-2 rounded-2xl border bg-white p-4 shadow-sm">
          <LineChart labels={data.labels} values={data.values} />
        </div>
        <div className="space-y-4">
          <div className="rounded-2xl border bg-white p-5 shadow-sm">
            <div className="text-sm text-gray-600">Miglior giorno</div>
            <div className="text-xl font-semibold text-gray-900">{bestDay}</div>
          </div>
          <div className="rounded-2xl border bg-white p-5 shadow-sm">
            <div className="text-sm text-gray-600">Ticket medio</div>
            <div className="text-xl font-semibold text-gray-900">
              {(total / data.values.length).toFixed(2)}€
            </div>
          </div>
          <div className="rounded-2xl border bg-white p-5 shadow-sm">
            <div className="text-sm text-gray-600">Ordini stimati</div>
            <div className="text-xl font-semibold text-gray-900">
              {Math.round(total / (data.averageOrder || 1))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SalesAnalytics;
