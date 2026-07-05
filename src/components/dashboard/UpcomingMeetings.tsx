import { mockMeetings } from '@/data';
import { Video, Clock } from 'lucide-react';
import { Badge } from '@/components/ui';

export function UpcomingMeetings() {
  const upcoming = mockMeetings.filter((m) => m.status === 'scheduled').slice(0, 4);
  return (
    <div className="rounded-xl border bg-card p-6">
      <h3 className="mb-4 font-semibold">Upcoming Meetings</h3>
      <div className="space-y-3">
        {upcoming.map((m) => (
          <div
            key={m.id}
            className="flex items-center gap-3 rounded-lg border p-3 transition-colors hover:bg-accent/50"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
              <Video className="h-5 w-5 text-primary" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium truncate">{m.title}</p>
              <div className="flex items-center gap-2 mt-0.5">
                <Clock className="h-3 w-3 text-muted-foreground" />
                <span className="text-xs text-muted-foreground">
                  {new Date(m.startTime).toLocaleString('en-US', {
                    month: 'short',
                    day: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit',
                  })}
                </span>
              </div>
            </div>
            <Badge variant="secondary" className="text-[10px]">
              {m.type}
            </Badge>
          </div>
        ))}
      </div>
    </div>
  );
}
