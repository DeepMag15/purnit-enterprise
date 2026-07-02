/**
 * Domain constants
 */

export const DOMAINS = {
  PROJECT_MANAGEMENT: 'project_management',
  HUMAN_RESOURCES: 'human_resources',
  CRM: 'crm',
  ANALYTICS: 'analytics',
  COMMUNICATION: 'communication',
  FINANCE: 'finance',
  ADMINISTRATION: 'administration',
} as const;

export type DomainKey = keyof typeof DOMAINS;
export type DomainValue = (typeof DOMAINS)[DomainKey];

export const DOMAIN_LABELS: Record<DomainValue, string> = {
  [DOMAINS.PROJECT_MANAGEMENT]: 'Project Management',
  [DOMAINS.HUMAN_RESOURCES]: 'Human Resources',
  [DOMAINS.CRM]: 'Customer Relations',
  [DOMAINS.ANALYTICS]: 'Analytics & Reports',
  [DOMAINS.COMMUNICATION]: 'Communication',
  [DOMAINS.FINANCE]: 'Finance',
  [DOMAINS.ADMINISTRATION]: 'Administration',
};
