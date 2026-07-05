import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { motion } from 'framer-motion';
import { DynamicSidebar } from '@/components/sidebar/DynamicSidebar';
import { AppNavbar } from '@/components/navbar/AppNavbar';

export function AuthLayout() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  return (
    <div className="flex min-h-screen bg-background">
      <DynamicSidebar
        isCollapsed={sidebarCollapsed}
        onToggle={() => setSidebarCollapsed(!sidebarCollapsed)}
      />
      <div
        className="flex flex-1 flex-col transition-all duration-250"
        style={{ marginLeft: sidebarCollapsed ? '4.5rem' : '16rem' }}
      >
        <AppNavbar />
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="flex-1 p-6"
        >
          <Outlet />
        </motion.main>
      </div>
    </div>
  );
}
