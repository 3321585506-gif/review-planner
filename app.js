const TODAY = "2026-06-14";
const END_DATE = "2026-07-08";

const exams = [
  ["随机过程", "2026-06-30", "09:30-11:30", "东C101"],
  ["高频电路", "2026-07-01", "09:30-11:30", "东C102"],
  ["数据结构与算法", "2026-07-02", "09:30-11:30", "东E101"],
  ["毛概", "2026-07-05", "09:30-11:30", "东D303"],
  ["半导体物理基础", "2026-07-06", "09:30-11:30", "东C102"],
  ["微机原理与嵌入式系统", "2026-07-07", "09:30-11:30", "东E101"],
  ["离散数学", "2026-07-08", "14:30-16:30", "东C101"],
].map(([subject, date, time, room]) => ({ subject, date, time, room }));

const colors = {
  "随机过程": "#22a7dc",
  "高频电路": "#ff75b6",
  "数据结构与算法": "#62d98b",
  "毛概": "#ff9d22",
  "半导体物理基础": "#a890ff",
  "微机原理与嵌入式系统": "#ffe36b",
  "离散数学": "#43d4c5",
};

const subjectRules = {
  "随机过程": { start: "2026-06-14", priority: 1.35 },
  "高频电路": { start: "2026-06-14", priority: 1.25 },
  "数据结构与算法": { start: "2026-06-15", priority: 1.1 },
  "毛概": { start: "2026-06-28", priority: 1 },
  "半导体物理基础": { start: "2026-06-18", priority: 1.2 },
  "微机原理与嵌入式系统": { start: "2026-06-24", priority: .8 },
  "离散数学": { start: "2026-06-22", priority: 1.05 },
};

const taskSeed = [
  ["随机过程", "p41-p44 独立增量过程、复随机过程、随机过程运算", 2.5],
  ["随机过程", "p45-p52 宽平稳过程：定义、ACF性质、遍历性", 3],
  ["随机过程", "p53-p58 WSS功率谱密度与典型例题", 2.5],
  ["随机过程", "p59-p66 WSS通过线性系统、滤波与互相关", 3],
  ["随机过程", "p67-p77 高斯随机过程", 3],
  ["随机过程", "p78-p88 泊松随机过程", 3],
  ["随机过程", "p89-p102 马尔可夫链", 3],
  ["随机过程", "随机过程总复习", 3, "fixed:2026-06-29"],

  ["高频电路", "第3章 高频功率放大器：上半章", 4, "fixed:2026-06-14"],
  ["高频电路", "第3章 高频功率放大器：下半章", 3],
  ["高频电路", "第3章 倍频器、宽带高频功放、实例分析", 2],
  ["高频电路", "第4章 正弦波振荡器：反馈原理到三点式LC", 2.5],
  ["高频电路", "第4章 改进型电容三点式、石英晶体振荡器", 2.5],
  ["高频电路", "第4章 泛音晶振、陶瓷振子、单片集成振荡器", 2],
  ["高频电路", "第5章 振幅调制与解调：调幅信号分析", 2.5],
  ["高频电路", "第5章 调幅产生与普通调幅波解调", 2.5],
  ["高频电路", "第5章 抑制载波调幅的产生和解调", 2],
  ["高频电路", "第6章 角度调制与解调：调频信号分析", 2.5],
  ["高频电路", "第6章 调频产生、调频电路与变频器", 2.5],
  ["高频电路", "第7章 变频器与混频电路", 2],
  ["高频电路", "高频电路第3-7章总复习", 3, "fixed:2026-06-30"],

  ["数据结构与算法", "课件1、Lab0-python、练习与Homework1", 1.5],
  ["数据结构与算法", "列表与链表", 1],
  ["数据结构与算法", "堆栈与队列", 1.5],
  ["数据结构与算法", "线性结构应用实战", 1],
  ["数据结构与算法", "week05 树基础、week07 构建二叉树", 1.5],
  ["数据结构与算法", "week07 二叉搜索树", 1],
  ["数据结构与算法", "week08 AVL与红黑树", 2],
  ["数据结构与算法", "week09 lecture02", 1],
  ["数据结构与算法", "week10 图基础、week11 图遍历", 1.5],
  ["数据结构与算法", "week12 加权图算法", 1.5],
  ["数据结构与算法", "week13 图项目 Campus Buddy", 1],
  ["数据结构与算法", "week14 Search", 1],
  ["数据结构与算法", "week15 Sorting", 1],
  ["数据结构与算法", "数据结构与算法总复习", 3, "fixed:2026-07-01"],

  ["毛概", "毛概前7天安排：第1次 1小时", 1, "fixed:2026-06-28"],
  ["毛概", "毛概前7天安排：第2次 1小时", 1, "fixed:2026-06-29"],
  ["毛概", "毛概前7天安排：第3次 1小时", 1, "fixed:2026-06-30"],
  ["毛概", "毛概冲刺：第1次 3小时", 3, "fixed:2026-07-02"],
  ["毛概", "毛概冲刺：第2次 3小时", 3, "fixed:2026-07-03"],
  ["毛概", "毛概冲刺：第3次 3小时", 3, "fixed:2026-07-04"],
  ["半导体物理基础", "第3-4章重点二轮：载流子统计、导电性", 4, "fixed:2026-07-03"],
  ["离散数学", "第1-3章二轮：基础、命题逻辑、一阶逻辑", 2, "fixed:2026-07-03"],
  ["微机原理与嵌入式系统", "80x86指令系统做题理解", 1.5, "fixed:2026-07-03"],
  ["半导体物理基础", "第5-6章重点二轮：非平衡载流子、pn结", 4, "fixed:2026-07-04"],
  ["离散数学", "第4-7章二轮：证明、集合、关系、函数", 3, "fixed:2026-07-04"],
  ["微机原理与嵌入式系统", "汇编语言与总线存储做题理解", 1.5, "fixed:2026-07-04"],

  ["半导体物理基础", "第1章 半导体中的电子状态、能带、有效质量", 2.5],
  ["半导体物理基础", "第1章 本征半导体、空穴、回旋共振、硅锗能带", 2],
  ["半导体物理基础", "第2章 半导体中的杂质和缺陷能级", 2.5],
  ["半导体物理基础", "第3章 热平衡载流子统计分布", 4],
  ["半导体物理基础", "第3章 简并半导体、电子占据杂质能级", 3],
  ["半导体物理基础", "第4章 载流子散射与迁移率", 4],
  ["半导体物理基础", "第4章 电阻率、霍尔效应、弱电场效应", 3],
  ["半导体物理基础", "第5章 非平衡载流子与复合", 4],
  ["半导体物理基础", "第5章 陷阱效应、扩散运动、爱因斯坦关系", 3],
  ["半导体物理基础", "第6章 pn结、空间电荷区、伏安特性", 3],
  ["半导体物理基础", "第6章 pn结电容、击穿、隧道效应", 2],
  ["半导体物理基础", "半导体第1-6章总复习", 3, "fixed:2026-07-05"],

  ["微机原理与嵌入式系统", "L2 绪论-2.pdf", 1],
  ["微机原理与嵌入式系统", "L3 绪论-3.pdf", 1],
  ["微机原理与嵌入式系统", "L4 微处理器的结构-1.pdf", 1],
  ["微机原理与嵌入式系统", "L5 微处理器的结构-2.pdf", 1],
  ["微机原理与嵌入式系统", "L6 微处理器的结构-3.pdf", 1],
  ["微机原理与嵌入式系统", "L7 80x86指令系统-1.pdf", 1.5],
  ["微机原理与嵌入式系统", "L8 80x86指令系统-2.pdf", 1.5],
  ["微机原理与嵌入式系统", "L8 补充 debug调试程序.pdf", 1],
  ["微机原理与嵌入式系统", "L9 80x86指令系统-3.pdf", 1.5],
  ["微机原理与嵌入式系统", "L10 80x86指令系统-4.pdf", 1.5],
  ["微机原理与嵌入式系统", "L11 80x86指令系统-5.pdf", 1.5],
  ["微机原理与嵌入式系统", "L12 汇编语言程序设计-1.pdf", 1.5],
  ["微机原理与嵌入式系统", "L12 补充-汇编语言的编写与执行.pdf", 1],
  ["微机原理与嵌入式系统", "L13 汇编语言程序设计-2.pdf", 1.5],
  ["微机原理与嵌入式系统", "L14 汇编语言程序设计-3.pdf", 1.5],
  ["微机原理与嵌入式系统", "L15 微机总线技术-1.pdf", 1.5],
  ["微机原理与嵌入式系统", "L16 微机总线技术-2.pdf", 1],
  ["微机原理与嵌入式系统", "L17 存储系统-1.pdf", 1.5],
  ["微机原理与嵌入式系统", "L18 存储系统-2.pdf", 1],
  ["微机原理与嵌入式系统", "微机原理总复习", 3, "fixed:2026-07-06"],

  ["离散数学", "第1章 基础知识", 2],
  ["离散数学", "第2章 命题逻辑", 3],
  ["离散数学", "第3章 一阶逻辑", 3],
  ["离散数学", "第4章 证明方法", 2.5],
  ["离散数学", "第5章 集合", 2],
  ["离散数学", "第6章 关系", 2.5],
  ["离散数学", "第7章 函数", 2],
  ["离散数学", "离散数学第1-7章总复习", 3, "fixed:2026-07-08"],
];

const tasks = taskSeed.map((t, index) => ({
  id: `t${index + 1}`,
  subject: t[0],
  title: t[1],
  hours: t[2],
  fixed: t[3]?.replace("fixed:", "") || null,
}));

let state = loadState();
const examBySubject = Object.fromEntries(exams.map(e => [e.subject, e]));
const dateRange = makeDateRange(TODAY, END_DATE);

function loadState() {
  const saved = JSON.parse(localStorage.getItem("reviewPlannerState") || "{}");
  return { done: saved.done || {}, overrides: saved.overrides || {}, lastDone: saved.lastDone || null };
}

function saveState() {
  localStorage.setItem("reviewPlannerState", JSON.stringify(state));
}

function capacity(date) {
  if (date === TODAY) return 4;
  const day = parseDate(date).getUTCDay();
  const exam = exams.find(e => e.date === date);
  if (date >= "2026-06-27") return exam ? (exam.time.startsWith("14") ? 7 : 8) : 12;
  if (date === "2026-06-19") return 12;
  return day >= 1 && day <= 5 ? 6 : 12;
}

function buildSchedule() {
  const plan = Object.fromEntries(dateRange.map(d => [d, []]));
  const remaining = tasks;

  for (const task of remaining.filter(t => state.overrides[t.id])) {
    const date = state.overrides[task.id];
    if (plan[date]) plan[date].push(task);
  }

  for (const task of remaining.filter(t => t.fixed && !state.overrides[t.id])) {
    const date = task.fixed;
    if (plan[date]) plan[date].push(task);
  }

  const queues = {};
  for (const task of remaining.filter(t => !t.fixed && !state.overrides[t.id])) {
    (queues[task.subject] ||= []).push(task);
  }

  for (const date of dateRange) {
    let room = capacity(date) - loadOf(plan[date]);
    const picked = new Set(plan[date].map(t => t.subject));
    const subjectHours = {};
    for (const task of plan[date]) {
      subjectHours[task.subject] = (subjectHours[task.subject] || 0) + task.hours;
    }
    const subjectLimit = maxSubjectsFor(date);

    while (room >= .5) {
      const candidates = Object.entries(queues)
        .filter(([, q]) => q.length)
        .map(([subject, q]) => ({ subject, task: q[0] }))
        .filter(c => canSchedule(c.task, date, room));

      if (!candidates.length) break;
      const sameSubject = candidates.filter(c => picked.has(c.subject) && canAddMoreSubjectHours(c.subject, date, subjectHours, c.task.hours));
      const canAddSubject = picked.size < subjectLimit;
      const varied = canAddSubject ? candidates.filter(c => !picked.has(c.subject)) : [];
      const pool = sameSubject.length ? sameSubject : (varied.length ? varied : candidates);
      pool.sort((a, b) => candidateScore(b, date, queues) - candidateScore(a, date, queues));

      const chosen = pool[0];
      plan[date].push(chosen.task);
      queues[chosen.subject].shift();
      picked.add(chosen.subject);
      subjectHours[chosen.subject] = (subjectHours[chosen.subject] || 0) + chosen.task.hours;
      room -= chosen.task.hours;
    }

    plan[date].sort((a, b) => examBySubject[a.subject].date.localeCompare(examBySubject[b.subject].date));
  }

  backfillUnscheduled(plan, queues);
  return plan;
}

function canAddMoreSubjectHours(subject, date, subjectHours, taskHours) {
  const cap = capacity(date);
  if (cap < 10) return true;
  return (subjectHours[subject] || 0) + taskHours <= 5.5;
}

function maxSubjectsFor(date) {
  const cap = capacity(date);
  if (date === TODAY) return 1;
  if (cap <= 6) return 2;
  return 3;
}

function canSchedule(task, date, room) {
  const start = state.overrides[task.id] || subjectRules[task.subject].start;
  return date >= start && date <= examBySubject[task.subject].date && task.hours <= room;
}

function candidateScore(candidate, date, queues) {
  const subject = candidate.subject;
  const examDate = examBySubject[subject].date;
  const days = Math.max(0, daysBetween(date, examDate));
  const remainingHours = queues[subject].reduce((sum, t) => sum + t.hours, 0);
  const available = dateRange
    .filter(d => d >= date && d <= examDate)
    .reduce((sum, d) => sum + capacity(d), 0);
  const futureAvailable = dateRange
    .filter(d => d > date && d <= examDate)
    .reduce((sum, d) => sum + capacity(d), 0);
  const pressure = remainingHours / Math.max(1, available);
  const deadlineBoost = remainingHours > futureAvailable ? 1000 : 0;
  const lateBoost = (date === "2026-07-03" || date === "2026-07-04") ? 16 : 0;
  const simplePenalty = subject === "微机原理与嵌入式系统" ? 12 : 0;
  return deadlineBoost + lateBoost + subjectRules[subject].priority * 50 / (days + 1) + pressure * 80 + remainingHours / (days + 1) * 4 - simplePenalty;
}

function backfillUnscheduled(plan, queues) {
  for (const [subject, q] of Object.entries(queues)) {
    while (q.length) {
      const task = q[0];
      const target = dateRange
        .filter(date => date >= subjectRules[subject].start && date <= examBySubject[subject].date)
        .sort((a, b) => spareOf(plan[b], b) - spareOf(plan[a], a))[0];
      if (!target) break;
      plan[target].push(task);
      q.shift();
    }
  }
}

function loadOf(items) {
  return items.reduce((sum, t) => sum + t.hours, 0);
}

function spareOf(items, date) {
  return capacity(date) - loadOf(items);
}

function render() {
  const plan = buildSchedule();
  renderStats(plan);
  renderToday(plan);
  renderCalendar(plan);
  renderExams();
  renderSubjects();
}

function renderStats(plan) {
  const total = tasks.length;
  const done = Object.keys(state.done).length;
  const todayLoad = loadOf(plan[TODAY] || []);
  const undo = state.lastDone ? `<button class="undo-global" id="undoDoneBtn">撤销完成</button>` : "";
  document.getElementById("stats").innerHTML = [
    ["完成", `${done}/${total}`],
    ["今天强度", `${fmtHours(todayLoad)}h`],
    ["最后一科", "7/8"],
  ].map(([k, v]) => `<div class="stat"><strong>${v}</strong>${k}</div>`).join("") + undo;
  const undoBtn = document.getElementById("undoDoneBtn");
  if (undoBtn) {
    undoBtn.addEventListener("click", () => {
      if (state.lastDone) delete state.done[state.lastDone];
      state.lastDone = null;
      saveState();
      render();
    });
  }
}

function renderToday(plan) {
  const list = plan[TODAY] || [];
  document.getElementById("todayLabel").textContent = `2026-06-14 下午开始，估算 ${fmtHours(loadOf(list))} 小时。不写具体几点，你自己调配。`;
  const box = document.getElementById("todayTasks");
  box.innerHTML = "";
  if (!list.length) {
    box.innerHTML = `<article class="task-card"><strong>今天没有剩余任务。</strong><p class="task-meta">可以补漏，也可以点“拉下一项”。</p></article>`;
    return;
  }
  for (const task of list) box.appendChild(taskCard(task));
}

function taskCard(task) {
  const tpl = document.getElementById("taskTemplate").content.cloneNode(true);
  const card = tpl.querySelector(".task-card");
  const input = tpl.querySelector("input");
  input.checked = !!state.done[task.id];
  card.classList.toggle("done", input.checked);
  tpl.querySelector(".task-title").textContent = task.title;
  tpl.querySelector(".task-meta").textContent = `${task.subject} · 估算 ${fmtHours(task.hours)}h · 考试 ${examBySubject[task.subject].date}`;
  input.addEventListener("change", () => {
    if (input.checked) {
      state.done[task.id] = true;
      state.lastDone = task.id;
    } else {
      delete state.done[task.id];
      if (state.lastDone === task.id) state.lastDone = null;
    }
    saveState();
    render();
  });
  tpl.querySelector(".delay").addEventListener("click", () => {
    state.overrides[task.id] = nextDate(state.overrides[task.id] || TODAY);
    saveState();
    render();
  });
  const advance = tpl.querySelector(".advance");
  if (advance) {
    advance.addEventListener("click", () => {
      state.overrides[task.id] = TODAY;
      saveState();
      render();
    });
  }
  return tpl;
}

function renderCalendar(plan) {
  const root = document.getElementById("calendar");
  const weekdays = ["周一", "周二", "周三", "周四", "周五", "周六", "周日"];
  root.innerHTML = weekdays.map(day => `<div class="weekday">${day}</div>`).join("");

  const firstPad = (parseDate(TODAY).getUTCDay() + 6) % 7;
  for (let i = 0; i < firstPad; i++) {
    root.insertAdjacentHTML("beforeend", `<article class="day blank"></article>`);
  }

  for (const date of dateRange) {
    const exam = exams.find(e => e.date === date);
    const load = loadOf(plan[date] || []);
    const day = document.createElement("article");
    day.className = `day ${date === TODAY ? "today" : ""} ${exam ? "exam" : ""}`;
    day.innerHTML = `
      <div class="day-head">
        <div class="day-date"><span>${date.slice(5)} ${weekdayName(date)}</span><span class="load">${fmtHours(load)}/${fmtHours(capacity(date))}h</span></div>
        ${exam ? `<div class="exam-line">考 ${exam.subject} ${exam.time}</div>` : ""}
      </div>
      <div class="day-body" data-date="${date}"></div>
    `;
    const body = day.querySelector(".day-body");
    if (!plan[date]?.length) body.innerHTML = `<div class="empty">缓冲 / 补漏 / 休整</div>`;
    for (const task of plan[date] || []) {
      const item = document.createElement("div");
      item.className = `mini-task ${state.done[task.id] ? "done" : ""}`;
      item.draggable = true;
      item.dataset.id = task.id;
      item.style.borderLeft = `10px solid ${colors[task.subject]}`;
      item.innerHTML = `
        <div class="mini-title">${task.subject}：${task.title}（${fmtHours(task.hours)}h）</div>
        <div class="mini-actions">
          ${state.done[task.id] ? `<button data-action="undo-done" data-id="${task.id}">撤销完成</button>` : ""}
          ${date > TODAY ? `<button data-action="advance" data-id="${task.id}">提前到今天</button>` : ""}
          ${date >= TODAY ? `<button data-action="delay" data-id="${task.id}">延后</button>` : ""}
        </div>
      `;
      body.appendChild(item);
    }
    root.appendChild(day);
  }

  root.querySelectorAll(".mini-task").forEach(item => {
    item.addEventListener("dragstart", event => {
      event.dataTransfer.setData("text/plain", item.dataset.id);
      event.dataTransfer.effectAllowed = "move";
      item.classList.add("dragging");
    });
    item.addEventListener("dragend", () => item.classList.remove("dragging"));
  });

  root.querySelectorAll(".day-body").forEach(body => {
    body.addEventListener("dragover", event => {
      event.preventDefault();
      body.classList.add("drop-target");
    });
    body.addEventListener("dragleave", () => body.classList.remove("drop-target"));
    body.addEventListener("drop", event => {
      event.preventDefault();
      body.classList.remove("drop-target");
      const id = event.dataTransfer.getData("text/plain");
      const date = body.dataset.date;
      if (id && date) {
        freezePlanDates(plan);
        state.overrides[id] = date;
        saveState();
        render();
      }
    });
  });

  root.querySelectorAll("[data-action]").forEach(btn => {
    btn.addEventListener("click", event => {
      const id = event.currentTarget.dataset.id;
      const action = event.currentTarget.dataset.action;
      const currentDate = findTaskDate(plan, id) || TODAY;
      if (action === "undo-done") {
        delete state.done[id];
        if (state.lastDone === id) state.lastDone = null;
        saveState();
        render();
        return;
      }
      freezePlanDates(plan);
      if (action === "advance") state.overrides[id] = TODAY;
      if (action === "delay") state.overrides[id] = nextDate(currentDate);
      saveState();
      render();
    });
  });
}

function findTaskDate(plan, taskId) {
  return Object.entries(plan).find(([, items]) => items.some(t => t.id === taskId))?.[0] || null;
}

function freezePlanDates(plan) {
  for (const [date, items] of Object.entries(plan)) {
    for (const task of items) {
      state.overrides[task.id] = date;
    }
  }
}

function renderExams() {
  document.getElementById("examList").innerHTML = exams.map(e => `
    <article class="exam" style="border-top-color:${colors[e.subject]}">
      <h3>${e.subject}</h3>
      <p>${e.date} ${e.time}</p>
      <p>${e.room}</p>
    </article>
  `).join("");
}

function renderSubjects() {
  const root = document.getElementById("subjectList");
  root.innerHTML = "";
  for (const subject of Object.keys(colors)) {
    const all = tasks.filter(t => t.subject === subject);
    const done = all.filter(t => state.done[t.id]).length;
    const pct = Math.round(done / all.length * 100);
    root.insertAdjacentHTML("beforeend", `
      <article class="subject">
        <h3>${subject}</h3>
        <p>${done}/${all.length} 项完成 · 考试 ${examBySubject[subject].date}</p>
        <div class="meter"><div class="bar" style="width:${pct}%;background:${colors[subject]}"></div></div>
      </article>
    `);
  }
}

function nextDate(date) {
  const i = dateRange.indexOf(date);
  return dateRange[Math.min(i + 1, dateRange.length - 1)];
}

function makeDateRange(start, end) {
  const out = [];
  let d = parseDate(start);
  const last = parseDate(end);
  while (d <= last) {
    out.push(dateKey(d));
    d.setUTCDate(d.getUTCDate() + 1);
  }
  return out;
}

function parseDate(date) {
  const [y, m, d] = date.split("-").map(Number);
  return new Date(Date.UTC(y, m - 1, d));
}

function dateKey(date) {
  const y = date.getUTCFullYear();
  const m = String(date.getUTCMonth() + 1).padStart(2, "0");
  const d = String(date.getUTCDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

function daysBetween(a, b) {
  return Math.round((parseDate(b) - parseDate(a)) / 86400000);
}

function weekdayName(date) {
  return ["周日", "周一", "周二", "周三", "周四", "周五", "周六"][parseDate(date).getUTCDay()];
}

function fmtHours(value) {
  return Number.isInteger(value) ? String(value) : value.toFixed(1);
}

document.querySelectorAll(".tab").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".tab,.tabpage").forEach(x => x.classList.remove("active"));
    btn.classList.add("active");
    document.getElementById(btn.dataset.tab).classList.add("active");
  });
});

document.getElementById("resetBtn").addEventListener("click", () => {
  state.overrides = {};
  state.lastDone = null;
  saveState();
  render();
});

document.getElementById("pullBtn").addEventListener("click", () => {
  const plan = buildSchedule();
  const next = dateRange.flatMap(d => plan[d] || []).find(t => !state.done[t.id] && !plan[TODAY].includes(t));
  if (next) {
    freezePlanDates(plan);
    state.overrides[next.id] = TODAY;
  }
  saveState();
  render();
});

render();
