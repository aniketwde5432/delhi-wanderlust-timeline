import { motion } from 'framer-motion';
import { DayCard } from '@/components/DayCard';
import { BudgetSummary } from '@/components/BudgetSummary';
import { day1Items, day2Items, day3Items } from '@/data/itineraryData';
import { FaMapMarkedAlt, FaCalendarAlt } from 'react-icons/fa';
import { GiIndiaGate } from 'react-icons/gi';

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
            className="flex justify-center mb-4"
          >
            <GiIndiaGate className="w-20 h-20 text-white" />
          </motion.div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Delhi Discovery
          </h1>
          <p className="text-xl text-white/90 mb-2">
            Your 3-Day Adventure Itinerary
          </p>
          <div className="flex items-center justify-center gap-4 text-white/80 text-sm">
            <div className="flex items-center gap-2">
              <FaCalendarAlt className="w-4 h-4" />
              <span>12th - 14th October</span>
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
            Explore Delhi's rich history, vibrant culture, and delicious street food with this 
            carefully crafted budget-friendly itinerary. Click each day to expand and see detailed plans!
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
            className="flex gap-3 justify-center bg-card/95 backdrop-blur-sm rounded-full px-6 py-3 shadow-card border border-border"
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
          </motion.div>
        </div>

        {/* Day Cards */}
        <div className="space-y-8">
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
