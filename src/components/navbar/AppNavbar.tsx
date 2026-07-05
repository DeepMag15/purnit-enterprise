import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bell, Search, ChevronDown, User, LogOut, Settings } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeToggle } from '@/components/ThemeToggle';
import { Button } from '@/components/ui';
import { mockNotifications } from '@/data';
import { mockWorkspaces, currentWorkspace } from '@/data';
import { cn } from '@/lib/utils';

export function AppNavbar() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [notifOpen, setNotifOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [wsOpen, setWsOpen] = useState(false);
  const unread = mockNotifications.filter((n) => !n.isRead).length;

  return (
    <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b bg-background/80 px-6 backdrop-blur-md">
      {/* Search */}
      <div className="relative flex-1 max-w-md">
        {searchOpen ? (
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: '100%', opacity: 1 }}
            className="relative"
          >
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              autoFocus
              placeholder="Search everything..."
              onBlur={() => setSearchOpen(false)}
              className="h-9 w-full rounded-lg border bg-background pl-9 pr-3 text-sm outline-none focus:ring-2 focus:ring-ring"
            />
          </motion.div>
        ) : (
          <button
            onClick={() => setSearchOpen(true)}
            className="flex items-center gap-2 rounded-lg border px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-accent"
          >
            <Search className="h-4 w-4" />
            <span className="hidden sm:inline">Search...</span>
            <kbd className="hidden rounded border bg-muted px-1.5 py-0.5 text-[10px] font-mono sm:inline">
              ⌘K
            </kbd>
          </button>
        )}
      </div>

      <div className="flex items-center gap-2">
        {/* Workspace Switcher */}
        <div className="relative">
          <button
            onClick={() => {
              setWsOpen(!wsOpen);
              setNotifOpen(false);
              setProfileOpen(false);
            }}
            className="flex items-center gap-2 rounded-lg border px-3 py-1.5 text-sm transition-colors hover:bg-accent"
          >
            <div className="h-5 w-5 rounded bg-primary/20 flex items-center justify-center text-[10px] font-bold text-primary">
              E
            </div>
            <span className="hidden md:inline max-w-[120px] truncate">{currentWorkspace.name}</span>
            <ChevronDown className="h-3 w-3" />
          </button>
          <AnimatePresence>
            {wsOpen && (
              <motion.div
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 4 }}
                className="absolute right-0 top-full mt-2 w-64 rounded-xl border bg-popover p-2 shadow-lg"
              >
                {mockWorkspaces.map((ws) => (
                  <button
                    key={ws.id}
                    onClick={() => setWsOpen(false)}
                    className={cn(
                      'flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors hover:bg-accent',
                      ws.id === currentWorkspace.id && 'bg-accent',
                    )}
                  >
                    <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center text-xs font-bold text-primary">
                      {ws.name[0]}
                    </div>
                    <div className="text-left">
                      <p className="font-medium">{ws.name}</p>
                      <p className="text-xs text-muted-foreground">{ws.description}</p>
                    </div>
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <ThemeToggle />

        {/* Notifications */}
        <div className="relative">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => {
              setNotifOpen(!notifOpen);
              setProfileOpen(false);
              setWsOpen(false);
            }}
          >
            <Bell className="h-5 w-5" />
            {unread > 0 && (
              <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-destructive text-[10px] text-white">
                {unread}
              </span>
            )}
          </Button>
          <AnimatePresence>
            {notifOpen && (
              <motion.div
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 4 }}
                className="absolute right-0 top-full mt-2 w-80 rounded-xl border bg-popover shadow-lg"
              >
                <div className="flex items-center justify-between border-b px-4 py-3">
                  <h3 className="font-semibold text-sm">Notifications</h3>
                  <span className="text-xs text-muted-foreground">{unread} unread</span>
                </div>
                <div className="max-h-80 overflow-y-auto">
                  {mockNotifications.slice(0, 5).map((n) => (
                    <div
                      key={n.id}
                      className={cn(
                        'flex gap-3 px-4 py-3 text-sm transition-colors hover:bg-accent border-b last:border-0',
                        !n.isRead && 'bg-primary/5',
                      )}
                    >
                      <div
                        className={cn(
                          'mt-1 h-2 w-2 shrink-0 rounded-full',
                          n.type === 'error'
                            ? 'bg-destructive'
                            : n.type === 'success'
                              ? 'bg-emerald-500'
                              : n.type === 'warning'
                                ? 'bg-amber-500'
                                : 'bg-primary',
                        )}
                      />
                      <div>
                        <p className="font-medium">{n.title}</p>
                        <p className="text-xs text-muted-foreground">{n.message}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <Link
                  to="/notifications"
                  onClick={() => setNotifOpen(false)}
                  className="block border-t px-4 py-2 text-center text-xs text-primary hover:underline"
                >
                  View all notifications
                </Link>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Profile */}
        <div className="relative">
          <button
            onClick={() => {
              setProfileOpen(!profileOpen);
              setNotifOpen(false);
              setWsOpen(false);
            }}
            className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary transition-colors hover:bg-primary/20"
          >
            AM
          </button>
          <AnimatePresence>
            {profileOpen && (
              <motion.div
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 4 }}
                className="absolute right-0 top-full mt-2 w-56 rounded-xl border bg-popover p-2 shadow-lg"
              >
                <div className="border-b px-3 py-2 mb-1">
                  <p className="font-medium text-sm">Arjun Mehta</p>
                  <p className="text-xs text-muted-foreground">admin@purnit.io</p>
                </div>
                <Link
                  to="/profile"
                  onClick={() => setProfileOpen(false)}
                  className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm hover:bg-accent"
                >
                  <User className="h-4 w-4" />
                  Profile
                </Link>
                <Link
                  to="/settings"
                  onClick={() => setProfileOpen(false)}
                  className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm hover:bg-accent"
                >
                  <Settings className="h-4 w-4" />
                  Settings
                </Link>
                <div className="border-t mt-1 pt-1">
                  <Link
                    to="/login"
                    className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-destructive hover:bg-destructive/10"
                  >
                    <LogOut className="h-4 w-4" />
                    Sign Out
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
}
