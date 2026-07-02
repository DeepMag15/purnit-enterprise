/**
 * Footer Component
 */

import { cn } from '@/lib/utils';

interface FooterProps {
  className?: string;
}

export function Footer({ className }: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer
      className={cn(
        'flex items-center justify-between border-t bg-background px-6 py-4 text-sm text-muted-foreground',
        className,
      )}
    >
      <p>&copy; {year} Purnit. All rights reserved.</p>
      <p>Enterprise Workspace Platform</p>
    </footer>
  );
}
