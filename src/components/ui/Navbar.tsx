/**
 * Navbar Component
 */

import { type ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface NavbarProps {
  children: ReactNode;
  className?: string;
}

export function Navbar({ children, className }: NavbarProps) {
  return (
    <header
      className={cn(
        'sticky top-0 z-30 flex h-16 items-center border-b bg-background/80 px-6 backdrop-blur-md',
        className,
      )}
    >
      {children}
    </header>
  );
}

interface NavbarBrandProps {
  children: ReactNode;
  className?: string;
}

export function NavbarBrand({ children, className }: NavbarBrandProps) {
  return <div className={cn('flex items-center gap-2 font-semibold', className)}>{children}</div>;
}

interface NavbarContentProps {
  children: ReactNode;
  className?: string;
}

export function NavbarContent({ children, className }: NavbarContentProps) {
  return <div className={cn('ml-auto flex items-center gap-4', className)}>{children}</div>;
}
