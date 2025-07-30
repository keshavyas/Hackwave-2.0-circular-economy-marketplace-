import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Heart, 
  MapPin, 
  Calendar, 
  User,
  MessageCircle,
  Star
} from "lucide-react";

interface MaterialCardProps {
  title: string;
  description: string;
  category: string;
  condition: "excellent" | "good" | "fair";
  location: string;
  date: string;
  imageUrl: string;
  userName: string;
  userRating: number;
  price?: string;
  isFree?: boolean;
  onContact?: () => void;
  onSave?: () => void;
}

export const MaterialCard = ({
  title,
  description,
  category,
  condition,
  location,
  date,
  imageUrl,
  userName,
  userRating,
  price,
  isFree = false,
  onContact,
  onSave
}: MaterialCardProps) => {
  const conditionColors = {
    excellent: "bg-success text-success-foreground",
    good: "bg-accent text-accent-foreground", 
    fair: "bg-earth text-earth-foreground"
  };

  return (
    <Card className="group hover:shadow-soft transition-all duration-300 hover:-translate-y-1">
      <div className="relative overflow-hidden rounded-t-lg">
        <img 
          src={imageUrl} 
          alt={title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-2 right-2 bg-white/80 hover:bg-white text-foreground"
          onClick={onSave}
        >
          <Heart className="w-4 h-4" />
        </Button>
        
        {isFree && (
          <Badge className="absolute top-2 left-2 bg-success text-success-foreground">
            FREE
          </Badge>
        )}
      </div>

      <CardContent className="p-4">
        <div className="flex items-start justify-between mb-2">
          <h3 className="font-semibold text-lg leading-tight line-clamp-2 flex-1">
            {title}
          </h3>
          {price && !isFree && (
            <span className="text-primary font-bold text-lg ml-2">
              ${price}
            </span>
          )}
        </div>

        <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
          {description}
        </p>

        <div className="flex flex-wrap gap-2 mb-3">
          <Badge variant="secondary">{category}</Badge>
          <Badge className={conditionColors[condition]}>{condition}</Badge>
        </div>

        <div className="space-y-2 text-sm text-muted-foreground">
          <div className="flex items-center">
            <MapPin className="w-4 h-4 mr-2" />
            <span>{location}</span>
          </div>
          <div className="flex items-center">
            <Calendar className="w-4 h-4 mr-2" />
            <span>{date}</span>
          </div>
          <div className="flex items-center">
            <User className="w-4 h-4 mr-2" />
            <span>{userName}</span>
            <div className="flex items-center ml-2">
              <Star className="w-4 h-4 text-yellow-500 fill-current" />
              <span className="ml-1">{userRating}</span>
            </div>
          </div>
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0">
        <Button 
          className="w-full bg-gradient-primary hover:opacity-90" 
          onClick={onContact}
        >
          <MessageCircle className="w-4 h-4 mr-2" />
          Contact Seller
        </Button>
      </CardFooter>
    </Card>
  );
};