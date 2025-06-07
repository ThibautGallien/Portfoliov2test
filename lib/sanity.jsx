import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'your-project-id',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  useCdn: true,
  apiVersion: '2023-05-03',
})

const builder = imageUrlBuilder(client)

export function urlFor(source) {
  return builder.image(source)
}

// Helper functions for fetching data
export async function getProjects(type = 'dev') {
  return client.fetch(`
    *[_type == "project" && category == $type] | order(publishedAt desc) {
      _id,
      title,
      slug,
      description,
      image,
      technologies,
      githubUrl,
      liveUrl,
      publishedAt,
      category
    }
  `, { type })
}

export async function getBlogPosts(locale = 'fr') {
  return client.fetch(`
    *[_type == "post"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      excerpt,
      mainImage,
      publishedAt,
      category,
      "title_" + $locale: title,
      "excerpt_" + $locale: excerpt
    }
  `, { locale })
}

export async function getFaqs(category = 'dev', locale = 'fr') {
  return client.fetch(`
    *[_type == "faq" && category == $category] | order(order asc) {
      _id,
      question,
      answer,
      category,
      "question_" + $locale: question,
      "answer_" + $locale: answer
    }
  `, { category, locale })
}