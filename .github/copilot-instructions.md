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