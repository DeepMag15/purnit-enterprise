import type { Workspace, Company } from '@/types';

export const mockCompany: Company = {
  id: 'comp-001',
  name: 'Purnit Technologies',
  slug: 'purnit-tech',
  domain: 'purnit.io',
  logoUrl: '',
  industry: 'Technology',
  size: 'medium',
  website: 'https://purnit.io',
  address: 'Bangalore, India',
  ownerId: 'usr-001',
  isActive: true,
  createdAt: '2026-01-01T00:00:00Z',
  updatedAt: '2026-07-01T00:00:00Z',
};

export const mockWorkspaces: Workspace[] = [
  {
    id: 'ws-001',
    name: 'Engineering Hub',
    slug: 'engineering-hub',
    description: 'Main workspace for the engineering team',
    companyId: 'comp-001',
    ownerId: 'usr-001',
    settings: {
      theme: 'system',
      language: 'en',
      timezone: 'Asia/Kolkata',
      dateFormat: 'DD/MM/YYYY',
      features: ['projects', 'tasks', 'meetings', 'hr', 'analytics'],
    },
    isActive: true,
    createdAt: '2026-01-15T10:00:00Z',
    updatedAt: '2026-07-01T00:00:00Z',
  },
  {
    id: 'ws-002',
    name: 'Marketing Central',
    slug: 'marketing-central',
    description: 'Workspace for marketing and growth teams',
    companyId: 'comp-001',
    ownerId: 'usr-001',
    settings: {
      theme: 'light',
      language: 'en',
      timezone: 'Asia/Kolkata',
      dateFormat: 'DD/MM/YYYY',
      features: ['projects', 'crm', 'analytics', 'documents'],
    },
    isActive: true,
    createdAt: '2026-02-01T10:00:00Z',
    updatedAt: '2026-06-15T00:00:00Z',
  },
  {
    id: 'ws-003',
    name: 'HR Operations',
    slug: 'hr-operations',
    description: 'Human resources management workspace',
    companyId: 'comp-001',
    ownerId: 'usr-002',
    settings: {
      theme: 'dark',
      language: 'en',
      timezone: 'Asia/Kolkata',
      dateFormat: 'DD/MM/YYYY',
      features: ['hr', 'documents', 'meetings', 'reports'],
    },
    isActive: true,
    createdAt: '2026-03-01T10:00:00Z',
    updatedAt: '2026-06-20T00:00:00Z',
  },
];

export const currentWorkspace = mockWorkspaces[0];
