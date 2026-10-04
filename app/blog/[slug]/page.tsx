import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { formatDate, getAllPosts, getPost } from "../lib/posts";

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: "Article not found" };

  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    // Unreviewed drafts stay out of search results.
    robots: post.draft ? { index: false, follow: false } : undefined,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <article className="max-w-3xl mx-auto px-5 sm:px-8 py-12 sm:py-16">
      <Link
        href="/blog"
        className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors"
      >
        ← All articles
      </Link>

      {post.draft && (
        <p className="mt-6 rounded-lg border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900">
          Draft. Not yet medically reviewed or published.
        </p>
      )}

      <h1 className="mt-6 text-3xl sm:text-4xl font-bold text-gray-900 leading-tight tracking-tight">
        {post.title}
      </h1>
      {post.subtitle && (
        <p className="mt-4 text-lg text-gray-600 leading-relaxed">{post.subtitle}</p>
      )}

      <div className="mt-6 pb-8 border-b border-gray-100 text-sm text-gray-500">
        {post.author && <p className="font-medium text-gray-900">By {post.author}</p>}
        {post.credentials.map((line) => (
          <p key={line} className="mt-0.5">
            {line}
          </p>
        ))}
        {post.date && <p className="mt-3">{formatDate(post.date)}</p>}
      </div>

      <div className="article-content mt-10">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.body}</ReactMarkdown>
      </div>
    </article>
  );
}
