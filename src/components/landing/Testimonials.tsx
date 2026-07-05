import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Vikram Singh',
    role: 'CTO, TechScale',
    content:
      'Purnit transformed how our 200+ person engineering team collaborates. The unified workspace eliminated 5 different tools we were juggling.',
  },
  {
    name: 'Ananya Desai',
    role: 'VP of People, GrowthCo',
    content:
      'The HR module alone saved us 20 hours per week. Onboarding automation and leave management are game changers.',
  },
  {
    name: 'Karthik Rao',
    role: 'Product Lead, InnovateLab',
    content:
      'Finally, a platform that understands enterprise needs. The RBAC system and analytics are exactly what we needed for compliance.',
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="border-t bg-muted/30 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="mb-2 text-sm font-semibold text-primary">TESTIMONIALS</p>
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Loved by Teams Worldwide</h2>
        </motion.div>
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-2xl border bg-card p-8"
            >
              <Quote className="mb-4 h-8 w-8 text-primary/30" />
              <p className="mb-6 text-muted-foreground leading-relaxed">{t.content}</p>
              <div className="flex items-center gap-1 mb-3">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="font-semibold">{t.name}</p>
              <p className="text-sm text-muted-foreground">{t.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
