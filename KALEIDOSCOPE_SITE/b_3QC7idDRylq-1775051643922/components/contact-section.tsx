"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { MessageCircle, Mail, Phone, Send, Linkedin, Instagram, Facebook } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

// TikTok icon component
function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
    </svg>
  )
}

const contactMethods = [
  {
    icon: MessageCircle,
    title: "WhatsApp",
    description: "Réponse rapide garantie",
    value: "+237 693 416 561",
    href: "https://wa.me/237693416561",
    primary: true,
  },
  {
    icon: Mail,
    title: "Email",
    description: "Pour les demandes détaillées",
    value: "messangaromaric107@gmail.com",
    href: "mailto:messangaromaric107@gmail.com",
    primary: false,
  },
  {
    icon: Phone,
    title: "Téléphone",
    description: "Du lundi au vendredi",
    value: "+237 693 416 561",
    href: "tel:+237693416561",
    primary: false,
  },
]

const socialLinks = [
  { icon: TikTokIcon, label: "TikTok", href: "#" },
  { icon: Facebook, label: "Facebook", href: "#" },
  { icon: Linkedin, label: "LinkedIn", href: "#" },
  { icon: Instagram, label: "Instagram", href: "#" },
]

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    const message = `Bonjour, je m'appelle ${formData.name}. Je souhaite discuter d'un projet de type: ${formData.projectType}. Mon email: ${formData.email}`
    window.open(`https://wa.me/237693416561?text=${encodeURIComponent(message)}`, "_blank")
  }

  return (
    <section id="contact" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background" />
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block rounded-full border border-border bg-secondary/50 px-4 py-1.5 text-sm text-muted-foreground mb-4">
            Contact
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4 text-balance">
            Démarrons votre{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-gold bg-clip-text text-transparent">
              projet ensemble
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground text-pretty">
            Prêt à transformer vos idées en réalité ? Contactez-nous dès maintenant pour discuter de
            votre projet.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Methods */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {contactMethods.map((method) => (
              <a
                key={method.title}
                href={method.href}
                target={method.href.startsWith("http") ? "_blank" : undefined}
                rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
              >
                <Card
                  className={`group relative overflow-hidden transition-all duration-300 hover:border-primary/50 ${
                    method.primary
                      ? "bg-gradient-to-br from-primary/10 to-accent/10 border-primary/30"
                      : "bg-card/50 border-border"
                  }`}
                >
                  {method.primary && (
                    <div className="absolute top-2 right-2">
                      <span className="inline-flex items-center rounded-full bg-primary/20 px-2 py-0.5 text-xs font-medium text-primary">
                        Recommandé
                      </span>
                    </div>
                  )}
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-4">
                      <div
                        className={`h-12 w-12 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 ${
                          method.primary
                            ? "bg-gradient-to-br from-primary to-accent"
                            : "bg-secondary"
                        }`}
                      >
                        <method.icon
                          className={`h-6 w-6 ${
                            method.primary ? "text-primary-foreground" : "text-foreground"
                          }`}
                        />
                      </div>
                      <div>
                        <CardTitle className="text-lg font-semibold">{method.title}</CardTitle>
                        <CardDescription>{method.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground font-medium">{method.value}</p>
                  </CardContent>
                </Card>
              </a>
            ))}

            {/* Social Links */}
            <div className="pt-6">
              <p className="text-sm text-muted-foreground mb-4">Suivez-nous sur les réseaux</p>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-11 w-11 rounded-xl bg-secondary/50 border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-secondary hover:border-primary/50 transition-all duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon className="h-5 w-5" />
                    <span className="sr-only">{social.label}</span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Card className="bg-card/50 border-border backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Envoyez-nous un message</CardTitle>
                <CardDescription>
                  Remplissez le formulaire ci-dessous et nous vous recontacterons rapidement.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-foreground">
                      Nom complet
                    </label>
                    <Input
                      id="name"
                      placeholder="Votre nom"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="bg-secondary/50 border-border focus:border-primary"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-foreground">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="votre@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="bg-secondary/50 border-border focus:border-primary"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="projectType" className="text-sm font-medium text-foreground">
                      Type de projet
                    </label>
                    <select
                      id="projectType"
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full h-10 rounded-md bg-secondary/50 border border-border px-3 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                      required
                    >
                      <option value="">Sélectionnez un type de projet</option>
                      <option value="VFX & Post-production">VFX & Post-production</option>
                      <option value="Animation 2D/3D">Animation 2D/3D</option>
                      <option value="Infographie & Web Design">Infographie & Web Design</option>
                      <option value="Formation & Mentorat">Formation & Mentorat</option>
                      <option value="Autre">Autre</option>
                    </select>
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 text-primary-foreground"
                  >
                    <Send className="mr-2 h-4 w-4" />
                    Envoyer via WhatsApp
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
