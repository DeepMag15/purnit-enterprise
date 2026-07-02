/**
 * Auth Layout
 * Layout for authenticated pages with sidebar and navbar
 */

import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { motion } from 'framer-motion';
import { LayoutDashboard } from 'lucide-react';
import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  Navbar,
  NavbarBrand,
  NavbarContent,
} from '@/components/ui';
import { ThemeToggle } from '@/components/ThemeToggle';

export function AuthLayout() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <div className="flex min-h-screen bg-background">
      {/* Sidebar */}
      <Sidebar
        isCollapsed={sidebarCollapsed}
        onToggle={() => setSidebarCollapsed(!sidebarCollapsed)}
      >
        <SidebarHeader>
          <div className="flex items-center gap-2 overflow-hidden">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <LayoutDashboard className="h-4 w-4" />
            </div>
            {!sidebarCollapsed && (
              <span className="text-lg font-bold tracking-tight">Purnit</span>
            )}
          </div>
        </SidebarHeader>
        <SidebarContent>
          <p className="text-xs text-muted-foreground">
            {sidebarCollapsed ? '' : 'Navigation coming soon'}
          </p>
        </SidebarContent>
      </Sidebar>

      {/* Main Content */}
      <div
        className="flex flex-1 flex-col transition-all duration-250"
        style={{ marginLeft: sidebarCollapsed ? '4.5rem' : '16rem' }}
      >
        {/* Navbar */}
        <Navbar>
          <NavbarBrand>
            <span className="text-lg font-semibold">Dashboard</span>
          </NavbarBrand>
          <NavbarContent>
            <ThemeToggle />
          </NavbarContent>
        </Navbar>

        {/* Page Content */}
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
