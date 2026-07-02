/**
 * Coming Soon Page Component
 * Reusable placeholder for all unimplemented pages
 */

import { motion } from 'framer-motion';
import { Construction } from 'lucide-react';

interface ComingSoonPageProps {
  title: string;
  description?: string;
}

export function ComingSoonPage({ title, description }: ComingSoonPageProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="flex min-h-[60vh] flex-col items-center justify-center gap-6 text-center"
    >
      <motion.div
        animate={{ rotate: [0, -10, 10, -10, 0] }}
        transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
        className="flex h-20 w-20 items-center justify-center rounded-2xl bg-primary/10"
      >
        <Construction className="h-10 w-10 text-primary" />
      </motion.div>

      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">{title}</h1>
        <p className="text-lg text-muted-foreground">
          {description || 'This module is under development. Coming soon!'}
        </p>
      </div>

      <div className="flex items-center gap-2 rounded-full bg-amber-500/10 px-4 py-2 text-sm text-amber-600 dark:text-amber-400">
        <div className="h-2 w-2 animate-pulse rounded-full bg-amber-500" />
        Coming Soon
      </div>
    </motion.div>
  );
}
