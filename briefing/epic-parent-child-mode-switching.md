# Epic: Parent and Child Mode Switching

## Outcome we are designing for

A parent can easily switch between Parent Mode and Child Mode to create a routine and then verify what the child will see — without needing to log in, log out, or manage real accounts.

---

## Primary user in this epic

**Parent user (switching from Parent Mode to Child Mode to check the experience)**
**Child user (entering Child Mode to start their daily routine)**

---

## User stories

- As a parent, I want to switch to Parent Mode easily, so that I can create or edit tasks without affecting the child's active session.
- As a parent, I want to switch to Child Mode after setting up, so that I can check what my child will see before they use the app.
- As a child, I want to enter Child Mode and see my routine immediately, so that I do not have to navigate through parent settings.
- As a parent, I want the mode switch to be simple and obvious, so that I do not accidentally leave the wrong mode active for my child.

---

## Jobs To Be Done

- When I want to set up the daily routine, I want to enter Parent Mode quickly, so I can create tasks without friction.
- When I am ready to hand the device to my child, I want to switch to Child Mode easily, so my child sees their learning experience immediately.

---

## Experience notes

### Mode toggle design

- A simple mode switch is sufficient for Phase 1 — confirmed in the source note
- Two modes: **Parent Mode** and **Child Mode**
- From the sketches, the mode buttons are shown as two labelled pill/circle buttons in the top-right corner:
  - One labelled "Children" (child mode)
  - One labelled "Mum" or "Mon" (parent mode) — the label is partially legible; final label TBD
- The active mode is highlighted (the sketch shows one button as bold/filled, the other as outline)
- Mode buttons are persistent and accessible from the main screen in both modes

### Switching from Child Mode to Parent Mode

- The parent can always see the mode toggle
- Tapping "Parent Mode" (or equivalent) switches the view to the parent's schedule management and task creation screen
- No password or PIN is required in Phase 1
- The parent-facing controls (add task, edit, calendar) are only visible in Parent Mode

### Switching from Parent Mode to Child Mode

- After setting up tasks, the parent taps "Child Mode" (or equivalent)
- The app transitions to the child's daily routine view
- Child sees their tasks for today immediately — no navigation required

### What each mode shows

**Parent Mode:**
- Calendar-style date selector
- Task list with add and edit controls
- Visual pool selector
- Hangul word selector or input
- Save/cancel controls
- Mode toggle (to switch to Child Mode)

**Child Mode:**
- Today's date and daily routine
- Visual task slots (time, icon, label)
- Hangul cards for matching
- No edit controls visible
- Mode toggle visible (to allow parent to switch back if needed)

### Key states

- **Parent Mode active:** Parent-facing controls visible, mode toggle shows Parent Mode as active
- **Child Mode active:** Child-facing routine visible, edit controls hidden, mode toggle shows Child Mode as active
- **Mode switching:** Transition between modes — may include a brief animation or screen change

---

## Rules and constraints

- Mode switching must not require login, authentication, or a password in Phase 1
- A simple mode toggle is the confirmed approach (source note)
- Real parent profiles, real child profiles, and account systems are explicitly out of scope for Phase 1
- The child-facing view must not expose parent controls (edit, delete, add) — these must be hidden in Child Mode
- The mode switch should be visible and accessible in both modes

---

## Phase 1 scope

- Two-mode toggle: Parent Mode and Child Mode
- Mode switch visible on the main screen in both modes
- Parent Mode shows: calendar, task management, save/cancel controls
- Child Mode shows: today's routine, task slots, Hangul cards, no edit controls
- Mode switch does not require any authentication
- Sample data pre-loaded so the prototype is demoable immediately

---

## Later-phase opportunities

- Optional PIN or passcode to prevent the child from accidentally switching to Parent Mode
- Multiple child profiles under one parent account
- Parent-controlled permissions (what the child can and cannot do)
- Separate parent and child onboarding flows
- Full authentication (email, phone, or social login) in later phases

---

## Open questions

> ⚠️ TBD: What should the Parent Mode button be labelled — "Parent", "Mum", "Mom", "Parent Mode", or something else?

> ⚠️ TBD: What should the Child Mode button be labelled — "Child", "Children", or the child's name (e.g. "Sumi's Mode")?

> ⚠️ TBD: Should there be any friction added to the mode switch to prevent the child from accidentally tapping into Parent Mode — e.g. a hold gesture or a simple confirmation?

> ⚠️ TBD: Should the mode toggle always be visible in Child Mode, or should it be hidden to avoid distraction or accidental taps?
