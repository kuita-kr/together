# Visual Reference

---

## 1. Source files

All three visual references are hand-drawn pencil sketches on lined notebook paper. They are visual thinking tools, not final UI specifications. They should guide layout, flow, interaction direction, and tone — not be copied exactly.

| Label | File path |
|---|---|
| Sketch 1 | `Assets/Todo list idea sketch - child mode.jpeg` |
| Sketch 2 | `Assets/Todo list idea sketch - parents mode to add new tasks.jpeg` |
| Sketch 3 | `Assets/Todo list idea sketch - select calendar view for parents mode to create a todo list.jpeg.jpeg` |

The written briefing files (`briefing/project-brief.md`, `briefing/design-briefing.md`, and all epic files) are the source of truth for product intent, scope, users, and requirements.

---

## 2. Overall visual direction

The sketches describe a **calm, structured, tablet-first app** that balances the child's playful learning experience with the parent's need for quick, confident control.

The overall visual character to aim for:

- **Warm and friendly** — encouraging rather than instructional; nothing should feel like school
- **Calm and uncluttered** — only the content that matters is on screen at a time; generous white space
- **Playful without being chaotic** — large, clear cards and blocks; icons that children can immediately recognise
- **Tablet-first layout** — the three-panel structure in Sketch 1 clearly assumes a wide screen (tablet landscape or desktop); it must be adapted for smaller screens
- **Bilingual and culturally present** — the date is shown in English and Korean on every screen; this signals from the start that this is a Korean learning space, not a generic task app
- **Low-pressure, routine-based** — the interface is a schedule, not a test; the child should feel like they are following their day, not sitting an exam

The sketches do not use colour. The visual design (colour, typography, brand) is fully TBD and should be developed from this foundation.

---

## 3. Sketch-by-sketch analysis

---

### Sketch 1: Child daily routine screen — `Todo list idea sketch - child mode.jpeg`

**Likely purpose**

The child's main learning screen — where the child follows their daily routine and matches Hangul cards to visual tasks.

**Related flow or screen**

Child learning flow / Hangul card matching / Completion state / Reward unlock

---

**Layout ideas to borrow**

- **App header:** App title "Todo list" with a small house icon on the left, and the two mode toggle buttons ("children mode" / "Mum mode") on the far right — the mode toggle is persistent across all views
- **Date and language subheader:** "29 May 2026, Friday 금요일" occupying the full width below the title — the day name appears in both English ("Friday") and Korean (금요일); a calendar grid icon sits to the right of the date
- **Banner image row:** Directly below the date header, there is a small rectangular image/illustration area — this may represent a featured image, the child's name, or a greeting banner; its exact purpose is unclear but the space is worth preserving as a warm header element
- **Three-column layout on a wide screen:**
  - Left column — "To do" panel: vertical list of task slots
  - Centre column — "Hangul" panel: two-column grid of Hangul word cards
  - Right column — Completion/reward panel (replaces or extends the Hangul column after all tasks are done)
- **Task slots (left column):** Each task is a bordered rectangle containing: a time label at the top (7:30am, 4pm, 5pm, 8pm), a small icon, and an English label. The first task ("wash face") appears to have a strikethrough — possibly indicating a completed state. All tasks are grouped within a single outer bordered container
- **Hangul card panel (centre column):** Two-column arrangement of Hangul cards — left sub-column has 5 cards (세수, 양치, 학교가기, 숙제, 손씻기), right sub-column has 2 cards at the top (appears to show 이야기 and 목욕 — exact Korean text TBD from review). All cards are uniform rectangular blocks of similar height. No English or romanisation is shown on the cards — Korean only
- **Completion/reward panel (right column):** Labelled "끝 / Finished" at the top. Contains two distinct elements: (1) a large circular illustrated image (appears decorative — possibly a fruit, flower, or Korean cultural motif); (2) a dashed-border rectangular box below it (the mock video card placeholder). The text "Korean Story related App" is written below the dashed box

**Interaction ideas to borrow**

- Each task in the "To do" list has an annotation to the right labelled "sounds:" followed by a Korean phrase — this confirms that tapping a task triggers a Korean audio prompt
- The audio annotation for "wash face" reads approximately 세수할 시간이야
- The audio annotation for "wash hands" (4pm) shows multiple Korean phrases on separate lines — this may indicate that the sketch is noting both the task prompt and the incorrect-answer hint phrases as a set (not that multiple phrases play simultaneously)
- The completion panel is spatially to the right of the Hangul cards — this suggests it either replaces the Hangul column after all tasks are complete, or appears as a transition screen
- The "끝" label (끝 = finished/end) combined with "Finished" is a bilingual completion signal

**Visual hierarchy ideas to borrow**

- Time labels are the smallest text — they provide structure but do not dominate
- Task labels (English) are clear and readable
- Hangul cards are the largest single interactive element — they need to be the most tap-accessible items in the child view
- The reward/completion panel uses the largest visual content (the circular illustration) — this communicates "this is special"
- Left-to-right reading order maps naturally to the interaction flow: choose a task (left) → pick a card (centre) → celebrate (right)

**Useful details to preserve**

- Date shown in both English and Korean on every screen
- House icon in the app header — suggests home, routine, and warmth
- Calendar grid icon beside the date — a non-intrusive way to access the date selector
- Mode toggle as two persistent circular/pill buttons top-right
- Hangul cards in a two-column arrangement — more compact than a single column, still large enough to tap
- The strikethrough on "wash face" as a possible visual treatment for completed tasks
- The dashed-border box in the reward panel — signals a content placeholder (video card) without requiring real video in Phase 1
- "끝" and "Finished" together — bilingual completion confirmation

**What is unclear**

> ⚠️ TBD: Are the three panels (task list / Hangul cards / completion-reward) shown simultaneously on screen, or does the completion panel appear only after all tasks are done? This is a key interaction design decision.

> ⚠️ TBD: The audio annotation for 4pm "Wash hands" shows multiple Korean lines — are these all played in sequence (e.g. task prompt + possible hint phrases), or is this the designer thinking through the content options?

> ⚠️ TBD: The banner image area below the date header — what should this contain? A greeting, the child's name, a decorative illustration, or a featured task image?

> ⚠️ TBD: The "wash face" task label appears to be crossed out — does this represent a completed state visual treatment (strikethrough), or is it just a sketch annotation?

> ⚠️ TBD: The right sub-column of the Hangul panel shows two cards at the top — the Hangul text is partially legible (appears to include 이야기 and 목욕). The full confirmed card set must be reviewed by a Korean-speaking adult.

> ⚠️ TBD: The circular illustration in the reward panel is unclear — it may represent a fruit, a Korean cultural motif, or a character. Do not copy literally; use as inspiration for a culturally connected reward visual.

---

### Sketch 2: Parent mode — add task flow — `Todo list idea sketch - parents mode to add new tasks.jpeg`

**Likely purpose**

The Parent Mode task creation flow — how a parent adds a new task with a visual icon and Hangul word.

**Related flow or screen**

Parent setup flow / Add task popup / Visual pool selection / Hangul word selection

---

**Layout ideas to borrow**

- **App header:** "To do list" with a **lock icon** (a house or rectangular shape topped with a triangle — different from the house icon in Sketch 1/3, suggesting Parent Mode uses a lock symbol to distinguish it visually)
- **Date subheader:** "1 June 2026, Monday 월요일" — same bilingual date format as Sketch 1, confirming this is a consistent pattern across modes
- **Action buttons (top right):** "Cancel | **Save** | Edit" — Save is in a box or visually emphasised as the primary action; Cancel and Edit are secondary. These are persistent header-level actions visible while editing
- **Three-column layout (mirroring Sketch 1):** The same column structure is reused for Parent Mode, which helps the designer maintain consistency between modes:
  - Left column — "To do" task management panel
  - Centre column — "Hangul" word management panel
  - Right column — visual/image browser panel
- **Left column — "To do" panel:**
  - A large circular "+" button labelled "open pop up" — this is how the parent starts adding a task
  - A popup card is sketched overlaying the panel, showing: a "Task" text input field at the top, an "Image" section with a small grid of image thumbnail squares below it, and a "Save" button at the bottom right of the popup
- **Centre column — "Hangul" panel:**
  - A large circular "+" button at the top (same size and style as in the "To do" panel)
  - Below the "+" button: some crossed-out text (an earlier idea scratched out — do not copy)
  - Below that: a 2×3 grid of small rectangular chips (6 chips total); the first chip shows what appears to be "보" (a Hangul syllable, likely representing a predefined suggestion chip); the others appear empty or with small marks
  - An arrow annotation pointing to the chip grid reads: "user can type straight" — confirming the parent can also type a Hangul word directly, not just pick from the chips
- **Right column — visual pool/image browser:**
  - A large circular "+" button at the top (consistent with other panels)
  - A "Q search" search field below it — allowing the parent to search or filter within the visual pool
  - A scrollable list area below the search field (represented by horizontal lines — suggesting rows of image results or icons)
  - A "Save" button at the bottom right of the panel

**Interaction ideas to borrow**

- Task creation via a popup overlay (not a full-screen form) — the parent stays in context
- The popup has two distinct sections: task name input and image selection grid — these may be completed in sequence or at the same time
- The Hangul section is a separate column/step from the task name — the parent assigns the Korean word after (or independently of) naming the task
- Predefined Hangul suggestion chips allow quick selection without typing
- "User can type straight" confirms a freeform Hangul input option alongside the chips
- The visual pool is searchable and scrollable — not just a static grid
- Save is the primary persistent action — always visible in the header during editing

**Visual hierarchy ideas to borrow**

- Lock icon in the header distinguishes Parent Mode from Child Mode without requiring a label change — a strong visual signal that this is a different (controlled) space
- The "+" button is the dominant action in each panel — large, circular, centred — making it immediately obvious how to start
- The popup card creates a focused task-creation moment without navigating away from the main layout
- Save (boxed/bold) vs Cancel (plain) clearly signals which is the primary action

**Useful details to preserve**

- Lock icon = Parent Mode / House icon = Child Mode — a simple but powerful mode visual signal
- Popup for task creation (not full-screen) — keeps the parent in context
- 2×3 chip grid for Hangul suggestions — visible at a glance, selectable in one tap
- "User can type straight" — direct Hangul text input alongside chips
- Searchable visual pool — Q search field is a good UX pattern for a parent browsing icons
- Persistent "Cancel | Save | Edit" in the header during editing

**What is unclear**

> ⚠️ TBD: Are the task popup (left column) and the Hangul panel (centre column) part of the same creation step, or are they sequential — first name the task, then assign the Hangul word?

> ⚠️ TBD: The 2×3 chip grid in the Hangul panel — are these chips pre-populated Hangul word suggestions (e.g. the 20-card library words), or are they empty slots for the parent to fill? The "보" syllable visible on one chip needs to be confirmed.

> ⚠️ TBD: The right panel "+" button with Q search — does the "+" mean "add a new image to the pool", or does it trigger opening the pool from a closed state? Its relationship to the popup in the left column is unclear.

> ⚠️ TBD: Does the image grid in the popup show only a small selection, with the right panel showing the full pool — or are these the same selection just shown at different stages?

---

### Sketch 3: Parent mode — calendar date selector — `Assets/Todo list idea sketch - select calendar view for parents mode to create a todo list.jpeg.jpeg`

**Likely purpose**

The Parent Mode calendar view — how the parent selects a date to add or review tasks.

**Related flow or screen**

Daily routine scheduler / Parent setup flow / Date selection

---

**Layout ideas to borrow**

- **App header:** "Todo list" with a house-style icon (similar to Sketch 1, not the lock icon) — this suggests Sketch 3 may represent a view accessible to both modes, or that the calendar is the entry/home screen before entering Parent Mode specifically
- **Date subheader:** "29 May 2026, Friday 금요일" — same bilingual date format, now with a calendar **grid icon** to the right and the annotation "click" pointing to it — clearly showing the calendar icon is the trigger to reveal the calendar grid below
- **Mode toggle:** Two oval/pill buttons at top right — "Children" and "Mon" (likely "Mum" truncated); "Mon" appears to be the active (filled) button, suggesting Parent Mode is active in this view
- **Calendar grid:** A large rectangular box fills most of the screen below the header. It shows two rows of dates in 7 columns:
  - Row 1: 29, 30, 1, 2, 3, 4, 5 (dates from 29 May to 5 June)
  - Row 2: 6, 7, 8, 9, 10, 11, 12 (dates from 6 to 12 June)
  - Vertical dividers separate each date cell
  - The date "1" (1 June) appears to have diagonal hatching — possibly indicating it is the selected or current date
  - No day-of-week labels (Mon, Tue, etc.) are shown in the grid — just date numbers

**Interaction ideas to borrow**

- Tapping the calendar icon in the date subheader reveals (or toggles) the calendar grid — not a separate navigation step
- The calendar grid fills the main content area when expanded — it is large and easy to tap on a tablet
- Tapping a date selects it — the parent can then add or edit tasks for that date
- The calendar acts as a date picker, not a full scheduling view — detailed task management happens after the date is selected

**Visual hierarchy ideas to borrow**

- The calendar icon next to the date header is small and unobtrusive — it does not dominate the header but is clearly interactive
- The calendar grid itself is large and simple — only numbers in cells, no decorative clutter
- Selected/today date is visually distinguished from other dates (hatching/fill on date "1")
- The date header and mode toggle remain visible when the calendar is open — continuity across states

**Useful details to preserve**

- Calendar icon as the toggle trigger — not a separate "calendar" button in navigation
- Two-week grid (14 days shown) — practical for planning the near future without overwhelming the parent
- Clean, number-only cells — no colour or text clutter; large enough to tap accurately
- Bilingual date in the header persists when the calendar is open
- Mode toggle persists in all calendar states

**What is unclear**

> ⚠️ TBD: The sketch shows two rows of 7 dates each (14 days). Should the calendar show 7 days, 14 days, or a full month? The source note does not specify the exact number of rows.

> ⚠️ TBD: No day-of-week labels appear in the grid (Mon, Tue, etc.) — should day labels be shown above each column? Not having them may be confusing.

> ⚠️ TBD: The calendar grid appears to fill the entire main content area when open — does this replace the task list temporarily, or is the task list shown below the calendar?

> ⚠️ TBD: The "1" date appears to have diagonal hatching — is this indicating "today", "selected date", or "has tasks"? This visual treatment needs to be designed clearly.

> ⚠️ TBD: Sketch 3 shows a house icon in the header (same as Sketch 1/Child Mode), while Sketch 2 shows a lock icon. Should the calendar view always show the house icon, or the icon for the active mode?

---

## 4. What to borrow across the references

**Layout and structure**
- Three-panel layout (task list / Hangul cards / completion or detail panel) — strong structural idea for tablet landscape
- Consistent three-column structure across Parent Mode and Child Mode — same scaffold, different content
- The same visual scaffold used in both modes reduces cognitive load when switching between them

**Mode distinction**
- House icon = Child Mode / Lock icon = Parent Mode — immediate visual signal, no label needed
- Mode toggle as two persistent circular/pill buttons in the top-right corner of every screen
- Bilingual date subheader on every screen — English and Korean day name together

**Daily routine screen**
- Time-ordered task list as the left panel — time labels at the top of each task slot
- Task slots as bordered rectangles: time + icon + English label
- Strikethrough or similar treatment for completed tasks (explore this as a child-friendly "done" state)
- Hangul cards in a two-column grid — compact but large enough to tap accurately

**Card placement and matching**
- Hangul cards are uniform rectangular blocks — consistent height and width, Korean text only
- No English or romanisation on the Hangul cards — Korean only
- Two-column card arrangement fits more cards on screen without making them too small

**Parent task creation**
- "+" as the primary action button — large, circular, centred, obvious
- Popup overlay for task creation — keeps the parent in context of the full layout
- Persistent Cancel / Save actions in the header during any editing state
- Save visually emphasised (boxed or bold) as the primary action
- 2×3 chip grid for quick Hangul word selection alongside a freeform text input

**Reward and completion**
- Completion panel is visually distinct from the task and card panels — uses larger, more illustrated content
- "끝 / Finished" as a bilingual completion signal
- Two-part reward: a decorative visual (large illustrated shape) + a content placeholder (dashed-border box = mock video card)
- The reward content panel should feel clearly different from the routine — more celebratory, less structured

**Touch and scale**
- Large tap targets throughout — task slots, Hangul cards, and "+" buttons are all generously sized
- Generous spacing between elements — nothing is cramped in the sketches
- Simple date cells in the calendar — large enough to tap without precision

**Tone and personality**
- Simple, clear, minimal text — children should not need to read to understand what to do
- Bilingual presence without being formal — English and Korean sit side by side naturally
- "Korean Story related App" as the reward label — the reward should feel culturally connected to Korean content, not generic

---

## 5. What not to copy

- **Exact layout proportions** — the three-column layout suits a wide tablet screen; it must adapt for mobile (single column or two columns with scroll) and desktop
- **Exact label text** — "Mum mode", "Mon", "Children" are placeholder labels in the sketch; final mode labels must be decided thoughtfully (see open questions)
- **The lock icon as a literal lock** — using a padlock may feel like security or restriction; consider whether a softer icon (e.g. a settings gear, a parent figure, a key) better communicates "this is the parent's space"
- **Exact card dimensions and typography** — set by the design system and accessibility requirements, not the sketch proportions
- **Exact colours** — no colour is shown; this is fully TBD and should be developed to support warmth, child-friendliness, and parent trust
- **The icon placeholders in task slots** — these are rough sketch symbols; use the confirmed open-source visual source (OpenMoji or Noto Emoji) for all task icons
- **The circular illustration in the reward panel** — this is a rough shape idea only; do not copy literally; design a culturally connected Korean reward visual
- **The dashed-border box label "드드리 / 드르리"** — this text is partially legible and its meaning is unclear; treat the dashed box as a placeholder concept only
- **The Korean audio phrases written as annotations** — these are the designer's thinking notes; treat as indicative only and have all Korean content reviewed before use
- **The crossed-out text in Sketch 2** — this is an earlier idea that was discarded; do not try to interpret it
- **No day labels in the calendar** — the sketch omits day-of-week labels; the final design should include them for usability
- **Any visual pattern that makes the app feel like a generic to-do list** — the task list is a learning scaffold, not a productivity tool; design choices should constantly reinforce the Hangul learning purpose

---

## 6. Screen-level visual guidance

### Mode toggle / persistent header

**Visual purpose:** Establish which mode is active and allow switching at any time.

**Layout direction:** Two pill or circular buttons in the top-right corner. One filled (active mode), one outline (inactive mode). This is persistent on every screen.

**Primary content:** Mode buttons — e.g. "Children" / "Mum" (labels TBD). App title and icon on the left. Bilingual date in the subheader row.

**Primary action:** Tap the inactive mode button to switch.

**Important visual states:**
- Child Mode active: house icon in header, Children button filled
- Parent Mode active: lock icon in header, Mum/Parent button filled

**Notes from sketches:** Both Sketch 1 and Sketch 3 show the mode toggle in the same position. Sketch 3 confirms "Mon" (Mum) is the filled/active button when the parent is using the calendar. Sketch 1 shows "children mode" and "Mum mode" as the two labels.

---

### Child daily routine screen

**Visual purpose:** The child's entry point — shows today's tasks and the Hangul cards to match.

**Layout direction:** Three panels on tablet landscape:
- Left: "To do" — time-ordered vertical list of task slots
- Centre: "Hangul" — two-column grid of Hangul word cards
- Right: Hidden or inactive until completion (shows completion/reward state after all tasks done)

On mobile: single-column flow with task list above Hangul cards (or a tab/swipe between them).

**Primary content:** Task slots (time + icon + English label); Hangul card grid (Korean only); date/day in English and Korean.

**Primary action:** Tap a task to select it; tap a Hangul card to attempt a match.

**Important visual states:**
- Idle: All tasks visible, no task selected, all cards available
- Task selected: One task highlighted (border, glow, or scale); Korean audio playing (visible audio indicator); cards ready to tap
- Correct match: Positive visual on both task and card; task marked complete (strikethrough, tick, or fade)
- Incorrect match: Gentle negative state (soft shake, outline change — not red or harsh); task stays selected; retry
- All complete: Completion panel becomes visible or transitions in from the right

**Notes from sketches:** Sketch 1 shows the task "wash face" with a strikethrough — worth exploring as the completion treatment for individual tasks. The two-column Hangul card arrangement is compact and practical for 10–20 cards.

---

### Parent schedule screen

**Visual purpose:** Parent views and manages the day's task list; entry point for Parent Mode.

**Layout direction:** Same three-column scaffold as Child Mode, but with parent-specific controls:
- Left: Task list with "+" button and edit controls
- Centre: Hangul management with "+" button and word chips
- Right: Visual pool browser

**Primary content:** Date in English and Korean; task list for selected date; "+" add task button; calendar icon trigger.

**Primary action:** Tap "+" to add a task; tap an existing task to edit.

**Important visual states:**
- Empty state (no tasks for date): Show "+" prominently with an invitation to add the first task
- Task list populated: Tasks shown as rows with edit affordances
- Editing state: Popup overlays the left column

**Notes from sketches:** Sketch 2 confirms the lock icon for Parent Mode. The three-column structure mirrors Child Mode — this consistency is intentional and worth preserving.

---

### Add/edit task popup

**Visual purpose:** Focused task creation within the parent's flow — without navigating away.

**Layout direction:** Popup card overlaying the left "To do" column. Two sections within the popup:
1. Task name input (text field at top)
2. Image/icon selector (small grid of thumbnails)
3. Save button at bottom of popup

**Primary content:** Task name field; image grid; Save button.

**Primary action:** Type a task name; tap an image; tap Save.

**Important visual states:**
- Empty (no input): Fields blank, Save button inactive or greyed
- Task named: Name field filled
- Image selected: Chosen image highlighted in the grid
- Ready to save: Both task name and image selected; Save button active
- Save confirmation modal: Overlay confirms the save
- Cancel confirmation modal: Overlay confirms the discard

**Notes from sketches:** Sketch 2 shows the popup as a card overlaid on the left column. The image grid in the popup appears to show a small subset of the full pool — tapping "browse more" may open the right-column visual pool browser.

---

### Visual pool / image browser panel

**Visual purpose:** Parent browses and selects a visual icon for a task from the fixed curated pool.

**Layout direction:** Right panel with:
- "+" button at top (may open the panel or add a custom image — TBD)
- Search field ("Q search") below the "+"
- Scrollable grid or list of icon options

**Primary content:** Fixed icon set (OpenMoji or Noto Emoji); search input.

**Primary action:** Tap an icon to select it; confirm with Save.

**Important visual states:**
- Idle (no selection): Icons displayed, none highlighted
- Selected: Chosen icon highlighted
- Search active: Filtered results shown

**Notes from sketches:** Sketch 2 shows the right panel with a scrollable list (horizontal lines), not an icon grid. This may be a simplified representation — a grid is likely more appropriate for visual selection. The "Q search" field is a useful UX detail worth preserving.

---

### Hangul word selector / input panel

**Visual purpose:** Parent picks or types the Hangul word to associate with a task.

**Layout direction:** Centre panel with:
- "+" button at top
- 2×3 grid of Hangul suggestion chips below
- Freeform text input ("user can type straight")

**Primary content:** Predefined Hangul word chips (from the 20-card library); text input field.

**Primary action:** Tap a chip to select a suggested word, or type a Hangul word directly.

**Important visual states:**
- Idle: Chips visible, none selected
- Chip selected: Chosen chip highlighted
- Text input active: Cursor in text field, keyboard open

**Notes from sketches:** Sketch 2 shows a 2×3 grid of small chips. The first chip shows "보" — likely representing one of the 20 Hangul word suggestions. The "user can type straight" annotation confirms freeform input is intentional.

---

### Calendar date selector

**Visual purpose:** Parent picks a date to view or add tasks for.

**Layout direction:** Triggered by tapping the calendar icon in the date subheader. The calendar grid expands to fill (or overlays) the main content area below the header:
- Two rows of 7 date cells (14 days shown)
- Vertical dividers between cells
- No day-of-week labels in the sketch (recommend adding them in the final design)

**Primary content:** Date numbers in cells; today/selected date visually distinguished.

**Primary action:** Tap a date to select it; tapping outside closes the calendar.

**Important visual states:**
- Calendar closed: Only the date header and calendar icon visible
- Calendar open: Grid visible; current/selected date highlighted (hatching in sketch, final treatment TBD)
- Date selected: Chosen date highlighted; calendar closes; task list updates for that date

**Notes from sketches:** Sketch 3 shows two full rows (14 cells). The calendar icon doubles as both an indicator and a trigger. This "click the calendar icon" pattern should be visible and clearly interactive.

---

### Completion screen

**Visual purpose:** Celebrate the child completing all tasks; transition to the reward.

**Layout direction:** The right panel of the three-column layout becomes active, or transitions as a full-screen moment. Shows:
- "끝 / Finished" bilingual label at the top
- Large illustrated/decorative visual (celebratory, Korean-themed)
- Reward unlock button or the reward card below the visual

**Primary content:** Celebration message (English + Korean); reward visual.

**Primary action:** Tap to open the reward.

**Important visual states:**
- Completion state (reward locked): All tasks done, celebratory visual shown, reward card visible but not yet open
- Reward unlocked: Reward card revealed (mock video card)

**Notes from sketches:** Sketch 1 shows the completion panel as a column to the right of the Hangul cards. It contains two elements — the large illustrated shape above and the dashed-border box below. This two-part structure (celebration + reward) is worth preserving.

---

### Reward screen — mock video card

**Visual purpose:** Deliver the Korean-language reward moment.

**Layout direction:** Full panel or full-screen card showing:
- Korean title or phrase at the top
- Large thumbnail or illustrated image (culturally Korean)
- A play-button affordance or mock video UI
- Dismiss button

**Primary content:** Korean reward content (Korean title, image, phrase).

**Primary action:** View and dismiss.

**Important visual states:**
- Reward locked (pre-completion): Visible but inactive
- Reward unlocked: Card revealed with full content
- Reward dismissed: Returns to completion or routine screen

**Notes from sketches:** The dashed-border box in Sketch 1 labelled "드드리" (unclear) with "Korean Story related App" below — this is the mock video card placeholder. It should feel like a special, distinct moment. The circular illustration above it suggests a visual header for the reward — possibly a character, food, or Korean cultural motif.

---

## 7. Interaction guidance

From the sketches and briefing files, the following interaction principles apply:

**Tap-to-match is the primary interaction**
- Child taps a task slot → task is highlighted → Korean audio plays → child taps a Hangul card
- This must work reliably before any other interaction is considered
- Drag-and-drop should only be added if it is easy to implement and does not risk breaking the tap flow

**Visual cue when a task is selected**
- The selected task should be visually distinct — a border highlight, background change, scale increase, or combination
- The cue must be obvious to a child who may not read instructions — visual clarity is essential

**Korean audio prompt when a task is selected**
- Plays immediately on tap (or with a short delay)
- Show a visible "playing" indicator — a sound icon, waveform animation, or similar — while audio plays
- Do not rely on audio alone to communicate state

**Correct match feedback**
- Positive visual response on both the task slot and the matched card
- Korean audio plays immediately (e.g. 맞아요. 잘했어요.)
- The task is marked complete — the sketch suggests strikethrough as one option; explore tick, fade, or colour change too
- The interaction should feel celebratory but brief — the child should want to move to the next task

**Incorrect match gentle retry**
- A soft, non-punishing visual response — not red, not harsh
- Korean hint audio plays (e.g. 다시 해볼까요?)
- Task remains selected; the child tries again immediately
- No progress is lost; no count of wrong attempts is shown

**Completed task state**
- Each completed task in the "To do" list should be clearly marked
- Completed tasks can remain visible (strikethrough, faded, or ticked) or be moved to a "done" section — exact treatment TBD
- The child should always be able to see how many tasks remain

**Reward unlock state**
- After all tasks are complete, the completion/reward panel becomes active
- The transition from "last task done" to "completion state" should be a clear, positive moment
- The reward unlock tap should feel like opening something — a satisfying, deliberate action

**Calendar date selection (parent)**
- Tap the calendar icon in the date subheader to open/close the calendar grid
- Tap a date cell to select that date
- The calendar should close after date selection and show the task list for that date

**Popup actions (parent)**
- The add-task popup is opened with the "+" button
- Save and Cancel are always available in the header during any editing state
- A confirmation modal appears on both Save and Cancel

---

## 8. Visual asset guidance

- **Use a fixed 20-card Hangul library for Phase 1** — do not require the designer to provide 20 individual image files
- **One consistent visual source** — OpenMoji or Noto Emoji (both confirmed acceptable); do not mix sources within the Phase 1 card set
- **Card data structure** — each card stores a visual source name, an icon keyword, and a fallback emoji; the app resolves the visual from the keyword at runtime
- **No random web image search** — quality, safety, copyright, and style consistency cannot be guaranteed
- **No unlicensed images** — only open-source or explicitly licensed visual assets
- **No mixed visual styles** — the visual pool should look coherent; all icons should come from the same source
- **Attribution** — if the chosen visual source requires attribution, it must appear in the app footer, about screen, or credits section
- **Parent visual pool** — the parent chooses from the same fixed 20-card icon set; the pool is not editable in Phase 1
- **Custom illustration for later phases** — a custom illustration style is the preferred long-term direction; Phase 1 uses open-source icons as a pragmatic starting point
- **Reward visual** — should be a Korean-themed, culturally connected image; do not use copyrighted cartoon content unless explicitly approved

## Visual refresh rule

The prototype should not look like an old-fashioned form, admin dashboard, or generic to-do app.

Use a modern, warm, card-based visual style.

The design should feel:

- Warm
- Calm
- Playful
- Child-friendly
- Parent-trustworthy
- Tablet-first

Use:

- Large rounded cards
- Generous spacing
- Soft background colours
- Clear section grouping
- Friendly icons or emoji-style visuals
- Large touch targets
- Clear selected, correct, incorrect, completed, and reward states

Avoid:

- Dense grey boxes
- Small form controls
- Harsh borders
- Cluttered layouts
- Adult productivity dashboard styling
- Overly childish decoration

---

## 9. Accessibility and child-friendly notes

**Touch targets**
- All interactive elements must be large enough for a 4–6 year old to tap accurately on a tablet
- Task slots, Hangul cards, "+" buttons, and mode toggle buttons are all primary tap targets — make them at least 44×44px minimum, ideally larger
- Avoid small drag handles or tiny tap areas for any primary action

**Text and labels**
- Avoid small text in Child Mode — children may not read fluently
- English task labels should be short and simple (1–2 words)
- Keep instructional text minimal — the visual design should communicate the next action without text instructions
- Romanisation must not appear in Child Mode (confirmed in source note)

**Colour contrast**
- Use strong colour contrast throughout — WCAG AA minimum
- Do not rely on colour alone to indicate correct/incorrect states — pair colour with shape, animation, or icon

**Feedback states**
- Correct and incorrect states must both be communicated visually AND via audio
- Incorrect states should not use red or harsh visual treatment — use softer signals (e.g. gentle shake, outline change, neutral colour)
- Completion and reward states should be clearly positive and celebratory without being overwhelming

**Audio**
- Show a visible audio state indicator whenever audio plays
- Do not require the child to activate audio separately for the task prompt — auto-play on tap is the expected behaviour
- Provide a fallback visual state if audio cannot play

**Layout**
- Prioritise tablet landscape as the primary layout
- Ensure the design works on mobile (portrait) — likely a single-column or stacked layout
- Ensure the design is usable on desktop — likely a centred or constrained-width layout
- Keep screens uncluttered — one primary action visible at a time in Child Mode

**Error and retry**
- The child must always be able to try again after a wrong answer
- Never block progress or require a restart after an incorrect match
- Make the retry action obvious — the task stays selected and the cards remain visible

---

## 10. Relationship to the written briefing

The written briefing files — `briefing/project-brief.md`, `briefing/design-briefing.md`, and all `briefing/epic-[name].md` files — are the source of truth for product intent, scope, users, and requirements.

The sketches guide layout, screen composition, flow, interaction direction, visual hierarchy, and tone.

Where a sketch provides a layout idea, borrow the concept but adapt it for the target device, accessibility requirements, and visual design system.

Where a sketch conflicts with the written briefing, the written briefing takes precedence. Conflicts are listed below.

### Confirmed conflicts

> ⚠️ TBD: **Sketch 1 shows the three panels simultaneously on screen** (task list / Hangul cards / completion-reward as three columns). The written briefing describes a sequential flow (tasks → matching → completion → reward). It is unclear whether all three panels are always visible or whether the completion panel only appears after all tasks are done. This is a key interaction design decision and must be resolved before prototyping.

> ⚠️ TBD: **Sketch 2 uses a lock icon in the Parent Mode header; Sketch 1 and 3 use a house icon** in what appears to be the same header position. Whether the icon changes based on mode (house = Child Mode, lock = Parent Mode), or whether the lock is only the Parent Mode access symbol rather than a persistent header icon, must be decided. The distinction is worth preserving as a visual mode signal.

> ⚠️ TBD: **The calendar in Sketch 3 has no day-of-week labels** (Mon, Tue, etc.) above the date cells. The written briefing does not address this. A calendar without day labels may be confusing in practice — this should be added in the final design.

> ⚠️ TBD: **The Hangul annotation phrases visible in Sketch 1 next to the task audio cues** have not been confirmed as final Korean content. They appear to be thinking notes. All Korean content must be reviewed by a Korean-speaking adult before use in the prototype.

---

## 11. Open questions

> ⚠️ TBD: Should the three-panel layout be used on all device sizes, or only tablet landscape? How should it adapt for mobile portrait and desktop?

> ⚠️ TBD: Are the three columns in Sketch 1 shown simultaneously, or does the completion/reward panel appear only after all tasks are matched?

> ⚠️ TBD: Should the Hangul cards always be fully visible on screen, or should they only appear (or be highlighted) when a task is selected?

> ⚠️ TBD: What are the exact mode button labels — "Parent", "Mum", "Mom", "Parent Mode"? And "Child", "Children", or the child's name?

> ⚠️ TBD: Should the lock icon (Parent Mode) and house icon (Child Mode) be used as persistent header icons, or only as a visual signal on the mode toggle button itself?

> ⚠️ TBD: What does the banner image area below the date header in Sketch 1 represent — a decorative element, a featured task, a greeting, or the child's name?

> ⚠️ TBD: Should completed task slots show a strikethrough (as suggested in Sketch 1), a tick, a colour change, or move to a separate section?

> ⚠️ TBD: What should the circular illustrated shape in the reward panel be — a food item, a Korean cultural motif, a character, or something else?

> ⚠️ TBD: The dashed-border box in the reward panel is partially labelled — what is the final Korean label or title for the mock video card reward?

> ⚠️ TBD: Should the calendar show 7 days (one row), 14 days (two rows as in Sketch 3), or a full month?

> ⚠️ TBD: Should the calendar show day-of-week labels above each column?

> ⚠️ TBD: Does the "+" button in the right panel of Sketch 2 mean "add a custom image" or "open the visual pool"?

> ⚠️ TBD: Are the Hangul suggestion chips in the centre panel of Sketch 2 drawn from the fixed 20-card library, or a separate suggested list?

> ⚠️ TBD: Should there be any friction added to the Parent Mode toggle to prevent a child from accidentally entering Parent Mode (e.g. a hold gesture or a simple confirmation prompt)?
