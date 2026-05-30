# Epic: Audio and Pronunciation Support

## Outcome we are designing for

The child hears natural, child-friendly Korean spoken aloud when they interact with the app — reinforcing Hangul recognition with spoken pronunciation, connecting written Korean to the spoken language they hear at home.

---

## Primary user in this epic

**Child user (primary — hearing and connecting spoken Korean)**
**Parent user (secondary — trusting that the Korean audio is accurate and appropriate)**

---

## User stories

- As a child, I want to hear a Korean sentence when I tap a visual task, so that I can connect the action with how it sounds in Korean.
- As a child, I want to hear encouraging Korean words when I get a match right, so that I feel celebrated.
- As a child, I want to hear a gentle Korean hint when I get a match wrong, so that I feel supported and encouraged to try again.
- As a parent, I want the Korean audio to sound natural and child-appropriate, so that my child is learning correct, natural Korean.
- As a parent, I want to trust that the Korean phrases have been reviewed before my child hears them, so that I can be confident the language is accurate.

---

## Jobs To Be Done

- When I tap a task, I want to hear a Korean sentence, so I can connect the visual task with the spoken language I hear at home.
- When the audio plays, I want to understand the words are about my task, so I can link sound, image, and Hangul together.
- When I get a match right, I want to hear something positive in Korean, so I feel encouraged in the language I am learning.

---

## Experience notes

### When audio plays

Audio is triggered at three moments:

1. **Task selection:** When the child taps a visual task slot, the app plays a Korean sentence for that task
2. **Correct match:** When the child taps the correct Hangul card, the app plays a positive Korean phrase
3. **Incorrect match:** When the child taps the wrong card, the app plays a gentle encouraging hint

### Task prompt examples

These examples are from the source note and must be reviewed by a Korean-speaking adult before final use:

- 세수할 시간이야 (time to wash face)
- 양치할 시간이야 (time to brush teeth)
- 숙제할 시간이야 (time to do homework)
- 저녁 먹을 시간이야 (time to eat dinner)
- 잘 시간이야 (time to sleep)

### Correct feedback phrases

These examples are from the source note and must be reviewed before final use:

- 맞아요. 잘했어요.
- 좋아요.
- 잘 골랐어요.

### Incorrect hint phrases

These examples are from the source note and must be reviewed before final use:

- 다시 해볼까요?
- 한 번 더 해보자.
- 괜찮아요. 다시 골라볼까요?

### Audio implementation for Phase 1

**Real AI-generated audio is confirmed for Phase 1.**

The audio can be produced using an AI text-to-speech service that supports Korean, provided the output is reviewed for naturalness and child-appropriateness.

Fallback options (if real audio is not available in time):

- Browser text-to-speech if easy to implement
- Simulated audio state: a visible "playing sound" indicator or sound icon with animation
- Simulated audio state with a sound icon that responds when tapped

Real recorded Korean audio from a native speaker is out of scope unless already available.

### Audio quality expectations

- Audio should sound natural for a parent speaking to a young child
- Korean should be simple and child-friendly
- Tone should be warm, clear, and encouraging — not robotic or formal
- Volume should be appropriate for a tablet in a home environment

### Visible audio state

- When audio is playing, the app should show a clear visual indicator (e.g. sound wave, audio icon animation)
- This supports children who cannot hear clearly or who are using the app without sound
- Do not rely on audio alone to convey information — pair audio cues with visual cues

---

## Rules and constraints

- All Korean phrases must be reviewed by a Korean-speaking adult before use in the demo
- Romanisation should not be shown to children in the app interface (confirmed in source note)
- English labels should not appear on Hangul cards (confirmed in source note) but may accompany task prompts
- Audio must not be the sole indicator of correct or incorrect — visual feedback must also be present
- Do not use copyrighted audio content
- AI-generated audio should sound natural, not robotic — review before use
- Korean should sound appropriate for a parent speaking to a young child of 4–6

---

## Phase 1 scope

- Real AI-generated Korean audio for task prompts (one sentence per task)
- Real AI-generated Korean audio for correct feedback phrases
- Real AI-generated Korean audio for incorrect hint phrases
- Visible audio playing state (icon or animation while audio plays)
- Audio triggered by tapping a task slot (task prompt)
- Audio triggered by correct match result
- Audio triggered by incorrect match result
- All audio phrases sourced from the confirmed card library and reviewed before demo

---

## Later-phase opportunities

- Better Korean audio quality using professional voice recording
- Multiple voice options (child voice, adult female, adult male)
- Audio replay button so the child can hear a word again
- Parent view showing which words the child has heard and practised
- Optional romanisation toggle for parents or older children
- Audio difficulty levels (slower speed for beginners)
- User-controlled volume or mute setting
- Improved text-to-speech with natural prosody for Korean sentences

---

## Open questions

> ⚠️ TBD: Which AI text-to-speech service will be used for Phase 1 Korean audio generation?

> ⚠️ TBD: Who will review the AI-generated Korean audio for naturalness and accuracy before the demo?

> ⚠️ TBD: Should the audio play automatically when a task is tapped, or should the child tap an audio/speaker icon to trigger it?

> ⚠️ TBD: Should the child be able to replay a task's audio after it has played once?

> ⚠️ TBD: What is the full confirmed list of Korean prompt phrases for all 20 cards? (Must be reviewed by a Korean-speaking adult.)

> ⚠️ TBD: Should the audio speed be adjustable, or is a single natural pace sufficient for Phase 1?
