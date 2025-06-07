"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Code, Download, Mail } from "lucide-react";
import Link from "next/link";
import { useTranslation } from "@/lib/translations";
import { getProjects, getFaqs } from "@/lib/sanity";
import AnimatedSection from "@/components/AnimatedSection";
import ProjectCard from "@/components/ProjectCard";
import FAQSection from "@/components/FAQSection";

export default function DevPage() {
  // Locale en dur pour l'instant
  const locale = "fr";
  const t = useTranslation(locale);
  const [projects, setProjects] = useState([]);
  const [faqs, setFaqs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [projectsData, faqsData] = await Promise.all([
          getProjects("dev"),
          getFaqs("dev", locale),
        ]);
        setProjects(projectsData);
        setFaqs(faqsData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [locale]);

  // Mock data for demonstration
  const mockProjects = [
    {
      _id: "1",
      title: "E-commerce React",
      description:
        "Application e-commerce complète avec panier, paiement et gestion admin",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      liveUrl: "#",
      githubUrl: "#",
      image: null,
    },
    {
      _id: "2",
      title: "Dashboard Analytics",
      description:
        "Tableau de bord interactif pour visualiser les données business",
      technologies: ["Next.js", "Chart.js", "Tailwind CSS", "API REST"],
      liveUrl: "#",
      githubUrl: "#",
      image: null,
    },
    {
      _id: "3",
      title: "App Mobile React Native",
      description:
        "Application mobile cross-platform pour la gestion de tâches",
      technologies: ["React Native", "Expo", "Firebase", "Redux"],
      liveUrl: "#",
      githubUrl: "#",
      image: null,
    },
  ];

  const mockFaqs = [
    {
      _id: "1",
      question: "Quels langages et frameworks maîtrisez-vous ?",
      answer:
        "Je maîtrise JavaScript/TypeScript, React, Next.js, Node.js, Python, et les technologies web modernes comme Tailwind CSS, Framer Motion, et les bases de données SQL/NoSQL.",
    },
    {
      _id: "2",
      question: "Combien de temps pour développer un site vitrine ?",
      answer:
        "Un site vitrine classique prend généralement 2-3 semaines, incluant design, développement, tests et optimisations SEO. Le délai peut varier selon la complexité.",
    },
    {
      _id: "3",
      question: "Proposez-vous de la maintenance après livraison ?",
      answer:
        "Oui, je propose des contrats de maintenance incluant mises à jour de sécurité, optimisations performances, et support technique continu.",
    },
  ];

  const displayProjects = projects.length > 0 ? projects : mockProjects;
  const displayFaqs = faqs.length > 0 ? faqs : mockFaqs;

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
                <Code className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">
                  Développeur Full-Stack
                </span>
              </div>

              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                {t.dev.title}
              </h1>

              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Passionné par les technologies modernes, je crée des
                applications web performantes et des expériences utilisateur
                exceptionnelles.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    {t.dev.cta}
                  </Link>
                </motion.div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-6 py-3 border border-border rounded-lg font-medium hover:bg-accent transition-colors"
                >
                  <Download className="w-4 h-4" />
                  Télécharger CV
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
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-red-500 rounded-full" />
                    <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                    <div className="w-3 h-3 bg-green-500 rounded-full" />
                  </div>

                  <div className="space-y-2 font-mono text-sm">
                    <div className="text-blue-400">const</div>
                    <div className="text-yellow-400">developer = {`{`}</div>
                    <div className="pl-4 text-green-400">
                      name: "Portfolio",
                    </div>
                    <div className="pl-4 text-green-400">
                      skills: ["React", "Next.js"],
                    </div>
                    <div className="pl-4 text-green-400">
                      passion: "Code & Innovation"
                    </div>
                    <div className="text-yellow-400">{`}`}</div>
                  </div>
                </div>

                <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-full animate-bounce-subtle" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <AnimatedSection className="py-20 bg-accent/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8">{t.dev.about}</h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Développeur web full-stack avec plus de 5 ans d'expérience, je me
            spécialise dans la création d'applications React modernes et
            performantes. Mon approche combine excellence technique, design
            élégant et optimisation pour les moteurs de recherche.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { skill: "React/Next.js", level: "95%" },
              { skill: "JavaScript", level: "90%" },
              { skill: "Node.js", level: "85%" },
              { skill: "UI/UX Design", level: "80%" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">{item.level}</span>
                </div>
                <h3 className="font-medium">{item.skill}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Portfolio Section */}
      <AnimatedSection className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">{t.dev.portfolio}</h2>
            <p className="text-xl text-muted-foreground">
              Découvrez quelques-uns de mes projets récents
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayProjects.map((project, index) => (
              <ProjectCard key={project._id} project={project} index={index} />
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* FAQ Section */}
      <FAQSection faqs={displayFaqs} title={t.dev.faq} />

      {/* CTA Section */}
      <AnimatedSection className="py-20 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Prêt à démarrer votre projet ?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Discutons de vos besoins et créons ensemble une solution sur mesure
          </p>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg font-medium text-lg hover:bg-primary/90 transition-colors"
            >
              <Mail className="w-5 h-5" />
              {t.dev.finalCta}
            </Link>
          </motion.div>
        </div>
      </AnimatedSection>
    </div>
  );
}
