import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

const seasonalData = [
  { quarter: "Q1", seasonal_index: 0.85, trend: 0.92, cyclical: 1.05 },
  { quarter: "Q2", seasonal_index: 0.92, trend: 0.98, cyclical: 1.02 },
  { quarter: "Q3", seasonal_index: 1.15, trend: 1.08, cyclical: 0.96 },
  { quarter: "Q4", seasonal_index: 1.08, trend: 1.02, cyclical: 0.97 }
];

export const SeasonalityChart = () => {
  return (
    <div className="h-[350px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={seasonalData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
          <XAxis 
            dataKey="quarter" 
            tick={{ fontSize: 12 }}
            className="text-muted-foreground"
          />
          <YAxis 
            tick={{ fontSize: 12 }}
            className="text-muted-foreground"
            domain={[0, 1.3]}
          />
          <Tooltip 
            contentStyle={{
              backgroundColor: 'hsl(var(--card))',
              border: '1px solid hsl(var(--border))',
              borderRadius: '8px',
              fontSize: '12px'
            }}
            formatter={(value, name) => [
              `${(parseFloat(value.toString()) * 100).toFixed(1)}%`,
              name === 'seasonal_index' ? 'Seasonal Index' : 
              name === 'trend' ? 'Trend Component' : 'Cyclical Component'
            ]}
          />
          <Legend />
          
          <Bar 
            dataKey="seasonal_index" 
            fill="hsl(var(--primary))" 
            name="Seasonal Index"
            radius={[4, 4, 0, 0]}
          />
          <Bar 
            dataKey="trend" 
            fill="hsl(var(--secondary))" 
            name="Trend Component"
            radius={[4, 4, 0, 0]}
          />
          <Bar 
            dataKey="cyclical" 
            fill="hsl(var(--accent))" 
            name="Cyclical Component"
            radius={[4, 4, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
      
      <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
        <div className="p-3 bg-muted/30 rounded-lg">
          <h4 className="font-semibold text-primary mb-2">Peak Season</h4>
          <p className="text-muted-foreground">Q3 shows 15% above average sales due to seasonal demand patterns.</p>
        </div>
        <div className="p-3 bg-muted/30 rounded-lg">
          <h4 className="font-semibold text-secondary mb-2">Growth Trend</h4>
          <p className="text-muted-foreground">Consistent upward trend with 8% year-over-year growth trajectory.</p>
        </div>
      </div>
    </div>
  );
};