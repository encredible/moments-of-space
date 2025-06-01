# No Rounded Images Rule

## Rule
- **Do not use any border-radius or Tailwind CSS `rounded-*` classes on images throughout the project.**
- All images must have sharp (square) corners unless there is a clear, explicit exception (e.g. profile avatars).

## Rationale
- Square-cornered images create a more modern, clean, and consistent look for this brand.
- Rounded corners may be used only for profile avatars or where specifically requested by the user.

## Example (Tailwind CSS)
- **Do this:**
  ```tsx
  <img src="..." className="w-full h-40 object-cover" />
  ```
- **Don't do this:**
  ```tsx
  <img src="..." className="w-full h-40 object-cover rounded-md" />
  ```

## Applies To
- All components and pages, especially service highlights, intro sections, project cards, etc.

## Exceptions
- Profile images (e.g. in designers page) may use `rounded-full` for circular avatars, if desired.

---
**Enforced as of 2025-06-01.**
