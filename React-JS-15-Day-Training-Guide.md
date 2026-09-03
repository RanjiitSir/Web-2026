# React JS — 15 Day Training Guide
### Fork Infosystems | CodInt Digitech
**Prerequisite:** HTML, CSS, JavaScript (ES6+: let/const, arrow functions, array methods, destructuring, template literals)

---

## How this guide is organized

Each day has four sections:
- **Theory** — concepts to teach/present, in teaching order
- **Classroom Demo** — a working file to walk through live (see companion source code package, `days/dayXX-.../`)
- **Assignment** — a smaller, focused exercise for students to complete during/after the session
- **Mini Project** — a slightly bigger build that reinforces the day's concepts, using ideas from prior days too

Session length assumed: ~3 hours/day (1.5 hr theory + demo, 1.5 hr lab/assignment).

Companion runnable source code for every day (demos + assignment starters + solutions) is provided as a separate Vite project — see `react-15day-source/`.

---

## Day 1 — Introduction to React & Environment Setup

**Theory**
- What is React? Library vs framework. Why React over vanilla JS (component reuse, declarative UI, virtual DOM at a high level).
- SPA (Single Page Application) concept — contrast with traditional multi-page sites.
- Setting up a project: `npm create vite@latest my-app -- --template react`, project structure (`src/`, `public/`, `index.html`, `main.jsx`).
- JSX: what it is, why it exists, JSX-to-JS compilation (mention Babel briefly).
- JSX rules: single root element (or Fragment `<>...</>`), `className` instead of `class`, self-closing tags, embedding JS expressions with `{}`.
- Running the dev server (`npm run dev`), hot reload.

**Classroom Demo:** `days/day01-intro/HelloWorld.jsx` — a component showing text, a JS expression, and dynamic values inside JSX.

**Assignment:** `Assignment_ProfileCard.jsx` — Build a `ProfileCard` component showing your name, course, and bio, with at least one JS expression evaluated inside JSX (e.g., today's day of the week).

**Mini Project — "About Me" Page**
Build a single-page component with: a heading, a short intro paragraph, and a list of 3 skills — all written as valid JSX, no external data yet. Goal: get comfortable with JSX syntax and running a Vite dev server end-to-end.

---

## Day 2 — JSX Deep Dive & Components

**Theory**
- Function components (the modern standard — skip class components except a 2-minute historical mention).
- Component naming rules (PascalCase), one component per concern.
- Composing components — a component tree, parent/child relationship.
- The `children` prop — content placed between opening/closing tags.
- Fragments (`<> </>`) to avoid unnecessary wrapper `<div>`s.
- Organizing files: one component per file, folder structure conventions.

**Classroom Demo:** `days/day02-jsx-components/ComponentTree.jsx` — Header/CourseList/Footer composed together, `children` prop demonstrated via `CourseItem`.

**Assignment:** `Assignment_Dashboard.jsx` — Build Sidebar, TopBar, and MainContent as separate components, composed inside a `Dashboard` parent.

**Mini Project — Personal Portfolio Shell**
Break a portfolio page into components: `Navbar`, `Hero`, `SkillsSection`, `Footer`. No styling requirements yet — focus is purely on decomposing a UI into sensible, independent components and composing them in a root `App`.

---

## Day 3 — Props

**Theory**
- Props = read-only data passed from parent to child. One-way data flow.
- Destructuring props in the function signature: `function Card({ title, price })`.
- Default prop values (`Component.defaultProps` or default parameters).
- Passing different data types as props: strings, numbers, booleans, objects, arrays, even functions (preview for Day 5/9).
- `props.children` revisited in the context of reusable wrapper components.
- Common mistake: trying to modify a prop inside the child (props are immutable — reinforce "one-way data flow").

**Classroom Demo:** `days/day03-props/StudentCard.jsx` — `StudentCard` component rendered multiple times with different prop values, conditional styling based on a prop.

**Assignment:** `Assignment_ProductCard.jsx` — `ProductCard` + `ProductList`, at least 4 products rendered with different props, conditional "In Stock"/"Out of Stock" text.

**Mini Project — Recipe Card Gallery**
Given an array of 5-6 recipe objects (name, cookTime, difficulty, image URL as text), render a `RecipeCard` component for each via props, with difficulty shown in a different color per level (Easy/Medium/Hard).

---

## Day 4 — State & the `useState` Hook

**Theory**
- Why props alone aren't enough — components need to "remember" and change data over time: **state**.
- `useState` hook: syntax, initial value, the `[value, setter]` pair.
- Re-rendering: what triggers it, why direct mutation (`state.x = y`) doesn't work.
- Multiple state variables in one component vs a single state object (trade-offs, preview of Day 7).
- Functional updates: `setCount(prev => prev + 1)` and why it's safer than `setCount(count + 1)` in some cases (briefly — batched updates).
- Rules of Hooks (intro): only call hooks at the top level, only in function components/custom hooks.

**Classroom Demo:** `days/day04-state/Counter.jsx` — increment/decrement/reset counter.

**Assignment:** `Assignment_LikeButton.jsx` — a `LikeButton` (toggle + count) and a `TogglePanel` (show/hide), composed in an `ImageCard`.

**Mini Project — Quiz Score Tracker**
A component with a "Correct" and "Wrong" button and a running score. Show total attempts and percentage correct, recalculated on each click.

---

## Day 5 — Event Handling

**Theory**
- SyntheticEvents — React's cross-browser wrapper around native DOM events.
- Common event handlers: `onClick`, `onChange`, `onSubmit`, `onMouseEnter/Leave`, `onKeyDown`.
- The event object `e`: `e.target.value`, `e.preventDefault()`, `e.key`.
- Passing arguments to event handlers (`onClick={() => doSomething(id)}` vs `onClick={doSomething}`).
- Common pitfall: calling a function immediately (`onClick={doSomething()}`) instead of passing a reference.

**Classroom Demo:** `days/day05-events/EventPlayground.jsx` — mouse events, controlled input tracked via `onChange`, `onKeyDown` for Enter key, form submit with `preventDefault`.

**Assignment:** `Assignment_ColorPicker.jsx` — clickable color swatches update a preview box; selected swatch is visually highlighted.

**Mini Project — Simple Calculator**
Buttons for digits 0-9 and +, -, ×, ÷, =, C. Track the current expression/result in state, update on each button click. (Basic string-building calculator is fine — no need for full expression parsing rigor.)

---

## Day 6 — Conditional Rendering & Lists/Keys

**Theory**
- Conditional rendering patterns: ternary (`cond ? a : b`), logical AND (`cond && <X/>`), early `return null`.
- Rendering arrays with `.map()`.
- Why `key` matters: React's reconciliation, list re-ordering bugs without stable keys.
- Choosing a good key (unique ID from data) vs the anti-pattern of using array index as key when the list can reorder/filter.
- Combining `.filter()` + `.map()` for filtered lists.

**Classroom Demo:** `days/day06-conditional-lists/TaskBoard.jsx` — checklist with toggle, conditional pending-count message, empty state.

**Assignment:** `Assignment_StudentGrades.jsx` — pass/fail list with summary count via `.filter()`, empty-state handling.

**Mini Project — Movie Watchlist**
An array of movies (title, genre, watched: boolean). Render the list, toggle watched status, filter by genre using a dropdown (`.filter()` + `.map()` together), show "X of Y watched."

---

## Day 7 — Forms & Controlled Components

**Theory**
- Controlled vs uncontrolled inputs — React recommends controlled (`value` + `onChange` tied to state).
- Handling multiple form fields with a single state object + one shared `handleChange` using `e.target.name`.
- `<select>`, `<textarea>`, checkboxes (`checked` + `onChange`), radio buttons.
- Basic client-side validation patterns (empty checks, regex for email).
- Displaying field-level error messages.
- Resetting a form after submit.

**Classroom Demo:** `days/day07-forms/RegistrationForm.jsx` — name/email/course fields, validation, success state.

**Assignment:** `Assignment_FeedbackForm.jsx` — name, rating select, comments textarea, subscribe checkbox; validation; submitted summary + reset.

**Mini Project — Job Application Form**
Multi-field form: full name, email, phone, position (select), years of experience (number), cover letter (textarea), terms checkbox (required to submit). On submit, show a formatted "application summary" card instead of the form.

---

## Day 8 — `useEffect` & Component Lifecycle

**Theory**
- What "side effects" are (things outside pure rendering: timers, subscriptions, manual DOM changes, data fetching).
- `useEffect(fn, deps)` — the three dependency-array patterns:
  - no array → runs after every render
  - `[]` → runs once, on mount
  - `[dep1, dep2]` → runs on mount + whenever a listed dependency changes
- Cleanup functions — returned from the effect, run on unmount or before the next effect run. Why they matter (avoiding memory leaks, stale timers/listeners).
- Common real-world uses: timers, event listeners (`resize`, `scroll`), document title updates, data fetching (bridge to Day 14).

**Classroom Demo:** `days/day08-useeffect/ClockAndTimer.jsx` — live clock with `setInterval` + cleanup, window resize listener, document title sync with a dependency.

**Assignment:** `Assignment_DataFetchSkeleton.jsx` — simulate an API call with `setTimeout`, loading state, refresh button, proper cleanup of pending timeouts.

**Mini Project — Pomodoro Timer**
25-minute countdown timer using `useEffect` + `setInterval`, Start/Pause/Reset controls, auto-switch between "Work" (25 min) and "Break" (5 min) sessions when the timer hits zero.

---

## Day 9 — Component Composition & Lifting State Up

**Theory**
- Revisiting composition: passing components as props/children for flexible layouts.
- "Lifting state up" — when two sibling components need to share/sync data, move the state to their closest common parent and pass data + updater functions down as props.
- Passing callback functions as props (`onAddToCart`, `onRemove`) — child calls the function, parent's state actually changes.
- Recognizing when a component should be "controlled" (no internal state, driven entirely by props) vs when local state is fine.

**Classroom Demo:** `days/day09-composition/ShoppingCart.jsx` — `ProductList` and `CartSummary` are siblings; cart state lives in the parent `ShoppingCart` and is shared via props + callbacks.

**Assignment:** `Assignment_ParentChildSync.jsx` — Celsius/Fahrenheit `TemperatureInput` components kept in sync via a single source of truth in the parent `Converter`.

**Mini Project — Multi-Step Signup Wizard**
Three step components (`StepAccount`, `StepProfile`, `StepConfirm`) that are all siblings under one `SignupWizard` parent. The parent holds all form data in one state object; each step reads/writes its slice via props, with Next/Back navigation between steps.

---

## Day 10 — React Router: Basics

**Theory**
- Why client-side routing is needed in an SPA (`react-router-dom` — `npm install react-router-dom`).
- `<BrowserRouter>`, `<Routes>`, `<Route path="..." element={...} />`.
- `<Link>` vs plain `<a>` (avoiding full page reloads).
- `<NavLink>` for active-state styling on navigation.
- A basic 404 / catch-all route (`path="*"`).

**Classroom Demo:** `days/day10-router-basics/BasicRouterDemo.jsx` — Home/About/Contact routes with a `NavLink` navigation bar.

**Assignment:** `Assignment_MiniSite.jsx` — 4-page mini site (Home, Courses, Faculty, Contact) with `Link` navigation and a 404 catch-all.

**Mini Project — Institute Website (Multi-Page)**
A small marketing site for a fictional institute: Home, Courses (list), Faculty, Contact pages, shared `Navbar`/`Footer` layout, and a styled 404 page.

---

## Day 11 — React Router: Params, Navigation, Nested Routes

**Theory**
- Dynamic route segments: `path=":id"`, reading them with `useParams()`.
- Programmatic navigation with `useNavigate()` (e.g., after form submit, "Go Back").
- Nested routes and `<Outlet />` for shared layouts (e.g., a sidebar that stays while the inner content changes).
- Index routes (`<Route index element={...} />`).
- Handling an invalid/missing param gracefully (don't crash — show a friendly message).

**Classroom Demo:** `days/day11-router-advanced/CourseDetailsRouter.jsx` — nested course layout with `<Outlet>`, `useParams` for course details, `useNavigate` for back/jump navigation.

**Assignment:** `Assignment_StudentDirectory.jsx` — `/students` list → `/students/:id` detail page, "Student not found" handling for invalid IDs.

**Mini Project — E-Commerce Product Catalog**
`/products` (grid of product cards, each linking to its detail page) → `/products/:id` (detail view with "Add to Cart" — cart state can just live in a top-level component for now, full Context wiring comes Day 12). Include a `/cart` route too.

---

## Day 12 — Context API

**Theory**
- The "prop drilling" problem — passing props through many layers that don't need them, just to reach a deeply nested component.
- `createContext()`, `<Context.Provider value={...}>`, `useContext(Context)`.
- When to reach for Context (global-ish data: theme, logged-in user, language) vs when plain props are still the better/simpler choice (don't over-use Context for everything).
- Combining Context with `useState`/`useReducer` to build a small "provider" component that owns the shared state.

**Classroom Demo:** `days/day12-context/ThemeContextDemo.jsx` — `ThemeProvider` + `useContext` consumed 3 levels deep, no prop drilling.

**Assignment:** `Assignment_AuthContext.jsx` — a simple `AuthContext` (user/login/logout) consumed independently by `Navbar` and `LoginForm`.

**Mini Project — Global Cart Context**
Refactor Day 11's e-commerce cart to use Context instead of prop-passing: a `CartProvider` wraps the app, `ProductCard`, `CartPage`, and a cart-count badge in the `Navbar` all consume the same `CartContext` independently.

---

## Day 13 — Custom Hooks & `useRef`

**Theory**
- What makes a hook "custom" — a function starting with `use`, built out of built-in hooks, for reusing stateful logic across components.
- Common custom hook examples: `useLocalStorage`, `useToggle`, `useFetch`, `useTimer`.
- `useRef` — a mutable value that persists across renders WITHOUT causing a re-render when changed. Two main uses: (1) referencing a DOM node directly (e.g., `.focus()`), (2) storing a mutable value (like an interval ID) that isn't part of the rendered UI.
- `useRef` vs `useState` — when to use which (does changing this value need to update the UI? If no → ref; if yes → state).

**Classroom Demo:** `days/day13-hooks/CustomHooksDemo.jsx` — `useLocalStorage` custom hook powering a persisted notes textarea; `useRef` for an imperative focus button.

**Assignment:** `Assignment_useToggleAndTimer.jsx` — build `useToggle` and `useTimer` custom hooks, use them in a `Sidebar` and a `StopwatchWidget`.

**Mini Project — Reusable Hooks Library**
Build a small internal "hooks library" with 3 custom hooks: `useLocalStorage`, `useWindowWidth` (from Day 8's resize listener, extracted into a hook), and `useDebounce` (delays updating a value until the user stops typing for N ms — useful for search inputs). Demonstrate each with a tiny demo component.

---

## Day 14 — Connecting to APIs

**Theory**
- `fetch()` basics: making a GET request, `.json()`, handling non-OK responses.
- `async/await` inside `useEffect` (the pattern: define an async function inside the effect, call it immediately — `useEffect` itself can't be async directly).
- Loading / error / success states — the three states every data-fetching component needs to handle.
- Avoiding the "setting state after unmount" warning with a cancelled/ignore flag.
- Brief mention of `axios` as an alternative to `fetch` (auto JSON parsing, interceptors) — optional, not required for the course.
- POST requests (sending data) — method, headers, body — for the mini project.

**Classroom Demo:** `days/day14-api-integration/UserListFetcher.jsx` — fetch users from a public API with loading/error/success handling and unmount-safety.

**Assignment:** `Assignment_PostsSearch.jsx` — fetch posts, client-side search/filter by title, results count.

**Mini Project — Weather Dashboard (or GitHub User Search)**
A search input where the user types a city (or a GitHub username) and, on submit, fetches and displays data from a public API (OpenWeatherMap or the GitHub Users API both have free tiers). Handle loading, error ("not found"), and success states distinctly.

---

## Day 15 — Capstone Project + Wrap-up

**Theory**
- `useReducer` for when related state updates get complex (`useState` starts to feel messy with many `setX` calls tied to related logic) — action objects, a reducer function, `dispatch`.
- Quick recap/map of the whole course: components → props → state → events → conditional/list rendering → forms → effects → composition/lifting state → routing → context → custom hooks → API calls.
- Folder/project structure conventions for a "real" app (feature folders, shared components, hooks folder, etc.) — brief best-practices discussion.
- Deployment basics: `npm run build`, deploying the `dist/` folder to Netlify or Vercel, connecting a GitHub repo for auto-deploys.
- Where to go next (optional, for motivated students): Redux/Zustand for larger apps, TypeScript with React, Next.js for server-rendered React, testing with React Testing Library.

**Capstone Project — Task Manager**
Full spec in `days/day15-capstone/CAPSTONE_BRIEF.md`. Reference solution: `days/day15-capstone/CapstoneTaskManager.jsx`. Combines nearly every concept from Days 1–14: components, props, `useReducer`, controlled forms, conditional/list rendering, `useEffect` + localStorage persistence, Context (theme), and a custom hook (`usePersistedReducer`).

**Wrap-up activity:** Each student/team does a 5-minute demo of their capstone build, briefly explaining one design decision they made.

---

## Assessment Suggestions

| Day range | Suggested check |
|---|---|
| 1–3 | Quick quiz: JSX rules, props vs state (conceptual) |
| 4–7 | Graded lab: a form-driven mini app using state + events |
| 8–9 | Code review: correct use of `useEffect` cleanup, no prop-drilling anti-patterns |
| 10–12 | Graded lab: multi-page app with routing + one Context provider |
| 13–14 | Graded lab: one custom hook + one API integration, both working end-to-end |
| 15 | Capstone demo + code walkthrough (see brief for deliverables) |

## Companion Source Code

All demo files, assignment starter files (with TODOs), and solutions referenced above are provided in the accompanying `react-15day-source/` Vite project — organized day-by-day under `src/days/`. See its `README.md` for setup and classroom usage instructions.
