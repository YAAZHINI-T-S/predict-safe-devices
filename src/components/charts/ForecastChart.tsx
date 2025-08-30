import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Area, ComposedChart } from "recharts";

const data = [
  { month: "Jan", actual: 65, forecast: null, upper: null, lower: null },
  { month: "Feb", actual: 72, forecast: null, upper: null, lower: null },
  { month: "Mar", actual: 68, forecast: null, upper: null, lower: null },
  { month: "Apr", actual: 85, forecast: null, upper: null, lower: null },
  { month: "May", actual: 91, forecast: null, upper: null, lower: null },
  { month: "Jun", actual: 89, forecast: null, upper: null, lower: null },
  { month: "Jul", actual: 95, forecast: null, upper: null, lower: null },
  { month: "Aug", actual: 102, forecast: null, upper: null, lower: null },
  { month: "Sep", actual: 98, forecast: null, upper: null, lower: null },
  { month: "Oct", actual: 108, forecast: null, upper: null, lower: null },
  { month: "Nov", actual: 115, forecast: null, upper: null, lower: null },
  { month: "Dec", actual: 125, forecast: 125, upper: 135, lower: 115 },
  { month: "Jan+1", actual: null, forecast: 132, upper: 145, lower: 119 },
  { month: "Feb+1", actual: null, forecast: 138, upper: 152, lower: 124 },
  { month: "Mar+1", actual: null, forecast: 145, upper: 160, lower: 130 },
  { month: "Apr+1", actual: null, forecast: 152, upper: 168, lower: 136 },
  { month: "May+1", actual: null, forecast: 158, upper: 175, lower: 141 },
  { month: "Jun+1", actual: null, forecast: 165, upper: 182, lower: 148 }
];

export const ForecastChart = () => {
  return (
    <div className="h-[400px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
          <XAxis 
            dataKey="month" 
            tick={{ fontSize: 12 }}
            className="text-muted-foreground"
          />
          <YAxis 
            tick={{ fontSize: 12 }}
            className="text-muted-foreground"
          />
          <Tooltip 
            contentStyle={{
              backgroundColor: 'hsl(var(--card))',
              border: '1px solid hsl(var(--border))',
              borderRadius: '8px',
              fontSize: '12px'
            }}
            formatter={(value, name) => {
              if (value === null) return [null, name];
              return [
                `$${value}M`,
                name === 'actual' ? 'Actual Sales' : 
                name === 'forecast' ? 'Forecast' :
                name === 'upper' ? 'Upper Confidence' : 'Lower Confidence'
              ];
            }}
          />
          <Legend />
          
          {/* Confidence Interval Area */}
          <Area
            type="monotone"
            dataKey="upper"
            stackId="1"
            stroke="none"
            fill="hsl(var(--accent))"
            fillOpacity={0.1}
          />
          <Area
            type="monotone"
            dataKey="lower"
            stackId="1"
            stroke="none"
            fill="hsl(var(--background))"
            fillOpacity={1}
          />
          
          {/* Actual Sales Line */}
          <Line 
            type="monotone" 
            dataKey="actual" 
            stroke="hsl(var(--primary))" 
            strokeWidth={3}
            dot={{ fill: 'hsl(var(--primary))', strokeWidth: 2, r: 4 }}
            connectNulls={false}
            name="Actual Sales"
          />
          
          {/* Forecast Line */}
          <Line 
            type="monotone" 
            dataKey="forecast" 
            stroke="hsl(var(--accent))" 
            strokeWidth={3}
            strokeDasharray="8 4"
            dot={{ fill: 'hsl(var(--accent))', strokeWidth: 2, r: 4 }}
            connectNulls={false}
            name="Forecast"
          />
          
          {/* Confidence Bounds */}
          <Line 
            type="monotone" 
            dataKey="upper" 
            stroke="hsl(var(--accent))" 
            strokeWidth={1}
            strokeOpacity={0.5}
            dot={false}
            connectNulls={false}
            name="Upper Confidence (95%)"
          />
          <Line 
            type="monotone" 
            dataKey="lower" 
            stroke="hsl(var(--accent))" 
            strokeWidth={1}
            strokeOpacity={0.5}
            dot={false}
            connectNulls={false}
            name="Lower Confidence (95%)"
          />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};