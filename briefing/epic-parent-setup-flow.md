# Epic: Parent Setup Flow

## Outcome we are designing for

A parent can quickly create or edit a child's daily Hangul routine — choosing a visual, selecting or entering a Hangul word, and saving the task — so that the child has a meaningful learning routine ready to use.

---

## Primary user in this epic

**Parent user.**

The parent wants to create small Korean learning moments for their child at home without spending a lot of time. They are setting up a daily routine that their child will interact with in Child Mode. They need the setup flow to be fast, clear, and trustworthy — particularly around the Korean language content shown to the child.

---

## User stories

- As a parent, I want to enter Parent Mode easily, so that I can manage my child's daily Hangul routine without accidentally changing anything in Child Mode.
- As a parent, I want to see a calendar-style view, so that I can add or edit tasks for today or a future date.
- As a parent, I want to add a new task to my child's daily schedule, so that I can create a new learning moment.
- As a parent, I want to choose a visual from a fixed visual pool, so that I can pick a clear and child-friendly image for each task.
- As a parent, I want to choose or enter a Hangul word for a task, so that I can link the visual to the Korean word my child will match.
- As a parent, I want to see predefined English-to-Hangul suggestions, so that I do not have to know every Korean word by heart.
- As a parent, I want to save or cancel changes, so that I have control over what appears in my child's routine.
- As a parent, I want to see a confirmation modal when I save or cancel, so that I know my changes have been recorded or discarded.
- As a parent, I want to switch to Child Mode after setting up, so that I can check what my child will see.

---

## Jobs To Be Done

- When I want to create a daily Hangul routine for my child, I want to add tasks with visuals and Korean words quickly, so I can set up a learning moment without spending a lot of time.
- When I add a task, I want to choose a visual and Hangul word from a curated list, so I can trust the content without needing to research Korean words myself.
- When I save or cancel a task, I want a clear confirmation, so I know the changes took effect or were safely discarded.

---

## Experience notes

### Parent Mode entry

- Parent enters Parent Mode via a simple mode toggle (labelled "Mum" / "Mom" mode in the sketch; confirm final label)
- No login or password required in Phase 1

### Calendar-style view

- Parent sees the current date with a calendar-style date selector
- The sketch shows a grid calendar (e.g. 29, 30, 1, 2, 3, 4, 5 across the top) with a "click" annotation
- Parent can select a date to add or view tasks for that day
- The selected date is highlighted

### Adding a task

- A "+" button opens a popup or panel for creating a new task
- The popup contains:
  - Task name input field (English label)
  - Image/visual selector grid (fixed visual pool)
  - Save button
- Separately, a Hangul section allows:
  - A "+" button to add or select a Hangul word
  - Predefined Hangul suggestions displayed as selectable cards
  - An option for the parent to type a Hangul word directly ("user can type straight" in the sketch)
  - A search field to find suggested Hangul words

### Save and cancel

- Save button records the task and shows a confirmation modal
- Cancel button discards changes and shows a confirmation modal
- Both actions should have a clear modal so the parent knows what happened
- Confirmed save → task appears in the child's routine

### Switching to Child Mode

- After saving, the parent can switch to Child Mode to verify the task appears correctly

### Key states

- **Empty state:** No tasks added yet — prompt parent to add the first task
- **Adding state:** Popup open with task, visual, and Hangul fields
- **Visual selected state:** Chosen visual is highlighted in the pool
- **Hangul selected state:** Chosen Hangul word is highlighted or confirmed
- **Saved state:** Confirmation modal confirms the task was saved
- **Cancelled state:** Confirmation modal confirms the changes were discarded
- **Edited state:** Parent edits an existing task — same flow as creating

---

## Rules and constraints

- Parent Mode and Child Mode are mode switches, not real accounts — no authentication required in Phase 1
- The visual pool is fixed — no real image search or file upload for Phase 1
- The Hangul word list is predefined — no real translation service for Phase 1
- Parent can also type a Hangul word directly if they know it
- Korean words and phrases must be reviewed by a Korean-speaking adult before use in the final demo
- Save and cancel must both trigger a confirmation modal
- Saving can work within the current session for Phase 1; persistent saving after refresh is expected (confirmed in source note)
- Task creation flow should be completable in a small number of steps

---

## Phase 1 scope

- Parent Mode entry via a simple mode toggle
- Calendar-style date selector (grid view, not a complex full-calendar component)
- Add task flow: task name + visual selection + Hangul selection or typed entry
- Predefined English-to-Hangul suggestions
- Save and cancel actions with confirmation modals
- Confirmation modal for both save and cancel
- Fixed visual pool (OpenMoji or Noto Emoji icons)
- At least one complete add-task flow demoed with sample data
- Parent can switch to Child Mode after saving

---

## Later-phase opportunities

- Multiple children with separate profiles
- Parent-controlled custom card library
- AI-suggested tasks from free-text parent input ("영어로 입력하면 AI가 추천" — English input, AI suggests Korean)
- Child voice input to suggest new task ideas (with parent approval)
- Reusable routine templates
- Task reordering and deletion
- Duplicate task option for recurring routines
- Reviewed AI-generated cards (parent must approve before child sees them)
- Better calendar experience for multi-week planning

---

## Open questions

> ⚠️ TBD: What should the Parent Mode button be labelled — "Parent Mode", "Mum", "Mom", or another label?

> ⚠️ TBD: Should the Hangul word input show romanisation alongside the Hangul to help parents who are less confident reading Hangul?

> ⚠️ TBD: Should the parent be able to set a specific time for each task in Phase 1, or is a simple to-do list for the day sufficient?

> ⚠️ TBD: Should the parent be able to reorder tasks in Phase 1?

> ⚠️ TBD: Should the parent be able to delete a task in Phase 1?

> ⚠️ TBD: What triggers the confirmation modal — is it a simple "are you sure?" or a summary of what was saved?

> ⚠️ TBD: Should the visual pool include a search or filter function in Phase 1, or just a scrollable grid?
