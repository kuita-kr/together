# Project Brief

## Product positioning

This is a Hangul learning app using daily routines as the interaction model — not a generic to-do list app.

- The to-do list is the learning structure.
- The main goal is Hangul recognition and Korean language exposure.
- The daily routine is the interaction model, not the product goal.

The app uses a to-do list format, but its main purpose is not productivity or task management. The main purpose is to make Hangul feel familiar, useful, and part of the child's everyday life.

Every design and implementation decision should support:

- Hangul recognition
- Korean language exposure
- Visual matching
- Korean pronunciation
- Child confidence
- Parent-supported learning
- Low-pressure routine building

The product should not become:

- A generic to-do list app
- A productivity app
- A complex calendar app
- A formal school worksheet
- A parent admin dashboard first

---

## Product context and opportunity

Many Korean heritage children living in the UK can understand spoken Korean but are less confident reading Hangul.

As children spend more time in English-speaking school environments, they naturally become more comfortable reading, writing, and speaking in English.

Traditional Hangul study books are often text-heavy, writing-focused, and not engaging enough for young children with busy school routines.

Existing Korean learning materials can also feel disconnected from the child's everyday life.

This product creates a lightweight way for children to practise recognising Hangul through familiar daily activities such as washing their face, brushing their teeth, doing homework, eating dinner, and getting ready for bed.

The opportunity is to make Hangul part of the child's existing routine — not an additional study session. By embedding Korean words into the tasks a child already does each day, the app creates repeated, natural exposure without formal pressure.

The product should help children experience Hangul as part of normal daily life, not as extra homework.

---

## Product goals

- Help children recognise Hangul words linked to daily routines
- Create repeated, natural exposure to Korean language
- Support parent-led learning moments at home with low setup effort
- Make Hangul feel familiar and connected to everyday actions, not academic
- Build child confidence through encouraging, low-pressure interactions
- Use daily routines as a repeatable structure that keeps children engaged over time
- Build a product foundation in Phase 1 that can grow into a fuller learning experience in later phases

---

## Primary users

### Child user

- **Who they are:** Korean heritage children aged 4–6, Reception to early Key Stage 1 in the UK
- **What they need:** A playful, visual, and low-pressure way to connect Korean words with familiar actions and daily tasks
- **What success looks like:** They can recognise Hangul words linked to daily routines, hear Korean phrases, and feel encouraged rather than tested
- **What may frustrate or block them:**
  - Too much text
  - Small buttons or hard-to-tap areas
  - Confusing schedule layout
  - Punishing error states
  - Too many steps before something fun happens
  - Interactions that require precise dragging
  - Audio that is unclear or unavailable
  - Visuals that do not clearly represent the task

The child may understand some spoken Korean but not speak fluently. They may recognise a small amount of Hangul but not read confidently. They will likely use a tablet, with possible support from a parent.

### Parent user

- **Who they are:** Parents of Korean heritage children in the UK, likely with some Korean language ability, who want their child to stay connected to Korean language and culture
- **What they need:** A simple, low-effort way to create a daily Hangul routine for their child; confidence that the Korean content shown to their child is accurate and appropriate
- **What success looks like:** They can create a simple routine, add or edit activity cards, choose suitable visuals, and trust that their child is learning without being pressured
- **What may frustrate or block them:**
  - Too much setup effort
  - Unclear card creation
  - Incorrect Korean phrasing
  - App feeling like a generic task manager
  - Too much reliance on AI without a review step
  - No way to correct or customise content
  - Inconsistent visual style

---

## User problem

### Child perspective

Korean heritage children in the UK have limited everyday opportunities to practise reading Hangul. Many children understand some Korean when spoken at home, but English is dominant in school, social life, and daily reading. Existing learning materials often focus on formal writing practice, which can feel repetitive or disconnected from daily life. Children need a more playful and practical way to connect Hangul with familiar actions, sounds, images, and routines.

### Parent perspective

Parents want their children to stay connected to Korean language and culture, but do not always have time for formal study sessions. They need a low-effort way to create small Korean learning moments at home — moments that feel natural rather than forced.

---

## Jobs To Be Done

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

## Product maturity and phased delivery

This product should not be treated as a one-off demo. The competition prototype is the first meaningful slice of a larger Hangul learning routine product.

The product should be designed to improve through several phases, starting with a simple parent-to-child routine flow and growing into a more personalised learning experience over time.

### Phase 1: Competition prototype

- Demonstrate the core product idea clearly
- Show how daily routines can become a Hangul learning experience
- Prove the parent-to-child flow using sample data and simple interactions
- Include a simple reward flow to create a clear emotional payoff

### Phase 2: Usable MVP

- Make the app usable by a parent and child beyond the demo flow
- Persistent saved routines
- Ability to create, edit, delete, and reorder tasks
- Multiple days of routines
- A clearer parent setup experience
- Basic pronunciation support
- A reusable visual card library
- Simple reward settings
- Better responsive behaviour for tablet, mobile, and desktop

### Phase 3: Learning product

- Strengthen the educational value of the app
- Learning progress over time
- Repeated exposure to Hangul words
- Difficulty levels based on the child's confidence
- Optional romanisation support
- Better Korean audio quality
- Parent view of words practised
- More varied reward content
- Gentle review of previously learned words

### Phase 4: Personalised and AI-supported product

- Use AI to reduce parent setup effort and personalise learning
- AI-generated routine suggestions from parent input
- English-to-Korean task suggestions
- Child voice input for creating task ideas
- Personalised Hangul card recommendations
- Adaptive review based on mistakes
- AI-assisted icon or image suggestions
- Optional text-to-speech or generated Korean audio
- AI-generated or AI-suggested visual cards (with parent review)

Phase 1 is not a throwaway demo. It is the first meaningful slice of a longer product vision and should be structured so it can grow into later phases.

---

## Phase 1 MVP focus

The Phase 1 prototype should focus on two connected flows:

1. **Parent setup flow** — shows how a parent creates a daily Hangul routine
2. **Child learning flow** — shows how a child follows and matches their routine

The child learning flow is the main product experience and should be prioritised.

The parent flow exists to show how a daily Hangul routine is created.

Both flows are required for the competition demo.

The prototype should also include a reward flow: when the child completes all daily tasks, they unlock a mock video card as a short, Korean-language reward moment.

---

## Phase 1 assumptions

- Use Parent Mode and Child Mode rather than real accounts
- Use a simple mode switch — no login, authentication, or account profiles
- Use sample data where needed
- Use a fixed 20-card Hangul library
- Use a fixed visual pool (OpenMoji and Noto Emoji are confirmed as acceptable for Phase 1)
- Do not rely on live image search
- Do not rely on real translation
- Do not rely on real AI generation for Phase 1 task creation
- Audio should use real AI-generated audio for Phase 1
- Saved tasks should persist after page refresh
- Saving can work within the session unless persistence is easy to add
- Parent scheduling should use a calendar-style view
- Weekly view should be included in Phase 1 (shows to-do list only, hides Hangul matching slots)
- Romanisation should not be visible to children
- English labels should be visible in child mode but not on the Hangul cards themselves
- Child cannot create their own schedule in Phase 1
- The reward should be a mock video card

---

## Out of scope for Phase 1

- Real authentication
- Real parent or child accounts
- Full calendar system or complex weekly scheduling
- Real translation service
- Real AI-generated task creation
- Live image search
- Random web images
- Full video library
- Advanced analytics
- Child progress tracking
- Unreviewed AI-generated Korean content
- AI-assisted card creation with parent approval (future scope)
- Child voice input
- Multiple reward types
- Personalised learning recommendations
- Real audio recording or advanced TTS integration beyond what is easy to add

---

## Open questions

> ⚠️ TBD: Which exact 20 cards are confirmed for the demo?

> ⚠️ TBD: Who will review Korean language accuracy before the demo, and what is the review process?

> ⚠️ TBD: Where should visual asset attribution appear — app footer, about screen, documentation, or credits section?

> ⚠️ TBD: What is the final content of the mock video card reward?

> ⚠️ TBD: Should English task labels appear in the Hangul card matching area in child mode, or only in the task list?

> ⚠️ TBD: What exact Korean phrases should be confirmed for task prompts, hints, and encouragement beyond the examples in the source note? (All must be reviewed by a Korean-speaking adult before use.)
