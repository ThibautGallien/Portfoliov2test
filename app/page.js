'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Code, PenTool, Sparkles } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useTranslation } from '@/lib/translations'
import AnimatedSection from '@/components/AnimatedSection'

export default function Home() {
  const router = useRouter()
  const { locale } = router
  const t = useTranslation(locale)

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Animation */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full mb-8"
            >
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">Portfolio 2024</span>
            </motion.div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
              {t.home.title}
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto">
              {t.home.subtitle}
            </p>
          </motion.div>

          {/* Choice Cards */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              whileHover={{ scale: 1.02 }}
              className="group"
            >
              <Link href="/dev">
                <div className="relative p-8 bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl border border-primary/20 hover:border-primary/40 transition-all duration-300 cursor-pointer">
                  <div className="flex items-center justify-center w-16 h-16 bg-primary/20 rounded-xl mb-6 mx-auto group-hover:bg-primary/30 transition-colors">
                    <Code className="w-8 h-8 text-primary" />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 text-primary">
                    {t.home.devChoice}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6">
                    {t.home.devDescription}
                  </p>
                  
                  <div className="flex items-center justify-center gap-2 text-primary font-medium group-hover:gap-3 transition-all">
                    Découvrir mes projets
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              whileHover={{ scale: 1.02 }}
              className="group"
            >
              <Link href="/copy">
                <div className="relative p-8 bg-gradient-to-br from-secondary/5 to-secondary/10 rounded-2xl border border-secondary/20 hover:border-secondary/40 transition-all duration-300 cursor-pointer">
                  <div className="flex items-center justify-center w-16 h-16 bg-secondary/20 rounded-xl mb-6 mx-auto group-hover:bg-secondary/30 transition-colors">
                    <PenTool className="w-8 h-8 text-secondary" />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 text-secondary">
                    {t.home.copyChoice}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6">
                    {t.home.copyDescription}
                  </p>
                  
                  <div className="flex items-center justify-center gap-2 text-secondary font-medium group-hover:gap-3 transition-all">
                    Voir mes réalisations
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="w-1 h-2 bg-muted-foreground rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Features Section */}
      <AnimatedSection className="py-20 bg-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Pourquoi me choisir ?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Une approche unique combinant expertise technique et créativité rédactionnelle
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Code,
                title: "Développement Expert",
                description: "Technologies modernes, code propre et performances optimales"
              },
              {
                icon: PenTool,
                title: "Copywriting Persuasif",
                description: "Contenus qui convertissent et engagent votre audience"
              },
              {
                icon: Sparkles,
                title: "Approche Créative",
                description: "Solutions uniques adaptées à vos objectifs business"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="text-center group"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-xl mb-6 mx-auto group-hover:scale-110 transition-transform">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </div>
  )
}