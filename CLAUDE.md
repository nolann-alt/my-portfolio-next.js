# Conventions de Code pour ce Portfolio

## Commentaires

### Composants React (JSDoc)

**Toujours commenter :**
- En-tête de composant avec description brève
- Props des composants avec `@interface` ou `@type`
- Fonctions exportées importantes (pages, composants principaux)

**Ne pas surcharger :**
- Pas de JSDoc sur chaque fonction interne
- Pas de commentaires sur les hooks simples (`useState`, `useEffect` évidents)
- Pas de commentaires "This is a useEffect" ou "This returns JSX"

**Exemple de format :**
```tsx
/**
 * ProjectHero - Section Hero d'une page de projet
 *
 * Contient: image, titre avec étoiles, navigation Back/Home/Next
 * Animations GSAP à l'apparition
 */

interface ProjectHeroProps {
  project: { image: string; title: string };
  nextProject: { slug: string; title: string } | null;
  previousProject: { slug: string; title: string } | null;
}
```

### Commentaires de compréhension

**Ajouter quand nécessaire :**
- Logique complexe ou algorithmique non évidente
- Workarounds ou solutions alternatives
- Razons d'un choix technique (ex: "mix-blend-difference pour contraste")
- Animations GSAP (décrire ce qui est animate, pas comment)

**Ne pas ajouter :**
- Traduction littérale du code en français
- Commentaires redondants avec le nom des variables
- TODO ou FIXME sauf si vraiment nécessaire

### Structure recommandée

```tsx
/** En-tête:JSDoc (1-2 lignes) **/

// Section logique (pour les longs composants)
// - optional comment for key logic

// Pour GSAP/animations: describe WHAT animates, not HOW
// Ex: "Titre grossit depuis petite taille" (pas les détails techniques)
```

## TypeScript

- Prefer `interface` over `type` for props
- Use explicit return types for async server components

## GSAP Animations

- Use `gsap.context()` pour le cleanup automatique
- Keep animations simple: reveal, scale, translate, rotate
- Add `ease: "power3.out"` as default

## Import Order

1. Next.js (Image, Link)
2. React hooks
3. External libs (lucide-react, gsap)
4. Internal (@/components, @/data)

## Naming

- Components: PascalCase (ProjectHero)
- Functions/variables: camelCase
- Refs: suffix with Ref (containerRef, imageRef)