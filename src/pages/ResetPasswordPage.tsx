import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { LayoutDashboard, Lock, Eye, EyeOff } from 'lucide-react';
import { Button, Input } from '@/components/ui';
import { useState } from 'react';

export function ResetPasswordPage() {
  const [show, setShow] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full max-w-md mx-auto"
    >
      <div className="text-center mb-8">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground mx-auto mb-6">
          <LayoutDashboard className="h-5 w-5" />
        </div>
        <h1 className="text-2xl font-bold">Reset Password</h1>
        <p className="text-muted-foreground mt-1">Enter your new password</p>
      </div>
      <div className="rounded-2xl border bg-card p-8">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            window.location.href = '/login';
          }}
          className="space-y-4"
        >
          <div className="relative">
            <Input
              label="New Password"
              type={show ? 'text' : 'password'}
              placeholder="Min. 8 characters"
              icon={<Lock className="h-4 w-4" />}
            />
            <button
              type="button"
              onClick={() => setShow(!show)}
              className="absolute right-3 top-9 text-muted-foreground"
            >
              {show ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </button>
          </div>
          <Input
            label="Confirm Password"
            type="password"
            placeholder="••••••••"
            icon={<Lock className="h-4 w-4" />}
          />
          <Button type="submit" className="w-full">
            Reset Password
          </Button>
        </form>
      </div>
      <p className="mt-6 text-center text-sm text-muted-foreground">
        <Link to="/login" className="text-primary hover:underline">
          Back to login
        </Link>
      </p>
    </motion.div>
  );
}
