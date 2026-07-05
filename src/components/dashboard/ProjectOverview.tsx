import { mockProjects } from '@/data';
import { Badge } from '@/components/ui';
import { cn } from '@/lib/utils';

const statusColors: Record<string, string> = {
  active: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400',
  planning: 'bg-blue-500/10 text-blue-600 dark:text-blue-400',
  'on-hold': 'bg-amber-500/10 text-amber-600 dark:text-amber-400',
  completed: 'bg-muted text-muted-foreground',
};

export function ProjectOverview() {
  return (
    <div className="rounded-xl border bg-card p-6">
      <h3 className="mb-4 font-semibold">Project Overview</h3>
      <div className="space-y-3">
        {mockProjects.slice(0, 4).map((p) => (
          <div key={p.id} className="rounded-lg border p-4 transition-colors hover:bg-accent/50">
            <div className="flex items-center justify-between mb-2">
              <p className="font-medium text-sm">{p.name}</p>
              <Badge className={cn('text-[10px] border-0', statusColors[p.status])}>
                {p.status}
              </Badge>
            </div>
            <div className="flex items-center gap-2 mb-2">
              <div className="flex-1 h-1.5 rounded-full bg-muted overflow-hidden">
                <div
                  className="h-full rounded-full bg-primary transition-all"
                  style={{ width: `${p.progress}%` }}
                />
              </div>
              <span className="text-xs text-muted-foreground w-8">{p.progress}%</span>
            </div>
            <div className="flex gap-1">
              {p.tags.slice(0, 3).map((t) => (
                <span
                  key={t}
                  className="rounded bg-muted px-1.5 py-0.5 text-[10px] text-muted-foreground"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
