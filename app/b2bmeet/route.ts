// Redirects to the B2B meeting booking page. Done here rather than in
// next.config.ts redirects so the response can carry a noindex header.
export function GET() {
  return new Response(null, {
    status: 307,
    headers: {
      Location: "https://calendar.app.google/ct8jjtjN52Wo6z976",
      "X-Robots-Tag": "noindex, nofollow",
    },
  });
}
