import {
  LayoutDashboard,
  FolderKanban,
  CheckSquare,
  Video,
  Users,
  UserCircle,
  FileText,
  BarChart3,
  ClipboardList,
  Sparkles,
  Settings,
  HelpCircle,
  Building2,
  type LucideIcon,
} from 'lucide-react';

export interface SidebarItem {
  id: string;
  label: string;
  icon: LucideIcon;
  href: string;
  badge?: string;
  children?: SidebarItem[];
  roles?: string[];
}

export interface SidebarSection {
  id: string;
  title?: string;
  items: SidebarItem[];
}

export const sidebarConfig: SidebarSection[] = [
  {
    id: 'main',
    items: [{ id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard, href: '/dashboard' }],
  },
  {
    id: 'workspace',
    title: 'Workspace',
    items: [
      { id: 'projects', label: 'Projects', icon: FolderKanban, href: '/projects', badge: '5' },
      { id: 'tasks', label: 'Tasks', icon: CheckSquare, href: '/tasks', badge: '12' },
      { id: 'meetings', label: 'Meetings', icon: Video, href: '/meetings', badge: '3' },
      { id: 'documents', label: 'Documents', icon: FileText, href: '/documents' },
    ],
  },
  {
    id: 'management',
    title: 'Management',
    items: [
      {
        id: 'hr',
        label: 'HR',
        icon: Users,
        href: '/hr',
        roles: ['super_admin', 'admin', 'hr_manager'],
        children: [
          { id: 'hr-employees', label: 'Employees', icon: Users, href: '/hr/employees' },
          { id: 'hr-attendance', label: 'Attendance', icon: ClipboardList, href: '/hr/attendance' },
          { id: 'hr-leave', label: 'Leave Mgmt', icon: FileText, href: '/hr/leave' },
        ],
      },
      {
        id: 'crm',
        label: 'CRM',
        icon: UserCircle,
        href: '/crm',
        roles: ['super_admin', 'admin', 'manager'],
      },
      {
        id: 'company',
        label: 'Company',
        icon: Building2,
        href: '/company',
        roles: ['super_admin', 'admin'],
      },
    ],
  },
  {
    id: 'insights',
    title: 'Insights',
    items: [
      { id: 'analytics', label: 'Analytics', icon: BarChart3, href: '/analytics' },
      { id: 'reports', label: 'Reports', icon: ClipboardList, href: '/reports' },
      { id: 'ai', label: 'AI Assistant', icon: Sparkles, href: '/ai', badge: 'New' },
    ],
  },
  {
    id: 'system',
    title: 'System',
    items: [
      { id: 'settings', label: 'Settings', icon: Settings, href: '/settings' },
      { id: 'help', label: 'Help & Support', icon: HelpCircle, href: '/help' },
    ],
  },
];
