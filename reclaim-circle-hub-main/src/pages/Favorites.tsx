import { useState } from "react";
import { Navigation } from "@/components/ui/navigation";
import { MaterialCard } from "@/components/MaterialCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Heart, 
  Search, 
  Filter, 
  Grid3X3, 
  List,
  Trash2,
  Share2
} from "lucide-react";

const Favorites = () => {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [searchTerm, setSearchTerm] = useState("");

  const savedItems = [
    {
      title: "MacBook Pro 13\" 2018",
      description: "Excellent condition laptop, perfect for students or professionals. Includes charger and original box.",
      category: "Electronics",
      condition: "excellent" as const,
      location: "Downtown, 2.1 mi",
      date: "2 days ago",
      imageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      userName: "Sarah K.",
      userRating: 4.8,
      price: "450",
      savedDate: "3 days ago"
    },
    {
      title: "Vintage Danish Modern Chair",
      description: "Beautiful mid-century modern chair in excellent condition. Original upholstery recently cleaned.",
      category: "Furniture",
      condition: "excellent" as const,
      location: "Arts District, 4.2 mi",
      date: "1 week ago",
      imageUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      userName: "Design Studio",
      userRating: 4.9,
      price: "300",
      savedDate: "1 week ago"
    },
    {
      title: "Professional Photography Equipment",
      description: "Complete photography kit including camera, lenses, and accessories. Perfect for aspiring photographers.",
      category: "Electronics",
      condition: "good" as const,
      location: "Suburbs, 6.1 mi",
      date: "4 days ago",
      imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      userName: "Photo Pro",
      userRating: 4.7,
      price: "800",
      savedDate: "5 days ago"
    },
    {
      title: "Reclaimed Brick Collection",
      description: "Beautiful old bricks perfect for garden paths, fire pits, or accent walls. Great character and patina.",
      category: "Building Materials",
      condition: "good" as const,
      location: "Industrial Area, 8.3 mi",
      date: "1 week ago",
      imageUrl: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      userName: "Restoration Co.",
      userRating: 5.0,
      isFree: true,
      savedDate: "2 weeks ago"
    },
    {
      title: "Organic Cotton Fabric Rolls",
      description: "High-quality organic cotton in various colors. Perfect for sustainable fashion or craft projects.",
      category: "Textiles",
      condition: "excellent" as const,
      location: "Fashion District, 3.7 mi",
      date: "3 days ago",
      imageUrl: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      userName: "Eco Fabrics",
      userRating: 4.8,
      price: "150",
      savedDate: "4 days ago"
    }
  ];

  const filteredItems = savedItems.filter(item =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8 animate-fade-in">
          <h1 className="text-4xl font-bold mb-4 flex items-center justify-center">
            <Heart className="w-8 h-8 mr-3 text-destructive fill-current" />
            Saved Items
          </h1>
          <p className="text-muted-foreground text-lg">
            Keep track of materials you're interested in
          </p>
        </div>

        {/* Controls */}
        <Card className="shadow-soft mb-8 animate-scale-in">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  placeholder="Search saved items..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>

              <div className="flex items-center space-x-4">
                {/* View Mode Toggle */}
                <div className="flex bg-secondary rounded-lg p-1">
                  <Button
                    variant={viewMode === "grid" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setViewMode("grid")}
                    className="transition-all duration-200"
                  >
                    <Grid3X3 className="w-4 h-4" />
                  </Button>
                  <Button
                    variant={viewMode === "list" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setViewMode("list")}
                    className="transition-all duration-200"
                  >
                    <List className="w-4 h-4" />
                  </Button>
                </div>

                <Button variant="outline" className="transition-all duration-200 hover:scale-105">
                  <Filter className="w-4 h-4 mr-2" />
                  Filter
                </Button>
              </div>
            </div>

            {/* Stats */}
            <div className="flex items-center justify-between mt-4 pt-4 border-t">
              <div className="text-sm text-muted-foreground">
                {filteredItems.length} of {savedItems.length} items
              </div>
              <div className="flex items-center space-x-4">
                <Button variant="outline" size="sm" className="transition-all duration-200 hover:scale-105">
                  <Share2 className="w-4 h-4 mr-2" />
                  Share List
                </Button>
                <Button variant="outline" size="sm" className="text-destructive hover:text-destructive transition-all duration-200 hover:scale-105">
                  <Trash2 className="w-4 h-4 mr-2" />
                  Clear All
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Items Display */}
        {filteredItems.length === 0 ? (
          <Card className="shadow-soft animate-fade-in">
            <CardContent className="p-12 text-center">
              <Heart className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
              <h3 className="text-2xl font-semibold mb-2">No saved items found</h3>
              <p className="text-muted-foreground mb-6">
                {searchTerm ? "Try adjusting your search terms" : "Start browsing materials and save the ones you like!"}
              </p>
              <Button className="bg-gradient-primary transition-all duration-200 hover:scale-105">
                <Search className="w-4 h-4 mr-2" />
                Browse Materials
              </Button>
            </CardContent>
          </Card>
        ) : (
          <div className={`grid gap-6 ${
            viewMode === "grid" 
              ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" 
              : "grid-cols-1"
          }`}>
            {filteredItems.map((item, index) => (
              <div
                key={index}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {viewMode === "grid" ? (
                  <div className="relative group">
                    <MaterialCard {...item} />
                    <div className="absolute top-2 left-2 bg-destructive text-destructive-foreground px-2 py-1 rounded text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                      Saved {item.savedDate}
                    </div>
                  </div>
                ) : (
                  <Card className="shadow-soft hover:shadow-impact transition-all duration-300 hover:-translate-y-1">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <img
                          src={item.imageUrl}
                          alt={item.title}
                          className="w-24 h-24 object-cover rounded-lg"
                        />
                        <div className="flex-1">
                          <div className="flex items-start justify-between">
                            <div>
                              <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                              <p className="text-muted-foreground text-sm mb-2 line-clamp-2">
                                {item.description}
                              </p>
                              <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                                <span>{item.location}</span>
                                <span>•</span>
                                <span>Saved {item.savedDate}</span>
                              </div>
                            </div>
                            <div className="text-right">
                              {item.isFree ? (
                                <span className="text-success font-bold">FREE</span>
                              ) : (
                                <span className="text-primary font-bold">${item.price}</span>
                              )}
                              <div className="mt-2">
                                <Button size="sm" className="bg-gradient-primary">
                                  Contact
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Quick Actions */}
        <div className="mt-12 text-center animate-bounce-soft">
          <div className="inline-flex items-center space-x-4 bg-card p-6 rounded-lg shadow-soft">
            <div className="text-center">
              <Heart className="w-8 h-8 mx-auto mb-2 text-destructive" />
              <p className="text-sm font-medium">Love something?</p>
              <p className="text-xs text-muted-foreground">Save it for later</p>
            </div>
            <div className="h-8 w-px bg-border" />
            <div className="text-center">
              <Search className="w-8 h-8 mx-auto mb-2 text-primary" />
              <p className="text-sm font-medium">Keep browsing</p>
              <p className="text-xs text-muted-foreground">Find more great deals</p>
            </div>
            <div className="h-8 w-px bg-border" />
            <div className="text-center">
              <Share2 className="w-8 h-8 mx-auto mb-2 text-accent" />
              <p className="text-sm font-medium">Share with friends</p>
              <p className="text-xs text-muted-foreground">Spread the word</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Favorites;