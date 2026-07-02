/**
 * App Entry
 * Root component that assembles all providers
 */

import { RouterProvider } from 'react-router-dom';
import { router } from '@/routes';
import {
  ThemeProvider,
  AuthProvider,
  QueryProvider,
  WorkspaceProvider,
  NotificationProvider,
} from '@/contexts';
import { TooltipProvider } from '@/components/ui';

export function App() {
  return (
    <QueryProvider>
      <ThemeProvider>
        <AuthProvider>
          <WorkspaceProvider>
            <NotificationProvider>
              <TooltipProvider delayDuration={300}>
                <RouterProvider router={router} />
              </TooltipProvider>
            </NotificationProvider>
          </WorkspaceProvider>
        </AuthProvider>
      </ThemeProvider>
    </QueryProvider>
  );
}

export default App;
