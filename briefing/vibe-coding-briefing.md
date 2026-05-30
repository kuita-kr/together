# Vibe Coding Briefing

## 1. Source reference

Source documents reviewed:

* `briefing/design-briefing.md`
* `briefing/project-brief.md`
* `briefing/visual-reference.md`, if available
* Relevant `briefing/epic-[name].md` files, if available

This document translates the design briefing into implementation guidance for an AI coding assistant and developers.

The design briefing remains the source of truth for product intent, users, experience, and scope.

This vibe coding briefing explains how to build the Phase 1 prototype cleanly and safely.

---

## 2. What it is

This is a child-friendly Hangul learning routine app for Korean heritage children aged 4–6 in the UK.

The app uses daily routines as the interaction model, but it is **not** a generic to-do list app.

The main value is helping children recognise Hangul through familiar daily tasks, visual matching, Korean audio, gentle feedback, and a reward moment.

Phase 1 is the first meaningful slice of a longer product vision, not a throwaway demo.

---

## 3. Product guardrail

This is a Hangul learning app using daily routines as the interaction model — not a generic to-do list app.

The to-do list is only the learning structure.

The daily schedule is the learning mechanic, not the product goal.

Every implementation decision should support:

* Hangul recognition
* Korean language exposure
* Visual matching
* Korean pronunciation
* Child confidence
* Parent-supported routine setup
* Low-pressure learning
* Reward-based motivation

Do not let the product drift into:

* A generic to-do list app
* A productivity dashboard
* A complex calendar app
* A formal school worksheet
* A parent admin dashboard first

---

## 4. Phase strategy

| Phase   | Focus                                 | Build implication                                                                                 |
| ------- | ------------------------------------- | ------------------------------------------------------------------------------------------------- |
| Phase 1 | Competition prototype                 | Build one reliable parent-to-child flow using static files, local data, and simple interactions   |
| Phase 2 | Usable MVP                            | Add stronger persistence, reusable routines, improved parent setup, and better content management |
| Phase 3 | Learning product                      | Add learning depth, review loops, progress tracking, better audio, and richer reward content      |
| Phase 4 | Personalised and AI-supported product | Add AI-assisted task, card, translation, image, and audio support with parent review              |

Later-phase ideas should not become Phase 1 requirements.

Phase 1 should be buildable quickly and should not block later phases.

---

## 5. Stack

The stack should be tracked so developers understand current implementation choices and later upgrade paths.

The stack table is for technical direction. It is **not** permission to scaffold, install, migrate, or change tools automatically.

Phase 1 should prioritise speed, reliability, and demo readiness.

Later phases may move to a more scalable app structure.

If a framework or new tool seems necessary, stop and ask first.

Use this format:

```text
⚠️ Proposed stack change: [tool/framework] — [why it is needed]
```

| Layer             | Phase 1 choice                                                                        | Later-phase option                                                            | Why                                                                                                                |
| ----------------- | ------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| Front end         | Plain HTML, CSS, and JavaScript                                                       | React + Vite or similar component-based framework                             | Static files are fastest and most reliable for the prototype. React/Vite may be useful later if the product grows. |
| App structure     | `prototype/index.html`, `prototype/styles.css`, `prototype/script.js`                 | `app/` or framework app structure                                             | Keeps Phase 1 simple and separates prototype files from briefing files.                                            |
| Styling           | CSS with reusable variables and utility classes                                       | Design system tokens or component library                                     | CSS variables allow visual refresh without redesigning every screen.                                               |
| Data/state        | In-memory JavaScript state with optional `localStorage`                               | Database-backed state                                                         | Phase 1 only needs local sample data and simple persistence for testing.                                           |
| Content library   | Fixed 20-card Hangul library in local data                                            | Managed card library                                                          | Local data is enough for the prototype. A managed library can come later.                                          |
| Visual assets     | Fixed local visual pool using emoji, OpenMoji, Noto Emoji, or another licensed source | Curated visual asset system or custom illustrations                           | Phase 1 should avoid live image search and random web images.                                                      |
| Audio             | Browser text-to-speech, simulated audio, or preloaded audio if available              | Reviewed generated audio or recorded Korean audio                             | Phase 1 should not be blocked by real audio generation.                                                            |
| AI / translation  | Not used in Phase 1 unless explicitly requested                                       | AI-assisted task, card, translation, and image suggestions with parent review | AI is useful later but should not create unreviewed child-facing content.                                          |
| Persistence       | Optional `localStorage`                                                               | Database and user accounts                                                    | Local persistence is enough for testing and demo rehearsal.                                                        |
| Hosting / preview | Python static server, VS Code Live Server, or any static host                         | Netlify, Vercel, or production hosting                                        | Python is only a preview server, not part of the app logic.                                                        |
| Authentication    | Not included                                                                          | Parent/child accounts                                                         | Real accounts are out of scope for Phase 1.                                                                        |

### Stack rules for Phase 1

* Use the Phase 1 stack unless explicitly told otherwise by a human.
* React + Vite is a later-phase option only.
* Do not scaffold React, Vite, Next.js, or another framework for Phase 1 unless explicitly requested by a human.
* Do not run `npm`, `npx`, `create-vite`, `vite`, `npm install`, or `npm run dev` unless explicitly requested by a human.
* Do not create `package.json`, `vite.config.js`, `src/App.jsx`, or `src/main.jsx` unless explicitly requested by a human.
* A Python static server is acceptable only for local preview.
* Python should not be part of the app logic.
* Do not create a Python backend, Flask app, Django app, or FastAPI app unless explicitly requested.
* Keep implementation files inside `prototype/`.
* Keep briefing files inside `briefing/`.

---

## 6. Build phases

### Build phase 1: Static structure and sample data

Goal:

* Create the basic app shell using static files.

Features included:

* Parent Mode / Child Mode toggle
* Local sample data
* Fixed 20-card Hangul library
* Fixed local visual pool
* Basic layout and styling

Dependencies:

* `prototype/index.html`
* `prototype/styles.css`
* `prototype/script.js`

What must work before moving on:

* App loads without a framework or build step.
* Parent Mode and Child Mode are visible.
* Sample cards and visuals are available in local data.

---

### Build phase 2: Parent Mode setup flow

Goal:

* Let parents create or reuse task content.

Features included:

* Calendar/date picker
* To-do slot
* Hangul card slot
* Image slot
* Separate plus button for each slot
* To-do combobox with previous/saved tasks
* Image search filtering local visual data
* New Hangul card creation

Dependencies:

* Local task data
* Local Hangul card data
* Local visual pool data

What must work before moving on:

* Parent can create or reuse a task.
* Parent can create or select a Hangul card.
* Parent can select an image.
* Task, Hangul card, and image can be linked.

---

### Build phase 3: Child Mode routine flow

Goal:

* Let the child complete today’s Hangul matching routine.

Features included:

* Child Mode defaults to today’s date
* Today’s routine
* Task selection
* Korean audio prompt or simulated sound
* Hangul card matching
* Correct feedback
* Incorrect gentle retry feedback
* Completed task state

Dependencies:

* Parent-created or sample routine data
* Matching logic
* Audio or simulated audio behaviour

What must work before moving on:

* Child can select a task.
* Full Korean prompt sentence is not visible in Child Mode.
* Child can choose a Hangul card.
* Correct and incorrect states work.

---

### Build phase 4: Reward progress and reward unlock

Goal:

* Motivate the child and show completion.

Features included:

* Character-based hero reward progress visual
* Progress based on completed tasks divided by visible tasks
* Reward locked state
* Reward unlocked state
* Korean story reward card

Dependencies:

* Completion logic
* Reward data

What must work before moving on:

* Progress updates correctly.
* Hero visual becomes complete at 100%.
* Reward unlocks only when all visible tasks are complete.
* Korean story reward appears only after unlock.

---

### Build phase 5: Visual refresh and responsive polish

Goal:

* Make the app feel modern, warm, playful, calm, child-friendly, and parent-trustworthy.

Features included:

* CSS variables
* Card-based layout
* Larger touch targets
* Better spacing
* Clear selected, correct, incorrect, completed, and reward states
* Tablet-first layout
* Mobile and desktop support

Dependencies:

* Core flow working

What must work before moving on:

* No functionality is changed during the visual refresh.
* The app no longer feels like an old-fashioned form or generic dashboard.

---

## 7. Screen map

### Mode toggle

Purpose:

* Switch between Parent Mode and Child Mode.

Primary user:

* Parent and child.

Main components:

* Parent Mode button
* Child Mode button
* Parent-related icon for Parent Mode
* Child/home-related icon for Child Mode

User actions:

* Switch mode.

Important states:

* Parent Mode active
* Child Mode active

Rules:

* When switching to Child Mode, always reset to today’s date.

---

### Parent setup screen

Purpose:

* Parent creates or manages the child’s routine for a selected date.

Primary user:

* Parent.

Main components:

* Date picker or calendar
* To-do slot
* Hangul card slot
* Image slot
* Local visual search
* Previous task combobox

User actions:

* Select date
* Add or reuse task
* Create or select Hangul card
* Choose image
* Link task, Hangul card, and image

Important states:

* Empty date state
* Selected date state
* Task added state
* Incomplete task state
* Visual selected state
* Hangul card selected state

Rules:

* Do not combine task creation, Hangul card creation, and image selection into one modal.
* Do not use a global Save or Cancel button.

---

### To-do slot

Purpose:

* Parent creates or selects the English task.

Primary user:

* Parent.

Main components:

* Plus button
* Combobox input
* Previous/saved task suggestions
* Add action

User actions:

* Click plus
* Click input
* See previous tasks immediately
* Type to filter
* Select previous task
* Type new task
* Add task

Important states:

* Empty input
* Suggestions visible
* Filtered suggestions
* No matching task
* Task added

Rules:

* The To-do slot should not include image selection.
* The To-do slot should not include Hangul card creation.
* Parents must be able to type new tasks as well as select previous tasks.

---

### Hangul card slot

Purpose:

* Parent creates or selects Hangul cards.

Primary user:

* Parent.

Main components:

* Plus button
* Hangul card list
* New Hangul card input
* Optional English label
* Optional romanisation for internal reference
* Optional Korean prompt for audio

User actions:

* Create new Hangul card
* Select existing Hangul card
* Link Hangul card to task

Important states:

* Empty card state
* Card selected
* New card created
* Incomplete card

Rules:

* Hangul card creation must remain separate from English task creation and image selection.

---

### Image slot

Purpose:

* Parent chooses the visual linked to a task.

Primary user:

* Parent.

Main components:

* Plus button
* Search input
* Fixed local visual pool
* Visual cards or icons

User actions:

* Search local visual pool
* Select visual
* Link visual to task

Important states:

* Empty search
* Filtered results
* No result
* Visual selected

Rules:

* Search filters local visual data only.
* Do not use live image search.
* Do not use random web images.
* Do not use unlicensed images.

---

### Child daily routine screen

Purpose:

* Child sees today’s routine and starts Hangul matching.

Primary user:

* Child.

Main components:

* Today’s date
* Visual task list
* Hangul cards
* Sound indicator
* Reward progress visual
* Feedback message

User actions:

* Tap task
* Hear or simulate Korean prompt
* Tap Hangul card
* Complete tasks
* Unlock reward

Important states:

* No task selected
* Task selected
* Sound playing
* Correct match
* Incorrect match
* Completed task
* All tasks complete
* Reward locked
* Reward unlocked

Rules:

* Korean prompt sentences are audio-only.
* Do not show full Korean prompt sentences in Child Mode.
* Do not show a “Listen again” bar.
* To replay audio, the child taps the same task again.

---

### Reward progress and reward card

Purpose:

* Show progress toward reward and reveal reward after completion.

Primary user:

* Child.

Main components:

* Generic hero progress visual
* Progress text
* Reward locked state
* Korean story reward card

User actions:

* Complete tasks
* Open reward after unlock

Important states:

* 0% progress
* Partial progress
* 100% complete
* Reward unlocked
* Reward opened

Rules:

* Use a generic child-friendly hero, not a copyrighted character.
* Do not use Superman or any copyrighted superhero.
* Do not auto-open YouTube.
* Do not embed random YouTube content.

---

## 8. Core user flows to support

### Parent setup flow

1. Parent opens the app.
2. Parent enters Parent Mode.
3. Parent selects today or a future date.
4. Parent sees three separate slots:

   * To-do slot
   * Hangul card slot
   * Image slot
5. Parent clicks the plus button in the To-do slot.
6. Parent either selects a previous task from the combobox or types a new task.
7. Parent adds the task to the selected date.
8. Parent clicks the plus button in the Hangul card slot.
9. Parent creates or selects the Hangul card.
10. Parent clicks the plus button in the Image slot.
11. Parent searches or browses the local visual pool.
12. Parent selects the image.
13. Parent links the selected To-do task, Hangul card, and image together for the selected date.
14. The selected task is shown as complete for setup once all three pieces are linked.
15. Parent switches to Child Mode.
16. Child Mode opens on today’s date by default.

---

### Child learning flow

1. Child enters Child Mode.
2. Child sees today’s routine.
3. Child taps a visual task.
4. The selected task is highlighted.
5. The app plays or simulates the Korean prompt sentence.
6. The Korean prompt sentence is not displayed as visible text.
7. Child taps a Hangul card.
8. If correct, the task is marked complete and positive feedback is shown or played.
9. If incorrect, gentle retry feedback is shown or played.
10. Child repeats until all visible tasks are complete.
11. Reward progress updates after each completed task.
12. Reward unlocks at 100%.

---

### Reward flow

1. Child sees hero reward progress during the routine.
2. Hero illustration becomes more complete as tasks are completed.
3. At 100%, the hero illustration is complete.
4. Reward unlocks.
5. Child opens a Korean story reward card.
6. Child sees a short original Korean story.
7. English support remains parent-facing only.

---

## 9. Core data contract

Use plain local data.

Do not over-engineer.

### Routine task

```js
{
  id: "task-wash-face",
  date: "2026-05-29",
  englishLabel: "Wash face",
  timeLabel: "Morning",
  hangulCardId: "card-sesu",
  visualId: "visual-face-water",
  isComplete: false
}
```

### Hangul card

```js
{
  id: "card-sesu",
  englishLabel: "Wash face",
  hangul: "세수",
  koreanPrompt: "세수할 시간이야",
  romanisation: "se-su",
  category: "morning",
  correctFeedback: "맞아요. 잘했어요.",
  hintPhrase: "다시 해볼까요?"
}
```

### Visual asset

```js
{
  id: "visual-face-water",
  label: "Face with water",
  keywords: ["wash", "face", "water", "morning"],
  visualSource: "emoji",
  fallbackEmoji: "🧼"
}
```

### App mode

```js
{
  activeMode: "parent",
  parentSelectedDate: "2026-05-30",
  childSelectedDate: "2026-05-29"
}
```

Rules:

* `childSelectedDate` should reset to today when entering Child Mode.
* Parent Mode may keep its selected date.

### Matching state

```js
{
  selectedTaskId: "task-wash-face",
  selectedCardId: null,
  feedbackType: null,
  soundPlayingTaskId: null
}
```

### Reward state

```js
{
  completedCount: 2,
  totalCount: 5,
  progressPercent: 40,
  isRewardUnlocked: false,
  rewardOpened: false
}
```

### Reward content

```js
{
  id: "reward-little-hero",
  title: "오늘의 작은 영웅",
  koreanStory: [
    "오늘 나는 작은 영웅이에요.",
    "세수를 하고, 양치도 했어요.",
    "숙제도 조금 해냈어요.",
    "하나씩 하니까 더 잘할 수 있었어요.",
    "오늘도 정말 잘했어요!"
  ],
  englishSupportParentOnly: [
    "Today, I am a little hero.",
    "I washed my face and brushed my teeth.",
    "I also did a little homework.",
    "Step by step, I could do better.",
    "I did really well today."
  ]
}
```

### Previous task item

```js
{
  id: "previous-brush-teeth",
  englishLabel: "Brush teeth",
  hangulCardId: "card-yangchi",
  visualId: "visual-toothbrush",
  category: "morning"
}
```

---

## 10. Visual asset strategy

Use a fixed 20-card Hangul library for Phase 1.

The designer does not need to manually provide 20 static image files.

Each card can map to a consistent open-source or licensed visual source.

Each card should store:

* Visual source
* Icon reference or keyword
* Fallback emoji

Rules:

* Use one consistent visual style.
* Do not use random web image search.
* Do not use unlicensed images.
* Do not mix random visual styles.
* Include attribution if the selected visual source requires it.
* AI-generated visuals are later-phase only unless explicitly requested.

---

## 11. Audio and Korean language strategy

When a child taps a visual task, the app should play or simulate a Korean sentence.

When a child selects the correct Hangul card, the app should give encouraging feedback.

Incorrect matches should trigger gentle retry feedback.

Audio can be:

* Real recorded or generated audio, if available
* Browser text-to-speech
* Simulated audio with speaker icon and animation

Do not block the Phase 1 prototype on real recorded or generated audio.

Rules:

* Preserve Korean words and phrases from the briefing.
* Do not rewrite Korean phrases unless explicitly instructed.
* All Korean words and phrases should be reviewed by a Korean-speaking adult before final use.
* Full Korean prompt sentences should not be visible in Child Mode.
* Romanisation is internal unless explicitly requested.
* English labels may appear in task slots, but not on Hangul cards.

---

## 12. Shared components

* Mode toggle — switches between Parent Mode and Child Mode.
* Date picker — lets parent select today or a future date.
* To-do slot — lets parent create, type, or reuse English task labels.
* To-do combobox — shows previous tasks on focus and filters as the parent types.
* Hangul card slot — lets parent create or select Hangul cards.
* Image slot — lets parent select visuals from the fixed local visual pool.
* Visual search — filters local image/icon data only.
* Routine task card — shows a task in the parent or child routine.
* Hangul card — displays a short Hangul word for matching.
* Feedback message — shows correct, incorrect, or encouraging feedback.
* Sound indicator — shows that audio is playing without displaying the Korean prompt sentence.
* Hero reward progress — shows a generic hero illustration becoming complete as tasks are completed.
* Reward card — displays the Korean story reward.
* Reset prototype button — restores the default sample state for testing.

---

## 13. Domain vocabulary

| Term                  | Plain-language definition                                                                                                |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| Hangul                | The Korean writing system.                                                                                               |
| Korean heritage child | A child with Korean family or cultural background who may understand spoken Korean but is less confident reading Hangul. |
| Routine task          | A familiar daily action such as washing face, brushing teeth, or doing homework.                                         |
| To-do slot            | Parent area for creating or selecting the English task.                                                                  |
| Hangul card           | A card showing the Korean word used in the matching activity.                                                            |
| Image slot            | Parent area for selecting the visual linked to a task.                                                                   |
| Visual pool           | Fixed local set of child-friendly icons or visuals.                                                                      |
| Korean prompt         | Korean sentence played as audio when a task is tapped.                                                                   |
| Parent Mode           | Setup mode where the parent creates or manages routine content.                                                          |
| Child Mode            | Learning mode where the child completes the matching activity.                                                           |
| Combobox              | Input where a parent can select a previous task or type a new one.                                                       |
| Reward progress       | Visual indicator that shows how close the child is to unlocking a reward.                                                |
| Hero progress visual  | Generic child-friendly hero illustration that becomes complete as tasks are completed.                                   |

---

## 14. Prototype review decisions

These decisions override earlier ambiguous behaviour.

### Build architecture

For Phase 1, use a lightweight static prototype unless explicitly requested otherwise.

Preferred structure:

```text
prototype/
  index.html
  styles.css
  script.js
```

Do not scaffold React, Vite, Next.js, or any framework unless explicitly requested by a human.

A Python static server may be used only to preview static files locally.

Python should not be part of the app logic.

---

### Parent Mode structure

Parent Mode must use three separate slots or columns:

1. To-do slot
2. Hangul card slot
3. Image slot

Each slot must have its own plus button.

Do not combine English task creation, Hangul card creation, and image selection into one modal.

Use a simple three-column layout.

Do not build a full drag-and-drop Kanban board unless explicitly requested.

---

### To-do combobox

The To-do slot should use a combobox interaction.

Parents can either:

* Select from previous/saved tasks
* Type a new task manually

Required behaviour:

* Clicking into the empty input shows previous/saved tasks immediately.
* Typing filters the previous/saved task list.
* Parent can click a previous task to reuse it.
* Parent can press Enter or click Add to add a typed task.
* Parent is not forced to choose from previous tasks.

If a selected previous task already has a linked Hangul card and visual, reuse them.

If the task is new or incomplete, the parent can complete the Hangul card and visual separately in their own slots.

For Phase 1, implement this with plain HTML, CSS, and JavaScript.

Do not add an external combobox library.

---

### Date behaviour

Parent Mode may allow the parent to view or edit future dates.

The date selector should be a simple calendar or date picker.

Do not use an image grid in the To-do/date area.

When switching from Parent Mode to Child Mode, Child Mode must always reset to today’s date.

Child Mode should not inherit a future date selected in Parent Mode.

---

### Child Mode audio behaviour

The child should hear the Korean sentence, not read it.

Keep the Korean prompt in the data model for audio or future text-to-speech.

Do not render full Korean prompt sentences into the Child Mode UI.

Examples of hidden prompt text:

* 아침 먹을 시간이야
* 세수할 시간이야
* 양치할 시간이야

When the child taps a to-do item, play or simulate the Korean prompt sound.

If the child wants to hear it again, they can tap the same to-do item again.

Do not show a “Listen again” sound bar.

It is acceptable to show a temporary non-text sound indicator, such as a speaker icon or pulsing animation.

---

### Reward progress visual

Replace standard progress bars or star meters with a character-based reward progress visual.

Use a generic child-friendly hero, not a copyrighted character.

Implementation guidance:

* 0%: faded or outline hero
* 25%: first part appears
* 50%: more of the hero appears
* 75%: almost complete hero
* 100%: full hero illustration appears and reward unlocks

The progress should update based on completed tasks divided by total visible tasks.

Show simple progress text such as:

* “20% complete”
* “3 of 5 tasks done”

Do not use external image dependencies.

Do not use copyrighted superhero characters.

Do not use random web images.

The reset prototype action should reset the hero progress back to 0%.

---

### Reward content

For Phase 1, use a simple parent-approved Korean story card as the reward.

Do not auto-open YouTube.

Do not embed random YouTube content.

Do not select copyrighted cartoon content automatically.

Example reward story:

Title:

* 오늘의 작은 영웅

Korean story:

* 오늘 나는 작은 영웅이에요.
* 세수를 하고, 양치도 했어요.
* 숙제도 조금 해냈어요.
* 하나씩 하니까 더 잘할 수 있었어요.
* 오늘도 정말 잘했어요!

English support is parent-facing only and should not be shown in Child Mode.

---

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

If localStorage is used, clear or reset the relevant localStorage keys.

This is a prototype testing feature, not necessarily a final product feature.

---

### Visual style

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

## 15. Hard rules

* Do not treat this as a generic to-do list app.
* Build every feature around Hangul learning, visual recognition, pronunciation, and child engagement.
* The daily schedule is the learning mechanic, not the product goal.
* Do not prioritise productivity features such as complex task management, filters, dashboards, or analytics unless explicitly requested.
* Do not turn later-phase opportunities into Phase 1 requirements.
* Do not display full Korean prompt sentences in Child Mode.
* Do not show a “Listen again” sound bar.
* Do not combine To-do creation, Hangul card creation, and image selection into one modal.
* Do not use a global Save or Cancel button for Parent Mode.
* Do not let Child Mode inherit a future date selected in Parent Mode.
* Do not use live image search for the Image slot.
* Do not use random web images.
* Do not use unlicensed images.
* Do not scaffold a framework for Phase 1 unless explicitly requested by a human.
* Do not run `npm`, `npx`, `create-vite`, `vite`, `npm install`, or `npm run dev` unless explicitly requested by a human.
* Do not use standard progress bars or star meters for the reward if a hero progress visual is specified.
* Do not use copyrighted superhero characters.
* Do not auto-open YouTube.
* Do not embed random YouTube content.
* Do not show AI-generated cards directly to children without parent review.
* Do not rewrite Korean phrases unless explicitly instructed.
* Do not make wrong answers feel punitive.
* Do not rely only on colour to communicate success or error.
* Do not introduce a new library unless it is necessary and explained.

---

## 16. Out of scope for Phase 1

* Real authentication
* Real parent or child accounts
* Full database backend
* Real translation service
* Live image search
* Random web image use
* Real AI-generated task creation
* AI-generated visuals shown directly to children
* Full video library
* Auto-opened YouTube reward
* Copyrighted cartoon reward content
* Advanced analytics
* Child progress tracking
* Complex drag-and-drop if tap-to-match is simpler and more stable
* React/Vite/Next scaffolding unless explicitly requested by a human
* Python backend or server-side app logic

---

## 17. Key benchmarks

* First screen should be understandable within 5 seconds.
* Main parent-to-child flow should be demoable in under 3 minutes.
* User should reach the first meaningful interaction in as few steps as possible.
* Interface should be responsive on desktop, tablet, and mobile.
* Tablet experience should be prioritised.
* Touch targets should be large enough for children aged 4–6.
* Loading states should appear for any action that takes more than 1 second.
* Error messages should explain what happened and what the user can do next.
* Incorrect match feedback should feel gentle and encouraging.
* Korean prompt text should be hidden in Child Mode.
* Reward unlock should be visible and satisfying.
* Reset prototype should allow repeat testing.
* The prototype should work with sample data.

---

## 18. Demo path

1. Open the prototype.
2. Enter Parent Mode.
3. Select today or a future date.
4. Add or reuse a task through the To-do combobox.
5. Create or select a Hangul card from the Hangul card slot.
6. Search or select a visual from the Image slot.
7. Link the task, Hangul card, and image.
8. Switch to Child Mode.
9. Child Mode opens on today’s date.
10. Child taps a visual task.
11. App plays or simulates the Korean prompt without showing the Korean sentence.
12. Child taps the matching Hangul card.
13. App shows correct or incorrect feedback.
14. Child completes all visible tasks.
15. Hero reward progress reaches 100%.
16. Korean story reward unlocks.
17. Reset prototype can be used to test again.

---

## 19. Open questions for implementation

> ⚠️ TBD: Which exact 20 cards are confirmed for the Phase 1 demo?

> ⚠️ TBD: Should morning and evening tooth-brushing use the same Hangul card or two distinct cards?

> ⚠️ TBD: Who will review Korean language accuracy before the demo?

> ⚠️ TBD: Should OpenMoji or Noto Emoji be the primary visual source for Phase 1?

> ⚠️ TBD: Where should visual asset attribution appear?

> ⚠️ TBD: Should Hangul cards always be fully visible, or only cards relevant to today’s routine?

> ⚠️ TBD: Should distractor Hangul cards be shown to increase the matching challenge?

> ⚠️ TBD: Should the Parent Mode button be labelled “Parent”, “Parent Mode”, or something else?

> ⚠️ TBD: Should there be friction to prevent a child from accidentally entering Parent Mode?

> ⚠️ TBD: Should English labels remain visible in Child Mode task slots, or should icons/audio carry more of the meaning?

> ⚠️ TBD: Should real audio be added later, or is browser text-to-speech sufficient for Phase 1?

> ⚠️ TBD: How should the parent link a To-do task, Hangul card, and image in the UI — by selecting an active task first, or by editing an incomplete task card?

---

## 20. Final check before coding

Before making changes, the AI coding assistant must check:

* Does this support Hangul learning?
* Does this preserve Parent Mode and Child Mode separation?
* Does this keep To-do, Hangul card, and Image creation separate?
* Does this avoid showing full Korean prompt text in Child Mode?
* Does this avoid random images and live image search?
* Does this avoid overbuilding future-phase features?
* Does this preserve the static Phase 1 stack unless explicitly changed by a human?
* Does this avoid scaffolding React/Vite unless explicitly requested by a human?
* Does this keep the prototype usable for repeated testing?
