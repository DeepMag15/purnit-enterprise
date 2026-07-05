import { motion } from 'framer-motion';
import {
  FolderKanban,
  Users,
  BarChart3,
  Shield,
  Zap,
  Sparkles,
  Video,
  FileText,
} from 'lucide-react';

const features = [
  {
    icon: FolderKanban,
    title: 'Project Management',
    desc: 'Kanban boards, Gantt charts, sprint planning, and real-time collaboration.',
  },
  {
    icon: Users,
    title: 'HR & People',
    desc: 'Employee management, attendance, leave tracking, and onboarding automation.',
  },
  {
    icon: BarChart3,
    title: 'Analytics & Reports',
    desc: 'Real-time dashboards, custom reports, and predictive insights.',
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    desc: 'RBAC, audit logs, SSO, and end-to-end encryption.',
  },
  {
    icon: Video,
    title: 'Meetings & Calendar',
    desc: 'Scheduling, video calls, meeting notes, and calendar integration.',
  },
  {
    icon: FileText,
    title: 'Document Management',
    desc: 'Version control, collaboration, templates, and digital signatures.',
  },
  { icon: Zap, title: 'Automation', desc: 'Workflow automation, triggers, and custom pipelines.' },
  {
    icon: Sparkles,
    title: 'AI Assistant',
    desc: 'Smart suggestions, auto-categorization, and predictive analytics.',
  },
];

export function Features() {
  return (
    <section id="features" className="border-t bg-muted/30 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="mb-2 text-sm font-semibold text-primary">FEATURES</p>
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Everything Your Enterprise Needs</h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            One platform to manage your entire organization. No more switching between tools.
          </p>
        </motion.div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group rounded-xl border bg-card p-6 transition-all hover:border-primary/50 hover:shadow-lg"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <f.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-2 font-semibold">{f.title}</h3>
              <p className="text-sm text-muted-foreground">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
