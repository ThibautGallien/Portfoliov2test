'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Search, Calendar, User, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useTranslation } from '@/lib/translations'
import { getBlogPosts } from '@/lib/sanity'
import AnimatedSection from '@/components/AnimatedSection'

export default function BlogPage() {
  const router = useRouter()
  const { locale } = router
  const t = useTranslation(locale)
  
  const [posts, setPosts] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const postsData = await getBlogPosts(locale)
        setPosts(postsData)
      } catch (error) {
        console.error('Error fetching posts:', error)
      }
    }
    fetchPosts()
  }, [locale])

  // Mock data for demonstration
  const mockPosts = [
    {
      _id: '1',
      title: 'Les Tendances React 2024',
      slug: { current: 'tendances-react-2024' },
      excerpt: 'Découvrez les nouvelles fonctionnalités et bonnes pratiques React pour cette année.',
      publishedAt: '2024-01-15',
      category: 'dev',
      author: 'Portfolio'
    },
    {
      _id: '2',
      title: 'Copywriting : 10 Techniques de Persuasion',
      slug: { current: 'copywriting-techniques-persuasion' },
      excerpt: 'Les techniques psychologiques qui transforment vos textes en machines à convertir.',
      publishedAt: '2024-01-10',
      category: 'copy',
      author: 'Portfolio'
    },
    {
      _id: '3',
      title: 'Optimiser les Performances Web',
      slug: { current: 'optimiser-performances-web' },
      excerpt: 'Guide complet pour améliorer la vitesse et les performances de vos sites web.',
      publishedAt: '2024-01-05',
      category: 'dev',
      author: 'Portfolio'
    }
  ]

  const displayPosts = posts.length > 0 ? posts : mockPosts
  
  const categories = [
    { value: 'all', label: 'Tous les articles' },
    { value: 'dev', label: 'Développement' },
    { value: 'copy', label: 'Copywriting' }
  ]

  const filteredPosts = displayPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-4">{t.blog.title}</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Découvrez mes derniers articles sur le développement web, le copywriting et les tendances digitales
          </p>
        </motion.div>

        {/* Search & Filters */}
        <AnimatedSection className="mb-12">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder={t.blog.searchPlaceholder}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
              />
            </div>
            
            <div className="flex gap-2">
              {categories.map((category) => (
                <motion.button
                  key={category.value}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedCategory(category.value)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    selectedCategory === category.value
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-card border border-border hover:bg-accent'
                  }`}
                >
                  {category.label}
                </motion.button>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, index) => (
            <motion.article
              key={post._id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group bg-card rounded-xl border border-border overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              <div className="aspect-video bg-gradient-to-br from-primary/10 to-secondary/10 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center ${
                    post.category === 'dev' 
                      ? 'bg-primary/20 text-primary' 
                      : 'bg-secondary/20 text-secondary'
                  }`}>
                    {post.category === 'dev' ? '⚡' : '✍️'}
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {new Date(post.publishedAt).toLocaleDateString('fr-FR')}
                  </div>
                  <div className="flex items-center gap-1">
                    <User className="w-3 h-3" />
                    {post.author}
                  </div>
                </div>
                
                <h2 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h2>
                
                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <Link
                  href={`/blog/${post.slug?.current || post.slug}`}
                  className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:gap-2 transition-all"
                >
                  {t.common.readMore}
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Empty State */}
        {filteredPosts.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold mb-2">Aucun article trouvé</h3>
            <p className="text-muted-foreground">
              Essayez de modifier vos critères de recherche
            </p>
          </motion.div>
        )}

        {/* Newsletter CTA */}
        <AnimatedSection className="mt-20 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">
            Restez informé des dernières nouveautés
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Recevez mes derniers articles et conseils directement dans votre boîte mail
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Votre adresse email"
              className="flex-1 px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              S'abonner
            </motion.button>
          </div>
        </AnimatedSection>
      </div>
    </div>
  )
}