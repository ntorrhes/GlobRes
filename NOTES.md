# Technical Notes — Ticket Studio

**Candidate:** Nayara Ferreira  
**Stack:** React · TypeScript · SCSS  
**Project:** Ticket Studio  
**Purpose:** Supplementary technical assessment submission

---

## About this submission

This project is a completed version of the technical exercise originally presented to me through HackerRank.

I was not able to complete the implementation within the time available during the original assessment. I decided to continue working on the exercise afterward and submit this repository as supplementary material, with the goal of providing a more representative example of my front-end development approach.

This submission is not intended to replace or alter the result of the original timed assessment. It is an additional opportunity to demonstrate how I would structure and implement the proposed interface outside the time constraints of the HackerRank environment.

---

## Important note about the original API

After the HackerRank assessment ended, I no longer had access to the API data, endpoints, or related resources that were available inside the original assessment environment.

Because of this limitation, the completed version of the project was implemented primarily based on the provided Figma design and the requirements I was able to retain from the exercise.

I therefore did not attempt to reproduce or reverse-engineer API behavior that was no longer available to me.

Where application behavior was necessary to demonstrate the interface and its states, I implemented local/mock behavior based on the expected user experience rather than claiming parity with the original HackerRank API.

As a result, this repository should primarily be evaluated as a demonstration of:

- React and TypeScript implementation
- Component architecture
- UI state management
- SCSS organization
- Design fidelity
- Form validation
- Error and loading state handling
- Accessibility considerations
- Code organization and maintainability

rather than as an exact reproduction of the original API integration.

---

## Implementation approach

The application was developed using React and TypeScript, with SCSS used for styling.

One of the main goals of the implementation was to avoid concentrating the entire application inside a single large component.

Responsibilities were separated between UI components, shared types, constants, utilities, and state orchestration.

The application includes functionality such as:

- Live ticket preview
- Event name editing
- Ticket holder editing
- Date selection
- Ticket tier selection
- Theme selection
- Accent color customization
- Custom SVG mark selection
- Theme-aware SVG coloring
- Form validation
- Save lifecycle feedback
- Loading, success, and error states
- Ticket identification
- Share-link presentation
- Clipboard interaction

---

## Component architecture

The implementation was separated into smaller components and supporting modules instead of keeping all logic and presentation inside the main application component.

For example, responsibilities such as the ticket form, ticket preview, form fields, and save feedback are handled independently.

Shared domain definitions are modeled with TypeScript types, including:

- `ThemeKey`
- `TicketTheme`
- `TicketTier`
- `TicketMark`
- `TicketDesign`
- `SaveState`
- `SaveResult`
- `TicketErrors`

Static configuration such as themes, available tiers, accent colors, and ticket marks is also kept outside the presentation components.

This structure was chosen to improve readability, maintainability, and extensibility.

---

## Styling and design decisions

The visual implementation was recreated based primarily on the provided Figma design.

SCSS was used instead of Tailwind CSS or another utility-first styling framework.

The styles follow a component-oriented structure, while values that depend directly on application state — such as theme colors, gradients, accent colors, and CSS custom properties — are provided dynamically by React.

Each ticket theme defines its own visual tokens, including values such as:

- `surface`
- `ink`
- `accent`
- `gradient`

The preview consumes these values dynamically instead of maintaining separate ticket components for each theme.

---

## SVG assets

Custom SVG assets are used for ticket marks and visual elements instead of relying exclusively on an external icon library.

The mark system supports assets such as:

- Sparkle
- Star
- Note
- Moon

The selected mark is rendered dynamically and its visual color follows the current ticket theme.

This allows the same SVG asset to adapt to different themes rather than maintaining separate asset files for every color variation.

---

## State management

Given the size of the exercise, React local state was sufficient for managing the application.

State is responsible for values such as:

- Event name
- Holder name
- Date
- Tier
- Theme
- Accent color
- Mark
- Validation errors
- Save status
- Save result
- Clipboard feedback

I intentionally avoided introducing an additional global state management dependency because it would add unnecessary complexity for the current scope.

---

## Validation and user feedback

Required form fields are validated before the save operation.

The interface also represents the different stages of the save lifecycle:

`idle → saving → success / error`

The user receives visual feedback while an operation is in progress, after a successful operation, and when an error occurs.

Failed operations can be retried without losing the current ticket configuration.

---

## Accessibility considerations

Accessibility was considered when implementing the interactive controls.

Examples include:

- Semantic buttons for interactive actions
- Labels associated with form inputs
- `aria-pressed` for selectable controls
- Accessible labels for icon-only buttons
- Visible validation feedback
- Appropriate separation between decorative and meaningful content

These decisions are intended to make the interface understandable beyond purely visual interaction.

---

## Responsive behavior

The interface was structured so that the editor and ticket preview can adapt to different viewport sizes.

On larger screens, the form and preview can be presented side by side, while smaller viewports can reorganize the content vertically.

The ticket itself maintains its intended visual proportions while adapting to the available space.

---

## Trade-offs

Because this version was completed after the HackerRank session, some decisions were necessarily made without access to the original runtime environment.

The most significant limitation is the absence of the original API specification and API data.

For that reason, I prioritized faithfully implementing the Figma interface, interaction states, component structure, and front-end behavior instead of making assumptions about undocumented backend contracts.

This was a deliberate decision: where the original requirements were no longer available, I preferred to keep the implementation explicit and limited rather than invent behavior that may not correspond to the original exercise.

---

## What I would improve with additional time

Given additional development time and access to the complete specification, the next improvements would include:

- Integration with the actual API contract
- Automated unit and component tests
- Tests for validation and asynchronous states
- More comprehensive accessibility testing
- Additional responsive testing
- Visual regression testing for ticket themes
- Error-boundary strategy where appropriate
- Further extraction of reusable design tokens

If the original API documentation became available again, I would also replace the local/mock behavior with the actual integration while preserving the current UI architecture.

---

## Final note

I chose to complete and share this project because I wanted to provide additional context for my technical experience beyond what I was able to demonstrate within the timed HackerRank assessment.

Since I no longer had access to the original API after the assessment, this implementation was completed primarily from the Figma design and the information still available to me.

Rather than attempting to reconstruct unavailable requirements, I focused on the areas I could demonstrate accurately: React architecture, TypeScript modeling, component separation, styling, state management, interaction design, accessibility, and maintainability.

Thank you for considering this project as supplementary material for the technical evaluation.