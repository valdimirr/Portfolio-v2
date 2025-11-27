import { cn } from "@/lib/utils";

interface TimelineItemProps {
  year: string;
  title: string;
  company?: string;
  description: string;
  isLast?: boolean;
}

function TimelineItem({ year, title, company, description, isLast }: TimelineItemProps) {
  return (
    <div className="relative pl-8 pb-8 group">
      {/* Line */}
      {!isLast && (
        <div className="absolute left-[11px] top-[24px] bottom-0 w-[2px] bg-gradient-to-b from-primary/50 to-transparent" />
      )}
      
      {/* Dot */}
      <div className="absolute left-0 top-[6px] h-6 w-6 rounded-full border-4 border-background bg-primary shadow-[0_0_10px_rgba(var(--primary),0.5)] group-hover:scale-110 transition-transform duration-300" />
      
      <div className="flex flex-col gap-1">
        <span className="text-sm font-bold text-primary font-display">{year}</span>
        <h3 className="text-lg font-bold text-foreground">{title}</h3>
        {company && <span className="text-sm text-muted-foreground font-medium">{company}</span>}
        <p className="text-muted-foreground text-sm mt-2 leading-relaxed max-w-md">
          {description}
        </p>
      </div>
    </div>
  );
}

export default function Timeline({ items }: { items: Omit<TimelineItemProps, "isLast">[] }) {
  return (
    <div className="flex flex-col">
      {items.map((item, index) => (
        <TimelineItem 
          key={index} 
          {...item} 
          isLast={index === items.length - 1} 
        />
      ))}
    </div>
  );
}
