import { mockActivityFeed } from '@/data';
import { FolderKanban, CheckSquare, FileText, Users } from 'lucide-react';

const iconMap = { project: FolderKanban, task: CheckSquare, document: FileText, hr: Users };

export function RecentActivity() {
  return (
    <div className="rounded-xl border bg-card p-6">
      <h3 className="mb-4 font-semibold">Recent Activity</h3>
      <div className="space-y-4">
        {mockActivityFeed.map((act) => {
          const Icon = iconMap[act.type as keyof typeof iconMap] || CheckSquare;
          return (
            <div key={act.id} className="flex items-start gap-3">
              <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-muted">
                <Icon className="h-4 w-4 text-muted-foreground" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm">
                  <span className="font-medium">{act.user}</span>{' '}
                  <span className="text-muted-foreground">{act.action}</span>{' '}
                  <span className="font-medium">{act.target}</span>
                </p>
                <p className="text-xs text-muted-foreground">{act.time}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
