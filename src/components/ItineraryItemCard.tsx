import { motion } from 'framer-motion';
import { 
  FaLandmark, 
  FaUtensils, 
  FaSubway, 
  FaClock,
  FaMapMarkerAlt,
  FaWalking
} from 'react-icons/fa';
import { MdDirectionsBus, MdTrain } from 'react-icons/md';
import { GiIndianPalace, GiChickenLeg } from 'react-icons/gi';
import { ItineraryItem } from './DayCard';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

interface ItineraryItemCardProps {
  item: ItineraryItem;
  index: number;
}

const metroLineColors = {
  pink: 'hsl(var(--metro-pink))',
  yellow: 'hsl(var(--metro-yellow))',
  violet: 'hsl(var(--metro-violet))',
  red: 'hsl(var(--metro-red))',
};

const getCategoryIcon = (category: string) => {
  switch (category) {
    case 'landmark':
      return <FaLandmark className="w-5 h-5" />;
    case 'food':
      return <FaUtensils className="w-5 h-5" />;
    case 'transport':
      return <FaSubway className="w-5 h-5" />;
    default:
      return <FaClock className="w-5 h-5" />;
  }
};

export const ItineraryItemCard = ({ item, index }: ItineraryItemCardProps) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative"
    >
      <TooltipProvider>
        <motion.div
          whileHover={{ scale: 1.02, y: -4 }}
          transition={{ duration: 0.2 }}
          className={`
            card-gradient rounded-lg p-5 shadow-card hover:shadow-card-hover
            transition-all duration-300 border border-border
            ${item.isOptional ? 'opacity-75' : ''}
          `}
        >
          {/* Timeline dot */}
          <div className="absolute -left-8 top-6 w-4 h-4 rounded-full bg-primary border-4 border-background" />

          {/* Time badge */}
          <div className="flex items-center gap-2 mb-3">
            <div className="flex items-center gap-1 px-3 py-1 bg-primary/10 rounded-full text-primary text-sm font-semibold">
              <FaClock className="w-3 h-3" />
              {item.time}
            </div>
            {item.isOptional && (
              <span className="px-3 py-1 bg-muted rounded-full text-muted-foreground text-xs font-medium">
                Optional
              </span>
            )}
          </div>

          {/* Title with icon */}
          <div className="flex items-start gap-3 mb-3">
            <div 
              className="p-2 rounded-lg"
              style={{
                backgroundColor: item.category === 'landmark' 
                  ? 'hsl(var(--travel-landmark) / 0.15)'
                  : item.category === 'food'
                  ? 'hsl(var(--travel-food) / 0.15)'
                  : 'hsl(var(--primary) / 0.1)'
              }}
            >
              {getCategoryIcon(item.category)}
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-bold text-foreground mb-1">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>

          {/* Transport info */}
          {item.transport && (
            <div className="mt-3 p-3 bg-secondary/50 rounded-lg">
              <div className="flex items-start gap-2">
                <FaSubway 
                  className="w-4 h-4 mt-1"
                  style={{ 
                    color: item.transport.metroLine 
                      ? metroLineColors[item.transport.metroLine]
                      : 'currentColor'
                  }}
                />
                <div className="flex-1">
                  <div className="text-sm font-medium text-foreground mb-1">
                    {item.transport.mode}
                  </div>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <div className="text-xs text-muted-foreground cursor-help">
                        {item.transport.route}
                      </div>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p className="text-xs">Duration: {item.transport.duration}</p>
                    </TooltipContent>
                  </Tooltip>
                  <div className="flex items-center gap-3 mt-1 text-xs">
                    <span className="text-muted-foreground">
                      ⏱️ {item.transport.duration}
                    </span>
                    <span className="font-semibold text-primary">
                      ₹{item.transport.fare}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Cost info */}
          {item.cost && (
            <div className="mt-3 flex items-center gap-2">
              <span className="text-sm text-muted-foreground">Cost:</span>
              <span className="font-semibold text-accent">₹{item.cost}</span>
            </div>
          )}

          {/* Skip note */}
          {item.skipNote && (
            <div className="mt-3 p-2 bg-muted/50 rounded border-l-2 border-muted-foreground/30">
              <p className="text-xs text-muted-foreground italic">
                💡 Skip tip: {item.skipNote}
              </p>
            </div>
          )}

          {/* Image placeholder */}
          {item.image && (
            <div className="mt-4 rounded-lg overflow-hidden">
              <img 
                src={item.image} 
                alt={item.title}
                className="w-full h-48 object-cover"
              />
            </div>
          )}
        </motion.div>
      </TooltipProvider>
    </motion.div>
  );
};
