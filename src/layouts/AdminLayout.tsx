/**
 * Admin Layout
 * Layout for admin-level pages
 */

import { AuthLayout } from './AuthLayout';

export function AdminLayout() {
  // Extends AuthLayout — admin-specific customizations will be added here
  // TODO: Add admin-specific sidebar items
  // TODO: Add admin toolbar
  return <AuthLayout />;
}
