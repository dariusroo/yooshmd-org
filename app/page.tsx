import HomePage from "./HomePage";
import { getAllPosts } from "./blog/lib/posts";

export default function Page() {
  // Newest published post; refreshes on each deploy when content/blog changes.
  const latest = getAllPosts().find((post) => !post.draft);

  return (
    <HomePage
      latestPost={
        latest && { slug: latest.slug, title: latest.title, subtitle: latest.subtitle }
      }
    />
  );
}
