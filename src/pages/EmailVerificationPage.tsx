import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MailCheck } from 'lucide-react';
import { Button } from '@/components/ui';

export function EmailVerificationPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full max-w-md mx-auto text-center"
    >
      <div className="rounded-2xl border bg-card p-12">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mx-auto mb-6">
          <MailCheck className="h-8 w-8 text-primary" />
        </div>
        <h1 className="text-2xl font-bold mb-2">Check your email</h1>
        <p className="text-muted-foreground mb-6">
          We sent a verification link to <strong>your@email.com</strong>
        </p>
        <Button variant="outline" className="w-full mb-3">
          Resend Email
        </Button>
        <Link to="/login">
          <Button variant="ghost" className="w-full">
            Back to Login
          </Button>
        </Link>
      </div>
    </motion.div>
  );
}
