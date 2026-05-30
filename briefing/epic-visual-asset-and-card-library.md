# Epic: Visual Asset and Card Library

## Outcome we are designing for

The app has a fixed, curated library of at least 20 Hangul routine cards — each with a consistent visual icon, a Korean word, a child-friendly Korean prompt, and fallback data — so that the child always sees clear, appropriate, and consistent visuals, and the parent does not need to manually supply 20 image files.

---

## Primary user in this epic

**Design and development team (building the card library)**
**Parent user (choosing cards and visuals from the library)**
**Child user (seeing and recognising the card visuals)**

---

## User stories

- As a developer, I want a fixed card data structure, so that I can build the matching interaction without needing individually uploaded image files.
- As a parent, I want to choose from a clear, child-friendly visual pool, so that I can pick the right image for each task without second-guessing quality or appropriateness.
- As a child, I want to see clear, consistent visual icons for each task, so that I can recognise what each card represents.
- As a designer, I want all visuals to come from one consistent source, so that the app has a unified visual style.

---

## Jobs To Be Done

- When building the Phase 1 prototype, I want a fixed card library that maps Hangul words to open-source visual icons, so I do not have to manually source and upload 20 image files.
- When a parent selects a visual for a task, I want them to choose from a curated fixed pool, so that only appropriate and consistent images can be selected.

---

## Experience notes

### Card library design principle

The designer does not need to manually provide 20 static image files for Phase 1.

Instead, each card maps to:

- An open-source or licensed visual source (e.g. OpenMoji, Noto Emoji)
- An icon keyword or search reference (e.g. "face with water")
- A fallback emoji

This means the card data holds the reference, and the app resolves the visual from that reference at runtime.

### Card data structure

Each card in the library should include:

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
  "category": "morning",
  "audioPrompt": "세수할 시간이야",
  "correctFeedback": "맞아요. 잘했어요.",
  "hintPhrase": "다시 해볼까요?"
}
```

### Confirmed 20-card library (from source note)

The following 20 cards are suggested in the source material. The exact final selection must be confirmed and all Korean content must be reviewed by a Korean-speaking adult.

| Category | English label | Hangul | Korean prompt | Romanisation | Visual idea |
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

> ⚠️ TBD: The final list of 20 cards must be confirmed. Some cards (e.g. 양치 appearing twice for morning and evening) may need to be distinguished in the data or replaced. All Korean content must be reviewed by a Korean-speaking adult before use.

### Visual source strategy

For Phase 1:

- Use **OpenMoji** and/or **Noto Emoji** as confirmed acceptable sources
- Use one consistent source per card set — do not mix visual styles within a session
- Each card stores a visual source reference and icon keyword rather than a manually uploaded image file
- Fallback emoji is included in card data for cases where the icon cannot be loaded

For later phases:

- Custom illustration style is preferred
- AI-suggested visuals (with parent review and style controls)
- Managed internal card library
- External licensed children's illustration sets

### Visual pool (parent-facing)

The visual pool shown to parents during task creation should:

- Be a fixed, curated set of built-in icons
- Show clearly recognisable, child-friendly, consistent illustrations
- Not include random web image search results
- Not include unlicensed images
- Come from one consistent visual source

### Attribution

If the chosen open-source visual library requires attribution, it should appear in one of:

- App footer
- About screen
- Project documentation or credits section

> ⚠️ TBD: Where exactly should visual asset attribution appear in the app?

---

## Rules and constraints

- Do not use random web image search for children's content — quality, safety, copyright, and style risks
- Do not use unlicensed images
- Do not mix visual styles from different sources
- All Korean words and phrases in card data must be reviewed by a Korean-speaking adult before use
- AI-generated cards must not be shown to children without parent review (future phases only)
- Romanisation is stored in card data for internal reference — it should not be visible to children in the app interface
- If attribution is required, it must be included somewhere accessible in the app

---

## Phase 1 scope

- Fixed 20-card Hangul library in code (data structure with all required fields)
- Visual source mapped per card (OpenMoji or Noto Emoji keyword/reference)
- Fallback emoji per card
- Korean prompt per card
- Correct feedback phrase per card
- Hint phrase per card
- Romanisation stored for internal reference only
- Fixed visual pool for parent task creation (drawn from the same card library)
- Attribution placeholder for visual source

---

## Later-phase opportunities

- Parent-controlled card library management (add, edit, delete cards)
- AI-assisted card creation with parent approval flow
- AI-suggested images with style controls
- Curated card library organised by category and difficulty level
- Custom illustration set for a distinctive visual identity
- External licensed visual source integration
- Korean phrase review workflow for new cards

---

## Open questions

> ⚠️ TBD: Which exact 20 cards are confirmed for the demo? (Some cards in the suggested list overlap — e.g. 양치 appears twice.)

> ⚠️ TBD: Should morning and evening tooth-brushing use the same Hangul card or two distinct cards?

> ⚠️ TBD: Should OpenMoji or Noto Emoji be used as the primary source, or both? If both, which takes precedence?

> ⚠️ TBD: Where should attribution for OpenMoji or Noto Emoji appear in the app?

> ⚠️ TBD: Who will review all Korean words, prompts, feedback phrases, and hint phrases in the card library before the demo?

> ⚠️ TBD: Should the romanisation field be hidden entirely in the app interface, or available somewhere for parents to reference?
