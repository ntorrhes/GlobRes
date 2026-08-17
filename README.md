# Ticket Studio

Ticket Studio is a front-end application for creating and previewing customizable event tickets in real time.

The project was built with **React, TypeScript, Vite, and SCSS**, with a focus on component architecture, type safety, maintainability, responsive behavior, and visual fidelity to the provided design.

> For additional context about the technical exercise, implementation decisions, and API limitations, see [NOTES.md](./NOTES.md).

---

## Features

- Live ticket preview
- Event and ticket holder customization
- Date selection
- Ticket tier selection
- Multiple visual themes
- Custom accent colors
- Custom SVG marks
- Theme-aware ticket styling
- Form validation
- Loading, success, and error states
- Ticket ID generation
- Share-link generation
- Copy-to-clipboard interaction
- Responsive layout

---

## Tech Stack

- **React 19**
- **TypeScript**
- **Vite**
- **SCSS / Sass**
- **ESLint**

No utility-first CSS framework is used. Styling is implemented with SCSS using component-oriented class naming and CSS custom properties where dynamic theme values are required.

---

## Getting Started

### Prerequisites

Make sure you have a recent version of Node.js installed.

Node.js 18+ is recommended.

### Installation

Clone the repository and install the dependencies:

```bash
npm install
```

### Development

Start the Vite development server:

```bash
npm run dev
```

The application will usually be available at:

```text
http://localhost:5173
```

### Production Build

Create an optimized production build:

```bash
npm run build
```

### Preview Production Build

Preview the generated production build locally:

```bash
npm run preview
```

### Lint

Run ESLint:

```bash
npm run lint
```

---

## Project Structure

The application is organized by responsibility rather than keeping the entire implementation inside a single component.

```text
src/
├── assets/
│   ├── midnight.svg
│   ├── mono.svg
│   ├── moon.svg
│   ├── note.svg
│   ├── sparkle.svg
│   ├── star.svg
│   └── sunrise.svg
│
├── components/
│   ├── Field.tsx
│   ├── SaveFooter.tsx
│   ├── TicketForm.tsx
│   └── TicketPreview.tsx
│
├── constants/
│   └── ticket.ts
│
├── styles/
│   └── ...
│
├── types/
│   └── ticket.ts
│
├── App.tsx
└── main.tsx
```

### Main responsibilities

**`TicketForm`**  
Handles the ticket customization interface and exposes user interactions through typed callback props.

**`TicketPreview`**  
Renders the current ticket configuration and applies the selected theme, accent, mark, tier, and ticket information.

**`SaveFooter`**  
Handles the visual representation of the save lifecycle, including loading, error, retry, success, and sharing states.

**`Field`**  
Provides consistent structure for form fields, labels, and validation feedback.

**`constants/ticket.ts`**  
Contains static ticket configuration such as themes, tiers, accent swatches, and mark assets.

**`types/ticket.ts`**  
Contains the TypeScript domain definitions shared across the application.

---

## Theme System

Ticket appearance is driven by typed theme configuration rather than separate components for each visual variation.

Each theme can define values such as:

```ts
interface TicketTheme {
  name: string;
  surface?: string;
  ink: string;
  accent: string;
  gradient?: string;
}
```

The currently selected theme is consumed by the preview to dynamically determine its background, foreground color, accent, and other visual properties.

This keeps theme-specific values centralized while allowing the ticket component to remain reusable.

---

## SVG Assets

Custom SVG assets are used for ticket marks and theme previews.

Available ticket marks include:

- Sparkle
- Star
- Note
- Moon

The ticket mark adapts visually to the selected theme, allowing the same asset to be reused across different ticket appearances.

Theme preview assets are also used where appropriate to provide a more accurate representation of the available visual presets.

---

## State and Validation

The application uses React local state because the scope does not require an additional global state management solution.

The main state includes:

- Event name
- Holder name
- Date
- Tier
- Theme
- Accent color
- Mark
- Validation errors
- Save state
- Save result
- Clipboard feedback

Required fields are validated before submission.

The save lifecycle is explicitly represented as:

```text
idle → saving → success
              ↘ error → retry
```

This allows the interface to provide clear feedback without losing the user's current ticket configuration.

---

## Accessibility

The implementation includes accessibility considerations such as:

- Semantic form controls and buttons
- Associated form labels
- `aria-pressed` for selectable controls
- Accessible labels for icon-only actions
- Visible validation feedback
- Keyboard-accessible native controls
- Separation of decorative and meaningful visual content

---

## Responsive Design

The application supports both desktop and smaller viewport layouts.

On larger screens, the ticket editor and preview are displayed side by side. On smaller screens, the interface adapts to a vertical layout while preserving the ticket's visual proportions and usability.

---

## Technical Exercise Notes

This repository was completed as supplementary material for a technical assessment.

The original exercise was presented in a timed HackerRank environment. After the assessment ended, the original API data and related resources were no longer available.

For that reason, the completed implementation was based primarily on the provided Figma design and the requirements that remained available from the exercise.

The project therefore focuses on demonstrating the front-end implementation, including:

- React architecture
- TypeScript modeling
- Component separation
- UI state management
- SCSS organization
- Design fidelity
- Validation
- Accessibility
- Maintainability

A more detailed explanation of the assessment context, technical decisions, limitations, and trade-offs is available in:

**[Technical Notes →](./NOTES.md)**

---

## Author

**Nayara Ferreira**

Front-End Developer