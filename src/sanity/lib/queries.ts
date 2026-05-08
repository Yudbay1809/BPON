import { groq } from 'next-sanity'

export const articlesQuery = groq`*[_type == "article"] | order(publishedAt desc) {
  _id,
  "title": title[$locale],
  "slug": slug.current,
  "excerpt": excerpt[$locale],
  "mainImage": mainImage,
  "categories": categories[]->{
    "title": title[$locale]
  },
  publishedAt,
  author
}`

export const articleBySlugQuery = groq`*[_type == "article" && slug.current == $slug][0] {
  _id,
  "title": title[$locale],
  "slug": slug.current,
  "excerpt": excerpt[$locale],
  "body": body[$locale],
  "mainImage": mainImage,
  "categories": categories[]->{
    "title": title[$locale]
  },
  publishedAt,
  author
}`

export const productsQuery = groq`*[_type == "product"] | order(featured desc, _createdAt desc) {
  _id,
  "name": name[$locale],
  "slug": slug.current,
  "description": description[$locale],
  "mainImage": mainImage,
  "categories": categories[]->{
    "title": title[$locale]
  },
  featured
}`

export const productBySlugQuery = groq`*[_type == "product" && slug.current == $slug][0] {
  _id,
  "name": name[$locale],
  "slug": slug.current,
  "description": description[$locale],
  "specifications": specifications[$locale],
  "mainImage": mainImage,
  "gallery": gallery,
  "categories": categories[]->{
    "title": title[$locale]
  },
  "pdfCatalog": pdfCatalog.asset->url
}`

export const siteSettingsQuery = groq`*[_type == "siteSettings"][0] {
  "title": title[$locale],
  "description": description[$locale],
  keywords,
  "ogImage": ogImage.asset->url
}`
