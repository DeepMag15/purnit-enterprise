/**
 * Notification Provider
 * Renders the Sonner toast container for app-wide notifications
 */

import { type ReactNode } from 'react';
import { Toaster } from 'sonner';
import { useThemeStore } from '@/store';

interface NotificationProviderProps {
  children: ReactNode;
}

export function NotificationProvider({ children }: NotificationProviderProps) {
  const { resolvedTheme } = useThemeStore();

  return (
    <>
      {children}
      <Toaster
        theme={resolvedTheme}
        position="top-right"
        richColors
        closeButton
        duration={4000}
        toastOptions={{
          style: {
            fontFamily: 'Inter, system-ui, sans-serif',
          },
        }}
      />
    </>
  );
}
