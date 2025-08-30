import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown, DollarSign, Package, Users, Target } from "lucide-react";

export const MetricsOverview = () => {
  const metrics = [
    {
      title: "Total Revenue",
      value: "$111.4M",
      change: "+12.5%",
      trend: "up",
      icon: DollarSign,
      description: "vs last quarter"
    },
    {
      title: "Products Sold",
      value: "1.2M",
      change: "+8.3%",
      trend: "up",
      icon: Package,
      description: "units this quarter"
    },
    {
      title: "Active Customers",
      value: "48.2K",
      change: "+15.7%",
      trend: "up",
      icon: Users,
      description: "healthcare providers"
    },
    {
      title: "Forecast Accuracy",
      value: "94.2%",
      change: "+2.1%",
      trend: "up",
      icon: Target,
      description: "model performance"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {metrics.map((metric, index) => {
        const IconComponent = metric.icon;
        const isPositive = metric.trend === "up";
        
        return (
          <Card key={index} className="relative overflow-hidden">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className={`p-2 rounded-lg ${isPositive ? 'bg-success/10' : 'bg-destructive/10'}`}>
                  <IconComponent className={`h-5 w-5 ${isPositive ? 'text-success' : 'text-destructive'}`} />
                </div>
                <Badge variant={isPositive ? "default" : "destructive"} className="text-xs">
                  {isPositive ? <TrendingUp className="h-3 w-3 mr-1" /> : <TrendingDown className="h-3 w-3 mr-1" />}
                  {metric.change}
                </Badge>
              </div>
              
              <div className="space-y-1">
                <h3 className="text-2xl font-bold text-foreground">{metric.value}</h3>
                <p className="text-sm font-medium text-muted-foreground">{metric.title}</p>
                <p className="text-xs text-muted-foreground">{metric.description}</p>
              </div>
              
              {/* Gradient overlay */}
              <div className={`absolute top-0 right-0 w-1 h-full ${isPositive ? 'bg-gradient-to-b from-success to-success/50' : 'bg-gradient-to-b from-destructive to-destructive/50'}`} />
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};