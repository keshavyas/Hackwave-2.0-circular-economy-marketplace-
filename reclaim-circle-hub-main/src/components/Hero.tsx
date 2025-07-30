import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Search, ArrowRight, Recycle, TreePine, Users } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="People exchanging reusable materials in a sustainable community"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero"></div>
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center animate-float">
              <Recycle className="w-8 h-8 text-white" />
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Give Materials a
            <span className="block text-accent"> Second Life</span>
          </h1>

          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto">
            Join the circular economy. List, find, and exchange reusable materials 
            with your community while tracking your environmental impact.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link to="/">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 shadow-impact transition-all duration-200 hover:scale-105">
                <Search className="w-5 h-5 mr-2" />
                Browse Materials
              </Button>
            </Link>
            <Link to="/list">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 transition-all duration-200 hover:scale-105">
                List Your Items
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>

          {/* Impact Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 animate-pulse-soft">
              <TreePine className="w-8 h-8 text-success mb-2 mx-auto" />
              <div className="text-2xl font-bold">2.5k</div>
              <div className="text-sm text-white/80">Trees Worth of CO₂ Saved</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 animate-pulse-soft" style={{animationDelay: '0.5s'}}>
              <Recycle className="w-8 h-8 text-accent mb-2 mx-auto" />
              <div className="text-2xl font-bold">15k+</div>
              <div className="text-sm text-white/80">Items Given New Life</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 animate-pulse-soft" style={{animationDelay: '1s'}}>
              <Users className="w-8 h-8 text-earth mb-2 mx-auto" />
              <div className="text-2xl font-bold">3.2k</div>
              <div className="text-sm text-white/80">Active Community Members</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};