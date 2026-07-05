import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';
import { Button, Input, Textarea } from '@/components/ui';

export function Contact() {
  return (
    <section id="contact" className="border-t bg-muted/30 px-6 py-24">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <p className="mb-2 text-sm font-semibold text-primary">CONTACT</p>
          <h2 className="mb-4 text-3xl font-bold">Get in Touch</h2>
          <p className="mb-8 text-muted-foreground">
            Have questions? We&apos;d love to hear from you. Send us a message and we&apos;ll
            respond within 24 hours.
          </p>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-primary" />
              <span className="text-sm">contact@purnit.io</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-primary" />
              <span className="text-sm">+91 98765 43210</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="h-5 w-5 text-primary" />
              <span className="text-sm">Bangalore, Karnataka, India</span>
            </div>
          </div>
        </motion.div>
        <motion.form
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          onSubmit={(e) => e.preventDefault()}
          className="space-y-4 rounded-2xl border bg-card p-8"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <Input label="First Name" placeholder="John" />
            <Input label="Last Name" placeholder="Doe" />
          </div>
          <Input label="Email" type="email" placeholder="john@example.com" />
          <Textarea label="Message" placeholder="Tell us about your needs..." rows={4} />
          <Button className="w-full">Send Message</Button>
        </motion.form>
      </div>
    </section>
  );
}
