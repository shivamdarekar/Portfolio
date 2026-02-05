"use client";

import { motion } from "framer-motion";
import { Phone, Mail, Github, Linkedin } from "lucide-react";
import { ANIMATION_VARIANTS } from "@/lib/constants";
import { SITE_CONFIG } from "@/lib/constants";

export function ContactMe() {
  const socialLinks = [
    {
      icon: Github,
      href: SITE_CONFIG.links.github,
      label: "GitHub"
    },
    {
      icon: Linkedin,
      href: SITE_CONFIG.links.linkedin,
      label: "LinkedIn"
    },
    {
      icon: Mail,
      href: `mailto:${SITE_CONFIG.links.email}`,
      label: "Email"
    },
    {
      icon: Phone,
      href: `tel:${SITE_CONFIG.links.phone}`,
      label: "Phone"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-background via-muted/30 to-background">
      <div className="container mx-auto max-w-4xl text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={ANIMATION_VARIANTS.fadeUp}
          className="space-y-8"
        >
          {/* Header with Phone Icon */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <h2 className="text-4xl md:text-5xl font-display font-bold">
              Contact Me
            </h2>
            <div className="p-3 bg-red-500 rounded-full">
              <Phone className="h-6 w-6 text-white" />
            </div>
          </div>

          {/* Description */}
          <motion.p
            variants={ANIMATION_VARIANTS.fadeUp}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto uppercase tracking-wide"
          >
            Discuss a project or just want to say hi? My inbox is open for all.
          </motion.p>

          {/* Contact Info */}
          <motion.div
            variants={ANIMATION_VARIANTS.fadeUp}
            transition={{ delay: 0.3 }}
            className="space-y-4"
          >
            <a
              href={`tel:${SITE_CONFIG.links.phone}`}
              className="block text-2xl md:text-3xl font-mono text-primary hover:text-primary/80 transition-colors"
            >
              {SITE_CONFIG.links.phone}
            </a>
            <a
              href={`mailto:${SITE_CONFIG.links.email}`}
              className="block text-xl md:text-2xl text-muted-foreground hover:text-primary transition-colors"
            >
              {SITE_CONFIG.links.email}
            </a>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            variants={ANIMATION_VARIANTS.fadeUp}
            transition={{ delay: 0.4 }}
            className="flex justify-center gap-4 pt-8"
          >
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-4 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors group"
                aria-label={social.label}
              >
                <social.icon className="h-6 w-6 text-primary group-hover:text-primary/80 transition-colors" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}