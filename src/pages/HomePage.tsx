/**
 * Home Page
 */

import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Shield, Zap, LayoutDashboard } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui';
import { ThemeToggle } from '@/components/ThemeToggle';
import { ROUTES } from '@/constants';

export function HomePage() {
  return (
    <div className="relative flex min-h-screen flex-col bg-background">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 flex items-center justify-between border-b bg-background/80 px-6 py-4 backdrop-blur-md">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <LayoutDashboard className="h-4 w-4" />
          </div>
          <span className="text-xl font-bold tracking-tight">Purnit</span>
        </div>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Link to={ROUTES.LOGIN}>
            <Button variant="ghost">Sign In</Button>
          </Link>
          <Link to={ROUTES.REGISTER}>
            <Button>Get Started</Button>
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <main className="flex flex-1 flex-col items-center justify-center px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-4xl text-center"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border bg-primary/5 px-4 py-1.5 text-sm text-primary"
          >
            <Sparkles className="h-4 w-4" />
            Enterprise Workspace Platform
          </motion.div>

          {/* Heading */}
          <h1 className="mb-6 text-5xl font-bold leading-tight tracking-tight md:text-6xl lg:text-7xl">
            Build. Manage.{' '}
            <span className="bg-gradient-to-r from-primary via-blue-500 to-violet-500 bg-clip-text text-transparent">
              Scale.
            </span>
          </h1>

          {/* Subheading */}
          <p className="mx-auto mb-10 max-w-2xl text-lg text-muted-foreground md:text-xl">
            Purnit is the all-in-one enterprise workspace platform that unifies project management,
            team collaboration, HR, and analytics into a single powerful experience.
          </p>

          {/* CTA */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link to={ROUTES.DASHBOARD}>
              <Button size="lg" className="gap-2">
                Open Dashboard
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link to={ROUTES.REGISTER}>
              <Button variant="outline" size="lg">
                Create Account
              </Button>
            </Link>
          </div>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-24 grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3"
        >
          {[
            {
              icon: Zap,
              title: 'Lightning Fast',
              description: 'Built with React 19, Vite, and modern tooling for blazing fast performance.',
            },
            {
              icon: Shield,
              title: 'Enterprise Security',
              description: 'Role-based access control, audit logs, and enterprise-grade security built in.',
            },
            {
              icon: Sparkles,
              title: 'AI-Powered',
              description: 'Intelligent insights, automated workflows, and smart recommendations.',
            },
          ].map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + i * 0.1 }}
              className="group rounded-xl border bg-card p-6 transition-all hover:border-primary/50 hover:shadow-lg"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-lg font-semibold">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="border-t px-6 py-6 text-center text-sm text-muted-foreground">
        &copy; {new Date().getFullYear()} Purnit Enterprise. All rights reserved.
      </footer>
    </div>
  );
}
