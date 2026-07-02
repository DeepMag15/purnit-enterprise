/**
 * Permission utility helpers
 */

import type { RoleValue } from '@/constants/roles';
import { ROLE_HIERARCHY } from '@/constants/roles';
import type { PermissionValue } from '@/constants/permissions';

/**
 * Check if a user has a specific permission
 */
export function hasPermission(
  userPermissions: PermissionValue[],
  requiredPermission: PermissionValue,
): boolean {
  return userPermissions.includes(requiredPermission);
}

/**
 * Check if a user has all specified permissions
 */
export function hasAllPermissions(
  userPermissions: PermissionValue[],
  requiredPermissions: PermissionValue[],
): boolean {
  return requiredPermissions.every((p) => userPermissions.includes(p));
}

/**
 * Check if a user has any of the specified permissions
 */
export function hasAnyPermission(
  userPermissions: PermissionValue[],
  requiredPermissions: PermissionValue[],
): boolean {
  return requiredPermissions.some((p) => userPermissions.includes(p));
}

/**
 * Check if role A has higher or equal hierarchy than role B
 */
export function isRoleAboveOrEqual(roleA: RoleValue, roleB: RoleValue): boolean {
  return (ROLE_HIERARCHY[roleA] ?? 0) >= (ROLE_HIERARCHY[roleB] ?? 0);
}

/**
 * Check if a role meets the minimum required level
 */
export function meetsMinimumRole(userRole: RoleValue, minimumRole: RoleValue): boolean {
  return isRoleAboveOrEqual(userRole, minimumRole);
}
