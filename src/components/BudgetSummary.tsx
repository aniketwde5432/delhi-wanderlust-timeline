import { motion } from 'framer-motion';
import { FaMoneyBillWave, FaSubway, FaTicketAlt, FaUtensils, FaShoppingBag } from 'react-icons/fa';

const budgetItems = [
  { icon: FaSubway, label: 'Metro (3 days)', cost: '300-350' },
  { icon: FaTicketAlt, label: 'Entry fees', cost: '70' },
  { icon: FaUtensils, label: 'Food', cost: '1,500-1,800' },
  { icon: FaShoppingBag, label: 'Shopping (optional)', cost: '500-1,000' },
];

export const BudgetSummary = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="bg-card rounded-xl p-6 shadow-card border border-border mb-8"
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="p-3 rounded-lg bg-primary/10">
          <FaMoneyBillWave className="w-6 h-6 text-primary" />
        </div>
        <h2 className="text-2xl font-bold text-foreground">Budget Summary</h2>
      </div>

      <div className="space-y-3">
        {budgetItems.map((item, index) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
            className="flex items-center justify-between p-3 bg-secondary/30 rounded-lg"
          >
            <div className="flex items-center gap-3">
              <item.icon className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-foreground">{item.label}</span>
            </div>
            <span className="font-bold text-primary">₹{item.cost}</span>
          </motion.div>
        ))}

        <div className="mt-4 pt-4 border-t border-border">
          <div className="flex items-center justify-between">
            <span className="text-base font-bold text-foreground">Estimated Total</span>
            <span className="text-xl font-bold text-gradient">₹2,400-3,200</span>
          </div>
          <p className="text-xs text-muted-foreground mt-2">
            *Excluding hotel & optional shopping
          </p>
        </div>
      </div>
    </motion.div>
  );
};
