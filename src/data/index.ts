export { mockUsers, currentUser } from './mock-users';
export { mockWorkspaces, currentWorkspace, mockCompany } from './mock-workspaces';
export { mockProjects, mockTasks } from './mock-projects';
export { mockNotifications } from './mock-notifications';
export { mockMeetings } from './mock-meetings';
export { sidebarConfig } from './mock-sidebar';
export type { SidebarItem, SidebarSection } from './mock-sidebar';

export const mockDomains = [
  {
    id: 'it',
    name: 'IT & Software',
    icon: '💻',
    description: 'Software development, DevOps, and IT services',
    templates: ['Agile Board', 'Sprint Tracker', 'Bug Tracker'],
  },
  {
    id: 'healthcare',
    name: 'Healthcare',
    icon: '🏥',
    description: 'Hospital management, patient care, and medical records',
    templates: ['Patient Portal', 'Clinic Manager', 'Appointment System'],
  },
  {
    id: 'education',
    name: 'Education',
    icon: '🎓',
    description: 'Schools, universities, and e-learning platforms',
    templates: ['Course Manager', 'Student Portal', 'LMS Dashboard'],
  },
  {
    id: 'finance',
    name: 'Finance',
    icon: '💰',
    description: 'Banking, investments, and financial management',
    templates: ['Portfolio Tracker', 'Expense Manager', 'Invoice System'],
  },
  {
    id: 'manufacturing',
    name: 'Manufacturing',
    icon: '🏭',
    description: 'Production, supply chain, and quality control',
    templates: ['Production Line', 'Inventory Tracker', 'Quality Dashboard'],
  },
];

export const mockTemplates = [
  {
    id: 'tmpl-001',
    name: 'Agile Board',
    description: 'Kanban-style project board with sprint management',
    category: 'it',
    image: '',
    features: ['Kanban Board', 'Sprint Planning', 'Burndown Charts', 'Backlog'],
  },
  {
    id: 'tmpl-002',
    name: 'Sprint Tracker',
    description: 'Track sprint progress and team velocity',
    category: 'it',
    image: '',
    features: ['Sprint Overview', 'Velocity Charts', 'Story Points', 'Retrospective'],
  },
  {
    id: 'tmpl-003',
    name: 'Corporate Suite',
    description: 'Complete enterprise workspace template',
    category: 'general',
    image: '',
    features: ['Dashboard', 'Projects', 'HR Module', 'Analytics', 'Reports'],
  },
  {
    id: 'tmpl-004',
    name: 'Startup Kit',
    description: 'Lightweight workspace for fast-moving teams',
    category: 'general',
    image: '',
    features: ['Task Board', 'Team Chat', 'Quick Notes', 'Goals'],
  },
];

export const mockActivityFeed = [
  {
    id: 'act-001',
    user: 'Sneha Patel',
    action: 'completed task',
    target: 'Implement component library',
    time: '5 minutes ago',
    type: 'task' as const,
  },
  {
    id: 'act-002',
    user: 'Rahul Verma',
    action: 'created project',
    target: 'Mobile App Launch',
    time: '1 hour ago',
    type: 'project' as const,
  },
  {
    id: 'act-003',
    user: 'Priya Sharma',
    action: 'updated document',
    target: 'HR Policy v3.2',
    time: '2 hours ago',
    type: 'document' as const,
  },
  {
    id: 'act-004',
    user: 'Arjun Mehta',
    action: 'approved leave request',
    target: 'Sneha Patel - Jul 10-12',
    time: '3 hours ago',
    type: 'hr' as const,
  },
  {
    id: 'act-005',
    user: 'Rahul Verma',
    action: 'commented on',
    target: 'API Gateway v2 architecture',
    time: '4 hours ago',
    type: 'project' as const,
  },
  {
    id: 'act-006',
    user: 'Sneha Patel',
    action: 'pushed code to',
    target: 'feature/dashboard-redesign',
    time: '5 hours ago',
    type: 'task' as const,
  },
];

export const mockDashboardStats = {
  totalProjects: 5,
  activeProjects: 3,
  totalTasks: 24,
  completedTasks: 8,
  teamMembers: 12,
  upcomingMeetings: 4,
  openIssues: 7,
  revenue: 125000,
};

export const mockChartData = [
  { name: 'Jan', tasks: 40, completed: 24 },
  { name: 'Feb', tasks: 30, completed: 22 },
  { name: 'Mar', tasks: 50, completed: 38 },
  { name: 'Apr', tasks: 45, completed: 35 },
  { name: 'May', tasks: 60, completed: 48 },
  { name: 'Jun', tasks: 55, completed: 42 },
  { name: 'Jul', tasks: 35, completed: 18 },
];
