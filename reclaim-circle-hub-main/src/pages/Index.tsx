import { Link } from "react-router-dom";
import { Navigation } from "@/components/ui/navigation";
import { Hero } from "@/components/Hero";
import { SearchFilters } from "@/components/SearchFilters";
import { MaterialCard } from "@/components/MaterialCard";
import { ImpactStats } from "@/components/ImpactStats";
import { Button } from "@/components/ui/button";
import { ArrowRight, Plus } from "lucide-react";

const Index = () => {
  // Mock data for featured materials
  const featuredMaterials = [
    {
      title: "MacBook Pro 13\" 2018",
      description: "Excellent condition laptop, perfect for students or professionals. Includes charger and original box.",
      category: "Electronics",
      condition: "excellent" as const,
      location: "Downtown, 2.1 mi",
      date: "2 days ago",
      imageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      userName: "Shivani k.",
      userRating: 4.8,
      price: "450"
    },
    {
      title: "Reclaimed Oak Wood Planks",
      description: "Beautiful reclaimed oak planks from old barn. Perfect for DIY projects, shelving, or furniture.",
      category: "Building Materials",
      condition: "good" as const,
      location: "Suburbs, 5.3 mi",
      date: "1 week ago",
      imageUrl: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      userName: "Milan k.",
      userRating: 4.9,
      isFree: true
    },
    {
      title: "Office Chair Set (4 chairs)",
      description: "High-quality ergonomic office chairs from company downsizing. Excellent condition with adjustable height.",
      category: "Furniture",
      condition: "excellent" as const,
      location: "Business District, 3.7 mi",
      date: "3 days ago",
      imageUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      userName: "GreenTech Co.",
      userRating: 5.0,
      price: "200"
    },
    {
      title: "Vintage Leather Jacket Collection",
      description: "Curated collection of vintage leather jackets in various sizes. Perfect for upcycling or fashion.",
      category: "Textiles",
      condition: "good" as const,
      location: "Arts District, 4.2 mi",
      date: "5 days ago",
      imageUrl: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      userName: "Vintage Finds",
      userRating: 4.7,
      price: "75"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <Hero />

      {/* Search Section */}
      <section className="py-12 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Find What You Need</h2>
              <p className="text-muted-foreground">
                Search through thousands of reusable materials in your community
              </p>
            </div>
            <SearchFilters />
          </div>
        </div>
      </section>

      {/* Featured Materials */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div className="animate-fade-in">
              <h2 className="text-3xl font-bold mb-2">Featured Materials</h2>
              <p className="text-muted-foreground">
                Recently listed items in your area
              </p>
            </div>
            <Button variant="outline" className="transition-all duration-200 hover:scale-105">
              View All <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredMaterials.map((material, index) => (
              <div 
                key={index} 
                className="animate-fade-in transition-all duration-200 hover:scale-105" 
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <MaterialCard {...material} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16 bg-secondary/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl font-bold mb-4">Community Impact</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              See the positive environmental impact we're making together through 
              the circular economy
            </p>
          </div>
          <div className="animate-scale-in">
            <ImpactStats />
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-primary text-white">
        <div className="container mx-auto px-4 text-center animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Make an Impact?
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Join thousands of community members giving materials a second life. 
            Start by listing an item or browsing what's available.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/list">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 transition-all duration-200 hover:scale-105">
                <Plus className="w-5 h-5 mr-2" />
                List Your First Item
              </Button>
            </Link>
            <Link to="/">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 transition-all duration-200 hover:scale-105">
                Browse Materials
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4">ReCircle</h3>
              <p className="text-background/80">
                Building a sustainable future through the circular economy.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Platform</h4>
              <ul className="space-y-2 text-background/80">
                <li>Browse Materials</li>
                <li>List Items</li>
                <li>Impact Dashboard</li>
                <li>Community</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-background/80">
                <li>Help Center</li>
                <li>Safety Guidelines</li>
                <li>Contact Us</li>
                <li>Report Issue</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-background/80">
                <li>About Us</li>
                <li>Careers</li>
                <li>Press</li>
                <li>Sustainability</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-background/20 mt-8 pt-8 text-center text-background/60">
            <p>&copy; 2024 ReCircle. All rights reserved. Building a sustainable future together.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;