# Epic: Hangul Card Matching

## Outcome we are designing for

A child can match a visual daily task to the correct Hangul word card through a simple, encouraging tap-to-match interaction — building Hangul recognition through repetition and positive reinforcement rather than testing or punishment.

---

## Primary user in this epic

**Child user.**

The child aged 4–6 needs to connect a visual task they can recognise (e.g. a wash face icon) with the Hangul word that represents it (e.g. 세수). The interaction must be tactile, large-target, and low-stakes. Wrong answers should feel like practice, not failure.

---

## User stories

- As a child, I want to tap a visual task to select it, so that I know which word I am trying to match.
- As a child, I want to see a set of Hangul word cards I can choose from, so that I have options to consider.
- As a child, I want to tap a Hangul card to attempt a match, so that I can try to connect the task with the right Korean word.
- As a child, I want to see and hear positive feedback when I choose the right card, so that I feel confident and encouraged.
- As a child, I want to hear a gentle hint and try again when I choose the wrong card, so that I can practise without feeling punished.
- As a child, I want to see my task marked as done when I match it correctly, so that I can track my progress through the routine.

---

## Jobs To Be Done

- When I see a visual task in my routine, I want to find and tap the matching Hangul card, so I can practise connecting Korean words with everyday actions.
- When I get an answer wrong, I want to try again without losing progress, so I can keep practising at my own pace.
- When I complete a match, I want immediate positive feedback, so I feel proud and motivated to continue.

---

## Experience notes

### Interaction model

- **Tap-to-match is the primary and required interaction**
- The child taps a visual task slot to select it
- The selected task is highlighted with a clear visual cue (e.g. glow, border, scale change)
- The child then taps one of the Hangul cards displayed on screen
- The app evaluates the match and responds immediately

- **Drag-and-drop is optional** — it can be included only if easy to implement and must not block the main tap-to-match flow
- Drag-and-drop is more accessible for children who understand the spatial concept, but it should be treated as an enhancement

### Layout

- Visual task slots are shown in a vertical list on the left side of the screen (as sketched)
- Hangul cards are shown in a separate panel — from the sketch, a vertical column of cards on the right side
- In the sketch, visible cards include: 세수, 양치, 목욕, 가기 (학교 가기), 숙제, 손씻기 — the final confirmed set of 20 cards is TBD
- Hangul cards should be large enough for a child to tap accurately on a tablet

### Correct match behaviour

- App immediately shows a positive state
- Visual feedback: the card and task slot respond (e.g. highlight, animation)
- Audio feedback: a positive Korean phrase is played
  - Example: 맞아요. 잘했어요.
  - Example: 좋아요.
  - Example: 잘 골랐어요.
- Task slot is marked as complete (e.g. tick, completed colour, strikethrough — exact treatment TBD)
- The matched Hangul card is no longer available to select for that task

### Incorrect match behaviour

- App gently pauses and gives an encouraging hint
- Visual feedback: gentle indication that the match was not correct — not harsh or red
- Audio feedback: a supportive Korean phrase is played
  - Example: 다시 해볼까요?
  - Example: 한 번 더 해보자.
  - Example: 괜찮아요. 다시 골라볼까요?
- Child does not lose progress — the task remains selected and they can try again
- The incorrect card may be visually reset or gently indicated as not the right match
- Do not show a "wrong" state that feels punishing

### All tasks completed

- When the child matches all tasks correctly, the completion state is triggered
- See the Reward Experience epic for what happens next

### Key states

- **Idle state:** Task list visible, no task selected, Hangul cards visible
- **Selected state:** One task highlighted, Korean audio playing, child choosing a card
- **Correct match state:** Positive feedback, task marked complete
- **Incorrect match state:** Gentle hint, retry prompt, task still selected
- **All completed state:** Routine finished, completion state shown, reward unlock triggered

---

## Rules and constraints

- Tap-to-match is required for Phase 1 — drag-and-drop is optional
- Wrong answers must never cause the child to lose progress
- Wrong answers should use encouraging language, not negative language
- Do not rely on colour alone to show correct or incorrect — use shape, animation, or audio cues as well (accessibility requirement)
- All Korean feedback phrases must be reviewed by a Korean-speaking adult before the demo
- Touch targets must be large enough for young children — especially on a tablet
- Romanisation must not be visible on Hangul cards in Child Mode
- English labels must not appear on Hangul cards (confirmed in source note — English is visible in the task list but not on the cards)
- The number of Hangul cards shown at once and whether they are a subset per task or all 20 simultaneously is TBD

---

## Phase 1 scope

- Tap-to-match interaction
- Selected task highlighted state
- Hangul card display (fixed set from the 20-card library)
- Correct match feedback — visual and audio
- Incorrect match feedback — gentle hint, retry
- Task marked complete after correct match
- All tasks completed → triggers completion state
- Sample data cards covering at least 20 Hangul words
- Korean feedback phrases (reviewed before demo)

---

## Later-phase opportunities

- Difficulty levels — show fewer distractor cards for beginners, more for advanced children
- Animated card flip or reveal after a correct match
- Progress indicators showing how many cards the child has learned over time
- Review mode — surface cards the child found difficult in previous sessions
- Gentle adaptive prompts based on incorrect patterns (Phase 4)
- Drag-and-drop as a more spatially engaging alternative in later phases

---

## Open questions

> ⚠️ TBD: Should all 20 Hangul cards be visible simultaneously, or should only the relevant day's cards appear?

> ⚠️ TBD: Should distractor cards be shown — i.e. cards that are not part of today's routine — to increase the matching challenge?

> ⚠️ TBD: Should the matched Hangul card disappear after a correct match, or stay visible in a completed state?

> ⚠️ TBD: How many incorrect attempts are allowed before a hint appears, or does the hint appear immediately on the first wrong tap?

> ⚠️ TBD: Should the child be able to tap a Hangul card before selecting a task — what should happen if they do?

> ⚠️ TBD: What is the exact visual treatment for a correctly matched task — tick, colour change, completed badge, animation?

> ⚠️ TBD: All Korean feedback phrases (correct and incorrect) must be confirmed and reviewed — which Korean-speaking adult or team member will review them?
