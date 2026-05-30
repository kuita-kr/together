// ─────────────────────────────────────────────
// K — Hangul Learning App · Phase 1 Prototype
// script.js
//
// This is a Hangul learning app using daily routines as the interaction model.
// It is NOT a generic to-do list app.
// The daily schedule is the learning mechanic. The product goal is Hangul recognition.
// ─────────────────────────────────────────────

// ─── CONSTANTS ────────────────────────────────

const TODAY_KEY = new Date().toISOString().slice(0, 10); // "YYYY-MM-DD"
const STORAGE_KEY = 'k_tasks_' + TODAY_KEY;
const CUSTOM_HANGUL_STORAGE_KEY = 'k_hangul_custom';

// TODO: Korean review needed — all Korean prompts, feedback phrases, and hint phrases
// below must be reviewed and confirmed by a Korean-speaking adult before demo use.

// ─── 20-CARD HANGUL LIBRARY ───────────────────
// Source of truth for all Hangul cards used in the prototype.
// Visual assets: OpenMoji (open-source, requires attribution — see footer in index.html)
// Romanisation is for internal reference only — never shown to children.

const HANGUL_LIBRARY = [
  {
    id: 'wake-up',
    englishLabel: 'Wake up',
    hangul: '일어나기',
    koreanPrompt: '일어날 시간이야', // TODO: Korean review needed — 일어날 시간이야
    romanisation: 'ireonagi',
    category: 'morning',
    fallbackEmoji: '🌅',
    iconKeyword: 'sunrise',
    correctFeedback: '맞아요. 잘했어요!', // TODO: Korean review needed
    hintPhrase: '다시 해볼까요?',           // TODO: Korean review needed
  },
  {
    id: 'wash-face',
    englishLabel: 'Wash face',
    hangul: '세수',
    koreanPrompt: '세수할 시간이야', // TODO: Korean review needed
    romanisation: 'se-su',
    category: 'morning',
    fallbackEmoji: '🧼',
    iconKeyword: 'soap',
    correctFeedback: '맞아요. 잘했어요!',
    hintPhrase: '다시 해볼까요?',
  },
  {
    id: 'brush-teeth-morning',
    englishLabel: 'Brush teeth',
    hangul: '양치',
    koreanPrompt: '양치할 시간이야', // TODO: Korean review needed
    romanisation: 'yangchi',
    category: 'morning',
    fallbackEmoji: '🪥',
    iconKeyword: 'toothbrush',
    correctFeedback: '맞아요. 잘했어요!',
    hintPhrase: '다시 해볼까요?',
  },
  {
    id: 'get-dressed',
    englishLabel: 'Get dressed',
    hangul: '옷 입기',
    koreanPrompt: '옷 입을 시간이야', // TODO: Korean review needed
    romanisation: 'ot ipgi',
    category: 'morning',
    fallbackEmoji: '👕',
    iconKeyword: 'shirt',
    correctFeedback: '맞아요. 잘했어요!',
    hintPhrase: '다시 해볼까요?',
  },
  {
    id: 'eat-breakfast',
    englishLabel: 'Eat breakfast',
    hangul: '아침 먹기',
    koreanPrompt: '아침 먹을 시간이야', // TODO: Korean review needed
    romanisation: 'achim meokgi',
    category: 'morning',
    fallbackEmoji: '🥣',
    iconKeyword: 'bowl',
    correctFeedback: '맞아요. 잘했어요!',
    hintPhrase: '다시 해볼까요?',
  },
  {
    id: 'go-to-school',
    englishLabel: 'Go to school',
    hangul: '학교 가기',
    koreanPrompt: '학교 갈 시간이야', // TODO: Korean review needed
    romanisation: 'hakgyo gagi',
    category: 'school',
    fallbackEmoji: '🎒',
    iconKeyword: 'backpack',
    correctFeedback: '맞아요. 잘했어요!',
    hintPhrase: '다시 해볼까요?',
  },
  {
    id: 'homework',
    englishLabel: 'Homework',
    hangul: '숙제',
    koreanPrompt: '숙제할 시간이야', // TODO: Korean review needed
    romanisation: 'sukje',
    category: 'school',
    fallbackEmoji: '📚',
    iconKeyword: 'books',
    correctFeedback: '맞아요. 잘했어요!',
    hintPhrase: '다시 해볼까요?',
  },
  {
    id: 'reading',
    englishLabel: 'Reading',
    hangul: '책 읽기',
    koreanPrompt: '책 읽을 시간이야', // TODO: Korean review needed
    romanisation: 'chaek ilkgi',
    category: 'school',
    fallbackEmoji: '📖',
    iconKeyword: 'open book',
    correctFeedback: '맞아요. 잘했어요!',
    hintPhrase: '다시 해볼까요?',
  },
  {
    id: 'snack',
    englishLabel: 'Snack',
    hangul: '간식',
    koreanPrompt: '간식 먹을 시간이야', // TODO: Korean review needed
    romanisation: 'gansik',
    category: 'afterschool',
    fallbackEmoji: '🍎',
    iconKeyword: 'apple',
    correctFeedback: '맞아요. 잘했어요!',
    hintPhrase: '다시 해볼까요?',
  },
  {
    id: 'play',
    englishLabel: 'Play',
    hangul: '놀기',
    koreanPrompt: '놀 시간이야', // TODO: Korean review needed
    romanisation: 'nolgi',
    category: 'afterschool',
    fallbackEmoji: '⚽',
    iconKeyword: 'ball',
    correctFeedback: '맞아요. 잘했어요!',
    hintPhrase: '다시 해볼까요?',
  },
  {
    id: 'tidy-up',
    englishLabel: 'Tidy up',
    hangul: '정리',
    koreanPrompt: '정리할 시간이야', // TODO: Korean review needed
    romanisation: 'jeongni',
    category: 'home',
    fallbackEmoji: '🧹',
    iconKeyword: 'broom',
    correctFeedback: '맞아요. 잘했어요!',
    hintPhrase: '다시 해볼까요?',
  },
  {
    id: 'help-parents',
    englishLabel: 'Help at home',
    hangul: '도와주기',
    koreanPrompt: '도와줄 시간이야', // TODO: Korean review needed
    romanisation: 'dowajugi',
    category: 'home',
    fallbackEmoji: '🏠',
    iconKeyword: 'house',
    correctFeedback: '맞아요. 잘했어요!',
    hintPhrase: '다시 해볼까요?',
  },
  {
    id: 'eat-dinner',
    englishLabel: 'Eat dinner',
    hangul: '저녁 먹기',
    koreanPrompt: '저녁 먹을 시간이야', // TODO: Korean review needed
    romanisation: 'jeonyeok meokgi',
    category: 'food',
    fallbackEmoji: '🍚',
    iconKeyword: 'rice',
    correctFeedback: '맞아요. 잘했어요!',
    hintPhrase: '다시 해볼까요?',
  },
  {
    id: 'bath',
    englishLabel: 'Bath time',
    hangul: '목욕',
    koreanPrompt: '목욕할 시간이야', // TODO: Korean review needed
    romanisation: 'mogyok',
    category: 'hygiene',
    fallbackEmoji: '🛁',
    iconKeyword: 'bathtub',
    correctFeedback: '맞아요. 잘했어요!',
    hintPhrase: '다시 해볼까요?',
  },
  {
    id: 'wash-hands',
    englishLabel: 'Wash hands',
    hangul: '손 씻기',
    koreanPrompt: '손 씻을 시간이야', // TODO: Korean review needed
    romanisation: 'son ssitgi',
    category: 'hygiene',
    fallbackEmoji: '🙌',
    iconKeyword: 'hands',
    correctFeedback: '맞아요. 잘했어요!',
    hintPhrase: '다시 해볼까요?',
  },
  {
    id: 'pyjamas',
    englishLabel: 'Put on pyjamas',
    hangul: '잠옷 입기',
    koreanPrompt: '잠옷 입을 시간이야', // TODO: Korean review needed
    romanisation: 'jamot ipgi',
    category: 'evening',
    fallbackEmoji: '🌙',
    iconKeyword: 'moon',
    correctFeedback: '맞아요. 잘했어요!',
    hintPhrase: '다시 해볼까요?',
  },
  {
    id: 'brush-teeth-evening',
    // TODO: Human decision needed — morning and evening 양치 share the same Hangul word.
    // Using a distinct ID here so they can be treated as separate tasks in the routine.
    englishLabel: 'Brush teeth',
    hangul: '양치',
    koreanPrompt: '양치할 시간이야', // TODO: Korean review needed
    romanisation: 'yangchi',
    category: 'evening',
    fallbackEmoji: '🪥',
    iconKeyword: 'toothbrush',
    correctFeedback: '맞아요. 잘했어요!',
    hintPhrase: '다시 해볼까요?',
  },
  {
    id: 'story-time',
    englishLabel: 'Story time',
    hangul: '이야기',
    koreanPrompt: '이야기 들을 시간이야', // TODO: Korean review needed
    romanisation: 'iyagi',
    category: 'evening',
    fallbackEmoji: '📕',
    iconKeyword: 'closed book',
    correctFeedback: '맞아요. 잘했어요!',
    hintPhrase: '다시 해볼까요?',
  },
  {
    id: 'bedtime',
    englishLabel: 'Bedtime',
    hangul: '잠자기',
    koreanPrompt: '잘 시간이야', // TODO: Korean review needed
    romanisation: 'jamjagi',
    category: 'evening',
    fallbackEmoji: '😴',
    iconKeyword: 'sleeping face',
    correctFeedback: '맞아요. 잘했어요!',
    hintPhrase: '다시 해볼까요?',
  },
  {
    id: 'reward',
    englishLabel: 'Reward',
    hangul: '선물',
    koreanPrompt: '선물 받을 시간이야', // TODO: Korean review needed
    romanisation: 'seonmul',
    category: 'reward',
    fallbackEmoji: '🎁',
    iconKeyword: 'gift',
    correctFeedback: '다 했어요! 잘했어요!', // TODO: Korean review needed
    hintPhrase: '',
  },
];

// ─── SAMPLE TASKS (default routine shown on first load) ──────────────────────
// These are pre-loaded so the demo works immediately without parent setup.
// The parent can add more tasks via the setup flow.

// Task format: { id, date, time, text, hangulCardId, imageCardId, isComplete }
// text        — English task name written by the parent
// hangulCardId — ID of a HANGUL_LIBRARY entry (Hangul word for child to match)
// imageCardId  — ID of a HANGUL_LIBRARY entry (emoji/image shown on the task slot)
const SAMPLE_TASKS = [
  { id: 'task-1', time: '07:30', text: 'Wash face',     hangulCardId: 'wash-face',          imageCardId: 'wash-face' },
  { id: 'task-2', time: '08:00', text: 'Eat breakfast', hangulCardId: 'eat-breakfast',       imageCardId: 'eat-breakfast' },
  { id: 'task-3', time: '15:30', text: 'Homework',      hangulCardId: 'homework',            imageCardId: 'homework' },
  { id: 'task-4', time: '19:00', text: 'Bath time',     hangulCardId: 'bath',                imageCardId: 'bath' },
  { id: 'task-5', time: '20:00', text: 'Brush teeth',   hangulCardId: 'brush-teeth-evening', imageCardId: 'brush-teeth-evening' },
];

// ─── BILINGUAL DATE ────────────────────────────────────────────────────────

const KOREAN_DAYS = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];
const ENGLISH_DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const ENGLISH_MONTHS = ['January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'];

function getBilingualDate() {
  const d = new Date();
  const day = d.getDate();
  const month = ENGLISH_MONTHS[d.getMonth()];
  const year = d.getFullYear();
  const dayOfWeek = d.getDay();
  return {
    english: `${day} ${month} ${year}, ${ENGLISH_DAYS[dayOfWeek]}`,
    korean: KOREAN_DAYS[dayOfWeek],
  };
}

// ─── STATE ─────────────────────────────────────────────────────────────────

const state = {
  mode: 'child',
  selectedDate: TODAY_KEY,
  tasks: [],
  customHangulCards: [],        // parent-created Hangul cards, persisted separately
  parentSelectedTaskId: null,
  selectedTaskId: null,
  audioPlaying: false,
  matchResult: null,
  isComplete: false,
  rewardUnlocked: false,
  parentPopupOpen: false,       // kept for backward compat, no longer used
  editingTaskId: null,
  inlineTaskInput: false,       // shows inline task creation form in column 1
  inlineHangulInput: false,     // shows inline Hangul card creation form in column 2
  imageSearchQuery: '',         // filters the image pool in column 3
  inlineTaskPreset: null,       // { hangulCardId, imageCardId } from a selected combobox suggestion
};

// Cached suggestion list for the task combobox (module-level, not persisted)
let _taskSuggestions = [];

// ─── STORAGE ──────────────────────────────────────────────────────────────

function getStorageKey() {
  return 'k_tasks_' + state.selectedDate;
}

function saveTasks() {
  localStorage.setItem(getStorageKey(), JSON.stringify(state.tasks));
}

function saveCustomHangulCards() {
  localStorage.setItem(CUSTOM_HANGUL_STORAGE_KEY, JSON.stringify(state.customHangulCards));
}

function loadCustomHangulCards() {
  const saved = localStorage.getItem(CUSTOM_HANGUL_STORAGE_KEY);
  return saved ? JSON.parse(saved) : [];
}

function loadTasks() {
  const key = getStorageKey();
  const saved = localStorage.getItem(key);
  if (saved) {
    const parsed = JSON.parse(saved);
    // Migrate old format (task.cardId) — discard and rebuild from sample defaults
    if (parsed.length > 0 && 'cardId' in parsed[0]) {
      localStorage.removeItem(key);
    } else {
      return parsed;
    }
  }
  // First load for today: use sample tasks. Other dates start empty.
  if (state.selectedDate === TODAY_KEY) {
    const defaults = SAMPLE_TASKS.map(t => ({ ...t, date: TODAY_KEY, isComplete: false }));
    localStorage.setItem(key, JSON.stringify(defaults));
    return defaults;
  }
  return [];
}

// ─── CARD LOOKUP ──────────────────────────────────────────────────────────

function getCard(cardId) {
  return HANGUL_LIBRARY.find(c => c.id === cardId)
    || state.customHangulCards.find(c => c.id === cardId)
    || null;
}

// Returns the Hangul text for a task (from the library card linked by the parent).
function getTaskHangul(task) {
  return getCard(task.hangulCardId)?.hangul || '?';
}

// Returns the emoji for a task (from the library card linked by the parent).
function getTaskEmoji(task) {
  return getCard(task.imageCardId)?.fallbackEmoji || '📋';
}

// ─── AUDIO ────────────────────────────────────────────────────────────────
// Phase 1: uses browser Web Speech API (SpeechSynthesis) with lang="ko-KR".
// If speech synthesis is not available, the visible audio indicator still shows.
// Pre-generated audio files can replace this in a later pass.

function speak(text, onEnd) {
  if (!text) return;
  state.audioPlaying = true;
  renderAudioIndicator(true);
  renderFeedbackArea(); // refresh audio-bars playing class immediately

  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
    const utt = new SpeechSynthesisUtterance(text);
    utt.lang = 'ko-KR';
    utt.rate = 0.9;   // slightly slower for a young child
    utt.onend = () => {
      state.audioPlaying = false;
      renderAudioIndicator(false);
      renderFeedbackArea();
      if (onEnd) onEnd();
    };
    utt.onerror = () => {
      state.audioPlaying = false;
      renderAudioIndicator(false);
      renderFeedbackArea();
    };
    window.speechSynthesis.speak(utt);
  } else {
    // Simulated: show the audio bars animation for 2 seconds — no text displayed
    setTimeout(() => {
      state.audioPlaying = false;
      renderAudioIndicator(false);
      renderFeedbackArea();
      if (onEnd) onEnd();
    }, 2000);
  }
}

// ─── RENDER HELPERS ───────────────────────────────────────────────────────

function renderAudioIndicator(playing) {
  const el = document.getElementById('audio-indicator');
  if (!el) return;
  el.classList.toggle('visible', playing);
}

// ─── MAIN RENDER ──────────────────────────────────────────────────────────

function render() {
  renderHeader();
  if (state.mode === 'parent') {
    renderParentScreen();
  } else {
    renderChildScreen();
  }
}

// ─── HEADER ───────────────────────────────────────────────────────────────

function renderHeader() {
  const date = getBilingualDate();
  document.getElementById('date-english').textContent = date.english;
  document.getElementById('date-korean').textContent = date.korean;

  // Mode icon: house = child, family = parent
  const modeIcon = document.getElementById('mode-icon');
  modeIcon.textContent = state.mode === 'child' ? '🏠' : '👨‍👩‍👧';
  modeIcon.title = state.mode === 'child' ? 'Child Mode' : 'Parent Mode';

  // Mode toggle buttons
  document.getElementById('btn-child-mode').classList.toggle('active', state.mode === 'child');
  document.getElementById('btn-parent-mode').classList.toggle('active', state.mode === 'parent');

  // Audio indicator (always in DOM, shown/hidden via class)
  renderAudioIndicator(state.audioPlaying);
}

// ─── PARENT SCREEN ────────────────────────────────────────────────────────

function renderParentScreen() {
  const screen = document.getElementById('screen-parent');
  const screenChild = document.getElementById('screen-child');
  screen.classList.remove('hidden');
  screenChild.classList.add('hidden');

  renderDateStrip();
  renderTasksColumn();
  renderHangulColumn();
  renderImageColumn();
}

// ─── DATE STRIP ────────────────────────────────────────────────────────────

function renderDateStrip() {
  const strip = document.getElementById('date-strip');
  if (!strip) return;

  const chips = [];
  for (let i = 0; i < 7; i++) {
    const d = new Date();
    d.setDate(d.getDate() + i);
    const key = d.toISOString().slice(0, 10);
    const isSelected = key === state.selectedDate;
    const dayName = ENGLISH_DAYS[d.getDay()].slice(0, 3);
    const dayNum = d.getDate();
    chips.push(`
      <button
        class="date-chip ${isSelected ? 'selected' : ''}"
        onclick="selectDate('${key}')"
        aria-pressed="${isSelected}"
        aria-label="${dayName} ${dayNum}">
        <span class="date-chip-day">${dayName}</span>
        <span class="date-chip-num">${dayNum}</span>
      </button>`);
  }
  strip.innerHTML = chips.join('');
}

function selectDate(dateStr) {
  state.selectedDate = dateStr;
  state.tasks = loadTasks();
  state.parentSelectedTaskId = null;
  renderParentScreen();
}

// ─── COLUMN 1: TO-DO ───────────────────────────────────────────────────────

function renderTasksColumn() {
  const list = document.getElementById('parent-task-list');
  if (!list) return;

  const tasks = state.tasks.slice().sort((a, b) => a.time.localeCompare(b.time));

  // Inline new-task form with combobox suggestions (shown when + Task is tapped)
  const inlineFormHTML = state.inlineTaskInput ? `
    <div class="inline-form" id="inline-task-form">
      <input type="time" class="inline-time" id="inline-task-time" value="08:00" aria-label="Time" />
      <div class="combobox-wrapper">
        <input
          type="text"
          class="inline-text"
          id="inline-task-text"
          placeholder="e.g. Wash face"
          autocomplete="off"
          onfocus="onTaskComboFocus()"
          oninput="onTaskComboInput(this.value)"
          onblur="onTaskComboBlur()"
          onkeydown="handleInlineTaskKey(event)"
          aria-label="New task name"
          aria-autocomplete="list"
          aria-controls="task-suggestions" />
        <ul
          class="combobox-suggestions hidden"
          id="task-suggestions"
          role="listbox"
          onmousedown="event.preventDefault()">
        </ul>
      </div>
      <div class="inline-form-actions">
        <button class="btn-inline-save" onclick="submitInlineTask()" aria-label="Add task">✓ Add</button>
        <button class="btn-inline-cancel" onclick="cancelInlineTask()" aria-label="Cancel">✕</button>
      </div>
    </div>` : '';

  if (tasks.length === 0 && !state.inlineTaskInput) {
    list.innerHTML = `
      <div class="empty-state">
        <span class="empty-icon">📋</span>
        <p>No tasks yet for this date.</p>
        <p>Tap <strong>+ Task</strong> to add one.</p>
      </div>`;
    return;
  }

  list.innerHTML = inlineFormHTML + tasks.map(task => {
    const isActive = state.parentSelectedTaskId === task.id;
    const isEditing = state.editingTaskId === task.id;
    const hangulCard = getCard(task.hangulCardId);
    const imageCard = getCard(task.imageCardId);

    if (isEditing) {
      return `
        <div class="inline-form inline-edit-form">
          <input type="time" class="inline-time" id="inline-edit-time" value="${task.time}" />
          <input
            type="text"
            class="inline-text"
            id="inline-edit-text"
            value="${task.text || ''}"
            onkeydown="handleInlineEditKey(event, '${task.id}')"
            aria-label="Edit task name" />
          <div class="inline-form-actions">
            <button class="btn-inline-save" onclick="submitInlineEdit('${task.id}')">✓</button>
            <button class="btn-inline-cancel" onclick="cancelInlineEdit()">✕</button>
          </div>
        </div>`;
    }

    return `
      <div
        class="parent-task-row ${isActive ? 'active' : ''}"
        onclick="selectParentTask('${task.id}')"
        role="button" tabindex="0"
        aria-pressed="${isActive}"
        aria-label="${task.text}">
        <div class="task-row-main">
          <span class="task-time">${task.time}</span>
          <span class="task-label">${task.text}</span>
        </div>
        <div class="task-row-badges">
          <span class="badge-hangul ${hangulCard ? 'linked' : 'unlinked'}">
            ${hangulCard ? hangulCard.hangul : '한글?'}
          </span>
          <span class="badge-image ${imageCard ? 'linked' : 'unlinked'}">
            ${imageCard ? imageCard.fallbackEmoji : '?'}
          </span>
        </div>
        <div class="task-row-actions">
          <button class="btn-edit-task" onclick="event.stopPropagation(); openEditTask('${task.id}')" aria-label="Edit">✏️</button>
          <button class="btn-delete-task" onclick="event.stopPropagation(); deleteTask('${task.id}')" aria-label="Delete">✕</button>
        </div>
      </div>`;
  }).join('');

  // Auto-focus the new task text input after render
  if (state.inlineTaskInput) {
    setTimeout(() => { const el = document.getElementById('inline-task-text'); if (el) el.focus(); }, 0);
  } else if (state.editingTaskId) {
    setTimeout(() => { const el = document.getElementById('inline-edit-text'); if (el) el.focus(); }, 0);
  }
}

// ─── COLUMN 2: HANGUL LIBRARY ─────────────────────────────────────────────

function renderHangulColumn() {
  const container = document.getElementById('hangul-library-list');
  if (!container) return;

  const activeTask = state.tasks.find(t => t.id === state.parentSelectedTaskId);
  // Custom cards shown first, then library
  const allCards = [
    ...state.customHangulCards,
    ...HANGUL_LIBRARY.filter(c => c.category !== 'reward'),
  ];

  // Inline new Hangul card form
  const inlineFormHTML = state.inlineHangulInput ? `
    <div class="inline-form inline-hangul-form">
      <input
        type="text" id="inline-hangul-text" class="inline-text hangul-input"
        placeholder="Korean word, e.g. 세수"
        lang="ko" inputmode="text"
        onkeydown="handleInlineHangulKey(event)"
        aria-label="Korean word or phrase" />
      <input
        type="text" id="inline-hangul-label" class="inline-text"
        placeholder="English label (optional)"
        onkeydown="handleInlineHangulKey(event)"
        aria-label="English label (optional)" />
      <input
        type="text" id="inline-hangul-roman" class="inline-text"
        placeholder="Romanisation (optional)"
        onkeydown="handleInlineHangulKey(event)"
        aria-label="Romanisation (optional)" />
      <div class="inline-form-actions">
        <button class="btn-inline-save" onclick="submitInlineHangul()">✓ Add card</button>
        <button class="btn-inline-cancel" onclick="cancelInlineHangul()">✕</button>
      </div>
    </div>` : '';

  if (!activeTask) {
    container.innerHTML = inlineFormHTML + `
      <p class="link-hint">Tap a task in “To do” first, then tap a word here to link it.</p>
      ${allCards.map(c => `
        <div class="hangul-library-row dimmed" aria-hidden="true">
          ${c.isCustom ? '<span class="custom-badge">Custom</span>' : ''}
          <span class="hangul-library-word">${c.hangul}</span>
          <span class="hangul-library-label">${c.englishLabel}</span>
        </div>`).join('')}`;
    if (state.inlineHangulInput) {
      setTimeout(() => { const el = document.getElementById('inline-hangul-text'); if (el) el.focus(); }, 0);
    }
    return;
  }

  container.innerHTML = inlineFormHTML + allCards.map(card => {
    const isLinked = activeTask.hangulCardId === card.id;
    return `
      <button
        class="hangul-library-row ${isLinked ? 'linked' : ''} ${card.isCustom ? 'custom-card' : ''}"
        onclick="linkHangulToTask('${card.id}')"
        aria-label="${card.hangul} — ${card.englishLabel}"
        aria-pressed="${isLinked}">
        ${card.isCustom ? '<span class="custom-badge">Custom</span>' : ''}
        <span class="hangul-library-word">${card.hangul}</span>
        <span class="hangul-library-label">${card.englishLabel}</span>
        ${isLinked ? '<span class="link-check">✓</span>' : ''}
      </button>`;
  }).join('');

  if (state.inlineHangulInput) {
    setTimeout(() => { const el = document.getElementById('inline-hangul-text'); if (el) el.focus(); }, 0);
  }
}

function linkHangulToTask(hangulCardId) {
  if (!state.parentSelectedTaskId) return;
  const task = state.tasks.find(t => t.id === state.parentSelectedTaskId);
  if (task) {
    task.hangulCardId = hangulCardId;
    saveTasks();
    renderHangulColumn();
    renderTasksColumn();
  }
}

// ─── COLUMN 3: IMAGE POOL ─────────────────────────────────────────────────

function renderImageColumn() {
  const grid = document.getElementById('image-pool-grid');
  if (!grid) return;

  const activeTask = state.tasks.find(t => t.id === state.parentSelectedTaskId);
  const query = (state.imageSearchQuery || '').toLowerCase().trim();

  let cards = HANGUL_LIBRARY.filter(c => c.category !== 'reward');
  if (query) {
    cards = cards.filter(c =>
      c.englishLabel.toLowerCase().includes(query) ||
      (c.iconKeyword || '').toLowerCase().includes(query) ||
      c.category.toLowerCase().includes(query)
    );
  }

  if (cards.length === 0) {
    grid.innerHTML = `
      <div class="image-empty-state">
        <p>No matching image yet.</p>
        <p>Try another word.</p>
      </div>`;
    return;
  }

  let html = cards.map(card => {
    const isLinked = activeTask && activeTask.imageCardId === card.id;
    const isInteractive = !!activeTask;
    return `
      <button
        class="image-pool-card ${isLinked ? 'linked' : ''} ${!isInteractive ? 'dimmed' : ''}"
        onclick="${isInteractive ? `linkImageToTask('${card.id}')` : ''}"
        title="${card.englishLabel}"
        aria-label="${card.englishLabel}${isLinked ? ' — linked' : ''}"
        aria-pressed="${isLinked}"
        ${!isInteractive ? 'tabindex="-1"' : ''}>
        <span class="pool-emoji">${card.fallbackEmoji}</span>
        <span class="pool-english">${card.englishLabel}</span>
      </button>`;
  }).join('');

  if (!activeTask) {
    html = `<p class="link-hint image-link-hint">Tap a task in “To do” first, then tap an image to link it.</p>` + html;
  }

  grid.innerHTML = html;
}

function linkImageToTask(imageCardId) {
  if (!state.parentSelectedTaskId) return;
  const task = state.tasks.find(t => t.id === state.parentSelectedTaskId);
  if (task) {
    task.imageCardId = imageCardId;
    saveTasks();
    renderImageColumn();
    renderTasksColumn();
  }
}

function selectParentTask(taskId) {
  // Toggle: tapping the active task deselects it
  state.parentSelectedTaskId = state.parentSelectedTaskId === taskId ? null : taskId;
  renderTasksColumn();
  renderHangulColumn();
  renderImageColumn();
}

function renderAddTaskPopup() {
  const popup = document.getElementById('parent-popup');
  if (!popup) return;
  popup.classList.toggle('hidden', !state.parentPopupOpen);
}

// ─── CHILD SCREEN ─────────────────────────────────────────────────────────

function renderChildScreen() {
  const screen = document.getElementById('screen-child');
  const screenParent = document.getElementById('screen-parent');
  screen.classList.remove('hidden');
  screenParent.classList.add('hidden');

  renderChildTaskList();
  renderHangulCardGrid();
  renderFeedbackArea();
  renderCompletionPanel();
}

function renderChildTaskList() {
  const list = document.getElementById('child-task-list');
  if (!list) return;

  const tasks = state.tasks.slice().sort((a, b) => a.time.localeCompare(b.time));

  if (tasks.length === 0) {
    list.innerHTML = `
      <div class="empty-state">
        <span class="empty-icon">🌟</span>
        <p>Ask a parent to add today's tasks.</p>
      </div>`;
    return;
  }

  list.innerHTML = tasks.map(task => {
    const emoji = getTaskEmoji(task);
    const label = task.text || getCard(task.imageCardId)?.englishLabel || 'Task';
    const isSelected = state.selectedTaskId === task.id;
    const classes = ['child-task-slot',
      task.isComplete ? 'complete' : '',
      isSelected ? 'selected' : '',
    ].filter(Boolean).join(' ');

    return `
      <button
        class="${classes}"
        onclick="selectTask('${task.id}')"
        aria-label="${label}${task.isComplete ? ' — done' : ''}"
        aria-pressed="${isSelected}"
        ${task.isComplete ? 'disabled' : ''}>
        <span class="slot-time">${task.time}</span>
        <span class="slot-emoji">${emoji}</span>
        <span class="slot-label">${label}</span>
        ${task.isComplete ? '<span class="slot-done">✓</span>' : ''}
      </button>`;
  }).join('');
}

function renderHangulCardGrid() {
  const grid = document.getElementById('hangul-card-grid');
  if (!grid) return;

  // Show Hangul cards only for incomplete tasks that have a Hangul card linked
  const incompleteTasks = state.tasks.filter(t => !t.isComplete && t.hangulCardId);

  if (incompleteTasks.length === 0) {
    grid.innerHTML = '';
    return;
  }

  // Shuffle so cards are not in the same order as the task list
  const shuffled = [...incompleteTasks].sort(() => Math.random() - 0.5);
  const isAnswerable = !!state.selectedTaskId;

  grid.innerHTML = shuffled.map(task => {
    const displayHangul = getTaskHangul(task);
    return `
      <button
        class="hangul-card ${!isAnswerable ? 'dim' : ''}"
        onclick="attemptMatch('${task.id}')"
        aria-label="Korean word card: ${displayHangul}"
        ${!isAnswerable ? 'tabindex="-1"' : ''}>
        <span class="hangul-text">${displayHangul}</span>
      </button>`;
  }).join('');
}

function renderFeedbackArea() {
  const area = document.getElementById('feedback-area');
  if (!area) return;

  if (!state.matchResult) {
    if (state.selectedTaskId && state.audioPlaying) {
      // Sound is actively playing: show a brief animated indicator only.
      // No text, no replay button — child re-taps the same task to hear again.
      area.className = 'feedback-area prompt';
      area.innerHTML = `
        <div class="audio-state">
          <div class="audio-bars playing">
            <div class="bar"></div><div class="bar"></div>
            <div class="bar"></div><div class="bar"></div>
          </div>
        </div>`;
    } else {
      area.innerHTML = '';
      area.className = 'feedback-area';
    }
    return;
  }

  if (state.matchResult === 'correct') {
    const task = state.tasks.find(t => t.id === state.selectedTaskId);
    const phrase = task ? getCard(task.hangulCardId)?.correctFeedback : '맞아요. 잘했어요!';
    area.className = 'feedback-area correct';
    area.innerHTML = `<span class="feedback-icon">⭐</span><span class="feedback-text">${phrase}</span>`;
  } else {
    area.className = 'feedback-area incorrect';
    area.innerHTML = `<span class="feedback-icon">💛</span><span class="feedback-text">다시 해볼까요?</span>`;
  }
}

function renderCompletionPanel() {
  const panel = document.getElementById('completion-panel');
  if (!panel) return;

  const total = state.tasks.length;
  const done  = state.tasks.filter(t => t.isComplete).length;

  // ── Hero SVG builder ────────────────────────────────────────────────────
  // stage 0 = no tasks started, 1 = face, 2 = torso, 3 = body/cape,
  // stage 4 = sparkles, 5 = full hero (all complete)
  function heroSVG(stage) {
    const v  = (min) => stage >= min ? '1' : '0';
    const ck = stage >= 1 ? '0.45' : '0';      // cheek opacity
    const si = stage >= 5 ? '0'    : '0.1';    // silhouette hint fades out at 100%
    const gl = v(5);                            // glow only at 100%
    return `<svg class="hero-svg" viewBox="0 0 140 178" aria-hidden="true" focusable="false">
  <defs>
    <radialGradient id="hero-glow-grad" cx="50%" cy="44%" r="54%">
      <stop offset="0%"   stop-color="#FFFAE8"/>
      <stop offset="100%" stop-color="#FFE8C0" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <!-- Warm glow backdrop (stage 5 only) -->
  <ellipse cx="70" cy="92" rx="66" ry="80" fill="url(#hero-glow-grad)" opacity="${gl}"/>
  <!-- Faint silhouette — always visible as a hint, fades when complete -->
  <circle  cx="70" cy="32" r="20"           fill="#E8A070" opacity="${si}"/>
  <ellipse cx="70" cy="94" rx="40" ry="56"  fill="#E8A070" opacity="${si}"/>
  <!-- Cape (rendered before torso so it sits behind) -->
  <path d="M46,66 C36,78 20,132 24,170 L116,170 C120,132 104,78 94,66 Z"
        fill="#C05028" opacity="${v(3)}"/>
  <!-- Torso / hero suit -->
  <rect x="42" y="63" width="56" height="54" rx="11" fill="#E07840" opacity="${v(2)}"/>
  <!-- Neck -->
  <rect x="64" y="52" width="12" height="13" rx="5"  fill="#FFCBA4" opacity="${v(2)}"/>
  <!-- Star badge on suit -->
  <text x="70" y="98" text-anchor="middle" font-size="22" fill="#FFF0D8" opacity="${v(2)}">★</text>
  <!-- Left arm (arms wide / heroic stance) -->
  <rect x="18" y="66" width="20" height="42" rx="10" fill="#E07840"
        transform="rotate(18,28,66)" opacity="${v(3)}"/>
  <!-- Right arm (raised — flying pose) -->
  <rect x="102" y="50" width="20" height="42" rx="10" fill="#E07840"
        transform="rotate(-20,112,54)" opacity="${v(3)}"/>
  <!-- Left hand -->
  <circle cx="28" cy="112" r="9" fill="#FFCBA4" opacity="${v(3)}"/>
  <!-- Right hand (raised) -->
  <circle cx="112" cy="94" r="9" fill="#FFCBA4" opacity="${v(3)}"/>
  <!-- Head -->
  <circle cx="70" cy="32" r="22" fill="#FFCBA4" opacity="${v(1)}"/>
  <!-- Hair tufts -->
  <path d="M54,17 Q58,6 64,15 Q70,4 76,15 Q82,6 86,17"
        stroke="#5C3A1A" stroke-width="2.5" fill="none"
        stroke-linecap="round" opacity="${v(1)}"/>
  <!-- Eyes -->
  <circle cx="62" cy="29" r="3"   fill="#281C10" opacity="${v(1)}"/>
  <circle cx="78" cy="29" r="3"   fill="#281C10" opacity="${v(1)}"/>
  <circle cx="63.5" cy="27.5" r="1.2" fill="white" opacity="${v(1)}"/>
  <circle cx="79.5" cy="27.5" r="1.2" fill="white" opacity="${v(1)}"/>
  <!-- Smile -->
  <path d="M62 37 Q70 46 78 37"
        stroke="#E07840" stroke-width="2.2" fill="none"
        stroke-linecap="round" opacity="${v(1)}"/>
  <!-- Rosy cheeks -->
  <circle cx="53" cy="37" r="5" fill="#FFB0A0" opacity="${ck}"/>
  <circle cx="87" cy="37" r="5" fill="#FFB0A0" opacity="${ck}"/>
  <!-- Legs -->
  <rect x="50" y="115" width="18" height="42" rx="9" fill="#C05028" opacity="${v(3)}"/>
  <rect x="72" y="115" width="18" height="42" rx="9" fill="#C05028" opacity="${v(3)}"/>
  <!-- Boots -->
  <rect x="46" y="146" width="25" height="14" rx="7" fill="#281C10" opacity="${v(3)}"/>
  <rect x="69" y="146" width="25" height="14" rx="7" fill="#281C10" opacity="${v(3)}"/>
  <!-- Sparkles (stage 4+) -->
  <text x="4"   y="54"  font-size="18" fill="#F4A070" opacity="${v(4)}">✦</text>
  <text x="114" y="34"  font-size="14" fill="#F4A070" opacity="${v(4)}">★</text>
  <text x="118" y="86"  font-size="11" fill="#E07840" opacity="${v(4)}">✦</text>
  <text x="3"   y="94"  font-size="16" fill="#F4A070" opacity="${v(4)}">★</text>
  <text x="55"  y="8"   font-size="12" fill="#F4A070" opacity="${v(4)}">✦</text>
</svg>`;
  }
  // ────────────────────────────────────────────────────────────────────────

  if (total === 0) {
    panel.innerHTML = `
      <div class="progress-panel">
        <div class="progress-panel-title">🦸 My Hero</div>
        ${heroSVG(0)}
        <div class="hero-progress-label">Add tasks to start your hero journey!</div>
      </div>`;
    return;
  }

  const pct   = Math.round((done / total) * 100);
  const stage = state.isComplete ? 5
              : pct >= 75        ? 4
              : pct >= 50        ? 3
              : pct >= 25        ? 2
              : done > 0         ? 1
                                 : 0;

  let message;
  if (done === 0)              message = "Let's go! 시작해요!";
  else if (done < total - 1)   message = 'Keep going! 잘하고 있어요!';
  else if (done === total - 1) message = 'Almost there! 조금만 더!';
  else                         message = '';

  if (!state.isComplete) {
    panel.innerHTML = `
      <div class="progress-panel">
        <div class="progress-panel-title">🦸 My Hero</div>
        ${heroSVG(stage)}
        <div class="hero-progress-label">${done} of ${total} tasks done · ${pct}%</div>
        <div class="progress-message">${message}</div>
      </div>`;
    return;
  }

  // All tasks done ─────────────────────────────────────────────────────────
  if (!state.rewardUnlocked) {
    panel.innerHTML = `
      <div class="progress-panel reward-ready">
        <div class="progress-panel-title">🦸 My Hero</div>
        ${heroSVG(5)}
        <div class="hero-progress-label">All ${total} tasks done · 100% 🎉</div>
        <div class="completion-title">끝! You're a hero!</div>
        <button class="btn-reward" onclick="unlockReward()" aria-label="Open your reward">
          🎁 선물
        </button>
      </div>`;
  } else {
    panel.innerHTML = `
      <div class="progress-panel reward-ready">
        <div class="completion-emoji">🌟</div>
        <div class="reward-card">
          <div class="reward-badge">🇰🇷 Korean Story Time</div>
          <div class="reward-title-korean">한국어 이야기 시간이야!</div>
          <div class="reward-phrase">오늘 정말 잘했어요!</div>
          <div class="reward-instruction">Ask a grown-up to open today's Korean cartoon.</div>
          <a
            href="#"
            class="reward-link"
            onclick="event.preventDefault(); alert('오늘의 한국 만화\nAsk a parent to open a Korean cartoon for you!')"
            aria-label="Parent-approved Korean cartoon link">
            📺 Parent-approved Korean cartoon link
          </a>
          <button class="btn-dismiss-reward" onclick="dismissReward()" aria-label="Back to routine">
            ← Back to routine
          </button>
        </div>
      </div>`;
  }
}

// ─── INTERACTIONS ─────────────────────────────────────────────────────────

function switchMode(mode) {
  state.mode = mode;
  state.selectedTaskId = null;
  state.matchResult = null;
  state.parentPopupOpen = false;
  state.parentSelectedTaskId = null;
  state.inlineTaskInput = false;
  state.inlineHangulInput = false;
  state.editingTaskId = null;
  state.inlineTaskPreset = null;
  _taskSuggestions = [];

  // Child Mode always opens on today's routine, regardless of which date
  // was selected in Parent Mode.
  if (mode === 'child') {
    state.selectedDate = TODAY_KEY;
    state.tasks = loadTasks();
  }

  render();
}

function toggleCalendar() {
  state.calendarOpen = !state.calendarOpen;
  render();
}

function selectTask(taskId) {
  const task = state.tasks.find(t => t.id === taskId);
  if (!task || task.isComplete) return;

  const alreadySelected = state.selectedTaskId === taskId;
  state.selectedTaskId = taskId;
  state.matchResult = null;

  // Play (or replay if the child taps the same task again)
  const card = getCard(task.hangulCardId);
  if (card) {
    speak(card.koreanPrompt);
  }

  // Only re-render the full screen on first tap; on replay just let speak()
  // update the audio indicator without resetting the Hangul card grid.
  if (!alreadySelected) {
    render();
  }
}

function attemptMatch(taskId) {
  if (!state.selectedTaskId) return;

  if (taskId === state.selectedTaskId) {
    // Correct match
    const task = state.tasks.find(t => t.id === taskId);
    if (!task) return;
    task.isComplete = true;
    state.matchResult = 'correct';
    saveTasks();

    const card = getCard(task.hangulCardId);
    speak(card?.correctFeedback || '맞아요. 잘했어요!', () => {  // TODO: Korean review needed
      state.selectedTaskId = null;
      state.matchResult = null;

      // Check if all tasks are now complete
      const allDone = state.tasks.every(t => t.isComplete);
      if (allDone) {
        state.isComplete = true;
        speak('다 했어요! 잘했어요!'); // TODO: Korean review needed
      }
      render();
    });
  } else {
    // Incorrect match — gentle, non-punishing
    state.matchResult = 'incorrect';
    const selectedTask = state.tasks.find(t => t.id === state.selectedTaskId);
    const card = getCard(selectedTask?.hangulCardId);
    speak(card?.hintPhrase || '다시 해볼까요?'); // TODO: Korean review needed

    // Auto-clear incorrect feedback after 2.5s so the child can try again
    setTimeout(() => {
      if (state.matchResult === 'incorrect') {
        state.matchResult = null;
        render();
      }
    }, 2500);
  }

  render();
}

// Replays the Korean prompt for the currently selected task without changing state
function replayPrompt(taskId) {
  const task = state.tasks.find(t => t.id === taskId);
  const card = task ? getCard(task.hangulCardId) : null;
  if (card) speak(card.koreanPrompt);
}

// ─── PARENT ACTIONS ───────────────────────────────────────────────────────

// ─── INLINE TASK CREATION ────────────────────────────────────────────────────

function openAddTask() {
  state.inlineTaskInput = true;
  state.editingTaskId = null;
  renderTasksColumn();
}

function cancelInlineTask() {
  state.inlineTaskInput = false;
  state.inlineTaskPreset = null;
  _taskSuggestions = [];
  renderTasksColumn();
}

function submitInlineTask() {
  const textInput = document.getElementById('inline-task-text');
  const timeInput = document.getElementById('inline-task-time');
  const text = textInput ? textInput.value.trim() : '';
  if (!text) return;

  const id = 'task-' + Date.now();
  const preset = state.inlineTaskPreset || {};
  state.tasks.push({
    id,
    date: state.selectedDate,
    time: timeInput ? timeInput.value : '08:00',
    text,
    hangulCardId: preset.hangulCardId || null,
    imageCardId: preset.imageCardId || null,
    isComplete: false,
  });
  state.inlineTaskInput = false;
  state.inlineTaskPreset = null;
  _taskSuggestions = [];
  state.parentSelectedTaskId = id; // auto-select for linking
  saveTasks();
  showSaveConfirmation();
  renderTasksColumn();
  renderHangulColumn();
  renderImageColumn();
}

function handleInlineTaskKey(event) {
  if (event.key === 'Enter') submitInlineTask();
  if (event.key === 'Escape') cancelInlineTask();
}

// ─── TASK COMBOBOX ────────────────────────────────────────────────────────────
// Scans all stored task dates to build a de-duplicated list of previous tasks.

function getPreviousTasks() {
  const seen = new Map();
  for (let i = 0; i < localStorage.length; i++) {
    const storageKey = localStorage.key(i);
    if (!storageKey || !storageKey.startsWith('k_tasks_')) continue;
    try {
      const tasks = JSON.parse(localStorage.getItem(storageKey) || '[]');
      for (const t of tasks) {
        if (t.text) {
          const lower = t.text.toLowerCase();
          if (!seen.has(lower)) {
            seen.set(lower, {
              text: t.text,
              hangulCardId: t.hangulCardId || null,
              imageCardId: t.imageCardId || null,
            });
          }
        }
      }
    } catch (e) { /* skip malformed entries */ }
  }
  return [...seen.values()];
}

function onTaskComboFocus() {
  // Show all previous tasks immediately when the input is first focused
  const input = document.getElementById('inline-task-text');
  renderTaskSuggestions(input ? input.value : '');
}

function onTaskComboInput(value) {
  // Clear any previously selected suggestion preset when the parent types
  state.inlineTaskPreset = null;
  renderTaskSuggestions(value);
}

// Shared renderer — shows all tasks when query is empty, filtered list when typing
function renderTaskSuggestions(value) {
  const q = value.trim().toLowerCase();
  const suggestionEl = document.getElementById('task-suggestions');
  if (!suggestionEl) return;

  const all = getPreviousTasks();

  // Empty query → show all; typing → filter
  _taskSuggestions = q
    ? all.filter(t => t.text.toLowerCase().includes(q)).slice(0, 8)
    : all.slice(0, 8);

  if (_taskSuggestions.length === 0) {
    suggestionEl.classList.add('hidden');
    suggestionEl.innerHTML = '';
    return;
  }

  suggestionEl.innerHTML = _taskSuggestions.map((t, i) => {
    const hangulCard = t.hangulCardId ? getCard(t.hangulCardId) : null;
    const imageCard  = t.imageCardId  ? getCard(t.imageCardId)  : null;
    const badges = [
      hangulCard ? `<span class="suggestion-badge hangul-badge">${hangulCard.hangul}</span>` : '',
      imageCard  ? `<span class="suggestion-badge image-badge">${imageCard.fallbackEmoji}</span>` : '',
    ].filter(Boolean).join('');
    return `
      <li class="combobox-suggestion" onclick="selectTaskSuggestion(${i})" role="option">
        <span class="suggestion-text">${t.text}</span>
        ${badges ? `<span class="suggestion-badges">${badges}</span>` : ''}
      </li>`;
  }).join('');

  suggestionEl.classList.remove('hidden');
}

function selectTaskSuggestion(index) {
  const suggestion = _taskSuggestions[index];
  if (!suggestion) return;

  const input = document.getElementById('inline-task-text');
  if (input) input.value = suggestion.text;

  state.inlineTaskPreset = {
    hangulCardId: suggestion.hangulCardId,
    imageCardId:  suggestion.imageCardId,
  };

  const suggestionEl = document.getElementById('task-suggestions');
  if (suggestionEl) {
    suggestionEl.classList.add('hidden');
    suggestionEl.innerHTML = '';
  }

  if (input) input.focus();
}

function onTaskComboBlur() {
  // Delay hiding so a mousedown on a suggestion can fire before the list closes
  setTimeout(() => {
    const suggestionEl = document.getElementById('task-suggestions');
    if (suggestionEl) suggestionEl.classList.add('hidden');
  }, 150);
}

// ─── INLINE TASK EDITING ──────────────────────────────────────────────────────

function openEditTask(taskId) {
  state.editingTaskId = taskId;
  state.inlineTaskInput = false;
  renderTasksColumn();
}

function submitInlineEdit(taskId) {
  const task = state.tasks.find(t => t.id === taskId);
  if (!task) return;
  const textInput = document.getElementById('inline-edit-text');
  const timeInput = document.getElementById('inline-edit-time');
  const text = textInput ? textInput.value.trim() : '';
  if (text) {
    task.text = text;
    task.time = timeInput ? timeInput.value : task.time;
    saveTasks();
    showSaveConfirmation();
  }
  state.editingTaskId = null;
  renderTasksColumn();
}

function cancelInlineEdit() {
  state.editingTaskId = null;
  renderTasksColumn();
}

function handleInlineEditKey(event, taskId) {
  if (event.key === 'Enter') submitInlineEdit(taskId);
  if (event.key === 'Escape') cancelInlineEdit();
}

// ─── INLINE HANGUL CARD CREATION ─────────────────────────────────────────────

function openInlineHangul() {
  state.inlineHangulInput = true;
  renderHangulColumn();
}

function cancelInlineHangul() {
  state.inlineHangulInput = false;
  renderHangulColumn();
}

function submitInlineHangul() {
  const hangulInput = document.getElementById('inline-hangul-text');
  const labelInput = document.getElementById('inline-hangul-label');
  const romanInput = document.getElementById('inline-hangul-roman');
  const hangul = hangulInput ? hangulInput.value.trim() : '';
  if (!hangul) return;

  const englishLabel = (labelInput && labelInput.value.trim()) || hangul;
  const romanisation = romanInput ? romanInput.value.trim() : '';
  const id = 'custom-' + Date.now();
  const card = {
    id,
    hangul,
    englishLabel,
    romanisation,
    koreanPrompt: hangul + ' 시간이야',
    correctFeedback: '맞아요. 잘했어요!',
    hintPhrase: '다시 해볼까요?',
    category: 'custom',
    fallbackEmoji: '✏️',
    iconKeyword: 'custom',
    isCustom: true,
  };
  state.customHangulCards.push(card);
  saveCustomHangulCards();
  state.inlineHangulInput = false;

  // Auto-link to active task if it has no Hangul card yet
  if (state.parentSelectedTaskId) {
    const task = state.tasks.find(t => t.id === state.parentSelectedTaskId);
    if (task && !task.hangulCardId) {
      task.hangulCardId = id;
      saveTasks();
    }
  }
  renderHangulColumn();
  renderTasksColumn();
}

function handleInlineHangulKey(event) {
  if (event.key === 'Enter') submitInlineHangul();
  if (event.key === 'Escape') cancelInlineHangul();
}

// ─── IMAGE SEARCH ────────────────────────────────────────────────────────────

function onImageSearch(query) {
  state.imageSearchQuery = query;
  renderImageColumn();
}

// ─── LEGACY STUBS (kept so any cached HTML refs don't throw) ─────────────────

function closePopup() {}
function saveTask() {}
function onTaskTextChange() {}

function deleteTask(taskId) {
  state.tasks = state.tasks.filter(t => t.id !== taskId);
  saveTasks();
  render();
}

function showSaveConfirmation() {
  const toast = document.getElementById('save-toast');
  if (!toast) return;
  toast.classList.add('visible');
  setTimeout(() => toast.classList.remove('visible'), 2500);
}

// ─── REWARD ───────────────────────────────────────────────────────────────

function unlockReward() {
  state.rewardUnlocked = true;
  speak('선물이 있어요!'); // TODO: Korean review needed
  render();
}

function dismissReward() {
  state.rewardUnlocked = false;
  state.isComplete = false;
  // Reset tasks for next run (keeps demo re-playable)
  state.tasks = state.tasks.map(t => ({ ...t, isComplete: false }));
  saveTasks();
  render();
}

function resetPrototype() {
  // Clear all persisted task data for every date
  Object.keys(localStorage)
    .filter(k => k.startsWith('k_tasks_'))
    .forEach(k => localStorage.removeItem(k));
  // Clear custom Hangul cards
  localStorage.removeItem(CUSTOM_HANGUL_STORAGE_KEY);

  // Reset runtime state to defaults
  state.mode              = 'child';
  state.selectedDate      = TODAY_KEY;
  state.customHangulCards = [];
  state.parentSelectedTaskId = null;
  state.selectedTaskId    = null;
  state.audioPlaying      = false;
  state.matchResult       = null;
  state.isComplete        = false;
  state.rewardUnlocked    = false;
  state.parentPopupOpen   = false;
  state.editingTaskId     = null;
  state.inlineTaskInput   = false;
  state.inlineHangulInput = false;
  state.imageSearchQuery  = '';
  state.inlineTaskPreset  = null;
  state.calendarOpen      = false;

  // Reload sample tasks for today
  state.tasks = loadTasks();

  render();
  showSaveToast('✓ Reset — ready to test again!');
}

// ─── INIT ─────────────────────────────────────────────────────────────────

function init() {
  state.customHangulCards = loadCustomHangulCards();
  state.tasks = loadTasks();
  // Start in child mode so the child experience is the first thing seen
  render();
}

document.addEventListener('DOMContentLoaded', init);
