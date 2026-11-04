# Commit Messages

Use the [Conventional Commits](https://www.conventionalcommits.org/) format for every commit:

```text
<type>[optional scope][!]: <description>
```

- Choose a clear type, such as `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `build`, `ci`, `chore`, or `revert`.
- Keep the description concise, specific, and in the imperative mood; omit the trailing period.
- Add an optional scope to identify the affected area, for example `fix(auth): handle expired tokens`.
- Use `!` after the type or scope for a breaking change, and explain it in the body or a `BREAKING CHANGE:` footer.
- Add a body when useful to explain the motivation or context. Use footers for breaking changes and issue references.
- Keep each commit focused on a single logical change.

# Commit Guidelines

Never create a git commit without asking me first and receiving explicit approval. “Prepare commit” means prepare the changes for review, not commit them.
Always wait for my confirmation before finalizing any commit.

# Test Tag Guidelines

- This project uses the Playwright Test framework (`@playwright/test`).
- When creating tests, review [`playwright.config.ts`](../playwright.config.ts) and follow its test directory, timeout, reporter, browser project, and other test settings.
- When creating or updating tests, use the tags defined in [`TEST_PLAN.md`](../TEST_PLAN.md) and apply tags that match the behavior being tested.
- Keep `TEST_PLAN.md` in sync with the test suite: update its scenarios and tag assignments whenever tests or supported test tags change. Do not introduce a new tag without documenting it there.
