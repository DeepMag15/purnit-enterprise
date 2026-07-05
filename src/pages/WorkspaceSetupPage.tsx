import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Building2, Globe, Layout, Palette, Check, ArrowRight, ArrowLeft } from 'lucide-react';
import { Button, Input } from '@/components/ui';
import { mockDomains, mockTemplates } from '@/data';
import { cn } from '@/lib/utils';

const steps = [
  { id: 1, title: 'Company Info', icon: Building2 },
  { id: 2, title: 'Domain', icon: Globe },
  { id: 3, title: 'Template', icon: Layout },
  { id: 4, title: 'Branding', icon: Palette },
  { id: 5, title: 'Finish', icon: Check },
];

export function WorkspaceSetupPage() {
  const [step, setStep] = useState(1);
  const [domain, setDomain] = useState('');
  const [template, setTemplate] = useState('');

  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar Steps */}
      <div className="hidden md:flex w-72 flex-col border-r bg-muted/30 p-8">
        <h2 className="text-lg font-bold mb-8">Workspace Setup</h2>
        <div className="space-y-2">
          {steps.map((s) => (
            <div
              key={s.id}
              className={cn(
                'flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-colors',
                step === s.id
                  ? 'bg-primary text-primary-foreground'
                  : step > s.id
                    ? 'text-foreground'
                    : 'text-muted-foreground',
              )}
            >
              <s.icon className="h-4 w-4" />
              <span className="font-medium">{s.title}</span>
              {step > s.id && <Check className="ml-auto h-4 w-4" />}
            </div>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 flex items-center justify-center p-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="w-full max-w-xl"
          >
            {step === 1 && (
              <div className="space-y-6">
                <div>
                  <h1 className="text-2xl font-bold">Company Information</h1>
                  <p className="text-muted-foreground">Tell us about your organization</p>
                </div>
                <div className="space-y-4 rounded-2xl border bg-card p-8">
                  <Input label="Company Name" placeholder="Acme Inc." />
                  <Input label="Website" placeholder="https://acme.com" />
                  <div className="grid grid-cols-2 gap-4">
                    <Input label="Industry" placeholder="Technology" />
                    <Input label="Team Size" placeholder="50-100" />
                  </div>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-6">
                <div>
                  <h1 className="text-2xl font-bold">Select Your Domain</h1>
                  <p className="text-muted-foreground">
                    Choose the domain that best fits your organization
                  </p>
                </div>
                <div className="grid gap-3">
                  {mockDomains.map((d) => (
                    <button
                      key={d.id}
                      onClick={() => setDomain(d.id)}
                      className={cn(
                        'flex items-center gap-4 rounded-xl border p-4 text-left transition-all hover:border-primary/50 hover:shadow-md',
                        domain === d.id && 'border-primary ring-2 ring-primary/20',
                      )}
                    >
                      <span className="text-3xl">{d.icon}</span>
                      <div>
                        <p className="font-semibold">{d.name}</p>
                        <p className="text-sm text-muted-foreground">{d.description}</p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-6">
                <div>
                  <h1 className="text-2xl font-bold">Choose a Template</h1>
                  <p className="text-muted-foreground">
                    Start with a pre-built template or customize later
                  </p>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  {mockTemplates.map((t) => (
                    <button
                      key={t.id}
                      onClick={() => setTemplate(t.id)}
                      className={cn(
                        'rounded-xl border p-6 text-left transition-all hover:border-primary/50 hover:shadow-md',
                        template === t.id && 'border-primary ring-2 ring-primary/20',
                      )}
                    >
                      <div className="h-20 rounded-lg bg-muted mb-4 flex items-center justify-center text-muted-foreground">
                        <Layout className="h-8 w-8" />
                      </div>
                      <p className="font-semibold">{t.name}</p>
                      <p className="text-sm text-muted-foreground mt-1">{t.description}</p>
                      <div className="mt-3 flex flex-wrap gap-1">
                        {t.features.slice(0, 3).map((f) => (
                          <span key={f} className="rounded bg-muted px-1.5 py-0.5 text-[10px]">
                            {f}
                          </span>
                        ))}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === 4 && (
              <div className="space-y-6">
                <div>
                  <h1 className="text-2xl font-bold">Workspace Branding</h1>
                  <p className="text-muted-foreground">Customize the look and feel</p>
                </div>
                <div className="space-y-4 rounded-2xl border bg-card p-8">
                  <Input label="Workspace Name" placeholder="Engineering Hub" />
                  <Input label="Subdomain" placeholder="engineering.purnit.io" />
                  <div>
                    <label className="text-sm font-medium">Primary Color</label>
                    <div className="mt-2 flex gap-2">
                      {['#3b82f6', '#8b5cf6', '#06b6d4', '#10b981', '#f59e0b', '#ef4444'].map(
                        (c) => (
                          <button
                            key={c}
                            className="h-8 w-8 rounded-full border-2 border-transparent hover:border-foreground transition-colors"
                            style={{ backgroundColor: c }}
                          />
                        ),
                      )}
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium">Logo Upload</label>
                    <div className="mt-2 flex h-24 items-center justify-center rounded-lg border-2 border-dashed text-sm text-muted-foreground">
                      Drag & drop or click to upload
                    </div>
                  </div>
                </div>
              </div>
            )}

            {step === 5 && (
              <div className="text-center space-y-6">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="flex h-20 w-20 items-center justify-center rounded-full bg-emerald-500/10 mx-auto"
                >
                  <Check className="h-10 w-10 text-emerald-500" />
                </motion.div>
                <h1 className="text-2xl font-bold">You&apos;re All Set!</h1>
                <p className="text-muted-foreground max-w-md mx-auto">
                  Your workspace has been created. You can now invite team members and start
                  managing your projects.
                </p>
                <Button
                  size="lg"
                  onClick={() => {
                    window.location.href = '/dashboard';
                  }}
                >
                  Go to Dashboard
                </Button>
              </div>
            )}

            {/* Navigation */}
            {step < 5 && (
              <div className="mt-8 flex justify-between">
                <Button
                  variant="ghost"
                  onClick={() => setStep(Math.max(1, step - 1))}
                  disabled={step === 1}
                  className="gap-2"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Back
                </Button>
                <Button onClick={() => setStep(Math.min(5, step + 1))} className="gap-2">
                  Next
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
