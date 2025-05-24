import { Pencil, Sparkles, FileText, BarChart3 } from "lucide-react";

export const howItWorks = [
  {
    title: "Choose Your Content Type",
    description: "Select the type of content you want to generate, from blogs to marketing copy.",
    icon: <Pencil className="w-8 h-8 text-primary" />,
  },
  {
    title: "AI-Powered Generation",
    description: "Let AI create engaging, high-quality content tailored to your needs.",
    icon: <Sparkles className="w-8 h-8 text-primary" />,
  },
  {
    title: "Customize & Edit",
    description: "Fine-tune the content with easy-to-use editing tools for the perfect final touch.",
    icon: <FileText className="w-8 h-8 text-primary" />,
  },
  {
    title: "Analyze & Optimize",
    description: "Track engagement metrics and optimize your content for better performance.",
    icon: <BarChart3 className="w-8 h-8 text-primary" />,
  },
];