import { motion } from 'framer-motion';
import { DayCard } from '@/components/DayCard';
import { BudgetSummary } from '@/components/BudgetSummary';
import { day1Items, day2Items, day3Items, day4Items, day5Items, day6Items } from '@/data/itineraryData';
import { FaMapMarkedAlt, FaCalendarAlt } from 'react-icons/fa';
import { GiIndiaGate } from 'react-icons/gi';
import { GiTowerFlag } from 'react-icons/gi';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Header */}
      <motion.header
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-r from-primary via-accent to-primary py-16 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex justify-center gap-4 mb-4"
          >
            <GiIndiaGate className="w-20 h-20 text-white" />
            <GiTowerFlag className="w-20 h-20 text-white" />
          </motion.div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Delhi & Jaipur Discovery
          </h1>
          <p className="text-xl text-white/90 mb-2">
            Your 6-Day Adventure Itinerary
          </p>
          <div className="flex items-center justify-center gap-4 text-white/80 text-sm">
            <div className="flex items-center gap-2">
              <FaCalendarAlt className="w-4 h-4" />
              <span>12th - 17th October</span>
            </div>
            <div className="flex items-center gap-2">
              <FaMapMarkedAlt className="w-4 h-4" />
              <span>Budget-Friendly Explorer</span>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-12 text-center"
        >
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Explore Delhi's rich history and Jaipur's royal heritage with vibrant culture and delicious street food. 
            This carefully crafted budget-friendly itinerary covers iconic landmarks, hidden gems, and authentic experiences. 
            Click each day to expand and see detailed plans!
          </p>
        </motion.div>

        {/* Budget Summary */}
        <BudgetSummary />

        {/* Sticky Day Navigation */}
        <div className="sticky top-4 z-10 mb-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap gap-3 justify-center bg-card/95 backdrop-blur-sm rounded-full px-6 py-3 shadow-card border border-border"
          >
            <a href="#day1" className="px-4 py-2 rounded-full bg-primary/10 text-primary font-medium hover:bg-primary hover:text-white transition-all duration-300">
              Day 1
            </a>
            <a href="#day2" className="px-4 py-2 rounded-full bg-primary/10 text-primary font-medium hover:bg-primary hover:text-white transition-all duration-300">
              Day 2
            </a>
            <a href="#day3" className="px-4 py-2 rounded-full bg-primary/10 text-primary font-medium hover:bg-primary hover:text-white transition-all duration-300">
              Day 3
            </a>
            <span className="px-2 text-muted-foreground">•</span>
            <a href="#day4" className="px-4 py-2 rounded-full bg-accent/10 text-accent font-medium hover:bg-accent hover:text-white transition-all duration-300">
              Day 4
            </a>
            <a href="#day5" className="px-4 py-2 rounded-full bg-accent/10 text-accent font-medium hover:bg-accent hover:text-white transition-all duration-300">
              Day 5
            </a>
            <a href="#day6" className="px-4 py-2 rounded-full bg-accent/10 text-accent font-medium hover:bg-accent hover:text-white transition-all duration-300">
              Day 6
            </a>
          </motion.div>
        </div>

        {/* Day Cards */}
        <div className="space-y-8">
          {/* Delhi Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center py-8"
          >
            <h2 className="text-3xl font-bold text-gradient mb-2">🏛️ Delhi Itinerary</h2>
            <p className="text-muted-foreground">Explore the capital's heritage and vibrant culture</p>
          </motion.div>

          <div id="day1">
            <DayCard
              day={1}
              date="12th October - Saturday"
              title="Arrival + South Delhi + Culture"
              items={day1Items}
            />
          </div>

          <div id="day2">
            <DayCard
              day={2}
              date="13th October - Sunday"
              title="Old Delhi + Shopping + CP"
              items={day2Items}
            />
          </div>

          <div id="day3">
            <DayCard
              day={3}
              date="14th October - Monday"
              title="Checkout + Light Exploration"
              items={day3Items}
            />
          </div>

          {/* Jaipur Section Divider */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="my-16 relative"
          >
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t-2 border-accent/30"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="bg-background px-6 py-3 rounded-full border-2 border-accent shadow-card">
                <span className="text-2xl font-bold text-gradient">✨ Journey to the Pink City ✨</span>
              </span>
            </div>
          </motion.div>

          {/* Jaipur Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center py-8"
          >
            <h2 className="text-3xl font-bold text-gradient mb-2">🏰 Jaipur Itinerary</h2>
            <p className="text-muted-foreground">Discover royal forts, palaces, and Rajasthani culture</p>
          </motion.div>

          <div id="day4">
            <DayCard
              day={4}
              date="15th October - Tuesday"
              title="Arrival + Amber Fort + Shopping"
              items={day4Items}
            />
          </div>

          <div id="day5">
            <DayCard
              day={5}
              date="16th October - Wednesday"
              title="Palaces + Markets + Culture"
              items={day5Items}
            />
          </div>

          <div id="day6">
            <DayCard
              day={6}
              date="17th October - Thursday"
              title="Sunrise Fort + Departure"
              items={day6Items}
            />
          </div>
        </div>

        {/* Key Notes Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 bg-secondary/30 rounded-xl p-6 border border-border"
        >
          <h3 className="text-xl font-bold text-foreground mb-4">✅ Key Travel Tips</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <span className="text-primary">•</span>
              <span>Mostly walking + metro; budget-friendly food focus</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary">•</span>
              <span>Optional skips clearly marked if you feel rushed</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary">•</span>
              <span>Avoid expensive cafés/restaurants; enjoy authentic Indian meals & street food</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary">•</span>
              <span>Timings include walking & waiting time buffers</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary">•</span>
              <span>All your must-visit places included without removal</span>
            </li>
          </ul>
        </motion.div>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 text-center text-muted-foreground text-sm pb-8"
        >
          <p>Have an amazing Delhi adventure! 🎉</p>
          <p className="mt-2">Safe travels and happy exploring!</p>
        </motion.footer>
      </main>
    </div>
  );
};

export default Index;
