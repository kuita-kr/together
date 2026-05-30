# Design Briefing

---

## 1. Core objective

Build a child-friendly Hangul learning app that helps Korean heritage children aged 4–6 in the UK recognise Korean words through everyday daily tasks, visual cards, Korean audio, and small rewards.

**This is a Hangul learning app using daily routines as the interaction model — not a generic to-do list app.** The to-do list is the learning structure. The daily schedule is the mechanic. The product goal is Hangul recognition and Korean language exposure.

Phase 1 is not a throwaway demo. It is the first meaningful slice of a longer product vision and must be structured to grow into later phases.

---

## 2. Product opportunity

* Many Korean heritage children in the UK can understand spoken Korean but struggle to read Hangul.
* As children spend more time in English-speaking schools, English becomes the dominant language for reading and writing.
* Traditional Hangul learning materials are text-heavy, writing-focused, and feel disconnected from children’s daily lives.
* Existing Korean learning resources often feel like homework — not like something a child would choose to do.
* This product embeds Hangul into the tasks a child already does each day, such as washing face, brushing teeth, doing homework, eating dinner, and getting ready for bed.
* The opportunity is to make Hangul feel familiar, natural, and routine — not like extra study.

The product does not require parents to create formal study sessions. It creates small, repeatable Korean learning moments that are already part of the child’s day.

---

## 3. Product principles

1. **Hangul learning first, task management second** — every screen and interaction should connect back to language recognition and exposure.
2. **Child-friendly and low-pressure** — wrong answers are practice, not failure; feedback is warm and encouraging, not corrective.
3. **Visual and audio over text** — rely on icons, illustrations, and Korean audio rather than written instructions.
4. **Parent-supported, not parent-admin-heavy** — the parent setup flow should be fast and simple; the parent is a supporter, not a system admin.
5. **Culturally connected** — the app should feel Korean, not generic; use Korean language, cultural moments, and age-appropriate Korean content.
6. **Consistent and trustworthy content** — all Korean words and phrases must be reviewed by a Korean-speaking adult; no unreviewed AI-generated content should be shown to children.
7. **Phase 1 builds the foundation** — do not over-engineer; build the smallest complete version of the product vision that can grow into later phases.

---

## 4. Primary users

### Child user

|                               |                                                                                                                                                     |
| ----------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Who they are**              | Korean heritage children aged 4–6, Reception to early Key Stage 1 in the UK                                                                         |
| **Context**                   | Likely using a tablet, with possible parent support; understands some spoken Korean but is not confident reading Hangul                             |
| **What they need**            | A playful, visual, low-pressure way to connect Korean words with familiar daily actions                                                             |
| **Success looks like**        | Recognising Hangul words linked to daily routines; hearing Korean phrases; feeling encouraged rather than tested                                    |
| **Frustrations and blockers** | Too much text; small tap targets; punishing error states; confusing layout; too many steps before something fun; unclear visuals; unavailable audio |

### Parent user

|                               |                                                                                                                                                                     |
| ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Who they are**              | Parents of Korean heritage children in the UK; likely with some Korean ability; want their child to stay connected to Korean language and culture                   |
| **Context**                   | Setting up the daily routine; choosing visuals and Korean words; supporting the child when they are unsure                                                          |
| **What they need**            | A low-effort way to create a meaningful Hangul routine; confidence that Korean content is accurate and appropriate                                                  |
| **Success looks like**        | Creating a routine quickly; trusting the Korean content; seeing their child engage with Hangul without feeling forced                                               |
| **Frustrations and blockers** | Too much setup effort; incorrect Korean phrasing; app feeling like a generic task manager; too much reliance on AI without a review step; inconsistent visual style |

---

## 5. Jobs To Be Done

### Child JTBD

* When I come home from school and need to follow my daily routine, I want to match Korean words to familiar visual tasks, so I can practise recognising Hangul while completing everyday activities.
* When I tap a daily task, I want to hear a simple Korean phrase, so I can connect the action with spoken Korean.
* When I choose the right Hangul card, I want encouraging feedback, so I feel confident and want to continue.
* When I make a mistake, I want to try again gently, so I do not feel embarrassed or punished.
* When I complete my routine, I want a small reward, so I feel proud and motivated to return.

### Parent JTBD

* When I want my child to practise Hangul at home, I want to create a simple Korean daily routine, so they can learn naturally without needing a formal study session.
* When I add a task, I want to choose a visual and Korean word easily, so I can create learning moments without spending too much time.
* When I use AI or suggested content, I want to review it before my child sees it, so I can make sure the Korean language and content are appropriate.

---

## 6. Product maturity and phased delivery

| Phase       | Focus                         | Main outcome                                                                                                                 |
| ----------- | ----------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| **Phase 1** | Competition prototype         | Parent creates or reuses a routine; child matches Hangul cards; child earns a reward; one complete connected flow is demoed  |
| **Phase 2** | Usable MVP                    | App is usable by real families beyond the demo; persistent routines; multiple days; improved parent setup                    |
| **Phase 3** | Learning product              | Educational value strengthened; progress tracking; difficulty levels; repeated Hangul exposure; better audio                 |
| **Phase 4** | Personalised and AI-supported | AI reduces parent setup effort; personalised card recommendations; adaptive learning; AI-assisted content with parent review |

Later-phase opportunities are captured in individual epic files. They must not become Phase 1 requirements.

---

## 7. Phase 1 MVP scope

| Priority         | Feature                                                          | Why it matters                                                                           |
| ---------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| **Must have**    | Parent Mode and Child Mode toggle                                | Supports the parent setup flow and child learning flow without real accounts             |
| **Must have**    | Parent Mode with three separate slots: To-do, Hangul card, Image | Keeps task creation, Hangul card creation, and image selection clear and separate        |
| **Must have**    | To-do combobox                                                   | Parents can type a new task or reuse previous/saved routine tasks                        |
| **Must have**    | Calendar-style date selector in Parent Mode                      | Parent can create routines for today or future dates                                     |
| **Must have**    | Hangul card creation or selection in the Hangul slot             | Lets parents create or select the Korean word separately from the task                   |
| **Must have**    | Image selection from fixed local visual pool                     | Lets parents choose a child-friendly visual without live image search                    |
| **Must have**    | Image slot search                                                | Lets parents filter the local visual pool by keyword                                     |
| **Must have**    | Child Mode defaults to today’s date                              | Child should always start from today’s routine, not a future date selected by the parent |
| **Must have**    | Child sees today’s daily routine                                 | Entry point for the child experience                                                     |
| **Must have**    | Visual task slots with icon and English label                    | Makes the routine understandable for a young child                                       |
| **Must have**    | Hangul cards displayed for matching                              | Core learning interaction                                                                |
| **Must have**    | Tap-to-match interaction                                         | Primary interaction for Phase 1                                                          |
| **Must have**    | Task selected state with visual cue                              | Child knows which task they are working on                                               |
| **Must have**    | Korean audio prompt when task is tapped                          | Connects the task with spoken Korean                                                     |
| **Must have**    | Korean prompt text hidden in Child Mode                          | Prevents the child from seeing the answer before choosing a Hangul card                  |
| **Must have**    | Correct match feedback                                           | Celebrates the child’s correct response                                                  |
| **Must have**    | Incorrect match feedback with gentle retry                       | Encourages the child without punishment                                                  |
| **Must have**    | Task marked complete after correct match                         | Shows the child progress                                                                 |
| **Must have**    | Child-friendly reward progress visual                            | Helps the child understand how close they are to unlocking the reward                    |
| **Must have**    | Reward unlock after all tasks are complete                       | Creates emotional payoff and motivation                                                  |
| **Must have**    | Korean story reward card                                         | Safe, original, Korean-language reward for Phase 1                                       |
| **Must have**    | Fixed 20-card Hangul library                                     | Provides enough sample content for the prototype                                         |
| **Should have**  | Parent can edit an existing task                                 | Improves parent setup flow                                                               |
| **Should have**  | Previous task reuse with linked Hangul and image                 | Reduces repeated setup work for repetitive routines                                      |
| **Should have**  | Browser text-to-speech or simulated audio                        | Keeps the prototype usable without depending on real generated audio                     |
| **Should have**  | Reset prototype button                                           | Helps with repeated testing and demo rehearsal                                           |
| **Could have**   | Weekly view                                                      | Later enhancement if time allows; should not block Phase 1                               |
| **Out of scope** | Real authentication and accounts                                 | Phase 2+                                                                                 |
| **Out of scope** | Full database backend                                            | Phase 2+                                                                                 |
| **Out of scope** | Real translation service                                         | Phase 4                                                                                  |
| **Out of scope** | Real AI-generated task creation                                  | Phase 4                                                                                  |
| **Out of scope** | Live image search                                                | Later phase only                                                                         |
| **Out of scope** | Random web images                                                | Not suitable for children’s content                                                      |
| **Out of scope** | Auto-opened YouTube videos                                       | Reward content should be parent-approved                                                 |
| **Out of scope** | Full video library                                               | Later phase                                                                              |
| **Out of scope** | Child progress analytics                                         | Phase 3+                                                                                 |
| **Out of scope** | Complex drag-and-drop                                            | Optional only; must not block tap-to-match                                               |
| **Out of scope** | Child-created schedule                                           | Later phase                                                                              |

The three connected flows for Phase 1:

1. **Parent setup flow** — parent creates or reuses a daily task, Hangul card, and image.
2. **Child learning flow** — child follows today’s routine, listens to Korean audio, matches Hangul cards, and receives feedback.
3. **Completion and reward flow** — child completes all tasks, sees hero progress complete, and unlocks a Korean story reward.

---

## 8. Primary user flows

### Parent setup flow

1. Parent opens the app.
2. Parent enters Parent Mode.
3. Parent sees a calendar-style date selector.
4. Parent chooses today or a future date.
5. Parent sees three separate creation areas:

   * To-do slot
   * Hangul card slot
   * Image slot
6. Parent clicks the plus button in the To-do slot.
7. Parent can type a new English task or select from previous/saved tasks using a combobox.
8. If the parent selects a previous task, existing Hangul and image links are reused when available.
9. Parent clicks the plus button in the Hangul card slot.
10. Parent creates or selects the Hangul card for the task.
11. Parent clicks the plus button in the Image slot.
12. Parent chooses a visual from the fixed local visual pool.
13. Parent can search the local visual pool by keyword.
14. Parent links the selected To-do task, Hangul card, and image together for the selected date.
15. The selected task is shown as complete for setup once all three pieces are linked.
16. Parent switches to Child Mode.
17. Child Mode opens on today’s date by default.

### Child learning flow

1. Child opens the app or enters Child Mode.
2. Child always sees today’s date and today’s routine first.
3. The routine displays visual task slots with icons and simple English labels.
4. Hangul cards are visible alongside or below the task list.
5. Child taps a visual task slot.
6. The selected task is highlighted with a clear visual cue.
7. The app plays or simulates the Korean prompt sentence.
8. The Korean prompt sentence is not shown as visible text.
9. Child taps a Hangul card to attempt a match.
10. If correct, the app gives positive feedback and marks the task complete.
11. If incorrect, the app gives gentle retry feedback and the child tries again.
12. Child repeats until all tasks are complete.
13. Reward progress updates as tasks are completed.
14. When all tasks are complete, the reward unlocks.

### Reward flow

1. Child sees a character-based reward progress visual during the routine.
2. The progress visual shows a generic child-friendly hero becoming more complete.
3. At 100% completion, the hero illustration is complete.
4. Reward unlocks.
5. Child opens a Korean story reward card.
6. The reward card shows a short original Korean story.
7. The reward feels calm, positive, Korean-language related, and child-friendly.

---

## 9. Required screens

### Mode toggle

|                      |                                                    |
| -------------------- | -------------------------------------------------- |
| **Purpose**          | Allow switching between Parent Mode and Child Mode |
| **Primary user**     | Parent and child                                   |
| **Main user action** | Tap Parent Mode or Child Mode                      |
| **Key content**      | Mode toggle in the header                          |
| **Important states** | Parent Mode active; Child Mode active              |

### Parent setup screen

|                      |                                                                                |
| -------------------- | ------------------------------------------------------------------------------ |
| **Purpose**          | Parent creates or manages the child’s routine for a selected date              |
| **Primary user**     | Parent                                                                         |
| **Main user action** | Select date, add/reuse task, create/select Hangul card, choose image           |
| **Key content**      | Calendar/date picker, To-do slot, Hangul card slot, Image slot                 |
| **Important states** | Empty date state, selected date state, item added state, incomplete task state |

### To-do slot

|                      |                                                                    |
| -------------------- | ------------------------------------------------------------------ |
| **Purpose**          | Parent creates or selects the English task                         |
| **Primary user**     | Parent                                                             |
| **Main user action** | Type a new task or choose a previous/saved task                    |
| **Key content**      | Combobox input, previous task suggestions, add action              |
| **Important states** | Empty input, suggestions visible, filtered suggestions, task added |

### Hangul card slot

|                      |                                              |
| -------------------- | -------------------------------------------- |
| **Purpose**          | Parent creates or selects the Hangul card    |
| **Primary user**     | Parent                                       |
| **Main user action** | Add or select Hangul word/phrase             |
| **Key content**      | Hangul card list, add Hangul card input      |
| **Important states** | Empty state, card selected, new card created |

### Image slot

|                      |                                                            |
| -------------------- | ---------------------------------------------------------- |
| **Purpose**          | Parent chooses the visual linked to a task                 |
| **Primary user**     | Parent                                                     |
| **Main user action** | Search and select a visual from the fixed local pool       |
| **Key content**      | Search input, local visual pool, selected visual           |
| **Important states** | Empty search, filtered results, no result, visual selected |

### Child daily routine screen

|                      |                                                                                    |
| -------------------- | ---------------------------------------------------------------------------------- |
| **Purpose**          | Child sees today’s routine and starts Hangul matching                              |
| **Primary user**     | Child                                                                              |
| **Main user action** | Tap a task, listen, choose Hangul card                                             |
| **Key content**      | Today’s date, visual task list, Hangul cards, reward progress                      |
| **Important states** | No task selected, task selected, sound playing, completed task, all tasks complete |

### Hangul card matching state

|                      |                                                            |
| -------------------- | ---------------------------------------------------------- |
| **Purpose**          | Child matches the selected task to the correct Hangul card |
| **Primary user**     | Child                                                      |
| **Main user action** | Tap a Hangul card                                          |
| **Key content**      | Selected task, Hangul cards, feedback                      |
| **Important states** | Correct match, incorrect match, retry, completed           |

### Reward progress and reward card

|                      |                                                                              |
| -------------------- | ---------------------------------------------------------------------------- |
| **Purpose**          | Show progress toward reward and reveal reward after completion               |
| **Primary user**     | Child                                                                        |
| **Main user action** | Complete tasks and open reward                                               |
| **Key content**      | Hero progress visual, completion state, Korean story reward                  |
| **Important states** | 0% progress, partial progress, 100% complete, reward unlocked, reward opened |

---

## 10. Prototype interaction decisions

These decisions were clarified after reviewing the first working prototype.

They should be treated as Phase 1 UX requirements.

### Parent Mode structure

Parent Mode should use three separate creation areas:

1. To-do slot
2. Hangul card slot
3. Image slot

Each slot should have its own plus button.

Do not combine English task creation, Hangul card creation, and image selection into one modal.

The three areas should feel connected, but each should have a clear purpose.

### To-do slot

The To-do slot is for creating or selecting the English task.

Parents should be able to:

* Type a new task
* Select from previous or saved tasks
* Add the task to the selected date

The To-do input should behave like a combobox:

* Clicking into the empty input shows previous/saved tasks immediately.
* Typing filters the previous/saved task list.
* Parent can click a previous task to reuse it.
* Parent can still type a completely new task.

This reduces repeated typing because children’s routines are naturally repetitive.

The To-do slot should not include image selection.

The To-do slot should not include Hangul card creation.

### Date behaviour

Parent Mode may allow the parent to choose today or a future date.

The date selector should behave like a simple calendar or date picker.

Do not use an image grid in the date/to-do area.

When switching to Child Mode, the app should always default to today’s date.

Child Mode should not inherit a future date selected in Parent Mode.

### Hangul card slot

The Hangul card slot is where parents create or select Hangul cards.

Parents should be able to create a new Hangul card from this slot.

A Hangul card may include:

* Hangul word or phrase
* English label, if needed
* Romanisation for internal reference, if needed
* Korean prompt for audio, if needed

Hangul card creation should remain separate from English task creation and image selection.

### Image slot

The Image slot is where parents choose a visual from the fixed visual pool.

The Image slot should include a search input.

The search should filter the local visual pool only.

Do not use live image search.

Do not use random web images.

Do not use unlicensed images.

### Save and cancel behaviour

Do not use a global Save or Cancel button for the Parent Mode screen.

Use lightweight inline creation or small focused popups for each slot.

When an item is added, it should appear in the relevant slot.

### Child Mode audio behaviour

The child should hear the Korean sentence, not read it.

Keep the Korean prompt in the data model for audio or future text-to-speech.

Do not display full Korean prompt sentences in Child Mode.

Examples of text that should not be visible in Child Mode:

* 아침 먹을 시간이야
* 세수할 시간이야
* 양치할 시간이야

When the child taps a to-do item, play or simulate the Korean prompt sound.

If the child wants to hear it again, they can tap the same to-do item again.

Do not show a “Listen again” sound bar.

It is acceptable to show a temporary non-text sound indicator, such as a speaker icon or pulsing animation.

### Child Mode matching behaviour

Hangul cards can show short Hangul words such as:

* 세수
* 양치
* 숙제

The full Korean sentence prompt should not be visible because it gives away the Hangul answer.

The child should choose the correct Hangul card by listening and recognising, not by reading the full prompt sentence.

### Reward progress

Child Mode should include a child-friendly reward progress area.

Use a character-based reward progress visual rather than a standard progress bar or star meter.

The progress visual should show a generic child-friendly hero illustration becoming more complete as tasks are completed.

Do not use copyrighted characters such as Superman.

At 100% completion, the hero illustration should be complete and the reward should unlock.

### Reward content

For Phase 1, use a simple parent-approved Korean story card as the reward.

Do not auto-open YouTube.

Do not embed a random YouTube video.

Do not select copyrighted cartoon content automatically.

If video rewards are added later, they should be parent-approved.

Example reward story for demo:

**Title:** 오늘의 작은 영웅

**Korean story:**

오늘 나는 작은 영웅이에요.
세수를 하고, 양치도 했어요.
숙제도 조금 해냈어요.
하나씩 하니까 더 잘할 수 있었어요.
오늘도 정말 잘했어요!

**English support, parent-facing only:**

Today, I am a little hero.
I washed my face and brushed my teeth.
I also did a little homework.
Step by step, I could do better.
I did really well today.

The Korean story can be shown after the reward unlocks.

The English support is parent-facing only and should not be shown in Child Mode.

---

## 11. Visual and interaction direction

### Visual direction

The prototype should feel modern, warm, playful, calm, child-friendly, and parent-trustworthy.

Use:

* Large rounded cards
* Generous spacing
* Soft background colours
* Clear section grouping
* Friendly icons or emoji-style visuals
* Large touch targets
* Clear selected, correct, incorrect, completed, and reward states

Avoid:

* Old-fashioned form styling
* Dense grey boxes
* Harsh borders
* Cluttered layouts
* Adult productivity dashboard styling
* Generic to-do app styling
* Overly childish decoration

### Layout direction

The visual sketches suggest a three-panel direction:

1. Task list
2. Hangul cards
3. Completion or reward area

This is useful for tablet-first design.

On mobile, the layout may need to become a single-column or stacked flow.

> ⚠️ TBD: Should the three-panel layout be used on all device sizes, or only on tablet?

### Mode structure

Use a persistent mode toggle in the header.

Parent Mode should use a parent-related icon, not a lock icon.

Child Mode can use a home or child-friendly icon.

> ⚠️ TBD: Final icon choices for Parent Mode and Child Mode.

---

## 12. Content and card library strategy

The Phase 1 prototype uses a fixed library of 20 curated Hangul routine cards.

The designer does not need to provide 20 static image files.

The card data holds a visual reference, and the app resolves the icon from that reference.

Each card in the library includes:

| Field             | Description                           |
| ----------------- | ------------------------------------- |
| `id`              | Unique identifier                     |
| `englishLabel`    | English task name                     |
| `hangul`          | Hangul word                           |
| `koreanPrompt`    | Korean sentence prompt for audio only |
| `romanisation`    | Internal reference only               |
| `visualSource`    | Icon source                           |
| `iconKeyword`     | Keyword for the visual                |
| `fallbackEmoji`   | Emoji fallback                        |
| `category`        | Routine category                      |
| `correctFeedback` | Korean phrase for correct match       |
| `hintPhrase`      | Korean phrase for incorrect match     |

Romanisation should not be shown to children.

Full Korean prompt sentences should not be shown to children.

### Suggested 20-card set

| Category     | English label   | Hangul | Korean prompt |
| ------------ | --------------- | ------ | ------------- |
| Morning      | Wake up         | 일어나기   | 일어날 시간이야      |
| Morning      | Wash face       | 세수     | 세수할 시간이야      |
| Morning      | Brush teeth     | 양치     | 양치할 시간이야      |
| Morning      | Get dressed     | 옷 입기   | 옷 입을 시간이야     |
| Morning      | Eat breakfast   | 아침 먹기  | 아침 먹을 시간이야    |
| School       | Go to school    | 학교 가기  | 학교 갈 시간이야     |
| School       | Homework        | 숙제     | 숙제할 시간이야      |
| School       | Reading         | 책 읽기   | 책 읽을 시간이야     |
| After school | Snack           | 간식     | 간식 먹을 시간이야    |
| After school | Play            | 놀기     | 놀 시간이야        |
| Home         | Tidy up         | 정리     | 정리할 시간이야      |
| Home         | Help parents    | 도와주기   | 도와줄 시간이야      |
| Food         | Eat dinner      | 저녁 먹기  | 저녁 먹을 시간이야    |
| Hygiene      | Bath / shower   | 목욕     | 목욕할 시간이야      |
| Hygiene      | Wash hands      | 손 씻기   | 손 씻을 시간이야     |
| Evening      | Put on pyjamas  | 잠옷 입기  | 잠옷 입을 시간이야    |
| Evening      | Brush teeth     | 양치     | 양치할 시간이야      |
| Evening      | Story time      | 이야기    | 이야기 들을 시간이야   |
| Evening      | Bedtime         | 잠자기    | 잘 시간이야        |
| Evening      | Pack school bag | 가방 챙기기 | 가방 챙길 시간이야    |

> ⚠️ TBD: Which exact 20 cards are confirmed for the demo?

> ⚠️ TBD: Should morning and evening tooth-brushing use the same Hangul card or two distinct cards?

### Visual source rules

* Use one consistent visual source where possible.
* Do not use random web image search.
* Do not use unlicensed images.
* OpenMoji or Noto Emoji may be used for Phase 1.
* Attribution must be included if required by the chosen source.

> ⚠️ TBD: Should OpenMoji or Noto Emoji be the primary visual source for Phase 1?

---

## 13. Audio and Korean language behaviour

### When audio plays

| Trigger                            | Audio content                        |
| ---------------------------------- | ------------------------------------ |
| Child taps a visual task slot      | Korean sentence prompt for that task |
| Child taps the correct Hangul card | Positive Korean feedback phrase      |
| Child taps the wrong Hangul card   | Gentle Korean hint phrase            |

### Audio display rule

The child should hear the Korean sentence, not read it.

Do not display full Korean prompt sentences in Child Mode.

The Korean prompt should stay in the data model for audio or future text-to-speech only.

### Audio implementation for Phase 1

For Phase 1, audio can be:

* Real recorded or generated audio, if available
* Browser text-to-speech fallback
* Simulated audio with a speaker icon and animation

Do not block the prototype on real AI-generated audio.

### Korean language rules

* All Korean words, prompt sentences, feedback phrases, and hint phrases must be reviewed by a Korean-speaking adult before the demo.
* Korean should be simple and natural.
* Korean should sound appropriate for a parent speaking to a child aged 4–6.
* Romanisation is stored for internal reference only.
* English labels may appear in the child’s task list, but not on Hangul cards.

> ⚠️ TBD: Who will review Korean language accuracy before the demo?

---

## 14. Constraints and requirements

### Child-friendly design

* Large touch targets
* Simple screens
* Clear feedback
* Short instructions
* Warm, encouraging tone
* No punitive error states

### Accessibility

* Strong colour contrast
* Do not rely on colour alone
* Clear selected states
* Support visual and audio cues
* Prioritise tablet experience
* Support mobile and desktop

### Data and persistence

* Phase 1 can use local/static data.
* LocalStorage may be used if persistence is needed.
* A real database is not required.
* A reset prototype action should be available for testing.

### Mode and accounts

* Use Parent Mode and Child Mode.
* Do not build real accounts or authentication for Phase 1.
* Child Mode should always start on today’s date.

### Reward content

* Use an original Korean story reward card for Phase 1.
* Do not use copyrighted cartoon content.
* Do not auto-open YouTube.
* Do not embed random external videos.

---

## 15. Success criteria

### User success

**Child:**

* Can understand the next action quickly.
* Can tap a task and hear Korean audio.
* Can match at least one Hangul card correctly.
* Can recover from mistakes without feeling punished.
* Can complete the routine and unlock a reward.

**Parent:**

* Can add or reuse a task.
* Can create or select a Hangul card.
* Can choose an image from the local visual pool.
* Can prepare a simple routine without repeated typing.
* Can trust that the Korean content is reviewable.

### Product success

* The app feels like a Hangul learning experience, not a generic to-do list.
* The parent setup flow and child learning flow feel connected.
* The reward feels motivating and culturally relevant.
* The prototype supports future product phases without overbuilding.

### Phase 1 prototype success

* Parent-to-child flow is demoable in under 3 minutes.
* To-do, Hangul card, and Image slots are separate.
* To-do combobox supports previous tasks and free typing.
* Child Mode defaults to today.
* Korean prompt sentences are hidden in Child Mode.
* Reward progress updates.
* Korean story reward unlocks after all tasks are complete.
* Reset prototype action allows repeated testing.

---

## 16. Open questions

> ⚠️ TBD: Which exact 20 cards are confirmed for the Phase 1 demo?

> ⚠️ TBD: Should morning and evening tooth-brushing use the same Hangul card or two distinct cards?

> ⚠️ TBD: Who will review Korean language accuracy before the demo?

> ⚠️ TBD: What is the full confirmed list of Korean prompt phrases for all 20 cards?

> ⚠️ TBD: Where should visual asset attribution appear?

> ⚠️ TBD: Should OpenMoji or Noto Emoji be the primary visual source for Phase 1?

> ⚠️ TBD: Should the three-panel layout be used on all device sizes, or only on tablet?

> ⚠️ TBD: Should Hangul cards always be fully visible, or revealed only when a task is selected?

> ⚠️ TBD: Should the calendar show a full month, two weeks, or a rolling 7-day strip?

> ⚠️ TBD: Should the Parent Mode button be labelled “Parent”, “Parent Mode”, or something else?

> ⚠️ TBD: Should the Child Mode button be labelled “Child”, “Child Mode”, or the child’s name?

> ⚠️ TBD: Should there be any friction to prevent a child from accidentally entering Parent Mode?

> ⚠️ TBD: How many Hangul cards are shown at once — all 20, or only the cards relevant to today’s tasks?

> ⚠️ TBD: Should distractor Hangul cards be shown to increase the matching challenge?

> ⚠️ TBD: Should English labels appear in Child Mode task slots, or should icons/audio carry more of the meaning?

> ⚠️ TBD: How should the parent link a To-do task, Hangul card, and image in the UI — by selecting an active task first, or by editing an incomplete task card?
