# Hangul Routine Learning App

## 1. Project One-Liner

We are building a child-friendly Hangul learning routine app that helps Korean heritage children in the UK recognise Korean words through everyday tasks, visual cards, pronunciation, and small rewards.

The app uses a to-do list format, but its main purpose is not productivity or task management.

**The main purpose is to make Hangul feel familiar, useful, and part of the child's everyday life.**

---

## 2. Product Positioning

This is a **Hangul learning app** using daily routines as the interaction model — not a generic to-do list app.

The to-do list is only the learning structure.
The daily schedule is the learning mechanic, not the product goal.

Every design and implementation decision should support:

- Hangul recognition
- Korean language exposure
- Visual matching
- Korean pronunciation
- Child confidence
- Parent-supported learning
- Low-pressure routine building

The product should **not** become:

- A generic to-do list app
- A productivity app
- A complex calendar app
- A formal school worksheet
- A parent admin dashboard first

---

## 3. Product Context

Many Korean heritage children living in the UK can understand spoken Korean but are less confident reading Hangul.

As children spend more time in English-speaking school environments, they naturally become more comfortable reading, writing, and speaking in English.

Traditional Hangul study books are often text-heavy, writing-focused, and not engaging enough for young children with busy school routines.

Existing Korean learning materials can also feel disconnected from the child's everyday life.

This product creates a lightweight way for children to practise recognising Hangul through familiar daily activities such as:

- Washing their face
- Brushing their teeth
- Doing homework
- Eating dinner
- Getting ready for bed

The product should help children experience Hangul as part of normal daily life, not as extra homework.

---

## 4. Primary Users

### Child User

The child is the main learner.

**Target age:**

- Age 4–6
- Reception to early Key Stage 1 in the UK
- May need parent support depending on reading confidence and tablet familiarity

They may:

- Understand some spoken Korean but not speak Korean fluently
- Recognise a small amount of Hangul but not read confidently
- Prefer visual, playful, and interactive learning
- Use a tablet, with possible support from a parent
- Need help connecting Korean words to everyday actions
- Understand routines better through images and sound than through text
- Have short attention spans and need quick feedback

**Success for the child means:**

- They can recognise Hangul words linked to daily routines
- They can connect Korean words with familiar actions
- They can complete the daily routine with confidence
- They hear Korean words and simple Korean phrases
- They feel encouraged rather than tested
- They become more familiar with Korean language and culture over time

**Potential frustrations for the child:**

- Too much text
- Small buttons or hard-to-tap areas
- Confusing schedule layout
- Punishing error states
- Too many steps before something fun happens
- Interactions that require precise dragging
- Audio that is unclear or unavailable
- Visuals that do not clearly represent the task

### Parent User

The parent is the setup and support user.

They may:

- Understand Korean
- Want their child to stay connected to Korean language and culture
- Set daily routine tasks for the child
- Create or edit Hangul cards
- Create a to-do list alone or together with the child
- Support the child when they are unsure
- Want Korean learning to happen naturally without formal study pressure

**Success for the parent means:**

- They can create a simple daily Hangul routine
- They can add or edit activity cards
- They can choose visuals that make sense for their child
- Their child engages with Hangul without feeling forced
- The app supports learning without adding heavy study time
- They can trust the Korean words, phrases, and visuals shown to the child

**Potential frustrations for the parent:**

- Too much setup effort
- Unclear card creation
- Poor Korean support
- Incorrect Korean phrasing
- App feeling like a generic task manager
- Too much reliance on AI without review
- Inconsistent visual style
- No way to correct or customise content

---

## 5. User Problem

Korean heritage children in the UK have limited everyday opportunities to practise reading Hangul.

Many children can understand some Korean when spoken at home, but they may not speak as fluently as they understand.

They may also show less motivation to learn Hangul because English is dominant in school, social life, and daily reading.

Existing learning materials often focus on formal writing practice, which can feel repetitive or disconnected from the child's daily life.

Children need a more playful and practical way to connect Hangul with familiar actions, sounds, images, and routines.

Parents need a low-effort way to create small Korean learning moments at home.

---

## 6. Jobs To Be Done

### Child JTBD

- When I come home from school and need to follow my daily routine, I want to match Korean words to familiar visual tasks, so I can practise recognising Hangul while completing everyday activities.
- When I tap a daily task, I want to hear a simple Korean phrase, so I can connect the action with spoken Korean.
- When I choose the right Hangul card, I want encouraging feedback, so I feel confident and want to continue.
- When I make a mistake, I want to try again gently, so I do not feel embarrassed or punished.
- When I complete my routine, I want a small reward, so I feel proud and motivated to return.

### Parent JTBD

- When I want my child to practise Hangul at home, I want to create a simple Korean daily routine, so they can learn naturally without needing a formal study session.
- When I add a task, I want to choose a visual and Korean word easily, so I can create learning moments without spending too much time.
- When I use AI or suggested content, I want to review it before my child sees it, so I can make sure the Korean language and content are appropriate.

---

## 7. Product Maturity and Phased Delivery

This product should not be treated as a one-off demo.

The competition prototype is the first meaningful slice of a larger Hangul learning routine product.

The product should be designed so it can improve through several phases, starting with a simple parent-to-child routine flow and growing into a more personalised learning experience over time.

### Phase 1: Competition Prototype

**Goal:**

- Demonstrate the core product idea clearly
- Show how daily routines can become a Hangul learning experience
- Prove the parent-to-child flow using sample data and simple interactions
- Include a simple reward flow to create a clear emotional payoff

**Must include:**

- Parent mode and child mode
- Parent creates or edits a simple daily task
- Parent chooses a visual from a fixed visual pool
- Parent chooses or enters a Hangul word
- Parent saves or cancels changes
- Parent receives a confirmation modal when saving or cancelling
- Parent can switch to child mode
- Child sees today's routine
- Child taps a visual task and hears or sees a Korean prompt
- Child taps the matching Hangul card
- App gives correct or incorrect feedback
- Child completes all tasks
- Child sees a completion state
- Child unlocks a simple reward card or reward moment

**Implementation expectation:**

- Use sample data where needed
- Mock complex behaviours
- Prioritise one complete parent-to-child flow
- Use a fixed 20-card library for the demo
- Do not build real accounts, databases, translation services, AI generation, or notification systems
- Build Phase 1 in a way that does not block future phases, but do not implement future-phase features unless explicitly requested

### Phase 2: Usable MVP

**Goal:**

- Make the app usable by a parent and child beyond the demo flow

**Should include:**

- Persistent saved routines
- Ability to create, edit, delete, and reorder tasks
- Multiple days of routines
- A clearer parent setup experience
- A child-friendly daily routine experience
- Basic pronunciation support
- A reusable visual card library
- Simple reward settings
- Better responsive behaviour for tablet, mobile, and desktop

**Implementation expectation:**

- Introduce real data persistence
- Improve task management only where it supports Hangul learning
- Keep the product focused on language exposure, not productivity

### Phase 3: Learning Product

**Goal:**

- Strengthen the educational value of the app

**Should include:**

- Learning progress over time
- Repeated exposure to Hangul words
- Difficulty levels based on the child's confidence
- Optional romanisation support
- Better Korean audio quality
- Parent view of words practised
- More varied reward content
- Gentle review of previously learned words
- Better Korean phrase quality control

**Implementation expectation:**

- Design learning loops carefully
- Avoid making the app feel like formal homework
- Keep the experience playful and routine-based

### Phase 4: Personalised and AI-Supported Product

**Goal:**

- Use AI to reduce parent setup effort and personalise learning

**Could include:**

- AI-generated routine suggestions from parent input
- English-to-Korean task suggestions
- Child voice input for creating task ideas
- Personalised Hangul card recommendations
- Adaptive review based on mistakes
- AI-assisted icon or image suggestions
- Optional text-to-speech or generated Korean audio
- AI-generated or AI-suggested visual cards

**Implementation expectation:**

- AI should support the parent and child experience
- AI should not replace human review of Korean language accuracy
- Korean words and phrases should be reviewable by a Korean-speaking adult
- AI-generated cards should not be shown directly to children without parent review

### Product Principle Across All Phases

The app should always remain a Hangul learning app using daily routines as the interaction model.

Every new feature should answer:

- Does this help the child recognise Hangul?
- Does this support Korean language exposure?
- Does this help parents create learning moments with less effort?
- Does this keep the experience playful and low-pressure?

---

## 8. Phase 1 MVP

For the Phase 1 prototype, focus on two connected flows:

1. **Parent setup flow**
2. **Child learning flow**

The parent flow exists to show how a daily Hangul routine is created.
The child flow is the main product experience and should be prioritised.

The Phase 1 prototype should demonstrate the smallest complete version of the product vision.

It does not need to include all future functionality, but it should be structured in a way that can grow into later phases.

---

## 9. Phase 1 Parent Flow

The parent flow should show:

1. Parent opens the app.
2. Parent enters Parent Mode.
3. Parent chooses a calendar or date button to add tasks for today or a future date.
4. Parent adds a task to the child's daily schedule.
5. Parent can set a time or save the task as part of a simple to-do list for that date.
6. Parent creates or edits a task by choosing a visual from a fixed visual pool.
7. Parent chooses or enters the Hangul word.
8. Parent saves or cancels the setting.
9. A confirmation modal appears when parent saves or cancels.
10. Parent switches to Child Mode.
11. Parent checks that the new or edited task appears in the child's routine.

**Prototype assumptions:**

- Use a simple Parent Mode / Child Mode switch.
- Do not build real login, authentication, or account profiles.
- Use a simple date selector instead of a complex calendar.
- Use a fixed visual pool instead of real image search.
- Use predefined English-to-Hangul suggestions instead of real translation.
- Saving can work within the current session only unless persistence is easy to add.

---

## 10. Phase 1 Child Flow

The child flow should show:

1. Child opens or enters Child Mode.
2. Child sees today's date and daily routine.
3. Child sees visual task slots in a daily schedule.
4. Child sees Hangul cards available to match.
5. Child clicks or taps a visual task.
6. The selected task is highlighted with a clear visual cue.
7. The app plays or simulates a simple Korean sentence, for example: 세수할 시간이야.
8. Child clicks or taps a Hangul card.
9. If the card is correct, the app gives positive feedback with sound or visible feedback, for example: 맞아요. 잘했어요.
10. The task is marked complete.
11. If the card is incorrect, the app gives a gentle hint and asks the child to try again.
12. The child completes all daily tasks.
13. The child sees a completion state.
14. The child unlocks a simple reward card or reward moment.

**Prototype assumptions:**

- Tap-to-match is the primary interaction.
- Drag-and-drop is optional and should not block the main flow.
- Wrong answers should feel like practice, not failure.
- The child should not lose progress after a wrong answer.
- The child should not be blocked in a harsh or punishing way.

---

## 11. Must-Have Features for Phase 1

The prototype must include:

1. Today's daily schedule
2. Visual task slots
3. Visual slots for placing or matching Hangul cards
4. Hangul cards
5. Card matching interaction
6. Visual cue when a task is selected
7. Korean prompt when a task is selected
8. Correct match feedback
9. Incorrect match feedback with gentle retry
10. Encouraging voice, sound, or simulated sound
11. Pronunciation support when selecting or matching a card
12. Completed state for each task
13. Completion state for the full routine
14. Simple reward unlock after all tasks are completed
15. Parent Mode
16. Child Mode
17. Parent task creation or editing
18. Fixed visual pool
19. Save/cancel confirmation modal
20. At least 20 curated sample cards

---

## 12. Should-Have Features for Phase 1

The prototype should include if time allows:

1. Parent can create or edit a simple task
2. Parent can choose a visual from a visual pool
3. Parent can type an English task and see a suggested Korean Hangul version
4. Simple daily/weekly toggle
5. Daily view as default
6. Weekly view shows only the to-do list
7. Weekly view hides Hangul matching slots
8. Simple reward card or reward screen
9. Browser text-to-speech or simulated audio state

---

## 13. Future Scope

These ideas are valuable but should not be required for the Phase 1 prototype:

1. AI-generated to-do lists from parent text input
2. Child voice input in English to create cards
3. Real translation service
4. Real notification alarms
5. Full weekly scheduling
6. Parent account system
7. Child account system
8. Child progress tracking
9. Advanced card management
10. Real audio recording or advanced text-to-speech integration
11. AI-assisted card creation with parent approval
12. AI-generated or AI-suggested visual cards
13. External licensed icon/image library integration
14. Curated Hangul card library by category and difficulty
15. Korean phrase review workflow
16. Multiple reward types
17. Personalised learning recommendations

---

## 14. Primary Interaction Model

The primary interaction model is **tap-to-match**.

**Interaction steps:**

1. Child taps a visual task.
2. The selected task is highlighted.
3. The app plays or simulates a Korean sentence.
4. Child taps a matching Hangul card.
5. App gives feedback.
6. If correct, the task is completed.
7. If incorrect, the app gives a gentle hint and asks the child to try again.

Drag-and-drop can be included only if it is easy to implement.
Drag-and-drop should not block the main flow.

This choice makes the prototype easier to build, easier to demo, and more accessible for children using tablets.

---

## 15. Matching Behaviour

If the child chooses the wrong card, the app should gently pause the flow, give an encouraging hint, and let the child try again.

The child should not be punished or lose progress.
Wrong answers should feel like practice, not failure.

**Example incorrect feedback:**

- 다시 해볼까요?
- 한 번 더 해보자.
- 괜찮아요. 다시 골라볼까요?

**Example correct feedback:**

- 맞아요. 잘했어요.
- 좋아요.
- 잘 골랐어요.

All Korean phrases should be reviewed by a Korean-speaking adult before final use.

---

## 16. Audio Behaviour

When the child taps a visual task, the app should play or simulate a Korean sentence.

**Example task prompts:**

- 세수할 시간이야.
- 양치할 시간이야.
- 숙제할 시간이야.
- 저녁 먹을 시간이야.
- 잘 시간이야.

When the child chooses the correct Hangul card, the app should give encouraging feedback.

**For the prototype, audio can be:**

- Simulated with a visible "playing sound" state
- Simulated with a sound icon and animation
- Browser text-to-speech if easy to implement
- Real recorded audio only if already available

Real recorded Korean audio is out of scope unless already available.

---

## 17. Korean Language Accuracy

All Korean words and phrases should be reviewed by a Korean-speaking adult before final use.

The app should use simple, child-friendly Korean.
Korean should sound natural for a parent speaking to a young child.

Romanisation can be used in the data model, but it may not need to be visible to the child.

**Decisions:**

- Romanisation should **not** appear in the child interface.
- English labels **should** appear in child mode, but **not** in the Hangul card.

---

## 18. Image and Hangul Card Content Strategy

For the Phase 1 prototype, use a fixed library of at least 20 curated Hangul routine cards.

The designer does not need to manually provide 20 static image files.

Instead, the product should use a fixed 20-card Hangul library and map each card to a consistent open-source visual source, such as OpenMoji, Noto Emoji, or another licensed icon set.

**Each card should include:**

- English task label
- Hangul word or phrase
- Child-friendly Korean prompt
- Romanisation for internal reference
- Visual icon or illustration
- Visual source
- Icon reference or keyword
- Fallback emoji
- Category
- Audio or simulated pronunciation cue
- Correct feedback phrase
- Optional hint phrase

**Example card data:**

```json
{
  "id": "wash-face",
  "englishLabel": "Wash face",
  "hangul": "세수",
  "koreanPrompt": "세수할 시간이야",
  "romanisation": "se-su",
  "visualSource": "openmoji",
  "iconKeyword": "face with water",
  "fallbackEmoji": "🧼",
  "category": "morning"
}
```

**The Phase 1 prototype should not rely on:**

- Live image search
- Live AI image generation
- Real translation
- Random web images
- Unreviewed AI-generated Korean text
- Manually uploaded one-off images unless already available

**For later phases, the product can support:**

- A managed internal card library
- External licensed visual sources
- AI-assisted card creation
- AI-suggested images
- AI-suggested Korean phrases
- Parent review and approval

AI-generated cards should not be shown directly to children without parent review.

Visual assets should come from a consistent, licensed source.

Random web image search should be avoided for children's content because of:

- Quality risks
- Safety risks
- Copyright risks
- Style inconsistency
- Inappropriate or unclear imagery

If the chosen open-source visual library requires attribution, include attribution in one of the following places:

- App footer
- About screen
- Project documentation
- Credits section

---

## 19. Visual Pool

For the Phase 1 prototype, the visual pool should be a fixed set of built-in icons, emoji-style visuals, or simple illustrations.

Do not build real image search.

The parent can choose from predefined visuals.

**Visuals should be:**

- Clear
- Child-friendly
- Consistent in style
- Easy to recognise
- Appropriate for young children
- Suitable for daily routine actions

Use one consistent visual source for the Phase 1 prototype.

Do not mix random image styles.
Do not use random web image search for children's content.
Do not use unlicensed images.

**Potential visual source options:**

- OpenMoji
- Noto Emoji
- Another licensed open-source icon or emoji set
- Curated internal icon set
- Licensed children's illustration set
- AI-generated visuals with parent review and style controls in later phases

---

## 20. Example Content for Prototype

Use realistic sample cards. These can be adjusted after Korean language review.

| Category | English Task | Hangul | Korean Prompt | Romanisation | Visual Idea |
|---|---|---|---|---|---|
| Morning | Wake up | 일어나기 | 일어날 시간이야 | i-reo-na-gi | Sun / bed |
| Morning | Wash face | 세수 | 세수할 시간이야 | se-su | Face with water |
| Morning | Brush teeth | 양치 | 양치할 시간이야 | yang-chi | Toothbrush |
| Morning | Get dressed | 옷 입기 | 옷 입을 시간이야 | ot ip-gi | Clothes |
| Morning | Eat breakfast | 아침 먹기 | 아침 먹을 시간이야 | a-chim meok-gi | Breakfast bowl |
| School | Go to school | 학교 가기 | 학교 갈 시간이야 | hak-gyo ga-gi | School bag |
| School | Homework | 숙제 | 숙제할 시간이야 | suk-je | Pencil / notebook |
| School | Reading | 책 읽기 | 책 읽을 시간이야 | chaek il-gi | Book |
| After school | Snack | 간식 | 간식 먹을 시간이야 | gan-sik | Apple / snack |
| After school | Play | 놀기 | 놀 시간이야 | nol-gi | Toy |
| Home | Tidy up | 정리 | 정리할 시간이야 | jeong-ri | Storage box |
| Home | Help parents | 도와주기 | 도와줄 시간이야 | do-wa-ju-gi | Helping hands |
| Food | Eat dinner | 저녁 먹기 | 저녁 먹을 시간이야 | jeo-nyeok meok-gi | Rice bowl |
| Hygiene | Bath / shower | 목욕 | 목욕할 시간이야 | mok-yok | Bath |
| Hygiene | Wash hands | 손 씻기 | 손 씻을 시간이야 | son ssit-gi | Hands with water |
| Evening | Put on pyjamas | 잠옷 입기 | 잠옷 입을 시간이야 | jam-ot ip-gi | Pyjamas |
| Evening | Brush teeth again | 양치 | 양치할 시간이야 | yang-chi | Toothbrush |
| Evening | Story time | 이야기 | 이야기 들을 시간이야 | i-ya-gi | Storybook |
| Evening | Bedtime | 잠자기 | 잘 시간이야 | jam-ja-gi | Moon / bed |
| Reward | Korean reward | 선물 | 선물 받을 시간이야 | seon-mul | Present |

---

## 21. Reward Experience

A reward flow should be included in the product vision and in the Phase 1 prototype if possible.

The reward is not just for the demo.
The reward supports motivation, emotional completion, and repeated engagement.

In Phase 1, the reward can be simple.

**Reward flow:**

1. Child completes all daily tasks.
2. App shows a positive completion state.
3. Reward button or reward card becomes active.
4. Child opens the reward.
5. App shows a short Korean-language reward moment.

**Phase 1 reward options:**

- Simple reward card
- Short Korean story card
- Static mock video card
- Celebration animation
- Korean phrase of the day
- Parent-approved mini content

**Reward principles:**

- Short
- Positive
- Korean-language related
- Child-friendly
- Culturally connected
- Not too distracting from the learning goal

Do not use copyrighted cartoon content unless approved.

**Decision:** The Phase 1 reward should be a **mock video card**.

---

## 22. Visual Direction

**The app should feel:**

1. Warm
2. Playful
3. Calm
4. Encouraging
5. Child-friendly
6. Parent-trustworthy
7. Simple
8. Low-pressure

**The interface should use:**

1. Large cards
2. Clear visual icons
3. Rounded shapes
4. Simple labels
5. Strong spacing
6. A simple daily schedule layout
7. Tablet-friendly touch areas
8. Friendly feedback states

Use the provided sketch or screenshot as visual inspiration only.
Do not copy the sketch exactly.

**The app should not feel:**

- Like a school worksheet
- Like an adult productivity app
- Like a complex calendar tool
- Like a generic to-do list
- Too text-heavy
- Too childish for parents to trust

---

## 23. Accessibility and Child-Friendly Design

The prototype should:

1. Use large touch targets
2. Avoid small text
3. Use strong colour contrast
4. Support both visual and audio cues
5. Avoid relying only on colour to show success or error
6. Keep instructions short
7. Make the next action obvious
8. Allow the child to correct mistakes without punishment
9. Avoid small drag targets
10. Work on tablet, mobile, and desktop
11. Prioritise tablet experience
12. Use clear focus and selected states
13. Keep screens uncluttered
14. Make feedback friendly and encouraging

---

## 24. Data and Persistence Assumptions

**For Phase 1:**

- Use sample data
- Use a fixed 20-card library
- Saved tasks should persist after page refresh
- A real database is not required
- Parent and child modes can be simulated
- Real authentication is not required
- AI and translation can be mocked
- Icon references can be stored in card data instead of manually uploaded image files

**For later phases:**

- Add persistent storage
- Add reusable routines
- Add parent-controlled card library
- Add child progress tracking
- Add reviewed AI-assisted creation
- Add licensed or curated visual source management

---

## 25. Profile and Mode Assumptions

**For Phase 1, use:**

- Parent Mode
- Child Mode

**Do not build:**

- Real parent profiles
- Real child profiles
- Authentication
- Permissions
- Account settings

A simple mode switch is enough to demonstrate the concept.

**Decision:** Children should **not** be able to create their own schedule in Phase 1.

---

## 26. Prototype Quality Bar

The Phase 1 prototype should:

- Be understandable within 5 seconds
- Be demoable in under 3 minutes
- Prioritise one complete parent-to-child flow
- Feel like a Hangul learning experience, not a generic to-do app
- Work best on tablet but remain usable on mobile and desktop
- Use large touch targets and simple instructions
- Include empty, selected, correct, incorrect, completed, saved, cancelled, and reward states
- Be structured so it can evolve into later phases

---

## 27. Open Questions — Decisions

| Question | Decision |
|---|---|
| Is the competition demo focused on parent setup plus child flow, or should the child flow be prioritised if time is limited? | Both |
| Should the child be able to create their own schedule in Phase 1? | No |
| Should weekly view be included in Phase 1? | Yes |
| Should parent scheduling use a simple date selector or calendar-style view? | Calendar-style view |
| Should saved tasks persist after refresh? | Yes |
| Should the app use real audio, browser text-to-speech, or simulated audio? | Real audio, AI-generated |
| Should romanisation be visible to children? | No |
| Should English labels be visible in child mode? | Yes, but not in the Hangul card |
| Should the prototype use parent/child profiles or only a simple mode switch? | Simple mode change |
| What exact Korean phrases should be used for task prompts, hints, and encouragement? | Both prompts and hints |
| What visual style should the icon pool use? | OpenMoji or Noto Emoji |
| Which open-source visual source should be used for Phase 1? | OpenMoji and Noto Emoji are fine for now |
| Should the app use emoji-style visuals for Phase 1, or a more custom illustration style later? | Custom illustration would be great |
| What is the final completion moment? | Completed state |
| What should the Phase 1 reward be? | Mock video card |
| Who will review Korean language accuracy before the demo? | Teams |
| Should AI-assisted image or Hangul card creation be described in the prototype UI? | Future scope |