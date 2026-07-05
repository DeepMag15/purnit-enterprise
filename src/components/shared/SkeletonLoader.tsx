import { cn } from '@/lib/utils';

interface SkeletonLoaderProps {
  className?: string;
  count?: number;
  variant?: 'text' | 'card' | 'avatar' | 'chart';
}

function SkeletonLine({ className }: { className?: string }) {
  return <div className={cn('animate-pulse rounded-md bg-muted', className)} />;
}

export function SkeletonLoader({ className, count = 3, variant = 'text' }: SkeletonLoaderProps) {
  if (variant === 'card') {
    return (
      <div className={cn('grid gap-4 sm:grid-cols-2 lg:grid-cols-4', className)}>
        {Array.from({ length: count }).map((_, i) => (
          <div key={i} className="rounded-xl border p-6 space-y-3">
            <SkeletonLine className="h-4 w-1/3" />
            <SkeletonLine className="h-8 w-2/3" />
            <SkeletonLine className="h-3 w-1/2" />
          </div>
        ))}
      </div>
    );
  }
  if (variant === 'avatar') {
    return (
      <div className={cn('flex items-center gap-3', className)}>
        <SkeletonLine className="h-10 w-10 rounded-full" />
        <div className="space-y-2 flex-1">
          <SkeletonLine className="h-4 w-1/3" />
          <SkeletonLine className="h-3 w-1/4" />
        </div>
      </div>
    );
  }
  if (variant === 'chart') {
    return <SkeletonLine className={cn('h-64 w-full rounded-xl', className)} />;
  }
  return (
    <div className={cn('space-y-3', className)}>
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className="animate-pulse rounded-md bg-muted h-4"
          style={{ width: `${80 - i * 15}%` }}
        />
      ))}
    </div>
  );
}
