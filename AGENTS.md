<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Architecture rules
- All projects live in `src/data/projects.ts` and are read only through `src/lib/projects.ts` selectors — one record controls a project everywhere, so the data layer can move to a database/CMS without UI changes.
- Only `status: "published"` projects are ever exposed; selectors enforce it so hidden/archived work never leaks into pages, filters or prev/next.
