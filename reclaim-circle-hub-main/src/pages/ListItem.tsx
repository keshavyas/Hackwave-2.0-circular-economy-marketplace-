import { useState } from "react";
import { Navigation } from "@/components/ui/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { 
  Upload, 
  MapPin, 
  Camera, 
  CheckCircle, 
  ArrowLeft,
  Plus,
  X
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ListItem = () => {
  const { toast } = useToast();
  const [step, setStep] = useState(1);
  const [images, setImages] = useState<string[]>([]);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    condition: "",
    price: "",
    isFree: false,
    location: "",
    contactInfo: ""
  });

  const categories = [
    "Electronics", "Furniture", "Building Materials", "Textiles", 
    "Metals", "Plastics", "Glass", "Paper", "Wood", "Other"
  ];

  const conditions = [
    { value: "excellent", label: "Excellent - Like new" },
    { value: "good", label: "Good - Minor wear" },
    { value: "fair", label: "Fair - Shows use but functional" }
  ];

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    files.forEach(file => {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImages(prev => [...prev, e.target?.result as string]);
      };
      reader.readAsDataURL(file);
    });
  };

  const removeImage = (index: number) => {
    setImages(prev => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = () => {
    toast({
      title: "Item Listed Successfully! 🎉",
      description: "Your item is now live and visible to the community.",
    });
    // Reset form or redirect
    setStep(1);
    setFormData({
      title: "",
      description: "",
      category: "",
      condition: "",
      price: "",
      isFree: false,
      location: "",
      contactInfo: ""
    });
    setImages([]);
  };

  const nextStep = () => {
    if (step < 3) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8 animate-fade-in">
            <h1 className="text-4xl font-bold mb-4">List Your Item</h1>
            <p className="text-muted-foreground text-lg">
              Give your materials a second life in the circular economy
            </p>
          </div>

          {/* Progress Steps */}
          <div className="flex justify-center mb-8">
            <div className="flex items-center space-x-4">
              {[1, 2, 3].map((number) => (
                <div key={number} className="flex items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-all duration-300 ${
                    number <= step 
                      ? "bg-primary text-primary-foreground scale-110" 
                      : "bg-muted text-muted-foreground"
                  }`}>
                    {number < step ? <CheckCircle className="w-5 h-5" /> : number}
                  </div>
                  {number < 3 && (
                    <div className={`w-12 h-1 mx-2 rounded transition-colors duration-300 ${
                      number < step ? "bg-primary" : "bg-muted"
                    }`} />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Step Content */}
          <Card className="shadow-soft animate-scale-in">
            <CardHeader>
              <CardTitle className="flex items-center">
                {step === 1 && "Basic Information"}
                {step === 2 && "Photos & Details"}
                {step === 3 && "Location & Contact"}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Step 1: Basic Information */}
              {step === 1 && (
                <div className="space-y-6 animate-fade-in">
                  <div className="space-y-2">
                    <Label htmlFor="title">Item Title *</Label>
                    <Input
                      id="title"
                      placeholder="e.g., MacBook Pro 13 inch, Oak Wood Planks..."
                      value={formData.title}
                      onChange={(e) => setFormData({...formData, title: e.target.value})}
                      className="transition-all duration-200 focus:scale-105"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description">Description *</Label>
                    <Textarea
                      id="description"
                      placeholder="Describe the condition, age, dimensions, or any other relevant details..."
                      value={formData.description}
                      onChange={(e) => setFormData({...formData, description: e.target.value})}
                      rows={4}
                      className="transition-all duration-200 focus:scale-105"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Category *</Label>
                      <Select value={formData.category} onValueChange={(value) => setFormData({...formData, category: value})}>
                        <SelectTrigger className="transition-all duration-200 hover:scale-105">
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent>
                          {categories.map((category) => (
                            <SelectItem key={category} value={category}>
                              {category}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label>Condition *</Label>
                      <Select value={formData.condition} onValueChange={(value) => setFormData({...formData, condition: value})}>
                        <SelectTrigger className="transition-all duration-200 hover:scale-105">
                          <SelectValue placeholder="Select condition" />
                        </SelectTrigger>
                        <SelectContent>
                          {conditions.map((condition) => (
                            <SelectItem key={condition.value} value={condition.value}>
                              {condition.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="free"
                        checked={formData.isFree}
                        onChange={(e) => setFormData({...formData, isFree: e.target.checked, price: e.target.checked ? "" : formData.price})}
                        className="w-4 h-4"
                      />
                      <Label htmlFor="free">This item is free</Label>
                    </div>
                    
                    {!formData.isFree && (
                      <div className="space-y-2 animate-fade-in">
                        <Label htmlFor="price">Price ($)</Label>
                        <Input
                          id="price"
                          type="number"
                          placeholder="0.00"
                          value={formData.price}
                          onChange={(e) => setFormData({...formData, price: e.target.value})}
                          className="transition-all duration-200 focus:scale-105"
                        />
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Step 2: Photos & Details */}
              {step === 2 && (
                <div className="space-y-6 animate-fade-in">
                  <div className="space-y-4">
                    <Label>Photos</Label>
                    <div className="border-2 border-dashed border-muted rounded-lg p-8 text-center hover:border-primary transition-colors duration-200">
                      <input
                        type="file"
                        multiple
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="hidden"
                        id="image-upload"
                      />
                      <label htmlFor="image-upload" className="cursor-pointer">
                        <Camera className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
                        <p className="text-muted-foreground">
                          Click to upload photos or drag and drop
                        </p>
                        <p className="text-sm text-muted-foreground mt-2">
                          PNG, JPG up to 10MB each
                        </p>
                      </label>
                    </div>

                    {images.length > 0 && (
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {images.map((image, index) => (
                          <div key={index} className="relative group animate-scale-in">
                            <img
                              src={image}
                              alt={`Upload ${index + 1}`}
                              className="w-full h-24 object-cover rounded-lg"
                            />
                            <button
                              onClick={() => removeImage(index)}
                              className="absolute -top-2 -right-2 bg-destructive text-destructive-foreground rounded-full w-6 h-6 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                            >
                              <X className="w-4 h-4" />
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Step 3: Location & Contact */}
              {step === 3 && (
                <div className="space-y-6 animate-fade-in">
                  <div className="space-y-2">
                    <Label htmlFor="location">Location *</Label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                      <Input
                        id="location"
                        placeholder="City, State or ZIP code"
                        value={formData.location}
                        onChange={(e) => setFormData({...formData, location: e.target.value})}
                        className="pl-10 transition-all duration-200 focus:scale-105"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="contact">Contact Information *</Label>
                    <Input
                      id="contact"
                      placeholder="Email or phone number"
                      value={formData.contactInfo}
                      onChange={(e) => setFormData({...formData, contactInfo: e.target.value})}
                      className="transition-all duration-200 focus:scale-105"
                    />
                  </div>

                  {/* Preview */}
                  <div className="bg-secondary/20 rounded-lg p-6">
                    <h3 className="font-semibold mb-4">Listing Preview</h3>
                    <div className="space-y-2 text-sm">
                      <p><strong>Title:</strong> {formData.title || "Your item title"}</p>
                      <p><strong>Category:</strong> {formData.category || "Category"}</p>
                      <p><strong>Condition:</strong> {formData.condition || "Condition"}</p>
                      <p><strong>Price:</strong> {formData.isFree ? "FREE" : `$${formData.price || "0"}`}</p>
                      <p><strong>Location:</strong> {formData.location || "Your location"}</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between pt-6">
                <Button
                  variant="outline"
                  onClick={prevStep}
                  disabled={step === 1}
                  className="transition-all duration-200 hover:scale-105"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Previous
                </Button>

                {step < 3 ? (
                  <Button
                    onClick={nextStep}
                    className="bg-gradient-primary transition-all duration-200 hover:scale-105"
                  >
                    Next Step
                    <Plus className="w-4 h-4 ml-2" />
                  </Button>
                ) : (
                  <Button
                    onClick={handleSubmit}
                    className="bg-gradient-primary transition-all duration-200 hover:scale-105"
                  >
                    <Upload className="w-4 h-4 mr-2" />
                    Publish Listing
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ListItem;