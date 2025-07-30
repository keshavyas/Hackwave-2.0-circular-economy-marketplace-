import { useState } from "react";
import { Navigation } from "@/components/ui/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { 
  MessageCircle, 
  Send, 
  Search, 
  MoreVertical,
  Phone,
  Video,
  Star,
  MapPin
} from "lucide-react";

const Messages = () => {
  const [selectedChat, setSelectedChat] = useState(0);
  const [newMessage, setNewMessage] = useState("");

  const conversations = [
    {
      id: 1,
      name: "Shivani k.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b814?w=64&h=64&fit=crop&crop=face",
      lastMessage: "Is the MacBook still available?",
      time: "2 min ago",
      unread: 2,
      item: "MacBook Pro 13\"",
      status: "online"
    },
    {
      id: 2,
      name: "Milan k.",
      avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=64&h=64&fit=crop&crop=face",
      lastMessage: "Thanks for the wood planks!",
      time: "1 hour ago",
      unread: 0,
      item: "Oak Wood Planks",
      status: "offline"
    },
    {
      id: 3,
      name: "GreenTech Co.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=face",
      lastMessage: "When can you pick up the chairs?",
      time: "3 hours ago",
      unread: 1,
      item: "Office Chair Set",
      status: "online"
    },
    {
      id: 4,
      name: "kratgya G.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&fit=crop&crop=face",
      lastMessage: "Perfect condition, exactly as described",
      time: "1 day ago",
      unread: 0,
      item: "Vintage Leather Jacket",
      status: "offline"
    }
  ];

  const messages = [
    {
      id: 1,
      sender: "Shivani k.",
      content: "Hi! I'm interested in the MacBook Pro you listed. Is it still available?",
      time: "10:30 AM",
      isOwn: false
    },
    {
      id: 2,
      sender: "You",
      content: "Yes, it's still available! It's in excellent condition, barely used.",
      time: "10:32 AM",
      isOwn: true
    },
    {
      id: 3,
      sender: "Shivani k.",
      content: "Great! Can you tell me more about the battery life and any accessories included?",
      time: "10:35 AM",
      isOwn: false
    },
    {
      id: 4,
      sender: "You",
      content: "Battery life is still excellent - gets about 8-10 hours. Includes original charger, box, and I'll throw in a nice sleeve too!",
      time: "10:37 AM",
      isOwn: true
    },
    {
      id: 5,
      sender: "Shivani k.",
      content: "Perfect! Would you be available to meet this weekend? I'm in the downtown area.",
      time: "10:40 AM",
      isOwn: false
    }
  ];

  const sendMessage = () => {
    if (newMessage.trim()) {
      // Add message logic here
      setNewMessage("");
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8 animate-fade-in">
          <h1 className="text-4xl font-bold mb-4">Messages</h1>
          <p className="text-muted-foreground text-lg">
            Connect with your community and arrange exchanges
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[800px]">
          {/* Conversations List */}
          <Card className="shadow-soft animate-slide-in-left">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span className="flex items-center">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Conversations
                </span>
                <Badge variant="secondary">{conversations.filter(c => c.unread > 0).length}</Badge>
              </CardTitle>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input placeholder="Search conversations..." className="pl-10" />
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <div className="space-y-1">
                {conversations.map((conversation, index) => (
                  <div
                    key={conversation.id}
                    onClick={() => setSelectedChat(index)}
                    className={`p-4 cursor-pointer transition-all duration-200 hover:bg-secondary/50 ${
                      selectedChat === index ? "bg-primary/10 border-r-2 border-primary" : ""
                    } animate-fade-in`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-center space-x-3">
                      <div className="relative">
                        <Avatar>
                          <AvatarImage src={conversation.avatar} />
                          <AvatarFallback>{conversation.name[0]}</AvatarFallback>
                        </Avatar>
                        <div className={`absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-background ${
                          conversation.status === "online" ? "bg-success" : "bg-muted"
                        }`} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <h4 className="font-semibold truncate">{conversation.name}</h4>
                          <span className="text-xs text-muted-foreground">{conversation.time}</span>
                        </div>
                        <p className="text-sm text-muted-foreground truncate">{conversation.lastMessage}</p>
                        <p className="text-xs text-primary font-medium">{conversation.item}</p>
                      </div>
                      {conversation.unread > 0 && (
                        <Badge className="bg-primary text-primary-foreground">
                          {conversation.unread}
                        </Badge>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Chat Window */}
          <Card className="lg:col-span-2 shadow-soft animate-slide-in-right flex flex-col">
            {/* Chat Header */}
            <CardHeader className="border-b">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Avatar>
                    <AvatarImage src={conversations[selectedChat]?.avatar} />
                    <AvatarFallback>{conversations[selectedChat]?.name[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold">{conversations[selectedChat]?.name}</h3>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <div className={`w-2 h-2 rounded-full mr-2 ${
                        conversations[selectedChat]?.status === "online" ? "bg-success" : "bg-muted"
                      }`} />
                      {conversations[selectedChat]?.status}
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Button variant="ghost" size="icon">
                    <Phone className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Video className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <MoreVertical className="w-4 h-4" />
                  </Button>
                </div>
              </div>
              
              {/* Item Context */}
              <div className="bg-secondary/20 rounded-lg p-3 mt-3">
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4 text-muted-foreground" />
                  <span className="font-medium text-sm">Discussing: {conversations[selectedChat]?.item}</span>
                  <Badge variant="outline">Active Listing</Badge>
                </div>
              </div>
            </CardHeader>

            {/* Messages */}
            <CardContent className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message, index) => (
                <div
                  key={message.id}
                  className={`flex ${message.isOwn ? "justify-end" : "justify-start"} animate-fade-in`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`max-w-[70%] p-3 rounded-lg ${
                    message.isOwn 
                      ? "bg-primary text-primary-foreground" 
                      : "bg-secondary"
                  }`}>
                    <p className="text-sm">{message.content}</p>
                    <p className={`text-xs mt-1 ${
                      message.isOwn ? "text-primary-foreground/70" : "text-muted-foreground"
                    }`}>
                      {message.time}
                    </p>
                  </div>
                </div>
              ))}
            </CardContent>

            {/* Message Input */}
            <div className="border-t p-4">
              <div className="flex space-x-2">
                <Input
                  placeholder="Type your message..."
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && sendMessage()}
                  className="flex-1"
                />
                <Button 
                  onClick={sendMessage}
                  className="bg-gradient-primary transition-all duration-200 hover:scale-105"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="mt-8 text-center animate-bounce-soft">
          <div className="inline-flex items-center space-x-4 bg-card p-4 rounded-lg shadow-soft">
            <div className="flex items-center space-x-2 text-sm">
              <Star className="w-4 h-4 text-yellow-500" />
              <span>Rate your experience after completing trades</span>
            </div>
            <div className="h-4 w-px bg-border" />
            <Button variant="outline" size="sm">
              Safety Guidelines
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messages;