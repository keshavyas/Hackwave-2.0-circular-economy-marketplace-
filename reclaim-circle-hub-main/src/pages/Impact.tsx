import { Navigation } from "@/components/ui/navigation";
import { ImpactStats } from "@/components/ImpactStats";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  TreePine, 
  Award, 
  Users, 
  Target,
  TrendingUp,
  Share2,
  Download,
  Calendar
} from "lucide-react";

const Impact = () => {
  const goals = [
    {
      title: "CO₂ Reduction Goal",
      current: 2.5,
      target: 5,
      unit: "tons",
      progress: 50,
      color: "text-success"
    },
    {
      title: "Items Reused Goal",
      current: 47,
      target: 100,
      unit: "items",
      progress: 47,
      color: "text-accent"
    },
    {
      title: "Community Connections",
      current: 23,
      target: 50,
      unit: "people",
      progress: 46,
      color: "text-primary"
    }
  ];

  const impactHistory = [
    { month: "January", co2: 0.2, items: 3, savings: 45 },
    { month: "February", co2: 0.4, items: 7, savings: 120 },
    { month: "March", co2: 0.6, items: 12, savings: 200 },
    { month: "April", co2: 0.8, items: 15, savings: 310 },
    { month: "May", co2: 1.2, items: 22, savings: 480 },
    { month: "June", co2: 1.8, items: 35, savings: 650 },
    { month: "July", co2: 2.5, items: 47, savings: 1240 }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8 animate-fade-in">
          <h1 className="text-4xl font-bold mb-4">Your Impact Dashboard</h1>
          <p className="text-muted-foreground text-lg">
            Track your contribution to the circular economy and environmental sustainability
          </p>
        </div>

        {/* Main Impact Stats */}
        <div className="mb-8 animate-scale-in">
          <ImpactStats />
        </div>

        {/* Goals Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <Card className="shadow-soft animate-slide-in-left">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Target className="w-5 h-5 mr-2 text-primary" />
                2024 Goals
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {goals.map((goal, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <h4 className="font-medium">{goal.title}</h4>
                    <span className={`text-sm font-semibold ${goal.color}`}>
                      {goal.current} / {goal.target} {goal.unit}
                    </span>
                  </div>
                  <Progress value={goal.progress} className="h-3" />
                  <p className="text-xs text-muted-foreground">
                    {goal.progress}% complete
                  </p>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="shadow-soft animate-slide-in-right">
            <CardHeader>
              <CardTitle className="flex items-center">
                <TrendingUp className="w-5 h-5 mr-2 text-success" />
                Monthly Progress
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {impactHistory.slice(-3).map((month, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-secondary/20 rounded-lg hover:bg-secondary/30 transition-colors">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2 text-muted-foreground" />
                      <span className="font-medium">{month.month}</span>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-semibold">{month.co2}t CO₂</div>
                      <div className="text-xs text-muted-foreground">{month.items} items</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Community Impact */}
        <Card className="shadow-soft mb-8 animate-fade-in">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Users className="w-5 h-5 mr-2 text-accent" />
              Community Impact
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-gradient-primary rounded-lg text-white">
                <h3 className="text-2xl font-bold mb-2">156th</h3>
                <p className="text-sm opacity-90">Community Ranking</p>
              </div>
              <div className="text-center p-6 bg-gradient-earth rounded-lg text-white">
                <h3 className="text-2xl font-bold mb-2">23</h3>
                <p className="text-sm opacity-90">People Helped</p>
              </div>
              <div className="text-center p-6 bg-accent rounded-lg text-accent-foreground">
                <h3 className="text-2xl font-bold mb-2">4.8★</h3>
                <p className="text-sm opacity-90">Community Rating</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Leaderboard */}
        <Card className="shadow-soft mb-8 animate-scale-in">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Award className="w-5 h-5 mr-2 text-earth" />
              Top Contributors This Month
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { name: "Sarah K.", impact: "4.2t CO₂", items: 67, rank: 1 },
                { name: "Mike R.", impact: "3.8t CO₂", items: 54, rank: 2 },
                { name: "GreenTech Co.", impact: "3.1t CO₂", items: 41, rank: 3 },
                { name: "You", impact: "2.5t CO₂", items: 47, rank: 4, highlight: true },
                { name: "Emma L.", impact: "2.2t CO₂", items: 38, rank: 5 }
              ].map((user, index) => (
                <div
                  key={index}
                  className={`flex items-center justify-between p-4 rounded-lg transition-all hover:scale-105 ${
                    user.highlight 
                      ? "bg-primary/10 border border-primary/20" 
                      : "bg-secondary/20 hover:bg-secondary/30"
                  }`}
                >
                  <div className="flex items-center space-x-4">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${
                      user.rank === 1 ? "bg-yellow-500 text-white" :
                      user.rank === 2 ? "bg-gray-400 text-white" :
                      user.rank === 3 ? "bg-orange-600 text-white" :
                      "bg-muted text-muted-foreground"
                    }`}>
                      {user.rank}
                    </div>
                    <div>
                      <div className="font-semibold">{user.name}</div>
                      <div className="text-sm text-muted-foreground">{user.items} items reused</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold text-success">{user.impact}</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-bounce-soft">
          <Button className="bg-gradient-primary transition-all duration-200 hover:scale-105">
            <Share2 className="w-4 h-4 mr-2" />
            Share Your Impact
          </Button>
          <Button variant="outline" className="transition-all duration-200 hover:scale-105">
            <Download className="w-4 h-4 mr-2" />
            Download Report
          </Button>
          <Button variant="outline" className="transition-all duration-200 hover:scale-105">
            <TreePine className="w-4 h-4 mr-2" />
            Plant a Tree
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Impact;