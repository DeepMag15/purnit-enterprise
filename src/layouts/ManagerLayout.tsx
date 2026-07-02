/**
 * Manager Layout
 * Layout for manager-level pages
 */

import { AuthLayout } from './AuthLayout';

export function ManagerLayout() {
  // Extends AuthLayout — manager-specific customizations will be added here
  // TODO: Add manager-specific sidebar items
  // TODO: Add manager toolbar
  return <AuthLayout />;
}
