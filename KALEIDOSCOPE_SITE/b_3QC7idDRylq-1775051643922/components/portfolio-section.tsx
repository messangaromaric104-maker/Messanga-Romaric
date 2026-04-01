"use client"

import { motion } from "framer-motion"
import { Play, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const projects = [
  {
    id: 1,
    title: "Showreel 2024",
    category: "VFX & Animation",
    description: "Notre compilation des meilleurs projets de l&apos;année",
    image: "/images/showreel.jpg",
    isVideo: true,
    size: "large",
  },
  {
    id: 2,
    title: "Brand Identity",
    category: "Infographie",
    description: "Création d&apos;identité visuelle pour startup tech",
    image: "/images/brand.jpg",
    isVideo: false,
    size: "medium",
  },
  {
    id: 3,
    title: "Animation 3D",
    category: "Animation",
    description: "Personnage stylisé pour publicité",
    image: "/images/animation-3d.jpg",
    isVideo: false,
    size: "medium",
  },
  {
    id: 4,
    title: "Motion Design",
    category: "Animation 2D",
    description: "Animation de logo et transitions",
    image: "/images/motion.jpg",
    isVideo: true,
    size: "small",
  },
  {
    id: 5,
    title: "VFX Integration",
    category: "Post-production",
    description: "Effets spéciaux pour court-métrage",
    image: "/images/vfx.jpg",
    isVideo: false,
    size: "small",
  },
  {
    id: 6,
    title: "Web Design",
    category: "UI/UX",
    description: "Interface moderne pour application mobile",
    image: "/images/webdesign.jpg",
    isVideo: false,
    size: "small",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
}

export function PortfolioSection() {
  return (
    <section id="portfolio" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/20 via-background to-secondary/20" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block rounded-full border border-border bg-secondary/50 px-4 py-1.5 text-sm text-muted-foreground mb-4">
            Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4 text-balance">
            Nos{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-gold bg-clip-text text-transparent">
              réalisations
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground text-pretty">
            Découvrez une sélection de nos projets les plus marquants en VFX, animation et design.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px] md:auto-rows-[250px]"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className={`group relative overflow-hidden rounded-xl border border-border bg-card cursor-pointer ${
                project.size === "large"
                  ? "col-span-2 row-span-2"
                  : project.size === "medium"
                  ? "col-span-2 md:col-span-1 row-span-1"
                  : "col-span-1 row-span-1"
              }`}
            >
              {/* Project image */}
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Content */}
              <div className="absolute inset-0 p-4 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-xs font-medium text-primary mb-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {project.category}
                </span>
                <h3 className="text-lg font-semibold text-foreground mb-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 line-clamp-2">
                  {project.description}
                </p>
              </div>

              {/* Play button for videos */}
              {project.isVideo && (
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="h-14 w-14 rounded-full bg-primary/90 flex items-center justify-center backdrop-blur-sm">
                    <Play className="h-6 w-6 text-primary-foreground fill-current ml-1" />
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Button
            variant="outline"
            size="lg"
            className="border-border hover:bg-secondary/50"
          >
            Voir tous les projets
            <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
