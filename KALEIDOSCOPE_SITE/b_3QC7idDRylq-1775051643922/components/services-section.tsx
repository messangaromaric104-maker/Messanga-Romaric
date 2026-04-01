"use client"

import { motion } from "framer-motion"
import { Sparkles, Film, Palette, GraduationCap, ArrowRight } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const services = [
  {
    icon: Film,
    title: "VFX & Post-production",
    description:
      "Compositing avancé, Motion Tracking, effets spéciaux visuels et intégration 3D pour donner vie à vos projets cinématographiques.",
    features: ["Compositing", "Motion Tracking", "Color Grading", "Rotoscopie"],
    gradient: "from-primary to-primary/50",
  },
  {
    icon: Sparkles,
    title: "Animation 2D/3D",
    description:
      "Rigging vectoriel, Stylised Rendering, animation de personnages et motion design pour des créations uniques et mémorables.",
    features: ["Rigging vectoriel", "Stylised Rendering", "Character Animation", "Motion Design"],
    gradient: "from-accent to-accent/50",
  },
  {
    icon: Palette,
    title: "Infographie & Web Design",
    description:
      "Création d&apos;identités visuelles, interfaces utilisateur modernes et designs graphiques qui captivent et convertissent.",
    features: ["Identité visuelle", "UI/UX Design", "Branding", "Print Design"],
    gradient: "from-gold to-gold/50",
  },
  {
    icon: GraduationCap,
    title: "Formation & Mentorat",
    description:
      "Cours personnalisés en infographie et animation pour développer vos compétences créatives et atteindre vos objectifs professionnels.",
    features: ["Cours personnalisés", "Workshops", "Mentorat individuel", "Certifications"],
    gradient: "from-primary via-accent to-gold",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
}

export function ServicesSection() {
  return (
    <section id="services" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block rounded-full border border-border bg-secondary/50 px-4 py-1.5 text-sm text-muted-foreground mb-4">
            Nos Expertises
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4 text-balance">
            Des services créatifs{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-gold bg-clip-text text-transparent">
              sur mesure
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground text-pretty">
            De la conception à la réalisation, nous vous accompagnons dans tous vos projets
            audiovisuels avec passion et expertise.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {services.map((service) => (
            <motion.div key={service.title} variants={itemVariants}>
              <Card className="group relative h-full bg-card/50 border-border backdrop-blur-sm overflow-hidden hover:border-primary/50 transition-all duration-500">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                />
                <CardHeader>
                  <div
                    className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${service.gradient} transition-transform duration-300 group-hover:scale-110`}
                  >
                    <service.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <ArrowRight className="h-3 w-3 text-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
