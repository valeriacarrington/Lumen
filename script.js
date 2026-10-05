// Заглушка: официальный канал Telegram. Замените на свою ссылку; отдельную ссылку для блогера можно задать полем tg.
const TG_URL = "https://t.me/telegram";

const bloggers = [
  {
    id: "mark", name: "Марк Вейл", nick: "@mark.veil", tag: "Tech & AI", color: "#6ea8ff",
    img: "img/mark.jpg",
    topic: "Разбирает нейросети и стартапы без воды",
    bio: "Бывший продакт. Тестирую AI-инструменты на своих проектах и рассказываю, что из этого реально экономит время, а что просто красиво выглядит в демо.",
    stats: [["248K", "подписчиков"], ["1 240", "постов"], ["9,4%", "вовлечённость"]],
    posts: [
      { tag: "Разбор", time: "2 ч назад", text: "Неделю вёл всю почту через AI-ассистента. Сэкономил 4 часа и один раз чуть не согласился на встречу в 6 утра.", likes: 1840 },
      { tag: "Инструменты", time: "вчера", text: "Три сервиса, которые я оплачиваю сам, и семь, от которых отказался в этом году. Список в Telegram.", likes: 3210 },
      { tag: "Мнение", time: "3 дня назад", text: "Стартапу из двух человек больше не нужен отдел маркетинга. Нужен один человек, который умеет ставить задачи.", likes: 2675 }
    ],
    chat: {
      hello: ["Привет, я Марк 👋", "Пишу про AI и продукты. О чём рассказать?"],
      replies: [
        { q: "С чего начать в AI?", a: "С одной своей рутинной задачи. Возьми то, что делаешь каждую неделю, и попробуй отдать это нейросети. Теория подтянется по ходу." },
        { q: "Какой инструмент главный?", a: "Тот, который ты открываешь каждый день. У меня это связка из ассистента для текста и редактора кода, остальное приходит и уходит." },
        { q: "Что в закрытом канале?", a: "Разборы моих рабочих процессов с цифрами: сколько стоит, сколько экономит, где ломается." }
      ]
    }
  },
  {
    id: "leo", name: "Лео Рейн", nick: "@leo.rayne", tag: "Спорт & Travel", color: "#ffb14a",
    img: "img/leo.jpg",
    topic: "Трейлы, серф и маршруты, куда не возят автобусы",
    bio: "Бегаю по горам, сплю в палатке, считаю бюджет до евро. Показываю маршруты, которые можно повторить за отпуск, без спонсоров и вертолётов.",
    stats: [["312K", "подписчиков"], ["41", "страна"], ["11,2%", "вовлечённость"]],
    posts: [
      { tag: "Маршрут", time: "5 ч назад", text: "Мадейра за 6 дней пешком: 94 км, 5 200 м набора, 380 € на всё. Трек и точки с водой выложил в Telegram.", likes: 4120 },
      { tag: "Снаряжение", time: "2 дня назад", text: "Рюкзак на 7 кг для недельного похода. Показываю, что выкинул и о чём ни разу не пожалел.", likes: 2890 },
      { tag: "Тренировки", time: "4 дня назад", text: "Как подготовиться к первому трейлу на 30 км за 10 недель, если сейчас бегаешь пятёрку.", likes: 3540 }
    ],
    chat: {
      hello: ["Хей! Лео на связи 🏔", "Только спустился с трека. Спрашивай."],
      replies: [
        { q: "Куда поехать новичку?", a: "Мадейра или Доломиты. Тропы размечены, хижины через каждые 10–15 км, заблудиться сложно." },
        { q: "Сколько стоит неделя?", a: "Если с палаткой, то 300–450 € без перелёта. С хижинами выйдет раза в два дороже, зато рюкзак легче." },
        { q: "Дашь план тренировок?", a: "Дам. В Telegram лежит таблица на 10 недель: скачиваешь и бежишь." }
      ]
    }
  },
  {
    id: "nika", name: "Ника Соль", nick: "@nika.sol", tag: "Fashion", color: "#ff6fa5",
    img: "img/nika.jpg",
    topic: "Собирает образы из масс-маркета и винтажа",
    bio: "Стилист. Верю, что хороший гардероб собирается из 30 вещей, и половину из них можно найти на вторичном рынке. Показываю как.",
    stats: [["405K", "подписчиков"], ["860", "образов"], ["12,7%", "вовлечённость"]],
    posts: [
      { tag: "Образ дня", time: "1 ч назад", text: "Мужской пиджак из секонда за 12 €, белая майка и джинсы. Образ на любой день, когда нет сил думать.", likes: 5230 },
      { tag: "Гардероб", time: "вчера", text: "Пять вещей на осень, которые стоит купить сейчас, пока на них не подняли цены.", likes: 4410 },
      { tag: "Ошибки", time: "3 дня назад", text: "Почему дорогая сумка не спасает образ. И что спасает: разбираю на трёх примерах подписчиц.", likes: 3980 }
    ],
    chat: {
      hello: ["Привет! Я Ника ✨", "Помогу с гардеробом. С чего начнём?"],
      replies: [
        { q: "Что купить на осень?", a: "Плотный тренч, лоферы на толстой подошве и серый кашемировый свитер. С этими тремя вещами будет работать всё остальное." },
        { q: "Как искать винтаж?", a: "Ищи по ткани, а не по бренду: шерсть, шёлк, плотный хлопок. И всегда смотри на плечи, их перешить труднее всего." },
        { q: "Разберёшь мой образ?", a: "Да! Присылай фото в Telegram, по пятницам я разбираю образы подписчиц." }
      ]
    }
  },
  {
    id: "aira", name: "Айра Мун", nick: "@aira.moon", tag: "Wellness", color: "#7fe3c0",
    img: "img/aira.jpg",
    topic: "Сон, восстановление и спокойные утра",
    bio: "Инструктор по йоге и человек, который три года учился нормально спать. Делюсь привычками, которые прижились, без марафонов и подъёмов в пять утра.",
    stats: [["189K", "подписчиков"], ["520", "практик"], ["14,1%", "вовлечённость"]],
    posts: [
      { tag: "Практика", time: "3 ч назад", text: "Десять минут растяжки перед сном вместо телефона. Запись без музыки и лишних слов уже в канале.", likes: 2960 },
      { tag: "Сон", time: "вчера", text: "Что изменилось, когда я перестала пить кофе после полудня. Спойлер: не всё сразу и не всё к лучшему.", likes: 3370 },
      { tag: "Привычки", time: "5 дней назад", text: "Утро без будильника возможно. Нужны три недели и одно неудобное правило.", likes: 2540 }
    ],
    chat: {
      hello: ["Здравствуй 🌿 Я Айра", "Давай без спешки. Что тебя беспокоит?"],
      replies: [
        { q: "Плохо засыпаю", a: "Попробуй убирать экран за час до сна и приглушать свет. Звучит банально, но у большинства дело именно в этом." },
        { q: "Нет времени на практику", a: "Хватит десяти минут. Короткая практика каждый день даёт больше, чем полтора часа раз в неделю." },
        { q: "С чего начать?", a: "С вечерней растяжки. В Telegram есть запись на 10 минут, включи её сегодня." }
      ]
    }
  }
];

/* ---------- Утилиты ---------- */
const $ = (s, root = document) => root.querySelector(s);
const $$ = (s, root = document) => [...root.querySelectorAll(s)];
const wait = ms => new Promise(r => setTimeout(r, ms));
const fmt = n => n.toLocaleString("ru-RU");
const initials = name => name.split(" ").map(w => w[0]).join("");

$$("[data-tg]").forEach(a => (a.href = TG_URL));

/* ---------- Карточки ---------- */
const cardsEl = $("#cards");
const dotsEl = $("#dots");

cardsEl.innerHTML = bloggers.map(b => `
  <article class="card reveal" style="--c:${b.color}" data-id="${b.id}">
    <div class="card__media">
      <span>${initials(b.name)}</span>
      <img src="${b.img}" alt="${b.name}, AI-блогер" loading="lazy" onerror="this.remove()">
    </div>
    <div class="card__top">
      <span class="chip">${b.tag}</span>
      <span class="live"><i></i>онлайн</span>
    </div>
    <div class="card__body">
      <h3>${b.name}</h3>
      <p class="card__nick">${b.nick} · ${b.stats[0][0]}</p>
      <p class="card__topic">${b.topic}</p>
      <button class="card__btn" type="button">Смотреть блог</button>
    </div>
  </article>`).join("");

dotsEl.innerHTML = bloggers.map((_, i) => `<i class="${i ? "" : "is-active"}"></i>`).join("");

cardsEl.addEventListener("click", e => {
  const card = e.target.closest(".card");
  if (card) openModal(card.dataset.id);
});

// Индикатор карусели на мобильных
let ticking = false;
cardsEl.addEventListener("scroll", () => {
  if (ticking) return;
  ticking = true;
  requestAnimationFrame(() => {
    const first = cardsEl.firstElementChild;
    const step = first.offsetWidth + 14;
    const atEnd = cardsEl.scrollLeft + cardsEl.clientWidth >= cardsEl.scrollWidth - 4;
    const idx = atEnd ? bloggers.length - 1 : Math.round(cardsEl.scrollLeft / step);
    $$("i", dotsEl).forEach((d, i) => d.classList.toggle("is-active", i === idx));
    ticking = false;
  });
}, { passive: true });

/* ---------- Появление при скролле ---------- */
const io = new IntersectionObserver(entries => {
  entries.forEach(en => {
    if (!en.isIntersecting) return;
    en.target.classList.add("in");
    io.unobserve(en.target);
  });
}, { threshold: 0.12 });

$$(".reveal").forEach((el, i) => {
  el.style.transitionDelay = `${(i % 4) * 70}ms`;
  io.observe(el);
});

/* ---------- Модальное окно ---------- */
const modal = $("#modal");
const sheet = $(".sheet", modal);
const scrollBox = $("#sheet-scroll");
const chatEl = $("#chat");
const repliesEl = $("#replies");
const panes = { posts: $("#pane-posts"), chat: $("#pane-chat") };

let current = null;
let lastFocus = null;
let chatRun = 0;      // токен: отменяет незавершённый диалог при закрытии
let chatStarted = false;

function openModal(id) {
  current = bloggers.find(b => b.id === id);
  if (!current) return;
  const b = current;

  sheet.style.setProperty("--c", b.color);
  $("#m-name").textContent = b.name;
  $("#m-nick").textContent = b.nick;
  $("#m-tag").textContent = b.tag;
  $("#m-bio").textContent = b.bio;
  $("#m-initials").textContent = initials(b.name);
  $("#m-tg").href = b.tg || TG_URL;
  $("#m-stats").innerHTML = b.stats.map(([v, l]) => `<li><b>${v}</b>${l}</li>`).join("");

  const img = $("#m-img");
  img.hidden = false;
  img.onerror = () => (img.hidden = true);
  img.src = b.img;
  img.alt = b.name;

  panes.posts.innerHTML = b.posts.map(p => `
    <div class="post">
      <div class="post__meta"><b>${p.tag}</b><span>${p.time}</span></div>
      <p>${p.text}</p>
      <button class="like" type="button" data-likes="${p.likes}" aria-pressed="false">
        <svg><use href="#i-heart"/></svg><span>${fmt(p.likes)}</span>
      </button>
    </div>`).join("");

  chatRun++;
  chatStarted = false;
  chatEl.innerHTML = "";
  repliesEl.innerHTML = "";
  setTab("posts");

  lastFocus = document.activeElement;
  scrollBox.scrollTop = 0;
  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  $(".sheet__close", modal).focus({ preventScroll: true });
}

function closeModal() {
  chatRun++;
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
  if (lastFocus) lastFocus.focus({ preventScroll: true });
}

modal.addEventListener("click", e => {
  if (e.target.closest("[data-close]")) return closeModal();

  const tab = e.target.closest(".tab");
  if (tab) return setTab(tab.dataset.tab);

  const like = e.target.closest(".like");
  if (like) {
    const on = like.classList.toggle("is-on");
    like.setAttribute("aria-pressed", on);
    $("span", like).textContent = fmt(+like.dataset.likes + (on ? 1 : 0));
  }
});

document.addEventListener("keydown", e => {
  if (e.key === "Escape" && modal.classList.contains("is-open")) closeModal();
});

function setTab(name) {
  $$(".tab", modal).forEach(t => {
    const active = t.dataset.tab === name;
    t.classList.toggle("is-active", active);
    t.setAttribute("aria-selected", active);
  });
  panes.posts.hidden = name !== "posts";
  panes.chat.hidden = name !== "chat";
  if (name === "chat" && !chatStarted) {
    chatStarted = true;
    startChat(current);
  }
}

/* ---------- Демо-диалог ---------- */
function bubble(html, who) {
  const el = document.createElement("div");
  el.className = `msg msg--${who}`;
  el.innerHTML = html;
  chatEl.append(el);
  scrollBox.scrollTo({ top: scrollBox.scrollHeight, behavior: "smooth" });
  return el;
}

async function say(text, run) {
  const el = bubble('<span class="typing"><i></i><i></i><i></i></span>', "bot");
  await wait(500 + Math.min(text.length * 16, 1100));
  if (run !== chatRun) return false;
  el.textContent = text;
  scrollBox.scrollTo({ top: scrollBox.scrollHeight, behavior: "smooth" });
  return true;
}

async function startChat(b) {
  const run = chatRun;
  for (const line of b.chat.hello) {
    if (!(await say(line, run))) return;
    await wait(250);
  }
  showReplies(b.chat.replies, run);
}

function showReplies(left, run) {
  if (run !== chatRun) return;
  repliesEl.innerHTML = "";

  if (!left.length) {
    say("Остальное расскажу в Telegram, там я отвечаю лично. Кнопка ниже 👇", run);
    return;
  }

  left.forEach(r => {
    const btn = document.createElement("button");
    btn.className = "reply";
    btn.type = "button";
    btn.textContent = r.q;
    btn.onclick = async () => {
      repliesEl.innerHTML = "";
      bubble(r.q, "me");
      await wait(300);
      if (await say(r.a, run)) showReplies(left.filter(x => x !== r), run);
    };
    repliesEl.append(btn);
  });
}
