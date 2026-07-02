/**
 * Permission constants
 */

export const PERMISSIONS = {
  // Projects
  PROJECT_CREATE: 'project:create',
  PROJECT_READ: 'project:read',
  PROJECT_UPDATE: 'project:update',
  PROJECT_DELETE: 'project:delete',
  PROJECT_MANAGE: 'project:manage',

  // Tasks
  TASK_CREATE: 'task:create',
  TASK_READ: 'task:read',
  TASK_UPDATE: 'task:update',
  TASK_DELETE: 'task:delete',
  TASK_ASSIGN: 'task:assign',

  // Meetings
  MEETING_CREATE: 'meeting:create',
  MEETING_READ: 'meeting:read',
  MEETING_UPDATE: 'meeting:update',
  MEETING_DELETE: 'meeting:delete',

  // Users
  USER_CREATE: 'user:create',
  USER_READ: 'user:read',
  USER_UPDATE: 'user:update',
  USER_DELETE: 'user:delete',
  USER_MANAGE: 'user:manage',

  // Analytics
  ANALYTICS_VIEW: 'analytics:view',
  ANALYTICS_EXPORT: 'analytics:export',

  // Settings
  SETTINGS_VIEW: 'settings:view',
  SETTINGS_MANAGE: 'settings:manage',

  // Company
  COMPANY_MANAGE: 'company:manage',
  COMPANY_VIEW: 'company:view',

  // Workspace
  WORKSPACE_CREATE: 'workspace:create',
  WORKSPACE_MANAGE: 'workspace:manage',
} as const;

export type PermissionKey = keyof typeof PERMISSIONS;
export type PermissionValue = (typeof PERMISSIONS)[PermissionKey];
