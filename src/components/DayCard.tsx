import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { ItineraryItemCard } from './ItineraryItemCard';

export interface ItineraryItem {
  id: string;
  time: string;
  title: string;
  description: string;
  transport?: {
    mode: string;
    route: string;
    duration: string;
    fare: string;
    metroLine?: 'pink' | 'yellow' | 'violet' | 'red';
  };
  cost?: string;
  skipNote?: string;
  isOptional?: boolean;
  category: 'landmark' | 'food' | 'transport' | 'rest';
  image?: string;
}

interface DayCardProps {
  day: number;
  date: string;
  title: string;
  items: ItineraryItem[];
  defaultOpen?: boolean;
}

export const DayCard = ({ day, date, title, items, defaultOpen = false }: DayCardProps) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: day * 0.1 }}
      className="mb-8"
    >
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="bg-card rounded-xl p-6 cursor-pointer hover:shadow-card-hover transition-all duration-300 border border-border"
      >
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-lg">
                {day}
              </div>
              <div>
                <h2 className="text-2xl font-bold text-foreground">{title}</h2>
                <p className="text-muted-foreground text-sm">{date}</p>
              </div>
            </div>
          </div>
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <ChevronDown className="w-6 h-6 text-primary" />
          </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="mt-6 space-y-4 pl-8 relative">
              <div className="timeline-line" />
              {items.map((item, index) => (
                <ItineraryItemCard
                  key={item.id}
                  item={item}
                  index={index}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
