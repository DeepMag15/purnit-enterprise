/**
 * Domain Types — Purnit Enterprise Platform
 * All entity interfaces for the platform
 */

// ─── User ────────────────────────────────────────────────────────────────────

export interface User {
  id: string;
  email: string;
  fullName: string;
  firstName: string;
  lastName: string;
  avatarUrl?: string;
  phone?: string;
  roleId: string;
  departmentId?: string;
  teamId?: string;
  companyId: string;
  workspaceId: string;
  isActive: boolean;
  lastLoginAt?: string;
  createdAt: string;
  updatedAt: string;
}

// ─── Company ─────────────────────────────────────────────────────────────────

export interface Company {
  id: string;
  name: string;
  slug: string;
  domain: string;
  logoUrl?: string;
  industry?: string;
  size?: 'startup' | 'small' | 'medium' | 'large' | 'enterprise';
  website?: string;
  address?: string;
  ownerId: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

// ─── Workspace ───────────────────────────────────────────────────────────────

export interface Workspace {
  id: string;
  name: string;
  slug: string;
  description?: string;
  companyId: string;
  ownerId: string;
  settings: WorkspaceSettings;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface WorkspaceSettings {
  theme: 'light' | 'dark' | 'system';
  language: string;
  timezone: string;
  dateFormat: string;
  features: string[];
}

// ─── Department ──────────────────────────────────────────────────────────────

export interface Department {
  id: string;
  name: string;
  slug: string;
  description?: string;
  companyId: string;
  managerId?: string;
  parentId?: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

// ─── Team ────────────────────────────────────────────────────────────────────

export interface Team {
  id: string;
  name: string;
  slug: string;
  description?: string;
  departmentId: string;
  leadId?: string;
  memberIds: string[];
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

// ─── Role ────────────────────────────────────────────────────────────────────

export interface Role {
  id: string;
  name: string;
  slug: string;
  description?: string;
  permissions: string[];
  level: number;
  isSystem: boolean;
  companyId?: string;
  createdAt: string;
  updatedAt: string;
}

// ─── Permission ──────────────────────────────────────────────────────────────

export interface Permission {
  id: string;
  name: string;
  slug: string;
  description?: string;
  module: string;
  action: 'create' | 'read' | 'update' | 'delete' | 'manage';
  resource: string;
  createdAt: string;
}

// ─── Project ─────────────────────────────────────────────────────────────────

export interface Project {
  id: string;
  name: string;
  slug: string;
  description?: string;
  status: 'planning' | 'active' | 'on-hold' | 'completed' | 'archived';
  priority: 'low' | 'medium' | 'high' | 'critical';
  startDate?: string;
  endDate?: string;
  ownerId: string;
  workspaceId: string;
  teamId?: string;
  progress: number;
  tags: string[];
  createdAt: string;
  updatedAt: string;
}

// ─── Task ────────────────────────────────────────────────────────────────────

export interface Task {
  id: string;
  title: string;
  description?: string;
  status: 'todo' | 'in-progress' | 'in-review' | 'done' | 'blocked';
  priority: 'low' | 'medium' | 'high' | 'critical';
  projectId: string;
  assigneeId?: string;
  reporterId: string;
  dueDate?: string;
  estimatedHours?: number;
  tags: string[];
  parentId?: string;
  order: number;
  createdAt: string;
  updatedAt: string;
}

// ─── Meeting ─────────────────────────────────────────────────────────────────

export interface Meeting {
  id: string;
  title: string;
  description?: string;
  type: 'standup' | 'review' | 'planning' | 'retro' | 'one-on-one' | 'general';
  status: 'scheduled' | 'in-progress' | 'completed' | 'cancelled';
  startTime: string;
  endTime: string;
  organizerId: string;
  participantIds: string[];
  meetingUrl?: string;
  workspaceId: string;
  notes?: string;
  createdAt: string;
  updatedAt: string;
}

// ─── Notification ────────────────────────────────────────────────────────────

export interface Notification {
  id: string;
  title: string;
  message: string;
  type: 'info' | 'success' | 'warning' | 'error';
  category: 'system' | 'project' | 'task' | 'meeting' | 'team' | 'general';
  userId: string;
  isRead: boolean;
  actionUrl?: string;
  metadata?: Record<string, unknown>;
  createdAt: string;
}

// ─── Feature ─────────────────────────────────────────────────────────────────

export interface Feature {
  id: string;
  name: string;
  slug: string;
  description?: string;
  module: string;
  isEnabled: boolean;
  config?: Record<string, unknown>;
  companyId?: string;
  createdAt: string;
  updatedAt: string;
}

// ─── Dashboard ───────────────────────────────────────────────────────────────

export interface Dashboard {
  id: string;
  name: string;
  slug: string;
  description?: string;
  layout: DashboardWidget[];
  ownerId: string;
  workspaceId: string;
  isDefault: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface DashboardWidget {
  id: string;
  type: string;
  title: string;
  position: { x: number; y: number; w: number; h: number };
  config?: Record<string, unknown>;
}

// ─── Common Types ────────────────────────────────────────────────────────────

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
}

export interface ApiResponse<T> {
  data: T;
  message?: string;
  success: boolean;
}

export interface ApiError {
  message: string;
  code: string;
  status: number;
  details?: Record<string, unknown>;
}

export type SortDirection = 'asc' | 'desc';

export interface SortConfig {
  field: string;
  direction: SortDirection;
}

export interface FilterConfig {
  field: string;
  operator: 'eq' | 'neq' | 'gt' | 'gte' | 'lt' | 'lte' | 'like' | 'in';
  value: unknown;
}

export interface QueryParams {
  page?: number;
  pageSize?: number;
  sort?: SortConfig;
  filters?: FilterConfig[];
  search?: string;
}
