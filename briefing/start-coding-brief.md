# Start Coding Brief

Before writing a single line of code, read and internalise these documents in full:

1. `briefing/design-briefing.md`
2. `briefing/vibe-coding-briefing.md`
3. `briefing/visual-reference.md`, if it exists
4. `briefing/project-brief.md`, if extra context is needed
5. Relevant `briefing/epic-[name].md` files for the current task

The design briefing is the source of truth for product intent, users, scope, and experience.

The vibe coding briefing is the technical translation of the design briefing. It contains the stack, build phases, screen map, data contract, shared components, hard rules, and out-of-scope items.

The visual reference describes layout, flow, visual hierarchy, interaction direction, and tone. It is inspiration only, not a final design to copy exactly.

If there is a conflict between the written briefings and the visual reference, follow the written briefings and mark the conflict as:

```text
TODO: Human decision needed — [describe conflict]
```

---

## Product rule

This is a Hangul learning app using daily routines as the interaction model — not a generic to-do list app.

The to-do list is only the learning structure.

The daily schedule is the learning mechanic, not the product goal.

When making implementation decisions, prioritise:

1. Hangul recognition
2. Visual matching
3. Korean pronunciation support
4. Child-friendly completion feedback
5. Reward-based motivation
6. Parent-supported routine setup
7. Low-pressure learning

Do not prioritise generic to-do app behaviours unless they directly support the learning experience.

Do not let the product drift into:

* A generic to-do list app
* A productivity dashboard
* A complex calendar app
* A formal school worksheet
* A parent admin dashboard first

---

## Product phase rule

Phase 1 is the current build focus.

Phase 1 should demonstrate the first meaningful slice of the longer product vision.

Build Phase 1 in a way that does not block later phases, but do not implement later-phase features unless explicitly requested.

Do not turn future scope into immediate build requirements.

For Phase 1, prioritise:

1. Parent Mode setup flow
2. Child Mode daily routine flow
3. Hangul card matching interaction
4. Audio or simulated pronunciation feedback
5. Completion state
6. Hero reward progress visual
7. Korean story reward unlock

Later-phase ideas such as real accounts, persistent database storage, real AI generation, real translation, child progress tracking, advanced learning analytics, and full production architecture should not be built unless explicitly requested.

---

## Stack decision rule

The stack table is for tracking technical direction.

It is not permission to scaffold, install, migrate, or change tools automatically.

The existence of a later-phase stack option does not grant permission to install, scaffold, or migrate the app.

Build only with the Phase 1 stack unless a human explicitly requests a stack change.

If a framework or new tool seems necessary, stop and ask first.

Use this format:

```text
⚠️ Proposed stack change: [tool/framework] — [why it is needed]
```

---

## Phase 1 stack

Use this stack for the current Phase 1 prototype unless explicitly instructed otherwise.

| Layer            | Phase 1 choice                                                           | Later-phase option                                                                   | Rule                                                                          |
| ---------------- | ------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------- |
| Front end        | Static HTML, CSS, and JavaScript modules                                 | React + Vite or similar component framework                                          | Do not scaffold React/Vite in Phase 1 unless explicitly requested by a human. |
| App files        | `index.html` with source files in `src/`                                 | Framework app structure                                                              | Use a clean `src/` structure without scaffolding a framework.                 |
| Styling          | CSS with reusable variables                                              | Design system tokens or component library                                            | Use CSS variables for colours, spacing, radius, shadows, and state styles.    |
| Data/state       | JavaScript modules with optional `localStorage`                          | Database-backed state                                                                | Use local data for tasks, cards, visuals, matching state, and reward state.   |
| Visual assets    | Fixed local visual pool                                                  | Curated visual asset system or custom illustrations                                  | Do not use live image search or random web images.                            |
| Audio            | Browser text-to-speech, simulated sound, or preloaded audio if available | Reviewed generated audio or recorded Korean audio                                    | Do not block Phase 1 on real generated audio.                                 |
| Preview server   | Python static server, VS Code Live Server, or another static file server | Production hosting later                                                             | Python is preview-only. It is not part of the app logic.                      |
| AI / translation | Not used in Phase 1 unless explicitly requested                          | AI-assisted task, card, translation, image, and audio suggestions with parent review | Do not add AI generation, real translation, or API calls in Phase 1.          |
| Framework        | None for Phase 1 unless explicitly requested                             | React + Vite after Phase 1                                                           | Do not scaffold frameworks automatically.                                     |

---

## Phase 1 file structure

Use this structure unless a human explicitly gives a different target folder:

```text
[PROTOTYPE_FOLDER]/
  index.html
  src/
    styles.css
    main.js
    data.js
    state.js
    render.js
    audio.js
```

Do not place app code inside `briefing/`.

Do not place prototype code directly in the project root.

`index.html` should load the app using:

```html
<script type="module" src="./src/main.js"></script>
```

---

## File responsibilities

| File             | Responsibility                                                                                    |
| ---------------- | ------------------------------------------------------------------------------------------------- |
| `index.html`     | App shell and root containers only. Keep markup minimal.                                          |
| `src/styles.css` | All styling, layout, CSS variables, responsive behaviour, and visual states.                      |
| `src/main.js`    | App entry point. Imports data, state, render, and audio modules. Wires events.                    |
| `src/data.js`    | Fixed 20-card Hangul library, visual pool, previous tasks, and reward story content.              |
| `src/state.js`   | App state, selected mode/date/task, matching state, completion state, and localStorage helpers.   |
| `src/render.js`  | DOM rendering functions for Parent Mode, Child Mode, slots, cards, feedback, and reward progress. |
| `src/audio.js`   | Browser speech, simulated audio, and sound indicator logic. Korean prompt text stays audio-only.  |

---

## Framework and command rules

Do not run these commands unless explicitly instructed by a human:

```text
npm
npx
npm install
npm run dev
create-vite
vite
next
```

Do not create these files unless explicitly instructed by a human:

```text
package.json
vite.config.js
src/App.jsx
src/main.jsx
```

A Python static server is allowed only for previewing the static prototype, for example:

```text
python3 -m http.server 3000
```

This does not make Python part of the product stack.

Python should not contain app logic.

Do not create:

```text
app.py
server.py
templates/
Flask app
Django app
FastAPI app
```

unless explicitly requested.

---

## Prototype review decisions

These decisions override earlier ambiguous instructions.

### Parent Mode

Parent Mode must use three separate slots:

1. To-do slot
2. Hangul card slot
3. Image slot

Each slot must have its own plus button.

Do not combine English task creation, Hangul card creation, and image selection into one modal.

Use a simple three-column layout.

Do not build a full drag-and-drop Kanban board unless explicitly requested.

### To-do slot

The To-do slot is only for English task text and previous task reuse.

The To-do slot should use a combobox.

Required behaviour:

* Focus shows previous/saved tasks immediately.
* Typing filters previous/saved tasks.
* Free text is allowed.
* Parent can select a previous task.
* Parent can type and add a new task.
* Parent is not forced to choose from previous tasks.

If a previous task has a linked Hangul card and visual, reuse them.

If the task is new or incomplete, the parent can complete the Hangul card and visual separately in their own slots.

Do not add an external combobox library.

### Hangul card slot

The Hangul slot is where new Hangul cards are created or selected.

Hangul card creation must stay separate from English task creation and image selection.

A Hangul card may include:

* Hangul word or phrase
* English label, if needed
* Romanisation for internal reference, if needed
* Korean prompt for audio, if needed

### Image slot

The Image slot is where visuals are selected from the fixed local visual pool.

The Image slot may include search.

The Image slot search must filter local visual data only.

Do not use live image search.

Do not use random web images.

Do not use unlicensed images.

### Date behaviour

Parent Mode may allow the parent to view or edit future dates.

The date selector should be a simple calendar or date picker.

Do not use an image grid in the To-do/date area.

When switching to Child Mode, always default to today’s date.

Child Mode should not inherit a future date selected in Parent Mode.

### Save and cancel behaviour

Do not use a global Save or Cancel button for Parent Mode.

Use inline creation or small focused popups for each slot.

When an item is added, it should appear in the relevant slot.

If confirmation is needed, use a small lightweight message, not a heavy full-screen workflow.

### Child Mode audio

In Child Mode, Korean prompt sentences must be audio-only.

The child should hear the Korean sentence, not read it.

Do not display full Korean prompt scripts in Child Mode.

Examples of text that must not be visible in Child Mode:

* 아침 먹을 시간이야
* 세수할 시간이야
* 양치할 시간이야

Keep Korean prompt text in the data model for audio or future text-to-speech.

When the child taps a to-do item, play or simulate the Korean prompt sound.

Do not show a “Listen again” sound bar.

To replay sound, the child taps the same to-do item again.

It is acceptable to show a temporary non-text sound indicator, such as:

* Speaker icon
* Pulsing speaker
* Small sound animation

### Child Mode matching

Hangul cards may show short Hangul words such as:

* 세수
* 양치
* 숙제

Full Korean prompt sentences must not be visible because they give away the Hangul answer.

The child should choose the correct Hangul card by listening and recognising, not by reading the full prompt sentence.

Incorrect matches should feel gentle and encouraging.

Do not punish the child for mistakes.

### Reward progress

Child Mode must include a child-friendly hero reward progress visual.

Do not use standard progress bars or star meters for reward progress unless explicitly requested.

Use a generic child-friendly hero illustration that becomes more complete as tasks are completed.

Do not use copyrighted characters such as Superman.

Suggested progress states:

* 0%: faded or outline hero
* 25%: first part appears
* 50%: more of the hero appears
* 75%: almost complete hero
* 100%: full hero illustration appears and reward unlocks

The progress should update based on completed tasks divided by total visible tasks.

The reset prototype action should reset the hero progress back to 0%.

### Reward content

Use a simple parent-approved Korean story reward for Phase 1.

Do not auto-open YouTube.

Do not embed random YouTube content.

Do not select copyrighted cartoon content automatically.

The Korean story should only appear after the reward unlocks.

English support should remain parent-facing only unless explicitly needed.

Example reward content:

Title:

```text
오늘의 작은 영웅
```

Korean story:

```text
오늘 나는 작은 영웅이에요.
세수를 하고, 양치도 했어요.
숙제도 조금 해냈어요.
하나씩 하니까 더 잘할 수 있었어요.
오늘도 정말 잘했어요!
```

### Reset prototype

Add a small reset prototype action for testing.

This should reset the app to the default sample state.

It should clear:

* Completed tasks
* Selected task
* Matched Hangul cards
* Reward unlocked state
* Temporary feedback messages
* Child-mode progress state

It should restore the original default sample tasks and cards.

If `localStorage` is used, clear or reset the relevant `localStorage` keys.

This is a prototype testing feature, not necessarily a final product feature.

---

## Visual reference rules

Use the visual reference file for:

* Layout direction
* Screen composition
* Visual hierarchy
* Interaction direction
* Tone and personality
* Touch-friendly behaviour

Do not copy visual sketches exactly.

Do not treat visual sketches as final UI specifications.

Do not copy exact colours, typography, spacing, icons, or layouts unless the briefing explicitly says to.

If the visual reference conflicts with the design briefing or vibe coding briefing, follow the written briefing and mark the conflict:

```text
TODO: Human decision needed — [describe conflict]
```

---

## Visual style rules

The prototype should feel modern, warm, playful, calm, child-friendly, and parent-trustworthy.

Avoid:

* Old-fashioned form styling
* Dense grey boxes
* Harsh borders
* Cluttered layouts
* Adult productivity dashboard styling
* Generic to-do app styling
* Overly childish decoration

Use:

* Large rounded cards
* Generous spacing
* Soft backgrounds
* Friendly icons
* Clear state feedback
* Large child-friendly touch targets

A visual refresh should update style only.

Do not change product flow, logic, data model, or interactions during a visual refresh unless explicitly requested.

---

## Data and content rules

For Phase 1, use sample data unless the brief explicitly says otherwise.

Use a fixed 20-card Hangul library for the first prototype.

Each Hangul card should support:

* English task label
* Hangul word or phrase
* Korean prompt
* Romanisation for internal reference
* Visual source
* Icon reference or keyword
* Fallback emoji
* Category
* Audio or simulated pronunciation cue
* Correct feedback phrase
* Optional hint phrase

Do not rely on live image search.

Do not use random web images.

Do not use unlicensed images.

Do not mix random visual styles.

Use one consistent open-source or licensed visual source if visual assets are needed.

If attribution is required, include a suitable placeholder for attribution in the app footer, about screen, project documentation, or credits section.

Do not rely on real translation for Phase 1.

Do not rely on real AI-generated content for Phase 1.

AI-assisted cards and AI-generated visuals are later-phase features unless explicitly requested.

AI-generated cards must not be shown directly to children without parent review.

---

## Korean language rules

Preserve Korean words and phrases from the briefing files.

Do not rewrite Korean phrases unless explicitly instructed.

All Korean words and phrases should be treated as needing review by a Korean-speaking adult before final use.

If Korean language accuracy is uncertain, add:

```text
TODO: Korean review needed — [word or phrase]
```

Romanisation may be used internally if defined in the data contract.

Do not show romanisation in Child Mode unless the briefing explicitly requires it.

Do not show full Korean prompt sentences in Child Mode.

If unclear, mark it as:

```text
TODO: Human decision needed — confirm whether romanisation or English labels should be visible in Child Mode.
```

---

## Your role

You are implementing exactly what is described in the briefings.

You are not acting as a product designer, architect, or consultant.

Your job is to build what is specified, as cleanly and directly as possible.

Build less, but make it work well.

When in doubt, implement the smallest useful version that supports the defined Phase 1 flow.

Do not “improve” the stack, architecture, or framework unless explicitly asked.

Do not rebuild the prototype in another technology unless explicitly asked.

---

## Before you write code

Identify which build phase from the vibe coding briefing the current task belongs to.

Check that all dependencies for that phase are complete or are being handled in this session.

If a dependency is missing, say so clearly before proceeding.

Do not start by building reusable architecture.

Start by making the first parent-to-child user flow work end-to-end.

Before coding, briefly confirm:

1. Which build phase this task belongs to
2. Which screen or component is affected
3. Which data shape is involved
4. Whether any dependency is missing
5. Whether the task is Phase 1 or later-phase scope
6. Whether the task conflicts with the Prototype review decisions
7. Whether a stack change is being proposed

If a change conflicts with the Prototype review decisions, stop and ask for human confirmation.

---

## When something is ambiguous

First, re-read the relevant section of the design briefing.

Then, re-read the relevant section of the vibe coding briefing.

Then, check the relevant epic file if one exists.

If the ambiguity relates to layout, visual hierarchy, or interaction direction, check the visual reference file.

If the documents are still silent, make the most conservative choice.

Build less, not more.

Add a short code comment or implementation note using this format:

```text
TODO: Human decision needed — [describe ambiguity]
```

Do not invent requirements to fill a gap.

---

## Code quality

Write code that a non-developer can roughly understand.

Prefer explicit code over clever abstractions.

Avoid unnecessary patterns, frameworks, or configuration.

Leave a short comment any time you make a non-obvious choice.

Do not add features, refactors, or improvements beyond the task at hand.

Do not over-engineer for future phases.

Structure the code so later phases are not blocked, but only build what is needed now.

---

## UX quality

Every screen must have a clear purpose.

Every primary action must be obvious.

Every flow must include relevant states.

Include these states where relevant:

* Empty state
* Selected state
* Loading state
* Error state
* Success state
* Saved state
* Cancelled state
* Correct match state
* Incorrect match state
* Completed state
* Reward locked state
* Reward unlocked state

Use plain, helpful microcopy.

Do not use placeholder text such as “Lorem ipsum” unless the brief specifically allows it.

Make incorrect matches gentle and encouraging.

Do not punish the child for mistakes.

Do not block progress harshly.

Do not rely only on colour to communicate success, error, selected, or completed states.

Use clear visual cues, labels, icons, and feedback.

---

## Benchmarks

Design and test against the benchmarks in the vibe coding briefing from the start.

Do not defer usability or performance work to the end.

If a benchmark cannot be met with the current approach, raise it before continuing.

Phase 1 benchmarks include:

* First screen should be understandable within 5 seconds.
* Main parent-to-child flow should be demoable in under 3 minutes.
* User should reach the first meaningful interaction in as few steps as possible.
* Interface should be responsive on desktop, tablet, and mobile.
* Tablet experience should be prioritised.
* Touch targets should be large enough for young children.
* Loading states should appear for any action that takes more than 1 second.
* Error messages should explain what happened and what the user can do next.
* Incorrect match feedback should feel gentle and encouraging.
* Korean prompt text should be hidden in Child Mode.
* Hero reward unlock should be visible and satisfying.
* Reset prototype should allow repeated testing.
* Prototype should work with sample data.

---

## Task for this session

I need to design and prototype:

```text
[SCREEN OR FEATURE X]
```

and:

```text
[SCREEN OR FEATURE Y]
```

These screens are connected and form the first user flow.

Start with:

```text
[SCREEN OR FEATURE X]
```

Then connect it to:

```text
[SCREEN OR FEATURE Y]
```

Before coding, briefly confirm:

1. Which build phase this belongs to
2. Which screens/components will be affected
3. Which data shape is involved
4. Whether any dependency is missing
5. Whether the task is Phase 1 or later-phase scope
6. Whether this conflicts with Prototype review decisions
7. Whether a stack change is being proposed

Then proceed with the smallest useful implementation.

Do not over-engineer.

Do not add unrelated features.

Do not refactor unrelated code.

Build only what is needed for this task and the connected flow.
