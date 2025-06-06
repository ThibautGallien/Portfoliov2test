'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, Check } from 'lucide-react'
import { useRouter } from 'next/router'
import { useTranslation } from '@/lib/translations'
import AnimatedSection from '@/components/AnimatedSection'

export default function ContactPage() {
  const router = useRouter()
  const { locale } = router
  const t = useTranslation(locale)
  
  const [formData, setFormData] = useState({
    serviceType: '',
    projectType: '',
    budget: '',
    timeline: '',
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  
  const [isSubmitted, setIsSubmitted] = useState(false)

  const serviceTypes = [
    { value: 'dev', label: 'Développement Web' },
    { value: 'copy', label: 'Copywriting' },
    { value: 'both', label: 'Développement + Copywriting' }
  ]

  const projectTypes = {
    dev: [
      { value: 'website', label: 'Site vitrine' },
      { value: 'ecommerce', label: 'E-commerce' },
      { value: 'webapp', label: 'Application web' },
      { value: 'mobile', label: 'Application mobile' }
    ],
    copy: [
      { value: 'landing', label: 'Page de vente' },
      { value: 'email', label: 'Séquence email' },
      { value: 'blog', label: 'Articles de blog' },
      { value: 'social', label: 'Contenu réseaux sociaux' }
    ]
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true)
    }, 1000)
  }

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="text-center max-w-md mx-auto px-4"
        >
          <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-2xl font-bold mb-4">Demande envoyée !</h2>
          <p className="text-muted-foreground mb-6">
            Merci pour votre demande de devis. Je vous recontacterai dans les 24h avec une proposition personnalisée.
          </p>
          <button
            onClick={() => setIsSubmitted(false)}
            className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
          >
            Nouvelle demande
          </button>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-4">{t.contact.title}</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Remplissez ce formulaire pour recevoir un devis personnalisé adapté à vos besoins
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <motion.form
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              onSubmit={handleSubmit}
              className="bg-card rounded-xl p-8 border border-border space-y-6"
            >
              {/* Service Type */}
              <div>
                <label className="block text-sm font-medium mb-3">
                  {t.contact.serviceType} *
                </label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {serviceTypes.map((service) => (
                    <motion.button
                      key={service.value}
                      type="button"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleInputChange('serviceType', service.value)}
                      className={`p-3 rounded-lg border text-sm font-medium transition-all ${
                        formData.serviceType === service.value
                          ? 'border-primary bg-primary/10 text-primary'
                          : 'border-border hover:border-primary/50'
                      }`}
                    >
                      {service.label}
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Project Type - Dynamic based on service */}
              {formData.serviceType && formData.serviceType !== 'both' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <label className="block text-sm font-medium mb-3">
                    Type de projet *
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {projectTypes[formData.serviceType]?.map((project) => (
                      <motion.button
                        key={project.value}
                        type="button"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => handleInputChange('projectType', project.value)}
                        className={`p-3 rounded-lg border text-sm font-medium transition-all ${
                          formData.projectType === project.value
                            ? 'border-primary bg-primary/10 text-primary'
                            : 'border-border hover:border-primary/50'
                        }`}
                      >
                        {project.label}
                      </motion.button>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Budget */}
              <div>
                <label className="block text-sm font-medium mb-3">
                  Budget approximatif
                </label>
                <select
                  value={formData.budget}
                  onChange={(e) => handleInputChange('budget', e.target.value)}
                  className="w-full p-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                >
                  <option value="">Sélectionnez votre budget</option>
                  <option value="1000">Moins de 1 000€</option>
                  <option value="5000">1 000€ - 5 000€</option>
                  <option value="10000">5 000€ - 10 000€</option>
                  <option value="plus">Plus de 10 000€</option>
                </select>
              </div>

              {/* Timeline */}
              <div>
                <label className="block text-sm font-medium mb-3">
                  Délai souhaité
                </label>
                <select
                  value={formData.timeline}
                  onChange={(e) => handleInputChange('timeline', e.target.value)}
                  className="w-full p-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                >
                  <option value="">Sélectionnez un délai</option>
                  <option value="urgent">Urgent (moins de 2 semaines)</option>
                  <option value="normal">Normal (1-2 mois)</option>
                  <option value="flexible">Flexible (plus de 2 mois)</option>
                </select>
              </div>

              {/* Personal Info */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Prénom *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className="w-full p-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className="w-full p-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="w-full p-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Décrivez votre projet
                </label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  placeholder="Parlez-moi de vos objectifs, contraintes particulières, références qui vous inspirent..."
                  className="w-full p-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary resize-none"
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={!formData.name || !formData.email || !formData.serviceType}
                className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="w-4 h-4" />
                {t.contact.generateQuote}
              </motion.button>
            </motion.form>
          </div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-8"
          >
            <div className="bg-card rounded-xl p-6 border border-border">
              <h3 className="text-xl font-semibold mb-6">{t.contact.additionalInfo}</h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium">Email</div>
                    <div className="text-sm text-muted-foreground">contact@portfolio.com</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center">
                    <Phone className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <div className="font-medium">Téléphone</div>
                    <div className="text-sm text-muted-foreground">+33 1 23 45 67 89</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <div className="font-medium">Localisation</div>
                    <div className="text-sm text-muted-foreground">Paris, France</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl p-6 border border-border">
              <h4 className="font-semibold mb-3">Temps de réponse</h4>
              <p className="text-sm text-muted-foreground mb-4">
                Je m'engage à vous répondre dans les 24h avec un pré-devis détaillé.
              </p>
              
              <h4 className="font-semibold mb-3">Première consultation</h4>
              <p className="text-sm text-muted-foreground">
                Appel de 30 minutes offert pour discuter de votre projet et affiner vos besoins.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}