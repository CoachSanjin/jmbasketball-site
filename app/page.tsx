"use client";

import { useEffect, useState } from "react";

export default function BasketballProgramWebsite() {
  const [scrollY, setScrollY] = useState(0);
  const [activeRosterPage, setActiveRosterPage] = useState<string | null>(null);
  
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const heroImageTransform = `translateY(${Math.min(scrollY * 0.18, 70)}px) scale(1.04)`;
  const heroContentTransform = `translateY(${Math.min(scrollY * 0.06, 20)}px)`;
  const navItems = ["Home", "About", "Schedule", "Roster", "Coaches", "Alumni", "Camps", "News", "Contact"];

  const values = [
    "Compete with toughness and pride",
    "Develop leaders",
    "Build discipline daily",
    "Represent Judge Memorial with pride",
  ];

  const championships = [1980, 2006, 2008, 2024];

    const fullSchedule = [
    {
      month: "November",
      games: [
        { date: "18", opponent: "Weber HS", location: "Away" },
        { date: "20", opponent: "Skyline HS", location: "Home" },
        { date: "24", opponent: "Brighton HS", location: "Home" },
      ],
    },
    {
      month: "December",
      games: [
        { date: "2", opponent: "West HS", location: "Away" },
        { date: "4", opponent: "West Field HS", location: "Home" },
        { date: "11", opponent: "Summit Academy HS", location: "Home" },
        { date: "15", opponent: "Murray HS", location: "Away" },
        { date: "18", opponent: "Juan Diego HS", location: "Away" },
        { date: "28", opponent: "Snow Canyon HS-Oly Autism Classic", location: "Neutral" },
        { date: "30", opponent: "Springville HS-Oly Autism Classic", location: "Neutral" },
      ],
    },
    {
      month: "January",
      games: [
        { date: "2-4", opponent: "Nike TOC (AZ)", location: "Neutral" },
        { date: "8", opponent: "Park City HS", location: "Home" },
        { date: "12", opponent: "Jordan HS", location: "Away" },
        { date: "15", opponent: "Cottonwood HS", location: "Away" },
        { date: "20", opponent: "East HS", location: "Home" },
        { date: "21", opponent: "Murray HS", location: "Home" },
        { date: "26", opponent: "Juan Diego HS", location: "Home" },
      ],
    },
    {
      month: "February",
      games: [
        { date: "2", opponent: "Park City HS", location: "Away" },
        { date: "4", opponent: "Jordan HS", location: "Home" },
        { date: "6", opponent: "Layton Christian", location: "Away" },
        { date: "9", opponent: "Cottonwood HS", location: "Home" },
        { date: "12", opponent: "East HS", location: "Away" },
      ],
    },
  ];

  const rosterPlayers = [];

  const alumni = [
    { id: "aymen-ismail", name: "Aymen Ismail", school: "CSU Pueblo", year: "Class of 2026 • Committed", badge: "CSUP", logo: "/csup.png" },
    { id: "massaer-mbodj", name: "Massaer Mbodj", school: "Western Wyoming CC", year: "Class of 2026 • Committed", badge: "WW", logo: "/wwcc.png" },
    { id: "aj-peek", name: "AJ Peek", school: "United States Merchant Marine Academy", year: "Class of 2026 • Committed", badge: "USMMA", logo: "/usmma.png" },
    { id: "jj-apathjang", name: "JJ Apathjang", school: "Northern Kentucky University", year: "Class of 2025 • Committed", badge: "NKU", logo: "/nku.png" },
    { id: "deng-deng", name: "Deng Deng", school: "Central Arizona College", year: "Class of 2025 • Committed", badge: "CAC", logo: "/cac.png" },
    { id: "majak-deng", name: "Majak Deng", school: "Central Arizona College", year: "Class of 2025 • Committed", badge: "CAC", logo: "/cac.png" },
    { id: "longar-alor", name: "Longar Alor", school: "Central Arizona College", year: "Class of 2025 • Committed", badge: "CAC", logo: "/cac.png" },
    { id: "aaydan-saucedo", name: "Aaydan Saucedo", school: "University of Puget Sound", year: "Class of 2024 • Committed", badge: "UPS", logo: "/ups.png" },
    { id: "manase-mangala", name: "Manase Mangala", school: "Wenatchee Valley College", year: "Class of 2023 • Committed", badge: "WVC", logo: "/wvc.png" },
    { id: "dom-burns", name: "Dom Burns", school: "Carroll University (WI)", year: "Class of 2021 • Committed", badge: "CU", logo: "/carroll.png" },
  ];

  const previousRosters = [
    {
      id: "roster-2025-26",
      season: "2025–26",
      label: "Next Up",
      description: "The next wave of Judge Memorial basketball that built on championship standards and prepared for another competitive season.",
      href: "#",
      image: "/roster-2026.jpg",
      highlights: ["Next generation core", "Program culture builders", "Competitive depth across the roster"],
      summary: "A season built around momentum, development, and carrying Judge Memorial standards forward.",
    },
    {
      id: "roster-2024-25",
      season: "2024–25",
      label: "State Title Defense",
      description: "The roster that helped continue Judge Memorial’s championship standard.",
      href: "#",
      image: "/roster-2025.jpg",
      highlights: ["Championship mindset", "Experienced leadership", "High-level competition every night"],
      summary: "A group defined by resilience, expectations, and the pressure of defending the standard.",
    },
    {
      id: "roster-2023-24",
      season: "2023–24",
      label: "State Champions",
      description: "The team that captured the 2024 state championship and set the standard for Judge Memorial basketball.",
      href: "#",
      image: "/roster-2024.jpg",
      highlights: ["2024 state champions", "Program-defining run", "Legacy group"],
      summary: "The championship team that delivered a title and elevated the program’s modern era.",
    },
    {
      id: "roster-2022-23",
      season: "2022–23",
      label: "Building the Standard",
      description: "A key developmental year for the program.",
      href: "#",
      image: "/roster-2023.jpg",
      highlights: ["Culture growth", "Foundation pieces", "Competitive identity"],
      summary: "A roster that pushed the program forward and helped shape the standard that followed.",
    },
    {
      id: "roster-2021-22",
      season: "2021–22",
      label: "Program Growth",
      description: "Continuing to build a competitive foundation.",
      href: "#",
      image: "/roster-2022.jpg",
      highlights: ["Emerging leadership", "Developing confidence", "Program traction"],
      summary: "A season centered on progress, cohesion, and growth across the program.",
    },
    {
      id: "roster-2020-21",
      season: "2020–21",
      label: "Foundation Year",
      description: "Laying the groundwork for the program’s future success.",
      href: "#",
      image: "/roster-2021.jpg",
      highlights: ["Program foundation", "Early identity", "Long-term vision"],
      summary: "Coach Sanjin's 1st season. A foundational roster that helped establish the direction and expectations of Judge Memorial basketball.",
    },

    // 🔥 HISTORIC CHAMPIONSHIP TEAMS
    {
      id: "roster-2008",
      season: "2007–08",
      label: "State Champions",
      description: "A championship team that cemented Judge Memorial’s dominance and competitive legacy.",
      href: "#",
      image: "/roster-2008.jpg",
      highlights: ["2008 state champions", "Elite roster", "Historic run"],
      summary: "A dominant group that brought a state title back to Judge Memorial.",
    },
    {
      id: "roster-2006",
      season: "2005–06",
      label: "State Champions",
      description: "A defining team that delivered a state championship and elevated the program.",
      href: "#",
      image: "/roster-2006.jpg",
      highlights: ["2006 state champions", "Program milestone", "Legacy builders"],
      summary: "A championship squad that helped shape the modern era of Judge Memorial basketball.",
    },
    {
      id: "roster-1980",
      season: "1979–80",
      label: "State Champions",
      description: "The original championship team that set the foundation for Judge Memorial basketball.",
      href: "#",
      image: "/roster-1980.jpg",
      highlights: ["1980 state champions", "Program foundation", "Historic legacy"],
      summary: "The team that started it all and established a championship tradition.",
    },
  ];

  const newsItems = [
    {
      title: "Summer Camp Registration Open",
      text: "Register now for our Summer Skills Camp: https://www.judgememorial.org/summer-classes-camps",
    },
    {
      title: "Follow the Program This Season",
      text: "Stay connected for schedules, scores, highlights, and team announcements all season long. Follow us on Instagram @judgebasketball",
    },
  ];

  const coaches = [
    {
      name: "Sanjin Kolovrat",
      initials: "SK",
      role: "Head Coach",
      image: "/sanjin.jpg",
      bio: "Leading Judge Memorial Catholic HS basketball with a focus on player development, discipline, and building a championship culture on and off the court.",
      socialLabel: "X",
      socialHandle: "@CoachSanjin",
      socialUrl: "https://twitter.com/CoachSanjin",
    },
    {
      name: "Jake Bero-Van Wagoner",
      initials: "JB",
      role: "Assistant Coach",
      image: "/jake.jpg",
      bio: "Head frosh/soph coach, assistant varsity coach. Director of basketball operations.",
    },
    {
      name: "Jesus Martinez",
      initials: "JM",
      role: "Assistant Coach",
      image: "/jesus.jpg",
      bio: "Head JV coach, lead assistant varsity coach. Director of youth development with Utah Branded.",
    },
    {
      name: "Arual Deng",
      initials: "AD",
      role: "Academic Advisor",
      image: "/arual.jpg",
      bio: "Supporting student-athlete academic success and accountability within the basketball program.",
    },
  ];

  const offers = ["Offer", "Offer", "Offer"];

  const quickLinks = [
    { label: "Home", href: "#home" },
    { label: "Schedule", href: "#schedule" },
    { label: "Roster", href: "#roster" },
    { label: "Alumni", href: "#alumni" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-neutral-950 to-[#3a0a0a] pb-24 text-white">
      <header className="sticky top-0 z-50 border-b border-[#c9a227]/20 bg-[#2a0808]/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-2xl border-2 border-[#c9a227] bg-[#7a0c0c]">
              <img src="/JM_Primary (1).png" alt="JM Basketball logo" className="h-[85%] w-[85%] object-contain" />
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-[0.3em] text-[#c9a227] sm:text-xs">Judge Memorial Catholic HS</div>
              <div className="text-base font-bold tracking-tight text-white sm:text-lg">Basketball</div>
            </div>
          </div>

          <nav className="hidden gap-6 md:flex">
            {navItems.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-sm text-white/80 transition hover:text-[#c9a227]">
                {item}
              </a>
            ))}
          </nav>

          <a href="#contact" className="rounded-full border border-[#c9a227]/50 px-4 py-2 text-xs font-semibold text-white transition hover:bg-[#c9a227] hover:text-[#3a0a0a] sm:text-sm">
            Contact
          </a>
        </div>

        <div className="mx-auto flex max-w-7xl gap-2 overflow-x-auto px-4 pb-3 sm:hidden">
          {quickLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="shrink-0 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/75"
            >
              {item.label}
            </a>
          ))}
        </div>
      </header>

      <section id="home" className="relative overflow-hidden">
        <img
          src="/gym.jpg"
          alt="Judge Memorial gym"
          className="absolute inset-0 h-full w-full object-cover will-change-transform"
          style={{ transform: heroImageTransform }}
        />
        <div className="absolute inset-0 bg-black/25" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(201,162,39,0.18),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(181,18,43,0.16),transparent_24%)]" />
        <div className="absolute inset-0 bg-gradient-to-br from-black/55 via-[#2a0808]/25 to-[#4a0d0d]/55" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-[#3a0a0a]/25 to-black/35" />
        <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] [background-size:72px_72px]" />

        <div className="relative mx-auto grid min-h-[82vh] max-w-7xl gap-12 px-4 py-16 sm:px-6 sm:py-20 md:grid-cols-[1.08fr_0.92fr] md:py-28" style={{ transform: heroContentTransform }}>
          <div className="flex flex-col justify-center">
            <div className="mb-5 inline-flex w-fit items-center gap-3 rounded-full border border-[#c9a227]/35 bg-black/45 px-4 py-2 text-xs uppercase tracking-[0.18em] text-[#f3d36b] backdrop-blur-sm">
              Tradition • Toughness • Brotherhood
            </div>

            <div className="mb-7 flex items-center gap-5">
              <div className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-[1.5rem] border-2 border-[#c9a227] bg-[#7a0c0c]/85 shadow-[0_0_25px_rgba(201,162,39,0.35)] md:h-20 md:w-20">
                <img src="/JM_Primary (1).png" alt="JM Basketball logo" className="h-[80%] w-[80%] object-contain" />
              </div>
              <div>
                <div className="text-sm uppercase tracking-[0.35em] text-[#f3d36b]">Judge Memorial</div>
                <div className="text-xl uppercase tracking-[0.45em] text-white/85">Basketball</div>
              </div>
            </div>

            <h1 className="max-w-3xl text-5xl font-black leading-[0.94] tracking-tight sm:text-6xl md:text-7xl xl:text-[5.35rem]">
              Built on tradition.<br />
              Driven by standard.
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-white/82 sm:text-lg sm:leading-8">
              Welcome to Judge Memorial Catholic HS basketball — a program built on discipline, development, competition, and pride in representing our school every day.
            </p>

            <div className="mt-8 flex flex-wrap gap-3 text-sm uppercase tracking-[0.22em] text-white/75">
              <span className="rounded-full border border-white/10 bg-black/35 px-4 py-2 backdrop-blur-sm">Salt Lake City</span>
              <span className="rounded-full border border-white/10 bg-black/35 px-4 py-2 backdrop-blur-sm">2026–2027 Season</span>
              <span className="rounded-full border border-white/10 bg-black/35 px-4 py-2 backdrop-blur-sm">We &gt; Me</span>
            </div>

            <div className="mt-8 grid gap-3 sm:flex sm:flex-row sm:flex-wrap sm:gap-4">
              <a href="#schedule" className="rounded-2xl bg-[#c9a227] px-6 py-3 text-center font-semibold text-[#3a0a0a] shadow-lg shadow-black/25 transition hover:scale-[1.02] active:scale-[0.99]">
                View Schedule
              </a>
              <a href="#coaches" className="rounded-2xl border border-[#c9a227]/40 bg-black/20 px-6 py-3 text-center font-semibold text-white backdrop-blur-sm transition hover:bg-[#c9a227]/10 active:scale-[0.99]">
                Meet the Staff
              </a>
            </div>

            <div className="mt-10 hidden items-center gap-3 text-xs uppercase tracking-[0.24em] text-white/55 md:flex">
              <span className="h-px w-14 bg-[#c9a227]/40" />
              Program Culture. Daily Development. Competitive Edge.
            </div>
          </div>

          <div className="grid content-end gap-5 md:pl-6 xl:pl-10">
            <div className="overflow-hidden rounded-[2rem] border border-[#c9a227]/25 bg-black/30 shadow-2xl shadow-black/30 backdrop-blur-md">
              <div className="border-b border-white/10 px-6 py-4">
                <div className="text-sm uppercase tracking-[0.3em] text-[#f3d36b]/90">Program Snapshot</div>
              </div>
              <div className="grid grid-cols-2 gap-4 p-6 sm:p-7">
                {[
                  { value: "4", label: "Levels" },
                  { value: "100+", label: "Athletes Impacted" },
                  { value: "12", label: "Months of Development" },
                  { value: "1", label: "Program Standard" },
                ].map((item) => (
                  <div key={item.label} className="rounded-2xl border border-white/10 bg-black/35 p-5 backdrop-blur-sm transition hover:border-[#c9a227]/25">
                    <div className="text-3xl font-black text-white">{item.value}</div>
                    <div className="mt-1 text-sm text-white/60">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-[#c9a227]/20 bg-gradient-to-br from-black/55 to-[#7a0c0c]/30 p-6 shadow-2xl shadow-black/25 backdrop-blur-md sm:p-8">
              <div className="text-sm uppercase tracking-[0.3em] text-[#f3d36b]/85">Our Mission</div>
              <p className="mt-4 text-lg leading-7 text-white/92 sm:text-xl sm:leading-8">
                We develop student-athletes into confident competitors, disciplined teammates, and high-character young men prepared for success beyond basketball.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[#c9a227]/20 bg-black/40">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-6 gap-y-3 px-4 py-4 text-xs font-semibold uppercase tracking-[0.24em] text-white/70 sm:gap-x-10 sm:px-6 sm:text-sm sm:tracking-[0.35em]">
          <span>Judge Memorial Basketball</span>
          <span>Built on Toughness</span>
          <span>Train. Compete. Represent.</span>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16">
        <div className="mb-8 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end md:gap-6">
          <div>
            <div className="text-sm uppercase tracking-[0.3em] text-white/50">About the Program</div>
            <h2 className="mt-3 text-2xl font-bold sm:text-3xl md:text-4xl">What we stand for</h2>
          </div>
          <p className="max-w-2xl text-white/65">
            Judge Memorial basketball is built on daily habits, player development, accountability, and a commitment to representing our school and community the right way.
          </p>
        </div>

        <div className="mb-8 rounded-[2rem] border border-[#c9a227]/30 bg-gradient-to-r from-[#7a0c0c] via-black to-[#7a0c0c] p-6 text-center">
          <div className="text-3xl font-black tracking-[0.25em] text-[#f3d36b] md:text-5xl">WE &gt; ME</div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
          {values.map((value) => (
            <div key={value} className="rounded-[1.75rem] border border-[#c9a227]/20 bg-[#7a0c0c]/20 p-6">
              <div className="text-lg font-semibold leading-7">{value}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="championships" className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16">
        <div className="mb-8 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end md:gap-6">
          <div>
            <div className="text-sm uppercase tracking-[0.3em] text-[#c9a227]">Championship Tradition</div>
            <h2 className="mt-3 text-2xl font-bold sm:text-3xl md:text-4xl">State Champions</h2>
          </div>
          <p className="max-w-2xl text-white/65">
            Judge Memorial basketball has a championship tradition built across generations, with state titles won in 1980, 2006, 2008, and 2024.
          </p>
        </div>

        <div className="rounded-[2rem] border border-[#c9a227]/20 bg-gradient-to-r from-[#7a0c0c]/30 via-black/40 to-[#7a0c0c]/30 p-8">
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
            {championships.map((year) => (
              <div key={year} className="rounded-[1.75rem] border border-[#c9a227]/20 bg-black/25 p-6 text-center">
                <div className="text-xs uppercase tracking-[0.28em] text-white/45">State Title</div>
                <div className="mt-3 text-4xl font-black text-[#f3d36b] md:text-5xl">{year}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="schedule" className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16">
        <div className="mb-8 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end md:gap-6">
          <div>
            <div className="text-sm uppercase tracking-[0.3em] text-white/50">Schedule</div>
            <h2 className="mt-3 text-2xl font-bold sm:text-3xl md:text-4xl">2026–2027 Season</h2>
          </div>
          <p className="max-w-2xl text-white/65">
            Full Judge Memorial Catholic HS basketball schedule for the 2026–2027 season, including non-region, region, and tournament play.
          </p>
        </div>

        <div className="mb-10 rounded-[2rem] border border-[#c9a227]/20 bg-black/25 p-4 sm:p-6 md:p-8">
          <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
            <div>
              <div className="text-sm uppercase tracking-[0.3em] text-[#c9a227]">Schedule Overview</div>
              <div className="mt-2 text-2xl font-bold text-white">Season at a Glance</div>
            </div>
            <div className="text-sm font-semibold uppercase tracking-[0.18em] text-[#f3d36b]">
              Official Schedule Coming Soon
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {fullSchedule.map((month) => (
              <div key={month.month} className="rounded-[1.5rem] border border-[#c9a227]/15 bg-[#7a0c0c]/15 p-4">
                <div className="mb-4 inline-flex rounded-full bg-[#b5122b] px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-white">
                  {month.month}
                </div>
                <div className="space-y-3">
                  {month.games.map((game) => (
                    <div key={`${month.month}-${game.date}-${game.opponent}`} className="flex items-start gap-3 rounded-xl border border-white/5 bg-black/20 px-3 py-3">
                      <div className="min-w-[38px] text-xl font-black text-[#c9a227]">{game.date}</div>
                      <div>
                        <div className="font-semibold text-white">{game.opponent}</div>
                        <div className="text-xs uppercase tracking-[0.18em] text-white/55">{game.location}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="roster" className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16">
        <div className="mb-8">
          <div className="text-sm uppercase tracking-[0.3em] text-white/50">Roster</div>
          <h2 className="mt-3 text-2xl font-bold sm:text-3xl md:text-4xl">Meet the Team</h2>
        </div>

        <div className="mb-6 text-center text-sm uppercase tracking-[0.25em] text-[#c9a227]">
          26–27 ROSTER RELEASING AFTER TRYOUTS IN NOVEMBER
        </div>

        
      </section>

      <section id="coaches" className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16">
        <div className="mb-8">
          <div className="text-sm uppercase tracking-[0.3em] text-[#c9a227]">Coaching Staff</div>
          <h2 className="mt-3 text-2xl font-bold sm:text-3xl md:text-4xl">Leadership of the Program</h2>
        </div>

        <div className="grid items-center gap-8 md:grid-cols-2">
          <div className="rounded-[2rem] border border-[#c9a227]/20 bg-gradient-to-br from-[#7a0c0c]/30 to-black/40 p-8">
            <div className="mb-6 text-sm uppercase tracking-[0.3em] text-[#c9a227]">Staff Lineup</div>
            <div className="grid gap-4">
              {coaches.map((coach) => (
                <div key={coach.name} className="flex items-center justify-between gap-4 rounded-[1.5rem] border border-white/10 bg-black/25 p-4">
                  <div className="flex items-center gap-4">
                    <div className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-2xl border border-[#c9a227]/30 bg-[#7a0c0c]">
                      {coach.image ? (
                        <img src={coach.image} alt={coach.name} className="h-full w-full object-cover" />
                      ) : (
                        <span className="text-lg font-black text-[#f3d36b]">{coach.initials}</span>
                      )}
                    </div>
                    <div>
                      <div className="text-lg font-semibold text-white">{coach.name}</div>
                      <div className="text-sm uppercase tracking-[0.18em] text-white/55">{coach.role}</div>
                    </div>
                  </div>

                  <div className="text-sm">
                    {coach.name === "Sanjin Kolovrat" && (
                      <a href="https://twitter.com/CoachSanjin" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#f3d36b] hover:underline">
                        <span className="text-base">𝕏</span>
                        <span>@CoachSanjin</span>
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-[1.5rem] border border-[#c9a227]/20 bg-[#7a0c0c]/20 p-6">
              <div className="text-sm uppercase tracking-[0.25em] text-white/50">Head Coach</div>
              <div className="mt-2 text-2xl font-bold">Sanjin Kolovrat</div>
              
              <p className="mt-3 leading-7 text-white/70">
                Leading Judge Memorial Catholic HS basketball with a focus on player development, discipline, and building a championship culture on and off the court.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-[1.5rem] border border-[#c9a227]/20 bg-black/30 p-5">
                <div className="text-sm uppercase tracking-[0.25em] text-white/50">Assistant Coach</div>
                <div className="mt-2 text-xl font-bold">Jake Bero-Van Wagoner</div>
                <p className="mt-2 leading-7 text-white/65">Head frosh/soph coach, assistant varsity coach. Director of basketball operations.</p>
              </div>
              <div className="rounded-[1.5rem] border border-[#c9a227]/20 bg-black/30 p-5">
                <div className="text-sm uppercase tracking-[0.25em] text-white/50">Assistant Coach</div>
                <div className="mt-2 text-xl font-bold">Jesus Martinez</div>
                <p className="mt-2 leading-7 text-white/65">Head JV coach, lead assistant varsity coach. Director of youth development with Utah Branded.</p>
              </div>
            </div>

            <div className="rounded-[1.5rem] border border-[#c9a227]/20 bg-black/30 p-6">
              <div className="text-lg font-semibold">Coaching Philosophy</div>
              <p className="mt-3 leading-7 text-white/65">
                Our staff is committed to developing complete student-athletes through accountability, toughness, and daily improvement. We emphasize team-first mentality and pride in representing Judge Memorial.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="camps" className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16">
        <div className="grid gap-8 rounded-[2rem] border border-[#c9a227]/20 bg-[#7a0c0c]/20 p-6 sm:p-8 md:grid-cols-[1.2fr_0.8fr] md:p-10">
          <div>
            <div className="text-sm uppercase tracking-[0.3em] text-white/50">Camps & Youth Development</div>
            <h2 className="mt-3 text-2xl font-bold sm:text-3xl md:text-4xl">Grow the game in our community</h2>
            <p className="mt-5 max-w-2xl leading-8 text-white/70">
              Led by Coach Sanjin, Coach Zeus, & Coach Jake, our youth camps create a fun, energetic environment for players to improve fundamentals, learn teamwork, and connect with our basketball program.
            </p>
          </div>
          <div className="rounded-[1.75rem] border border-[#c9a227]/10 bg-black/30 p-6">
            <div className="text-lg font-semibold">Featured Camp</div>
            <div className="mt-4 flex items-center gap-3 text-2xl font-bold">
              Summer Skills Camp
              <span className="rounded-full border border-[#c9a227]/40 bg-[#c9a227]/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#f3d36b]">
                Limited Spots
              </span>
            </div>
            <div className="mt-3 text-white/65">July 14–16, 2026 • Grades 3–8 • Judge Memorial Gym</div>
            <a
              href="https://www.judgememorial.org/summer-classes-camps"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block rounded-2xl bg-[#c9a227] px-5 py-3 font-semibold text-[#3a0a0a] transition hover:scale-[1.02]"
            >
              Register Now
            </a>
          </div>
        </div>
      </section>

      <section id="alumni" className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16">
        <div className="mb-8">
          <div className="text-sm uppercase tracking-[0.3em] text-[#c9a227]">Alumni</div>
          <h2 className="mt-3 text-2xl font-bold sm:text-3xl md:text-4xl">College Players</h2>
          <p className="mt-3 max-w-2xl text-white/65">Judge Memorial players continuing their careers at the collegiate level.</p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {alumni.map((player) => (
            <div key={player.id} className="group overflow-hidden rounded-[2rem] border border-[#c9a227]/30 bg-gradient-to-br from-[#7a0c0c]/40 via-black/50 to-[#7a0c0c]/40 p-6 transition-all duration-300 hover:scale-[1.04] hover:border-[#f3d36b] hover:shadow-2xl hover:shadow-[#c9a227]/20">
              <div className="mb-5 flex justify-center">
                <div className="flex h-20 w-20 items-center justify-center overflow-hidden rounded-2xl border border-[#c9a227]/50 bg-black/50 shadow-lg shadow-[#c9a227]/10">
                  {player.logo ? (
                    <img src={player.logo} alt={player.school} className="h-[75%] w-[75%] object-contain" />
                  ) : (
                    <span className="text-base font-black text-[#f3d36b]">{player.badge}</span>
                  )}
                </div>
              </div>
              <div className="text-center text-xl font-semibold">{player.name}</div>
              <div className="mt-2 flex justify-center">
                <span className="rounded-full bg-[#c9a227] px-4 py-1 text-xs font-bold uppercase tracking-[0.2em] text-[#3a0a0a] shadow-md">
                  Committed
                </span>
              </div>
              <div className="mt-2 text-center font-medium text-[#f3d36b]">{player.school}</div>
              <div className="mt-1 text-center text-sm text-white/60">{player.year}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="previous-rosters" className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16">
        <div className="mb-8">
          <div className="text-sm uppercase tracking-[0.3em] text-[#c9a227]">Program Archive</div>
          <h2 className="mt-3 text-2xl font-bold sm:text-3xl md:text-4xl">Previous Rosters</h2>
          <p className="mt-3 max-w-2xl text-white/65">
            Explore past Judge Memorial teams and keep a record of the players who helped build the program.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {previousRosters.map((roster) => (
            <div key={roster.id} className="group rounded-[2rem] border border-[#c9a227]/20 bg-[#7a0c0c]/20 p-6 transition-all duration-300 hover:border-[#c9a227]/40 hover:shadow-xl">
              <div className="flex items-center justify-between gap-3">
                <div className="rounded-full bg-black/60 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#f3d36b]">
                  {roster.season}
                </div>
                {roster.season === "2023–24" && (
                  <div className="rounded-full bg-[#c9a227] px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-[#3a0a0a] shadow-lg">
                    🏆 Champions
                  </div>
                )}
              </div>

              <div className="mt-4 text-xl font-bold text-white">{roster.label}</div>
              <p className="mt-2 text-sm leading-7 text-white/65">{roster.description}</p>

              <button
                type="button"
                onClick={() => setActiveRosterPage(roster.id)}
                className="mt-5 flex w-full items-center justify-between gap-3 rounded-xl border border-white/10 bg-black/30 p-3 text-left transition hover:border-[#c9a227]/40"
              >
                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#f3d36b]">
                  View Roster →
                </div>
                <div className="h-12 w-16 overflow-hidden rounded-md border border-white/10">
                  <img src={roster.image} alt={roster.season} className="h-full w-full object-cover" />
                </div>
              </button>
            </div>
          ))}
        </div>
      </section>

      <section id="news" className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16">
        <div className="mb-8">
          <div className="text-sm uppercase tracking-[0.3em] text-white/50">Latest News</div>
          <h2 className="mt-3 text-2xl font-bold sm:text-3xl md:text-4xl">Program Updates</h2>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3">
          {newsItems.map((item) => (
            <div key={item.title} className="rounded-[2rem] border border-[#c9a227]/20 bg-[#7a0c0c]/20 p-6">
              <div className="text-xl font-semibold">{item.title}</div>
              <p className="mt-4 leading-7 text-white/65">
                {item.title === "Summer Camp Registration Open" ? (
                  <>
                    Register now for our Summer Skills Camp:{" "}
                    <a href="https://www.judgememorial.org/summer-classes-camps" target="_blank" rel="noopener noreferrer" className="text-[#f3d36b] hover:underline">
                      Register Here
                    </a>
                  </>
                ) : (
                  <>
                    Stay connected for schedules, scores, highlights, and team announcements all season long. Follow us on Instagram{" "}
                    <a href="https://instagram.com/judgebasketball" target="_blank" rel="noopener noreferrer" className="text-[#f3d36b] hover:underline">
                      @judgebasketball
                    </a>
                  </>
                )}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16">
        <div className="grid gap-8 rounded-[2rem] border border-[#c9a227]/20 bg-gradient-to-br from-[#c9a227]/10 to-transparent p-6 sm:p-8 md:grid-cols-2 md:p-10">
          <div>
            <div className="text-sm uppercase tracking-[0.3em] text-white/50">Contact</div>
            <h2 className="mt-3 text-2xl font-bold sm:text-3xl md:text-4xl">Connect with the program</h2>
            <p className="mt-5 max-w-xl leading-8 text-white/70">
              Reach out for schedule questions, camp info, program support opportunities, or anything related to our basketball program.
            </p>
          </div>
          <div className="grid gap-4">
            <div className="rounded-[1.5rem] border border-[#c9a227]/20 bg-black/25 p-5">
              <div className="text-sm uppercase tracking-[0.25em] text-white/45">Email</div>
              <div className="mt-2 text-lg font-semibold">boysbasketball@judgememorial.com</div>
            </div>
            <div className="rounded-[1.5rem] border border-[#c9a227]/20 bg-black/25 p-5">
              <div className="text-sm uppercase tracking-[0.25em] text-white/45">Location</div>
              <div className="mt-2 text-lg font-semibold">Salt Lake City, UT • 650 S 1100 E</div>
            </div>
            <div className="rounded-[1.5rem] border border-[#c9a227]/20 bg-black/25 p-5">
              <div className="text-sm uppercase tracking-[0.25em] text-white/45">Social</div>
              <div className="mt-2 text-lg font-semibold">
                📸 Instagram:
                <a href="https://instagram.com/judgebasketball" target="_blank" rel="noopener noreferrer" className="ml-1 text-[#f3d36b] hover:underline">
                  @judgebasketball
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {activeRosterPage && (() => {
        const roster = previousRosters.find((item) => item.id === activeRosterPage);
        if (!roster) return null;

        return (
          <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm">
            <div className="relative max-h-[92vh] w-full max-w-5xl overflow-hidden rounded-[2rem] border border-[#c9a227]/25 bg-[#120606] shadow-2xl shadow-black/40">
              <div className="flex items-center justify-between border-b border-white/10 px-5 py-4 sm:px-7">
                <div>
                  <div className="text-xs uppercase tracking-[0.22em] text-[#c9a227]">Previous Roster</div>
                  <div className="mt-1 text-2xl font-bold text-white">{roster.season} • {roster.label}</div>
                </div>
                <button
                  type="button"
                  onClick={() => setActiveRosterPage(null)}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/75 transition hover:border-[#c9a227]/40 hover:text-white"
                >
                  Close
                </button>
              </div>

              <div className="max-h-[calc(92vh-88px)] overflow-auto p-4 sm:p-6">
                <img src={roster.image} alt={`${roster.season} roster`} className="w-full rounded-[1.5rem] border border-white/10 object-contain" />
              </div>
            </div>
          </div>
        );
      })()}

      <footer className="border-t border-[#c9a227]/20 px-4 py-8 text-center text-sm text-white/45 sm:px-6">
        <div className="mb-4 flex justify-center">
          <div className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-[1.25rem] border-2 border-[#c9a227] bg-[#7a0c0c]">
            <img src="/JM_Primary (1).png" alt="JM Basketball logo" className="h-[80%] w-[80%] object-contain" />
          </div>
        </div>
        © 2026 Judge Memorial Catholic HS Basketball. All rights reserved.
      </footer>
    </div>
  );
}
