import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { LayoutDashboard, Mail, ArrowLeft } from 'lucide-react';
import { Button, Input } from '@/components/ui';

export function ForgotPasswordPage() {
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
        <h1 className="text-2xl font-bold">Forgot password?</h1>
        <p className="text-muted-foreground mt-1">
          No worries, we&apos;ll send you reset instructions
        </p>
      </div>
      <div className="rounded-2xl border bg-card p-8">
        <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
          <Input
            label="Email"
            type="email"
            placeholder="you@company.com"
            icon={<Mail className="h-4 w-4" />}
          />
          <Button type="submit" className="w-full">
            Send Reset Link
          </Button>
        </form>
      </div>
      <div className="mt-6 text-center">
        <Link
          to="/login"
          className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to login
        </Link>
      </div>
    </motion.div>
  );
}
