import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Eye,
  EyeOff,
  LayoutDashboard,
  Mail,
  Lock,
  Shield,
  UserCog,
  Briefcase,
  User,
} from 'lucide-react';
import { Button, Input } from '@/components/ui';
import { useAuthStore } from '@/store';
import { mockUsers } from '@/data';
import { cn } from '@/lib/utils';
import type { User as UserType } from '@/types';

const demoAccounts = [
  {
    user: mockUsers[0],
    role: 'Admin',
    description: 'Full platform access',
    icon: Shield,
    color: 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20',
    hoverColor: 'hover:border-blue-500/50 hover:shadow-blue-500/10',
    dashboard: '/dashboard',
  },
  {
    user: mockUsers[1],
    role: 'HR Manager',
    description: 'Employee & HR management',
    icon: UserCog,
    color: 'bg-violet-500/10 text-violet-600 dark:text-violet-400 border-violet-500/20',
    hoverColor: 'hover:border-violet-500/50 hover:shadow-violet-500/10',
    dashboard: '/dashboard/hr',
  },
  {
    user: mockUsers[2],
    role: 'Manager',
    description: 'Team & project oversight',
    icon: Briefcase,
    color: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20',
    hoverColor: 'hover:border-emerald-500/50 hover:shadow-emerald-500/10',
    dashboard: '/dashboard/manager',
  },
  {
    user: mockUsers[3],
    role: 'Employee',
    description: 'Personal tasks & schedule',
    icon: User,
    color: 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20',
    hoverColor: 'hover:border-amber-500/50 hover:shadow-amber-500/10',
    dashboard: '/dashboard/employee',
  },
];

export function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const setUser = useAuthStore((s) => s.setUser);
  const navigate = useNavigate();

  const loginAs = (user: UserType, redirectTo: string) => {
    setUser(user);
    navigate(redirectTo);
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Match entered email against demo accounts, or default to admin
    const matched = demoAccounts.find((d) => d.user.email === email);
    if (matched) {
      loginAs(matched.user, matched.dashboard);
    } else {
      loginAs(mockUsers[1], '/dashboard');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full max-w-md mx-auto"
    >
      <div className="text-center mb-8">
        <Link to="/" className="inline-flex items-center gap-2 mb-6">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground">
            <LayoutDashboard className="h-5 w-5" />
          </div>
          <span className="text-2xl font-bold">Purnit</span>
        </Link>
        <h1 className="text-2xl font-bold">Welcome back</h1>
        <p className="text-muted-foreground mt-1">Sign in to your account to continue</p>
      </div>

      <div className="rounded-2xl border bg-card p-8">
        <form onSubmit={handleLogin} className="space-y-4">
          <Input
            label="Email"
            type="email"
            placeholder="you@company.com"
            icon={<Mail className="h-4 w-4" />}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="relative">
            <Input
              label="Password"
              type={showPassword ? 'text' : 'password'}
              placeholder="••••••••"
              icon={<Lock className="h-4 w-4" />}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-9 text-muted-foreground hover:text-foreground"
            >
              {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </button>
          </div>
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="rounded" />
              <span className="text-muted-foreground">Remember me</span>
            </label>
            <Link to="/forgot-password" className="text-primary hover:underline">
              Forgot password?
            </Link>
          </div>
          <Button type="submit" className="w-full">
            Sign In
          </Button>
        </form>

        <div className="my-6 flex items-center gap-3">
          <div className="flex-1 border-t" />
          <span className="text-xs text-muted-foreground">OR</span>
          <div className="flex-1 border-t" />
        </div>

        <div className="space-y-2">
          <Button
            variant="outline"
            className="w-full gap-2"
            onClick={() => loginAs(mockUsers[0], '/dashboard')}
          >
            <svg className="h-4 w-4" viewBox="0 0 24 24">
              <path
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
                fill="#4285F4"
              />
              <path
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                fill="#34A853"
              />
              <path
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                fill="#FBBC05"
              />
              <path
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                fill="#EA4335"
              />
            </svg>
            Continue with Google
          </Button>
          <Link to="/employee-login">
            <Button variant="outline" className="w-full">
              Employee Login
            </Button>
          </Link>
        </div>
      </div>

      {/* Demo Quick-Login Cards */}
      <div className="mt-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="flex-1 border-t" />
          <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Demo Accounts
          </span>
          <div className="flex-1 border-t" />
        </div>
        <div className="grid grid-cols-2 gap-3">
          {demoAccounts.map((account, i) => (
            <motion.button
              key={account.user.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.05 }}
              onClick={() => loginAs(account.user, account.dashboard)}
              className={cn(
                'group flex flex-col items-center gap-2 rounded-xl border p-4 text-center transition-all duration-200 hover:shadow-md',
                account.hoverColor,
              )}
            >
              <div
                className={cn(
                  'flex h-10 w-10 items-center justify-center rounded-lg border transition-transform duration-200 group-hover:scale-110',
                  account.color,
                )}
              >
                <account.icon className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-semibold">{account.role}</p>
                <p className="text-[11px] text-muted-foreground leading-tight">
                  {account.description}
                </p>
              </div>
              <div className="mt-1 w-full rounded-md bg-muted/50 px-2 py-1">
                <p className="text-[10px] font-mono text-muted-foreground truncate">
                  {account.user.email}
                </p>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <p className="mt-6 text-center text-sm text-muted-foreground">
        Don&apos;t have an account?{' '}
        <Link to="/register" className="text-primary hover:underline">
          Create account
        </Link>
      </p>
      <p className="mt-2 text-center text-sm text-muted-foreground">
        <Link to="/company-login" className="text-primary hover:underline">
          Company Login
        </Link>
      </p>
    </motion.div>
  );
}
