import { siteConfig } from '@/config'
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { getArticles } from '@/lib/articles'

export const metadata: Metadata = {
  title: `Resources | ${siteConfig.name}`,
  description: 'Helpful resources and articles for dental practices.',
}

export default async function Resources() {
  const articles = await getArticles()

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-3xl font-display font-bold tracking-tight text-gray-900 sm:text-4xl">
            Resources
          </h1>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Helpful articles and guides for dental practices.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {articles.map((article) => (
            <article key={article.slug} className="flex flex-col items-start">
              <div className="relative w-full">
                <Image
                  src={article.frontmatter.image}
                  alt={article.frontmatter.alt}
                  width={500}
                  height={300}
                  className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
              </div>
              <div className="max-w-xl">
                <div className="mt-8 flex items-center gap-x-4 text-xs">
                  <time dateTime={article.frontmatter.date} className="text-gray-500">
                    {new Date(article.frontmatter.date).toLocaleDateString('en-US', {
                      month: 'long',
                      day: 'numeric',
                      year: 'numeric',
                    })}
                  </time>
                  {article.frontmatter.tags.map((tag) => (
                    <span
                      key={tag}
                      className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <Link href={`/blog/${article.slug}`}>
                      <span className="absolute inset-0" />
                      {article.frontmatter.title}
                    </Link>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                    {article.frontmatter.description}
                  </p>
                </div>
                <div className="relative mt-8 flex items-center gap-x-4">
                  <Image
                    src={article.frontmatter.authorImage}
                    alt={article.frontmatter.author}
                    width={40}
                    height={40}
                    className="h-10 w-10 rounded-full bg-gray-100"
                  />
                  <div className="text-sm leading-6">
                    <p className="font-semibold text-gray-900">
                      {article.frontmatter.author}
                    </p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
} 