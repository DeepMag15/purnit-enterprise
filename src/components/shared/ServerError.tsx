import { ServerCrash } from 'lucide-react';
import { Button } from '@/components/ui';

export function ServerError() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 text-center bg-background">
      <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-destructive/10">
        <ServerCrash className="h-10 w-10 text-destructive" />
      </div>
      <h1 className="text-6xl font-bold text-destructive">500</h1>
      <h2 className="text-2xl font-semibold">Internal Server Error</h2>
      <p className="max-w-md text-muted-foreground">
        Something went wrong on our end. Our team has been notified.
      </p>
      <Button onClick={() => window.location.reload()}>Refresh Page</Button>
    </div>
  );
}
