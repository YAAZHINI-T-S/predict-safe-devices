import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

const data = [
  { month: "Jan", revenue: 65, target: 70 },
  { month: "Feb", revenue: 72, target: 75 },
  { month: "Mar", revenue: 68, target: 72 },
  { month: "Apr", revenue: 85, target: 80 },
  { month: "May", revenue: 91, target: 85 },
  { month: "Jun", revenue: 89, target: 88 },
  { month: "Jul", revenue: 95, target: 92 },
  { month: "Aug", revenue: 102, target: 95 },
  { month: "Sep", revenue: 98, target: 98 },
  { month: "Oct", revenue: 108, target: 105 },
  { month: "Nov", revenue: 115, target: 110 },
  { month: "Dec", revenue: 125, target: 120 }
];

export const SalesChart = () => {
  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
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
            formatter={(value, name) => [
              `$${value}M`,
              name === 'revenue' ? 'Actual Revenue' : 'Target'
            ]}
          />
          <Legend />
          <Line 
            type="monotone" 
            dataKey="revenue" 
            stroke="hsl(var(--primary))" 
            strokeWidth={3}
            dot={{ fill: 'hsl(var(--primary))', strokeWidth: 2, r: 4 }}
            name="Actual Revenue"
          />
          <Line 
            type="monotone" 
            dataKey="target" 
            stroke="hsl(var(--muted-foreground))" 
            strokeWidth={2}
            strokeDasharray="5 5"
            dot={{ fill: 'hsl(var(--muted-foreground))', strokeWidth: 2, r: 3 }}
            name="Target"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};