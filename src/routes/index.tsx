import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "高碩辰 | 資訊管理學系 全端開發履歷" },
      {
        name: "description",
        content:
          "高碩辰的個人履歷網站：東吳大學資訊管理學系，專長 React、FastAPI、PostgreSQL 與 AI 影像辨識，多次程式設計競賽獲獎。",
      },
      { property: "og:title", content: "高碩辰 | 資訊管理學系 全端開發履歷" },
      {
        property: "og:description",
        content:
          "全端開發與 AI 應用實作經驗：Healixir 保健食品推薦系統、智慧導盲眼鏡、AI 應用社社長。",
      },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const contacts = [
  { label: "電話", value: "0976-392-711", href: "tel:0976392711" },
  { label: "Email", value: "charleskao2005@gmail.com", href: "mailto:charleskao2005@gmail.com" },
  { label: "GitHub", value: "mato1321", href: "https://github.com/mato1321" },
];

const experiences = [
  {
    period: "2026/7 – 現在",
    title: "Openbrowser 開源專案貢獻者",
    org: "開源社群",
    points: [
      "設計 LLM Agent 的 skill.md 技能描述規範，提升任務規劃能力並降低工具執行過程中的幻覺與錯誤決策。",
      "使用 CDP（Chrome DevTools Protocol）進行自主瀏覽器代理框架開發，實現網頁瀏覽、操作與資訊擷取的端到端自動化流程。",
    ],
  },
  {
    period: "2023/9 – 2024/6、2025/9 – 2026/6",
    title: "計算機程式設計 & 物件導向程式設計 教學助理",
    org: "東吳大學",
    points: [
      "擔任課程創立以來首位大一教學助理（TA）。",
      "每學期為超過 60 名學生講解 Java 程式設計概念、程式除錯與考題解析。",
      "負責作業與考試出題、批改。",
    ],
  },
  {
    period: "114、115 學年",
    title: "人工智慧應用社 社長兼主講者",
    org: "東吳大學",
    points: [
      "教授 Git/GitHub 版本控制工作流程，並指導社員使用 GitHub Pages 建置個人履歷網站。",
      "籌辦 NextWave AI 法律創新黑客松競賽，促進各大專院校跨領域 AI 與法律應用交流。",
      "負責社團營運管理，邀請業界講者舉辦技術講座，並規劃企業參訪活動。",
    ],
  },
  {
    period: "2024/7 – 現在",
    title: "軟硬體維修組 工讀生",
    org: "東吳大學電算中心",
    points: [
      "Windows 系統重灌、軟體安裝、錯誤排除，以及硬體拆裝與維護。",
      "協助教師設定電腦與排除使用問題。",
      "教導新進學弟妹快速熟悉工作流程。",
    ],
  },
];

const skills = [
  { group: "程式語言", items: ["Java", "Python", "Kotlin"] },
  { group: "前端", items: ["React", "Vite"] },
  { group: "後端", items: ["FastAPI"] },
  { group: "資料庫", items: ["PostgreSQL"] },
  { group: "雲端與部署", items: ["AWS", "Linux"] },
  { group: "AI / 電腦視覺", items: ["YOLO", "Ultralytics", "OpenCV", "Roboflow", "InsightFace"] },
];

const projects = [
  {
    period: "2025/7 – 現在",
    title: "基於人工智慧影像辨識之智慧導盲眼鏡",
    points: [
      "擔任專案組長，負責團隊技術整合、系統除錯與專案管理，並設計 Kotlin 前端框架提升模組化程度。",
      "運用 YOLO（Roboflow、Ultralytics、OpenCV）開發即時物件偵測與語意分割系統，提升環境感知能力。",
      "以 FastAPI 與 InsightFace 建構即時人臉辨識平台，結合餘弦相似度演算法進行身份驗證與人臉匹配。",
    ],
    tags: ["Kotlin", "YOLO", "FastAPI", "InsightFace"],
  },
  {
    period: "2024/7 – 2025/11",
    title: "Healixir 專屬保健食品推薦系統",
    points: [
      "設計並實作多維度評分演算法，提供使用者個人化保健食品推薦服務。",
      "採用 React、FastAPI 與 PostgreSQL 建置全端應用，實現安全穩定的會員與資料管理機制。",
      "整合藥局健康問卷資料，利用餘弦相似度演算法建立推薦模型，提升推薦準確性與使用者體驗。",
    ],
    tags: ["React", "FastAPI", "PostgreSQL"],
  },
  {
    period: "2025/9",
    title: "《手術室風雲》醫療教育桌遊",
    points: [
      "與跨校團隊協作，將「腹腔鏡膽囊切除術」流程與突發事件解構為具決策檢核點的系統化模型（Triple Diamond Model）。",
      "建立知識、技能與團隊協作評估機制，預期可將學員無菌操作知識自 80% 提升至 90%。",
    ],
    tags: ["PSBH Global Challenge"],
  },
];

const awards = [
  "2026 東吳大學程式設計競賽 第一名",
  "2025 東吳大學程式設計競賽 第二名",
  "2025 NextWave AI 法律創新黑客松競賽 第三名",
  "2025 PSBH Problemthon & Solvethon Global Challenge 佳作",
  "2025、2024 全國大專校院程式設計競賽 代表學校晉級決賽",
  "2024 北區七校聯合程式設計競賽 佳作",
];

function SectionTitle({ index, children }: { index: string; children: React.ReactNode }) {
  return (
    <div className="mb-8 flex items-baseline gap-3">
      <span className="font-mono text-sm text-accent">{index}</span>
      <h2 className="text-2xl font-bold tracking-tight text-primary sm:text-3xl">{children}</h2>
      <span className="ml-2 h-px flex-1 bg-border" />
    </div>
  );
}

function Index() {
  return (
    <main className="mx-auto max-w-4xl px-5 pb-20 sm:px-8">
      <header className="border-b border-border py-14 sm:py-20">
        <p className="font-mono text-sm tracking-widest text-accent">KAO, SHUO-CHEN</p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-primary sm:text-6xl">高碩辰</h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          東吳大學資訊管理學系學生，專注於全端開發與 AI 影像辨識應用；熱衷把技術轉化為能解決真實問題的產品，並樂於教學與分享。
        </p>

        <ul className="mt-7 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-x-8">
          {contacts.map((c) => (
            <li key={c.label} className="text-sm">
              <span className="text-muted-foreground">{c.label}：</span>
              <a
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel={c.href.startsWith("http") ? "noopener" : undefined}
                className="font-medium text-primary underline decoration-accent/50 underline-offset-4 transition-colors hover:text-accent"
              >
                {c.value}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener"
          className="mt-9 inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-base font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-accent"
        >
          查看完整履歷 PDF
        </a>
      </header>

      <section className="py-14" aria-labelledby="experience">
        <SectionTitle index="01">工作與實習經歷</SectionTitle>
        <ol className="relative space-y-8 border-l border-border pl-6 sm:pl-8">
          {experiences.map((e) => (
            <li key={e.title} className="relative">
              <span className="absolute -left-[1.6rem] top-2 h-2.5 w-2.5 rounded-full bg-accent sm:-left-[2.1rem]" />
              <p className="font-mono text-xs text-muted-foreground">{e.period}</p>
              <h3 className="mt-1 text-lg font-semibold text-primary">{e.title}</h3>
              <p className="text-sm text-accent">{e.org}</p>
              <ul className="mt-3 space-y-1.5 text-sm leading-relaxed text-muted-foreground">
                {e.points.map((p) => (
                  <li key={p} className="flex gap-2">
                    <span className="text-accent">・</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </section>

      <section className="py-14">
        <SectionTitle index="02">技能專長</SectionTitle>
        <div className="grid gap-5 sm:grid-cols-2">
          {skills.map((s) => (
            <div key={s.group} className="rounded-lg border border-border bg-card p-5">
              <h3 className="text-sm font-semibold text-primary">{s.group}</h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {s.items.map((i) => (
                  <li
                    key={i}
                    className="rounded-md bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground"
                  >
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="py-14">
        <SectionTitle index="03">學歷</SectionTitle>
        <div className="rounded-lg border border-border bg-card p-6">
          <h3 className="text-lg font-semibold text-primary">東吳大學　資訊管理學系　學士</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            主修資訊管理，修習程式設計、資料庫系統與軟體開發相關課程；在校期間擔任教學助理與人工智慧應用社社長。
          </p>
        </div>
      </section>

      <section className="py-14">
        <SectionTitle index="04">專案作品</SectionTitle>
        <div className="grid gap-6">
          {projects.map((p) => (
            <article key={p.title} className="rounded-lg border border-border bg-card p-6">
              <p className="font-mono text-xs text-muted-foreground">{p.period}</p>
              <h3 className="mt-1 text-lg font-semibold text-primary">{p.title}</h3>
              <ul className="mt-3 space-y-1.5 text-sm leading-relaxed text-muted-foreground">
                {p.points.map((pt) => (
                  <li key={pt} className="flex gap-2">
                    <span className="text-accent">・</span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
              <ul className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <li
                    key={t}
                    className="rounded-md border border-accent/30 px-2.5 py-1 text-xs font-medium text-accent"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="py-14">
        <SectionTitle index="05">競賽榮譽</SectionTitle>
        <ul className="grid gap-3 sm:grid-cols-2">
          {awards.map((a) => (
            <li
              key={a}
              className="rounded-md border-l-2 border-accent bg-secondary/60 px-4 py-3 text-sm text-primary"
            >
              {a}
            </li>
          ))}
        </ul>
      </section>

      <footer className="border-t border-border pt-8 text-sm text-muted-foreground">
        <p>© 2026 高碩辰　KAO, SHUO-CHEN</p>
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener"
          className="mt-2 inline-block font-medium text-accent underline underline-offset-4"
        >
          查看完整履歷 PDF
        </a>
      </footer>
    </main>
  );
}
