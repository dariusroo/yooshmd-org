import Link from "next/link";
import { formatDate, getAllPosts } from "./lib/posts";

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <div className="max-w-3xl mx-auto px-5 sm:px-8 py-16 sm:py-20">
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight tracking-tight">
        Blog
      </h1>
      <p className="mt-3 text-gray-600">
        Physician-written articles on GLP-1 medications and weight-loss care.
      </p>

      {posts.length === 0 ? (
        <p className="mt-12 text-sm text-gray-500">No articles yet.</p>
      ) : (
        <ul className="mt-12 divide-y divide-gray-100">
          {posts.map((post) => (
            <li key={post.slug} className="py-8 first:pt-0">
              <Link href={`/blog/${post.slug}`} className="group block">
                <h2 className="text-xl font-semibold text-gray-900 group-hover:text-[var(--green-deep)] transition-colors">
                  {post.title}
                </h2>
                {post.subtitle && (
                  <p className="mt-2 text-gray-600 leading-relaxed">{post.subtitle}</p>
                )}
                <p className="mt-3 text-sm text-gray-400">
                  {[post.author, formatDate(post.date)].filter(Boolean).join(" · ")}
                  {post.draft && (
                    <span className="ml-2 rounded bg-amber-100 px-1.5 py-0.5 text-xs font-medium text-amber-800">
                      Draft
                    </span>
                  )}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
