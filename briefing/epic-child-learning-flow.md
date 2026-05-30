# Epic: Child Learning Flow

## Outcome we are designing for

A child can follow their daily Hangul routine by matching visual tasks to Hangul cards, hearing Korean phrases, receiving encouraging feedback, and completing the routine to unlock a reward — making Hangul recognition a natural, low-pressure part of their day.

---

## Primary user in this epic

**Child user.**

The child is aged 4–6, Reception to early Key Stage 1 in the UK. They may understand some spoken Korean but are not yet confident reading Hangul. They interact with a tablet (primarily) and need large touch targets, clear visuals, simple instructions, and encouraging feedback. The child is the main learner and this flow is the core product experience.

---

## User stories

- As a child, I want to see my daily routine when I open the app, so that I know what tasks I need to complete today.
- As a child, I want to tap a task and hear a Korean phrase, so that I can connect the visual activity with spoken Korean.
- As a child, I want to see Hangul cards I can choose from, so that I can try to match the right Korean word to my task.
- As a child, I want the selected task to be highlighted clearly, so that I know which task I am working on.
- As a child, I want to receive happy feedback when I choose the right card, so that I feel confident and proud.
- As a child, I want a gentle hint when I choose the wrong card, so that I can try again without feeling bad.
- As a child, I want to see each task marked as done after I match it correctly, so that I can see my progress.
- As a child, I want to see a completion state when I finish all my tasks, so that I know I have done well.
- As a child, I want to unlock a reward when I complete my routine, so that I feel excited and motivated to come back.

---

## Jobs To Be Done

- When I open the app, I want to see today's routine clearly, so I know what to do without needing to ask for help.
- When I tap a task, I want to hear a simple Korean sentence, so I can connect the action with spoken Korean.
- When I choose the right Hangul card, I want to see and hear encouraging feedback, so I feel proud and want to keep going.
- When I make a mistake, I want to try again without losing progress, so I do not feel embarrassed or stuck.
- When I complete all my tasks, I want to unlock something fun and Korean, so I feel rewarded and want to return tomorrow.

---

## Experience notes

### Child Mode entry

- Child enters Child Mode via the mode toggle (labelled "Child" or "Children" in the sketches)
- Child immediately sees today's date and their daily routine
- No login or password required

### Today's routine screen

- Shows today's date with day label (e.g. "29 May 2026, Friday 금요일")
- A calendar icon is visible for reference — in Child Mode this may be view-only
- Tasks are displayed as visual task slots in a vertical schedule layout
- Each task shows:
  - A time slot (e.g. 7:30am, 4pm, 5pm, 8pm)
  - A visual icon or illustration representing the activity
  - A short English task label (visible in Child Mode; confirmed in source note)
  - Hangul is not shown on the task slot — it appears on the Hangul cards
- Romanisation is not shown to children (confirmed in source note)

### Task selection

- Child taps a visual task slot
- The selected task is highlighted with a clear visual cue
- The app plays (or simulates) a Korean sentence for that task
  - Example: 세수할 시간이야 (time to wash face)
  - Example: 양치할 시간이야 (time to brush teeth)
  - Example: 숙제할 시간이야 (time to do homework)
  - Example: 저녁 먹을 시간이야 (time to eat dinner)
  - Example: 잘 시간이야 (time to sleep)

### Hangul card matching

- A set of Hangul cards is displayed alongside or below the task list
- Cards shown in the sketch include: 세수, 양치, 목욕, 고가가기 (가기), 숙제, 고세치 (손씻기) — the full confirmed set is TBD
- Child taps a Hangul card to attempt a match
- See the Hangul Card Matching epic for detailed matching behaviour

### Correct match

- App gives positive feedback — visual and audio
- Example phrases: 맞아요. 잘했어요. / 좋아요. / 잘 골랐어요.
- Task is marked as complete
- Child moves to the next task

### Incorrect match

- App gives a gentle hint — visual and audio — and asks the child to try again
- Example phrases: 다시 해볼까요? / 한 번 더 해보자. / 괜찮아요. 다시 골라볼까요?
- Child does not lose progress
- The wrong answer should feel like practice, not failure
- Child tries again from the same task

### Completed state

- After all tasks are matched correctly, the app shows a completion state
- Completion state is clearly celebratory but calm
- A reward is unlocked (see the Reward Experience epic)

### Key states

- **Today's routine state:** Routine displayed, no task selected yet
- **Selected state:** Task highlighted, Korean audio playing or visible
- **Correct match state:** Positive feedback, task marked complete
- **Incorrect match state:** Gentle hint, gentle retry prompt, no progress lost
- **Completed state:** All tasks done, completion celebration shown
- **Reward unlocked state:** Reward card or mock video card revealed

---

## Rules and constraints

- Tap-to-match is the primary interaction — drag-and-drop is optional and must not block the main flow
- The child should not be punished for wrong answers — no progress loss, no harsh states
- Romanisation must not be visible to children in Child Mode
- English task labels should be visible in the task list but not on the Hangul cards themselves
- The child cannot create or edit tasks in Phase 1
- Audio must play or be clearly simulated when a task is selected
- Feedback must include both visual and audio cues — do not rely on colour alone to indicate correctness
- All Korean phrases shown or spoken must be reviewed by a Korean-speaking adult before the demo
- Touch targets must be large enough for young children using a tablet

---

## Phase 1 scope

- Child Mode entry via simple mode toggle
- Today's date and routine displayed at entry
- Visual task slots with time slots, icons, and English labels
- Hangul card display alongside or below the task list
- Tap-to-match interaction
- Selected task highlighted state
- Korean audio playback (real AI-generated audio confirmed for Phase 1)
- Correct match feedback (visual and audio)
- Incorrect match feedback (gentle hint, retry)
- Each task marked complete after correct match
- Completed state after all tasks are done
- Reward unlock transition (see Reward Experience epic)
- At least one complete child learning flow demoed with sample data

---

## Later-phase opportunities

- Weekly routine view from the child's perspective
- Child sees their own progress over time
- Repeated exposure to previously learned words
- Difficulty levels based on child confidence
- Gentle review of words the child found difficult
- Child can suggest new task ideas (voice input, with parent approval)
- Personalised Hangul card recommendations
- Improved Korean audio quality

---

## Open questions

> ⚠️ TBD: Should Hangul cards be shown all at once, or revealed one at a time as each task is selected?

> ⚠️ TBD: How many Hangul distractor cards should be shown per task — should all 20 cards always be visible, or only a subset?

> ⚠️ TBD: Should the task prompt audio play automatically when a task is tapped, or should there be a separate audio button?

> ⚠️ TBD: Should the child be able to replay the Korean audio for a task they have already selected?

> ⚠️ TBD: Should completed tasks be visually struck out, faded, or moved — how should completion be shown in the task list?

> ⚠️ TBD: Should the child be able to see the full Hangul word revealed after a correct match, or is the match itself the confirmation?
