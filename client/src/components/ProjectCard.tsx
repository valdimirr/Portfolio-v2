import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  image: string;
  demoUrl?: string;
  repoUrl?: string;
  status?: "completed" | "active";
}

export default function ProjectCard({ 
  title, 
  description, 
  tags, 
  image, 
  demoUrl, 
  repoUrl,
  status = "completed" 
}: ProjectCardProps) {
  return (
    <Card className="glass-card overflow-hidden border-0 h-full flex flex-col group">
      <div className="relative h-48 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent z-10" />
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {status === "active" && (
          <Badge className="absolute top-3 right-3 z-20 bg-green-500/20 text-green-400 border-green-500/50 backdrop-blur-md">
            Em Desenvolvimento
          </Badge>
        )}
      </div>
      
      <CardHeader className="pb-2">
        <h3 className="font-display font-bold text-xl group-hover:text-primary transition-colors">{title}</h3>
      </CardHeader>
      
      <CardContent className="flex-1">
        <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
          {description}
        </p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="bg-white/5 hover:bg-white/10 text-xs font-normal border-white/10">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      
      <CardFooter className="pt-2 gap-3">
        {demoUrl && (
          <Button size="sm" className="flex-1 bg-primary/20 hover:bg-primary/30 text-primary border border-primary/50" asChild>
            <a href={demoUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" /> Demo
            </a>
          </Button>
        )}
        {repoUrl && (
          <Button size="sm" variant="outline" className="flex-1 border-white/10 hover:bg-white/5" asChild>
            <a href={repoUrl} target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" /> Código
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
