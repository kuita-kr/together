# Epic: Daily Routine Scheduler

## Outcome we are designing for

Parents can set up and view a child's daily Hangul learning routine using a clear date-based schedule. Children can see their routine for today in a simple, time-ordered list. Both modes share the same schedule structure but present it differently.

---

## Primary user in this epic

**Parent user (primary — creating and managing the schedule)**
**Child user (secondary — viewing and following the schedule)**

The parent needs to set tasks for a specific date without excessive effort. The child needs to see their routine clearly enough to follow it independently with minimal reading.

---

## User stories

- As a parent, I want to see a calendar-style date selector, so that I can add tasks for today or a future date.
- As a parent, I want to see a daily view of tasks for the selected date, so that I can review what is scheduled.
- As a parent, I want to see a weekly view that lists all tasks without the Hangul matching slots, so that I can plan ahead at a glance.
- As a parent, I want to switch between daily and weekly views, so that I can manage the schedule at different levels of detail.
- As a child, I want to see today's routine in a simple, visual daily list, so that I know what to do without needing to read a lot.
- As a child, I want to see each task's time, icon, and label, so that I can understand my routine clearly.

---

## Jobs To Be Done

- When I am planning my child's week, I want to see a weekly overview of scheduled tasks, so I can manage their learning routine without opening each day separately.
- When I want to add a task for a specific day, I want to tap a date on the calendar and add directly, so I do not have to navigate through too many steps.
- When my child opens the app, I want them to see today's tasks immediately, so they can start their routine without needing help navigating.

---

## Experience notes

### Parent schedule view

- The parent sees a calendar-style date selector at the top of the Parent Mode screen
- From the sketch: a grid layout showing a week-style row (e.g. 29, 30, 1, 2, 3, 4, 5) with the selected date highlighted
- The date header shows the current or selected date with day name and Korean day label (e.g. "29 May 2026, Friday 금요일")
- A calendar icon is shown next to the date header — tapping it opens the calendar selector
- Parent taps a date to view or add tasks for that date

### Daily view (default for both modes)

- Daily view is the default for both Parent Mode and Child Mode
- Shows tasks for the selected date in a vertical time-ordered list
- Each task shows: time slot, visual icon, English task label
- In Child Mode, Hangul matching slots are visible alongside the task list
- In Parent Mode, the task list shows edit and add controls

### Weekly view

- Weekly view is available (confirmed as included in Phase 1)
- Weekly view shows only the to-do list — a summary of tasks across the week
- Weekly view hides Hangul matching slots (Hangul matching only happens in daily view)
- Weekly view is primarily useful for the parent to plan ahead
- Weekly view for the child is simpler — just the schedule without the matching interaction

### Today's routine in Child Mode

- Child Mode defaults to today's date
- Tasks are shown in time order
- The child does not need to navigate the calendar — today's tasks are shown automatically
- A calendar icon may be visible but is likely view-only or hidden in Phase 1

### Key states

- **Empty state (no tasks for a date):** Show a prompt or empty state message encouraging the parent to add tasks for that day
- **Daily view with tasks:** Task list shown with time slots, icons, and labels
- **Weekly view:** Summary of tasks per day across the week — no Hangul matching visible
- **Date selected state:** Tapped date is highlighted in the calendar grid
- **Task added state:** New task appears in the correct time position in the daily list

---

## Rules and constraints

- Calendar-style view is confirmed for Phase 1 (not a simple single-date selector)
- Daily view is the default for both modes
- Weekly view is confirmed as included in Phase 1
- Weekly view must hide Hangul matching slots — it shows the to-do list only
- The child cannot create or edit the schedule in Phase 1
- Saved tasks must persist after page refresh (confirmed in source note)
- The schedule should be simple enough to understand within 5 seconds

---

## Phase 1 scope

- Calendar-style date selector (grid view showing a week at a time)
- Current date highlighted by default
- Daily view with time-ordered task list (default)
- Weekly view toggle showing task summary only (no Hangul matching)
- Parent Mode: add, edit tasks for a selected date
- Child Mode: view today's tasks in a clear visual layout
- Empty state for days with no tasks

---

## Later-phase opportunities

- Persistent multi-week routine templates
- Reusable routine schedules (e.g. "weekday routine", "weekend routine")
- Drag-to-reorder tasks within a day
- Copy tasks from one day to another
- Parent reminder or notification for routine start time
- Child calendar view showing completed days with visual progress markers
- Colour-coded categories in the schedule

---

## Open questions

> ⚠️ TBD: Should the calendar-style view show a full monthly calendar, or only a 7-day rolling week strip?

> ⚠️ TBD: Should the weekly view show all 7 days, or only weekdays?

> ⚠️ TBD: Should the parent be able to set a specific time per task, or is a simple ordered list sufficient for Phase 1?

> ⚠️ TBD: In Child Mode, should the calendar be visible at all, or should the child simply land on today's routine?

> ⚠️ TBD: What should the empty state message say when no tasks are scheduled for a day?
