import { ComingSoonPage } from '@/components/ComingSoonPage';

export function ProjectsPage() {
  return (
    <ComingSoonPage
      title="Projects"
      description="Kanban boards, Gantt charts, and project management."
    />
  );
}
export function TasksPage() {
  return (
    <ComingSoonPage
      title="Tasks"
      description="Task management with boards, lists, and timelines."
    />
  );
}
export function MeetingsPage() {
  return <ComingSoonPage title="Meetings" description="Schedule and manage team meetings." />;
}
export function AnalyticsPage() {
  return <ComingSoonPage title="Analytics" description="Real-time dashboards and data insights." />;
}
export function SettingsPage() {
  return <ComingSoonPage title="Settings" description="Workspace and account settings." />;
}
export function ProfilePage() {
  return <ComingSoonPage title="Profile" description="Manage your profile and preferences." />;
}
export function HRPage() {
  return (
    <ComingSoonPage
      title="HR Management"
      description="Employee management, attendance, and leave tracking."
    />
  );
}
export function CRMPage() {
  return <ComingSoonPage title="CRM" description="Customer relationship management." />;
}
export function DocumentsPage() {
  return (
    <ComingSoonPage title="Documents" description="Document management with version control." />
  );
}
export function ReportsPage() {
  return <ComingSoonPage title="Reports" description="Generate and export custom reports." />;
}
export function AIPage() {
  return <ComingSoonPage title="AI Assistant" description="AI-powered insights and automation." />;
}
export function HelpPage() {
  return (
    <ComingSoonPage title="Help & Support" description="Documentation and support resources." />
  );
}
export function CompanyPage() {
  return <ComingSoonPage title="Company" description="Company settings and team management." />;
}
