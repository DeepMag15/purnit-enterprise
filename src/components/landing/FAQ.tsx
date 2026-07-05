import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

const faqs = [
  {
    q: 'What is Purnit?',
    a: 'Purnit is an enterprise workspace platform that unifies project management, HR, CRM, analytics, and team collaboration into a single application.',
  },
  {
    q: 'Is there a free plan?',
    a: 'Yes! Our Starter plan is completely free for teams of up to 5 users with 3 projects and basic analytics.',
  },
  {
    q: 'Can I migrate from other tools?',
    a: 'Absolutely. We provide migration tools for Jira, Asana, Trello, Monday, and ClickUp. Our team will assist with the migration process.',
  },
  {
    q: 'Is my data secure?',
    a: 'We use enterprise-grade security including end-to-end encryption, SOC 2 compliance, RBAC, audit logs, and SSO/SAML integration.',
  },
  {
    q: 'Do you offer custom integrations?',
    a: 'Yes, our Enterprise plan includes custom integrations. We also provide a REST API and webhooks for building your own integrations.',
  },
  {
    q: 'What kind of support do you offer?',
    a: 'Community support for Starter, priority email/chat support for Professional, and dedicated account manager + SLA for Enterprise plans.',
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section id="faq" className="px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="mb-2 text-sm font-semibold text-primary">FAQ</p>
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Frequently Asked Questions</h2>
        </motion.div>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="rounded-xl border bg-card"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between px-6 py-4 text-left font-medium hover:text-primary transition-colors"
              >
                {faq.q}
                <ChevronDown
                  className={cn(
                    'h-4 w-4 shrink-0 transition-transform',
                    open === i && 'rotate-180',
                  )}
                />
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <p className="px-6 pb-4 text-sm text-muted-foreground">{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
