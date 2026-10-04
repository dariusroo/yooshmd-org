---
name: new-article
description: Start a new YooshMD blog article. Copies the article brief template to a new file and opens it in VS Code for Dr. Roohani to fill in, then drafts the article from the completed brief. Use when the user says "new article", "draft a new article", "start an article", or "/new-article".
---

# New YooshMD article

## 1. Create the brief

1. Get a short topic from the user's message or the skill arguments. If none was given, ask for one in a single short question.
2. Make a slug from the topic: lowercase, hyphens, no punctuation, at most about six words.
3. Copy `articles/briefs/_TEMPLATE.md` to `articles/briefs/<YYYY-MM-DD>-<slug>.md`, using today's date. If that file already exists, open the existing one instead of overwriting it.
4. Fill in only the **Working topic** line with the topic. Leave everything else for Dr. Roohani.
5. Open it in VS Code:

   ```bash
   open -a "Visual Studio Code" "articles/briefs/<file>.md"
   ```

6. Tell the user the file is open and to say "draft it" (or similar) when the brief is filled in. Then stop and wait.

Filled briefs are gitignored because the repo is public. Do not commit them unless the user asks.

## 2. Draft the article

When the user says the brief is ready:

1. Read `yooshmd-article-rules.md` at the project root in full, every time. Do not rely on memory of it.
2. Read the brief file in full.
3. Draft exactly as the rules require: sections A (article), B (SEO fields), C (physician review checklist), D (up to three optional extensions, suggested only).
4. Save the draft to `articles/drafts/<same-filename>.md` and open it in VS Code the same way.
5. In chat, give a short summary and the most important review checklist items. Do not paste the whole article into chat.

Site compliance also applies to article copy: check the project memory on drug brand names and compounded-medication disclaimers before using brand names.
