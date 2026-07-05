import { motion } from 'framer-motion';
import {
  FolderKanban,
  CheckSquare,
  Users,
  TrendingUp,
  Video,
  AlertCircle,
  BarChart3,
} from 'lucide-react';
import {
  StatsCard,
  ChartWidget,
  RecentActivity,
  UpcomingMeetings,
  ProjectOverview,
} from '@/components/dashboard';
import { mockDashboardStats } from '@/data';

export function DashboardPage() {
  const s = mockDashboardStats;
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <p className="text-muted-foreground">
          Welcome back, Arjun. Here&apos;s what&apos;s happening.
        </p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatsCard
          title="Total Projects"
          value={s.totalProjects}
          change={12}
          icon={FolderKanban}
          color="primary"
        />
        <StatsCard
          title="Active Tasks"
          value={s.totalTasks}
          change={8}
          icon={CheckSquare}
          color="emerald"
        />
        <StatsCard
          title="Team Members"
          value={s.teamMembers}
          change={5}
          icon={Users}
          color="violet"
        />
        <StatsCard
          title="Open Issues"
          value={s.openIssues}
          change={-15}
          icon={AlertCircle}
          color="rose"
        />
      </div>
      <div className="grid gap-6 lg:grid-cols-2">
        <ChartWidget title="Tasks Overview" type="bar" />
        <ChartWidget title="Completion Trend" type="area" />
      </div>
      <div className="grid gap-6 lg:grid-cols-3">
        <RecentActivity />
        <UpcomingMeetings />
        <ProjectOverview />
      </div>
    </motion.div>
  );
}

export function HRDashboardPage() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">HR Dashboard</h1>
        <p className="text-muted-foreground">Employee management and HR analytics.</p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatsCard title="Total Employees" value={48} change={3} icon={Users} color="primary" />
        <StatsCard title="Present Today" value={42} icon={CheckSquare} color="emerald" />
        <StatsCard title="On Leave" value={6} icon={AlertCircle} color="amber" />
        <StatsCard title="Open Positions" value={5} change={25} icon={TrendingUp} color="violet" />
      </div>
      <div className="grid gap-6 lg:grid-cols-2">
        <ChartWidget title="Attendance Trend" type="area" />
        <RecentActivity />
      </div>
    </motion.div>
  );
}

export function ManagerDashboardPage() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Manager Dashboard</h1>
        <p className="text-muted-foreground">Your team&apos;s performance and tasks.</p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatsCard title="Team Projects" value={3} icon={FolderKanban} color="primary" />
        <StatsCard
          title="Pending Reviews"
          value={7}
          change={-10}
          icon={CheckSquare}
          color="amber"
        />
        <StatsCard title="Team Members" value={8} icon={Users} color="violet" />
        <StatsCard title="Upcoming Meetings" value={4} icon={Video} color="sky" />
      </div>
      <div className="grid gap-6 lg:grid-cols-2">
        <ChartWidget title="Sprint Progress" type="bar" />
        <ProjectOverview />
      </div>
      <UpcomingMeetings />
    </motion.div>
  );
}

export function EmployeeDashboardPage() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">My Dashboard</h1>
        <p className="text-muted-foreground">Your tasks, meetings, and activity.</p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatsCard title="My Tasks" value={12} icon={CheckSquare} color="primary" />
        <StatsCard title="Completed" value={8} change={20} icon={TrendingUp} color="emerald" />
        <StatsCard title="Upcoming Meetings" value={3} icon={Video} color="violet" />
        <StatsCard title="Hours Logged" value="32h" icon={BarChart3} color="sky" />
      </div>
      <div className="grid gap-6 lg:grid-cols-2">
        <ChartWidget title="My Progress" type="area" />
        <UpcomingMeetings />
      </div>
    </motion.div>
  );
}
