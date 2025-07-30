import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { 
  TreePine, 
  Recycle, 
  DollarSign, 
  Zap,
  Award,
  TrendingUp
} from "lucide-react";

export const ImpactStats = () => {
  const stats = [
    {
      title: "CO₂ Saved",
      value: "2.5 tons",
      unit: "this year",
      progress: 68,
      icon: TreePine,
      color: "text-success",
      bgColor: "bg-success/10"
    },
    {
      title: "Materials Reused",
      value: "47",
      unit: "items",
      progress: 75,
      icon: Recycle,
      color: "text-accent",
      bgColor: "bg-accent/10"
    },
    {
      title: "Money Saved",
      value: "$1,240",
      unit: "community",
      progress: 82,
      icon: DollarSign,
      color: "text-primary",
      bgColor: "bg-primary/10"
    },
    {
      title: "Energy Conserved",
      value: "450 kWh",
      unit: "equivalent",
      progress: 60,
      icon: Zap,
      color: "text-earth",
      bgColor: "bg-earth/10"
    }
  ];

  const achievements = [
    { name: "Eco Warrior", description: "Saved 1 ton of CO₂", earned: true },
    { name: "Community Helper", description: "Helped 50+ neighbors", earned: true },
    { name: "Green Pioneer", description: "First to list electronics", earned: true },
    { name: "Sustainability Champion", description: "100 items reused", earned: false }
  ];

  return (
    <div className="space-y-6">
      {/* Main Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index} className="shadow-soft hover:shadow-impact transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 rounded-lg ${stat.bgColor} flex items-center justify-center`}>
                  <stat.icon className={`w-6 h-6 ${stat.color}`} />
                </div>
                <TrendingUp className="w-4 h-4 text-success" />
              </div>
              
              <div className="space-y-2">
                <h3 className="font-semibold text-sm text-muted-foreground">{stat.title}</h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-bold">{stat.value}</span>
                  <span className="text-sm text-muted-foreground">{stat.unit}</span>
                </div>
                <Progress value={stat.progress} className="h-2" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Impact Summary */}
      <Card className="shadow-soft">
        <CardHeader>
          <CardTitle className="flex items-center">
            <TreePine className="w-5 h-5 mr-2 text-success" />
            Your Environmental Impact
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="bg-gradient-earth rounded-lg p-6 text-white">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">15</div>
                <div className="text-sm opacity-90">Trees equivalent saved</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">750</div>
                <div className="text-sm opacity-90">Gallons of water conserved</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">2.1k</div>
                <div className="text-sm opacity-90">lbs of waste diverted</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Achievements */}
      <Card className="shadow-soft">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Award className="w-5 h-5 mr-2 text-earth" />
            Achievements
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className={`flex items-center space-x-3 p-3 rounded-lg border ${
                  achievement.earned
                    ? "bg-success/10 border-success/20"
                    : "bg-muted/30 border-border opacity-60"
                }`}
              >
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  achievement.earned ? "bg-success text-success-foreground" : "bg-muted"
                }`}>
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-medium">{achievement.name}</div>
                  <div className="text-sm text-muted-foreground">{achievement.description}</div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};