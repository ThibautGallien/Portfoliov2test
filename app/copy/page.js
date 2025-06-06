'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { PenTool, Mail, BookOpen, Target, Users } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useTranslation } from '@/lib/translations'
import { getProjects, getFaqs } from '@/lib/sanity'
import AnimatedSection from '@/components/AnimatedSection'
import ProjectCard from '@/components/ProjectCard'
import FAQSection from '@/components/FAQSection'

export default function CopyPage() {
  const router = useRouter()
  const { locale } = router
  const t = useTranslation(locale)
  const [projects, setProjects] = useState([])
  const [faqs, setFaqs] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [projectsData, faqsData] = await Promise.all([
          getProjects('copy'),
          getFaqs('copy', locale)
        ])
        setProjects(projectsData)
        setFaqs(faqsData)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }
    fetchData()
  }, [locale])

  // Mock data for demonstration
  const mockProjects = [
    {
      _id: '1',
      title: 'Campagne Email Marketing',
      description: 'Séquence de 5 emails pour le lancement d\'un produit SaaS - Taux d\'ouverture 45%',
      technologies: ['Email Marketing', 'Copywriting', 'A/B Testing'],
      liveUrl: '#',
      image: null
    },
    {
      _id: '2',
      title: 'Pages de Vente High-Convert',
      description: 'Landing pages optimisées pour la conversion - Augmentation de 180% des ventes',
      technologies: ['Landing Pages', 'CRO', 'Psychologie', 'Neuromarketing'],
      liveUrl: '#',
      image: null
    },
    {
      _id: '3',
      title: 'Contenu Blog SEO',
      description: 'Articles de blog optimisés SEO pour un site e-commerce - +300% trafic organique',
      technologies: ['SEO', 'Content Marketing', 'Recherche mots-clés'],
      liveUrl: '#',
      image: null
    }
  ]

  const mockFaqs = [
    {
      _id: '1',
      question: 'Quelle est votre approche pour le copywriting ?',
      answer: 'Mon approche combine recherche approfondie de votre audience, psychologie comportementale, et techniques de persuasion éprouvées pour créer des contenus qui convertissent.'
    },
    {
      _id: '2',
      question: 'Quels sont vos tarifs pour la rédaction ?',
      answer: 'Mes tarifs varient selon le type de projet : pages de vente (800-2000€), emails (150-300€), articles de blog (200-500€). Je propose toujours un devis personnalisé.'
    },
    {
      _id: '3',
      question: 'Combien de temps pour livrer un projet ?',
      answer: 'Les délais dépendent de la complexité : 3-5 jours pour un email, 1-2 semaines pour une page de vente, 5-7 jours pour un article de blog long format.'
    }
  ]

  const displayProjects = projects.length > 0 ? projects : mockProjects
  const displayFaqs = faqs.length > 0 ? faqs : mockFaqs

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-transparent to-primary/5" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 rounded-full mb-6">
                <PenTool className="w-4 h-4 text-secondary" />
                <span className="text-sm font-medium text-secondary">Copywriter Expert</span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                {t.copy.title}
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Spécialisé dans la création de contenus persuasifs qui convertissent vos visiteurs 
                en clients fidèles grâce à des techniques de copywriting éprouvées.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-secondary text-white rounded-lg font-medium hover:bg-secondary/90 transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    {t.copy.cta}
                  </Link>
                </motion.div>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-6 py-3 border border-border rounded-lg font-medium hover:bg-accent transition-colors"
                >
                  <BookOpen className="w-4 h-4" />
                  Voir mes réalisations
                </motion.button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative bg-card rounded-2xl p-8 border border-border">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center">
                      <Target className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Conversion Rate</h3>
                      <p className="text-sm text-muted-foreground">+250% en moyenne</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                      <Users className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Clients Satisfaits</h3>
                      <p className="text-sm text-muted-foreground">100+ projets réussis</p>
                    </div>
                  </div>
                  
                  <div className="border-t border-border pt-4">
                    <blockquote className="italic text-muted-foreground">
                      "Les mots qui vendent, les histoires qui marquent"
                    </blockquote>
                  </div>
                </div>
                
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-secondary to-primary rounded-full animate-bounce-subtle" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <AnimatedSection className="py-20 bg-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Mes Services Copywriting</h2>
            <p className="text-xl text-muted-foreground">
              Des solutions complètes pour tous vos besoins rédactionnels
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: 'Pages de Vente',
                description: 'Landing pages optimisées pour maximiser vos conversions',
                features: ['Structure AIDA', 'Call-to-action puissants', 'Tests A/B']
              },
              {
                icon: Mail,
                title: 'Email Marketing',
                description: 'Séquences d\'emails qui engagent et convertissent',
                features: ['Séquences automatisées', 'Personnalisation', 'Optimisation taux ouverture']
              },
              {
                icon: BookOpen,
                title: 'Contenu Blog SEO',
                description: 'Articles optimisés pour le référencement naturel',
                features: ['Recherche mots-clés', 'Optimisation SEO', 'Contenu de qualité']
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-card rounded-xl p-6 border border-border hover:shadow-lg transition-all duration-300 group"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-secondary/20 to-primary/20 rounded-lg mb-4 group-hover:scale-110 transition-transform">
                  <service.icon className="w-6 h-6 text-secondary" />
                </div>
                
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-secondary rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Portfolio Section */}
      <AnimatedSection className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">{t.copy.portfolio}</h2>
            <p className="text-xl text-muted-foreground">
              Découvrez mes réalisations récentes et leurs résultats
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayProjects.map((project, index) => (
              <ProjectCard key={project._id} project={project} index={index} />
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Testimonials Section */}
      <AnimatedSection className="py-20 bg-accent/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Ce que disent mes clients</h2>
            <p className="text-xl text-muted-foreground">
              Leurs témoignages parlent d'eux-mêmes
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                name: 'Sophie Martin',
                role: 'Directrice Marketing, TechStart',
                content: 'Les textes créés ont augmenté notre taux de conversion de 180%. Un travail exceptionnel !',
                rating: 5
              },
              {
                name: 'Alexandre Dubois',
                role: 'CEO, E-commerce Plus',
                content: 'Approche professionnelle et résultats au rendez-vous. Je recommande vivement.',
                rating: 5
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-card rounded-xl p-6 border border-border"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <div key={i} className="w-4 h-4 bg-yellow-400 rounded-full" />
                  ))}
                </div>
                <blockquote className="text-lg mb-4">"{testimonial.content}"</blockquote>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* FAQ Section */}
      <FAQSection faqs={displayFaqs} title={t.copy.faq} />

      {/* CTA Section */}
      <AnimatedSection className="py-20 bg-gradient-to-r from-secondary/10 to-primary/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Prêt à booster vos conversions ?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Créons ensemble des contenus qui transforment vos visiteurs en clients
          </p>
          
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-secondary text-white rounded-lg font-medium text-lg hover:bg-secondary/90 transition-colors"
            >
              <Mail className="w-5 h-5" />
              {t.copy.finalCta}
            </Link>
          </motion.div>
        </div>
      </AnimatedSection>
    </div>
  )
}