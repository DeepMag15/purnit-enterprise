/**
 * Role constants
 */

export const ROLES = {
  SUPER_ADMIN: 'super_admin',
  ADMIN: 'admin',
  HR_MANAGER: 'hr_manager',
  MANAGER: 'manager',
  TEAM_LEAD: 'team_lead',
  EMPLOYEE: 'employee',
  VIEWER: 'viewer',
} as const;

export type RoleKey = keyof typeof ROLES;
export type RoleValue = (typeof ROLES)[RoleKey];

export const ROLE_HIERARCHY: Record<RoleValue, number> = {
  [ROLES.SUPER_ADMIN]: 100,
  [ROLES.ADMIN]: 90,
  [ROLES.HR_MANAGER]: 80,
  [ROLES.MANAGER]: 70,
  [ROLES.TEAM_LEAD]: 60,
  [ROLES.EMPLOYEE]: 40,
  [ROLES.VIEWER]: 10,
};

export const ROLE_LABELS: Record<RoleValue, string> = {
  [ROLES.SUPER_ADMIN]: 'Super Admin',
  [ROLES.ADMIN]: 'Admin',
  [ROLES.HR_MANAGER]: 'HR Manager',
  [ROLES.MANAGER]: 'Manager',
  [ROLES.TEAM_LEAD]: 'Team Lead',
  [ROLES.EMPLOYEE]: 'Employee',
  [ROLES.VIEWER]: 'Viewer',
};
