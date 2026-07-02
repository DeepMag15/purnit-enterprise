/**
 * Guest Layout
 * Layout for unauthenticated pages (login, register, etc.)
 */

import { Outlet } from 'react-router-dom';
import { motion } from 'framer-motion';

export function GuestLayout() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-background via-background to-primary/5">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-md px-4"
      >
        <Outlet />
      </motion.div>
    </div>
  );
}
