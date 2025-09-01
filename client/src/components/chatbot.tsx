import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { MessageCircle, X, Send } from "lucide-react";

interface ChatMessage {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

interface ChatFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "1",
      text: "Hello! I'm here to help you with any questions about SmartScope. How can I assist you today?",
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [formData, setFormData] = useState<ChatFormData>({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [hasUserInfo, setHasUserInfo] = useState(false);
  
  const { toast } = useToast();

  const chatMutation = useMutation({
    mutationFn: async (data: ChatFormData) => {
      return await apiRequest("POST", "/api/chatbot", data);
    },
    onSuccess: () => {
      const botResponse: ChatMessage = {
        id: Date.now().toString(),
        text: "Thank you for your message! We'll get back to you as soon as possible.",
        isUser: false,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
      setFormData({ name: "", email: "", phone: "", message: "" });
      setHasUserInfo(true);
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
      console.error("Chatbot error:", error);
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in your name, email, and message.",
        variant: "destructive",
      });
      return;
    }

    // Add user message to chat
    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      text: formData.message,
      isUser: true,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, userMessage]);
    
    chatMutation.mutate(formData);
  };

  const handleInputChange = (field: keyof ChatFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="chatbot-container">
      <Button
        className="chatbot-toggle bg-primary hover:bg-accent text-primary-foreground"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Open chat"
        data-testid="button-chatbot-toggle"
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <MessageCircle className="w-6 h-6" />
        )}
      </Button>
      
      {isOpen && (
        <Card className={`chatbot-window open`} data-testid="chatbot-window">
          <div className="flex items-center justify-between p-4 border-b border-border">
            <h3 className="font-semibold">SmartScope Assistant</h3>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              data-testid="button-chatbot-close"
            >
              <X className="w-5 h-5" />
            </Button>
          </div>
          
          <div className="flex-1 p-4 overflow-y-auto space-y-4" data-testid="chat-messages">
            {messages.map((message) => (
              <div 
                key={message.id}
                className={`rounded-lg p-3 text-sm ${
                  message.isUser 
                    ? 'bg-primary text-primary-foreground ml-8' 
                    : 'bg-muted mr-8'
                }`}
                data-testid={`message-${message.id}`}
              >
                {message.text}
              </div>
            ))}
            {chatMutation.isPending && (
              <div className="bg-muted rounded-lg p-3 mr-8 text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                  <span>Typing...</span>
                </div>
              </div>
            )}
          </div>
          
          <form onSubmit={handleSubmit} className="p-4 border-t border-border" data-testid="form-chatbot">
            <div className="space-y-3">
              {!hasUserInfo && (
                <>
                  <Input
                    type="text"
                    placeholder="Your name"
                    required
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    className="text-sm"
                    data-testid="input-chat-name"
                  />
                  <Input
                    type="email"
                    placeholder="Your email"
                    required
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className="text-sm"
                    data-testid="input-chat-email"
                  />
                  <Input
                    type="tel"
                    placeholder="Phone (optional)"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    className="text-sm"
                    data-testid="input-chat-phone"
                  />
                </>
              )}
              <div className="flex space-x-2">
                <Input
                  type="text"
                  placeholder="Type your message..."
                  required
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  className="flex-1 text-sm"
                  data-testid="input-chat-message"
                />
                <Button 
                  type="submit" 
                  size="icon"
                  className="bg-primary hover:bg-accent"
                  disabled={chatMutation.isPending}
                  data-testid="button-send-chat"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </form>
        </Card>
      )}
    </div>
  );
}
