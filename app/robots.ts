import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: "/refer" },

      // AI search / citation bots — allowed. These fetch pages live to
      // answer user questions and cite back with a link.
      { userAgent: "OAI-SearchBot", allow: "/" },
      { userAgent: "ChatGPT-User", allow: "/" },
      { userAgent: "Claude-SearchBot", allow: "/" },
      { userAgent: "Claude-User", allow: "/" },
      { userAgent: "PerplexityBot", allow: "/" },
      { userAgent: "Perplexity-User", allow: "/" },

      // AI training bots — blocked. These scrape content in bulk to
      // train foundation models, with no attribution or link back.
      { userAgent: "GPTBot", disallow: "/" },
      { userAgent: "ClaudeBot", disallow: "/" },
      { userAgent: "anthropic-ai", disallow: "/" },
      { userAgent: "Google-Extended", disallow: "/" },
      { userAgent: "Applebot-Extended", disallow: "/" },
      { userAgent: "Meta-ExternalAgent", disallow: "/" },
      { userAgent: "CCBot", disallow: "/" },
      { userAgent: "Bytespider", disallow: "/" },
      { userAgent: "cohere-ai", disallow: "/" },
      { userAgent: "Diffbot", disallow: "/" },
      { userAgent: "Omgili", disallow: "/" },
      { userAgent: "Omgilibot", disallow: "/" },
      { userAgent: "img2dataset", disallow: "/" },
    ],
    sitemap: "https://www.yooshmd.com/sitemap.xml",
  };
}
