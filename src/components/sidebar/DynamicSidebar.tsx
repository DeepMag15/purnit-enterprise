import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ChevronDown, LayoutDashboard } from 'lucide-react';
import { cn } from '@/lib/utils';
import { sidebarConfig, type SidebarItem } from '@/data/mock-sidebar';

interface DynamicSidebarProps {
  isCollapsed: boolean;
  onToggle: () => void;
}

function SidebarNavItem({ item, isCollapsed }: { item: SidebarItem; isCollapsed: boolean }) {
  const location = useLocation();
  const [isExpanded, setIsExpanded] = useState(false);
  const isActive = location.pathname === item.href || location.pathname.startsWith(item.href + '/');
  const hasChildren = item.children && item.children.length > 0;

  return (
    <div>
      <NavLink
        to={hasChildren ? '#' : item.href}
        onClick={(e) => {
          if (hasChildren) {
            e.preventDefault();
            setIsExpanded(!isExpanded);
          }
        }}
        className={cn(
          'group flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-all duration-200',
          'hover:bg-accent hover:text-accent-foreground',
          isActive && !hasChildren && 'bg-primary/10 text-primary',
          isCollapsed && 'justify-center px-2',
        )}
      >
        <item.icon className={cn('h-4 w-4 shrink-0', isActive && 'text-primary')} />
        {!isCollapsed && (
          <>
            <span className="flex-1 truncate">{item.label}</span>
            {item.badge && (
              <span
                className={cn(
                  'rounded-full px-1.5 py-0.5 text-[10px] font-semibold',
                  item.badge === 'New'
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted text-muted-foreground',
                )}
              >
                {item.badge}
              </span>
            )}
            {hasChildren && (
              <ChevronDown
                className={cn('h-3 w-3 transition-transform', isExpanded && 'rotate-180')}
              />
            )}
          </>
        )}
      </NavLink>
      <AnimatePresence>
        {hasChildren && isExpanded && !isCollapsed && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="ml-4 mt-1 space-y-1 overflow-hidden border-l pl-3"
          >
            {item.children!.map((child) => (
              <NavLink
                key={child.id}
                to={child.href}
                className={({ isActive: active }) =>
                  cn(
                    'flex items-center gap-2 rounded-md px-2 py-1.5 text-xs transition-colors',
                    'hover:bg-accent hover:text-accent-foreground',
                    active && 'text-primary font-medium',
                  )
                }
              >
                {child.label}
              </NavLink>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function DynamicSidebar({ isCollapsed, onToggle }: DynamicSidebarProps) {
  return (
    <motion.aside
      initial={false}
      animate={{ width: isCollapsed ? '4.5rem' : '16rem' }}
      transition={{ duration: 0.25, ease: 'easeInOut' }}
      className="fixed left-0 top-0 z-40 flex h-screen flex-col border-r bg-sidebar text-sidebar-foreground"
    >
      {/* Toggle */}
      <button
        onClick={onToggle}
        className="absolute -right-3 top-7 z-50 flex h-6 w-6 items-center justify-center rounded-full border bg-background shadow-sm transition-colors hover:bg-accent"
      >
        {isCollapsed ? <ChevronRight className="h-3 w-3" /> : <ChevronLeft className="h-3 w-3" />}
      </button>

      {/* Logo */}
      <div className="flex h-16 items-center border-b px-4">
        <div className="flex items-center gap-2 overflow-hidden">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <LayoutDashboard className="h-4 w-4" />
          </div>
          {!isCollapsed && <span className="text-lg font-bold tracking-tight">Purnit</span>}
        </div>
      </div>

      {/* Navigation */}
      <div className="flex-1 overflow-y-auto px-3 py-4 space-y-6">
        {sidebarConfig.map((section) => (
          <div key={section.id}>
            {section.title && !isCollapsed && (
              <p className="mb-2 px-3 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                {section.title}
              </p>
            )}
            <div className="space-y-1">
              {section.items.map((item) => (
                <SidebarNavItem key={item.id} item={item} isCollapsed={isCollapsed} />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* User */}
      {!isCollapsed && (
        <div className="border-t px-3 py-4">
          <div className="flex items-center gap-3 rounded-lg px-3 py-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
              AM
            </div>
            <div className="flex-1 truncate">
              <p className="text-sm font-medium truncate">Arjun Mehta</p>
              <p className="text-xs text-muted-foreground truncate">Admin</p>
            </div>
          </div>
        </div>
      )}
    </motion.aside>
  );
}
