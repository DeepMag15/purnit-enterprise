import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { LayoutDashboard, Mail, Lock, User, Building2, Eye, EyeOff } from 'lucide-react';
import { Button, Input } from '@/components/ui';

export function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
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
        <h1 className="text-2xl font-bold">Create your account</h1>
        <p className="text-muted-foreground mt-1">Start your 14-day free trial</p>
      </div>
      <div className="rounded-2xl border bg-card p-8">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            window.location.href = '/workspace-setup';
          }}
          className="space-y-4"
        >
          <div className="grid grid-cols-2 gap-4">
            <Input label="First Name" placeholder="John" icon={<User className="h-4 w-4" />} />
            <Input label="Last Name" placeholder="Doe" icon={<User className="h-4 w-4" />} />
          </div>
          <Input
            label="Company Name"
            placeholder="Acme Inc."
            icon={<Building2 className="h-4 w-4" />}
          />
          <Input
            label="Work Email"
            type="email"
            placeholder="john@acme.com"
            icon={<Mail className="h-4 w-4" />}
          />
          <div className="relative">
            <Input
              label="Password"
              type={showPassword ? 'text' : 'password'}
              placeholder="Min. 8 characters"
              icon={<Lock className="h-4 w-4" />}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-9 text-muted-foreground hover:text-foreground"
            >
              {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </button>
          </div>
          <label className="flex items-start gap-2 text-sm">
            <input type="checkbox" className="rounded mt-0.5" />
            <span className="text-muted-foreground">
              I agree to the{' '}
              <a href="#" className="text-primary hover:underline">
                Terms of Service
              </a>{' '}
              and{' '}
              <a href="#" className="text-primary hover:underline">
                Privacy Policy
              </a>
            </span>
          </label>
          <Button type="submit" className="w-full">
            Create Account
          </Button>
        </form>
      </div>
      <p className="mt-6 text-center text-sm text-muted-foreground">
        Already have an account?{' '}
        <Link to="/login" className="text-primary hover:underline">
          Sign in
        </Link>
      </p>
    </motion.div>
  );
}
