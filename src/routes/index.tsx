/**
 * Application Routes
 * Centralized route configuration
 */

import { createBrowserRouter, Navigate } from 'react-router-dom';
import { GuestLayout } from '@/layouts';
import { AuthLayout } from '@/layouts';
import {
  HomePage,
  LoginPage,
  RegisterPage,
  DashboardPage,
  ProjectsPage,
  TasksPage,
  MeetingsPage,
  AnalyticsPage,
  SettingsPage,
  ProfilePage,
  NotFoundPage,
} from '@/pages';
import { ROUTES } from '@/constants';

export const router = createBrowserRouter([
  // Home (standalone — no layout)
  {
    path: ROUTES.HOME,
    element: <HomePage />,
  },

  // Guest routes (unauthenticated)
  {
    element: <GuestLayout />,
    children: [
      {
        path: ROUTES.LOGIN,
        element: <LoginPage />,
      },
      {
        path: ROUTES.REGISTER,
        element: <RegisterPage />,
      },
    ],
  },

  // Authenticated routes
  {
    element: <AuthLayout />,
    children: [
      {
        path: ROUTES.DASHBOARD,
        element: <DashboardPage />,
      },
      {
        path: ROUTES.PROJECTS,
        element: <ProjectsPage />,
      },
      {
        path: ROUTES.TASKS,
        element: <TasksPage />,
      },
      {
        path: ROUTES.MEETINGS,
        element: <MeetingsPage />,
      },
      {
        path: ROUTES.ANALYTICS,
        element: <AnalyticsPage />,
      },
      {
        path: ROUTES.SETTINGS,
        element: <SettingsPage />,
      },
      {
        path: ROUTES.PROFILE,
        element: <ProfilePage />,
      },
    ],
  },

  // 404
  {
    path: ROUTES.NOT_FOUND,
    element: <NotFoundPage />,
  },
  {
    path: '*',
    element: <Navigate to={ROUTES.NOT_FOUND} replace />,
  },
]);
