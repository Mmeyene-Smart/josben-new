export const SITE = {
  name: "JOSBEN International Business School",
  short: "JOSBEN",
  city: "Uyo, Akwa Ibom, Nigeria",
  address: "15 William Bassey Street, Off Nkemba Street, Uyo, Akwa Ibom, Nigeria",
  phone: "+234-8086373992",
  phoneHref: "tel:+2348086373992",
  whatsapp: "https://wa.me/2348086373992",
  emails: ["admin@josbenibs.com", "admissions@josbenibs.com"],
  hours: [
    "Mon – Fri: 10am – 7pm",
    "Sat: 10am – 5pm",
    "Sun: 1pm – 5pm",
  ],
};

export type NavChild = { label: string; href: string };
export type NavItem = { label: string; href: string; children?: NavChild[] };

export const NAV: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  {
    label: "Programmes",
    href: "/programmes",
    children: [
      { label: "International Access", href: "/programmes/international-access" },
      { label: "Undergraduate", href: "/programmes#undergraduate" },
      { label: "Postgraduate", href: "/programmes#postgraduate" },
      { label: "Professional (ICAN / CIBN / ACCA)", href: "/programmes#professional" },
    ],
  },
  { label: "Admissions", href: "/admissions" },
  { label: "Blog", href: "/blog" },
  { label: "Vacancy", href: "/vacancy" },
  { label: "Contact", href: "/contact" },
];

export type Program = {
  slug: string;
  category: "undergraduate" | "postgraduate" | "professional" | "access";
  title: string;
  tagline: string;
  duration: string;
  mode: string;
  audience: string;
  highlights: string[];
  body: string[];
};

export const PROGRAMS: Program[] = [
  {
    slug: "international-access",
    category: "access",
    title: "International Access Programme",
    tagline: "Your pathway to study in the UK and beyond",
    duration: "9 – 12 months",
    mode: "On-campus, Uyo + UK articulation",
    audience: "SSCE / OND holders seeking foreign degrees",
    highlights: [
      "Articulation agreement with University of Roehampton, London",
      "NCC Education accredited curriculum via JOSBEN International College UK",
      "Guidance on visas, admissions and affordable tuition routes",
    ],
    body: [
      "The International Access Programme prepares Nigerian students for direct entry into UK universities. Delivered in Uyo with curriculum aligned to our sister college in Cambridgeshire, UK, it covers academic English, study skills and foundation business modules.",
      "Graduates progress with confidence to undergraduate degrees abroad at affordable rates, with counselling on visas and costs throughout.",
    ],
  },
  {
    slug: "undergraduate-accounting",
    category: "undergraduate",
    title: "B.Sc Accounting (Pathway)",
    tagline: "ICAN-friendly accounting degree route",
    duration: "3 – 4 years (with affiliation)",
    mode: "On-campus, Uyo",
    audience: "SSCE holders, JAMB candidates",
    highlights: ["B.Sc Accounting, Banking/Finance, Business Management tracks", "Exemptions guidance for ICAN ATS & Skills", "Small classes, seasoned lecturers"],
    body: [
      "Offered in affiliation with a reputable Nigerian university, our accounting pathway combines degree study with professional exam preparation so you graduate both employable and exam-ready.",
    ],
  },
  {
    slug: "undergraduate-business",
    category: "undergraduate",
    title: "Business & Management (Pathway)",
    tagline: "Modern management for the AKWACROSS region",
    duration: "3 – 4 years (with affiliation)",
    mode: "On-campus, Uyo",
    audience: "Aspiring managers and entrepreneurs",
    highlights: ["Entrepreneurship and case-based learning", "Internships via industry partners", "UK progression options"],
    body: [
      "From principles of management to business strategy, this pathway builds leadership, marketing and operations skills with real Nigerian business cases.",
    ],
  },
  {
    slug: "undergraduate-law",
    category: "undergraduate",
    title: "Law (Foundation & Progression)",
    tagline: "Start your legal journey with rigour",
    duration: "Foundation + degree progression",
    mode: "On-campus, Uyo",
    audience: "SSCE holders targeting law degrees",
    highlights: ["Strong writing and reasoning foundation", "Progression counselling to partner faculties", "Debate and moot exposure"],
    body: [
      "Our law foundation route builds the English, logic and civic knowledge needed to thrive in an LL.B programme, with mentorship on admissions.",
    ],
  },
  {
    slug: "undergraduate-it",
    category: "undergraduate",
    title: "IT Programmes (NCC Education)",
    tagline: "Computing with global certification",
    duration: "Stage-by-stage diplomas to degree",
    mode: "On-campus + practical labs",
    audience: "Tech-minded school leavers",
    highlights: ["NCC Education accredited content", "Software, networks and databases", "Top-up to UK B.Sc Computing"],
    body: [
      "Delivered with curriculum from our UK sister college, the IT route takes you from Level 3 to Level 5 diplomas with clear top-up routes to British universities.",
    ],
  },
  {
    slug: "postgraduate",
    category: "postgraduate",
    title: "Postgraduate & MBA Pathways",
    tagline: "For bankers, managers and graduates",
    duration: "12 – 24 months",
    mode: "Evening / weekend, Uyo + overseas options",
    audience: "HND / B.Sc holders, working professionals",
    highlights: ["Overseas postgraduate prep (UK partners)", "Research and project supervision", "Career and promotion focus"],
    body: [
      "For about a decade JOSBEN has prepared bank staff and professionals for overseas postgraduate programmes. We guide selection, applications and readiness for MBAs and M.Sc degrees at home and abroad.",
    ],
  },
  {
    slug: "professional-ican",
    category: "professional",
    title: "ICAN Professional",
    tagline: "Pass ATS, Skills and Professional levels",
    duration: "Per diet (May / July / Nov)",
    mode: "Evening / weekend lectures, Uyo",
    audience: "Accounting trainees and graduates",
    highlights: ["Diet-by-diet study plans", "Mock exams and revision clinics", "High pass-rate coaching"],
    body: ["Structured tuition for all ICAN stages with past-question drills and one-on-one mentoring."],
  },
  {
    slug: "professional-cibn",
    category: "professional",
    title: "CIBN Professional",
    tagline: "The only CIBN-accredited centre in Akwa Ibom",
    duration: "Per diet (April / October)",
    mode: "Evening / weekend lectures, Uyo",
    audience: "Bank staff and finance professionals",
    highlights: ["Only CIBN-accredited tuition centre in Akwa Ibom State", "Bank-focused cohorts for a decade", "Employer partnerships"],
    body: [
      "JOSBEN is the only higher institution in Akwa Ibom State accredited by the Chartered Institute of Bankers of Nigeria (CIBN) for banking and financial training — trusted by bank staff across the region.",
    ],
  },
  {
    slug: "professional-acca",
    category: "professional",
    title: "ACCA, UK",
    tagline: "Global accounting qualification",
    duration: "Paper-by-paper",
    mode: "Blended lectures, Uyo",
    audience: "Ambitious accountants going global",
    highlights: ["Applied Knowledge to Strategic Professional", "Global recognition", "Study + exam technique coaching"],
    body: ["ACCA tuition from AB to SBL with structured mocks and performance tracking."],
  },
];

export const POSTS = [
  {
    slug: "why-cibn-accreditation-matters",
    title: "Why CIBN accreditation matters for bankers in Akwa Ibom",
    date: "2026-06-12",
    excerpt: "JOSBEN remains the only CIBN-accredited tuition centre in the state — what that means for your promotion.",
  },
  {
    slug: "roehampton-articulation-explained",
    title: "Our Roehampton articulation agreement, explained",
    date: "2026-05-20",
    excerpt: "How JOSBEN graduates continue their degrees in London at affordable rates.",
  },
  {
    slug: "ican-vs-acca-which-first",
    title: "ICAN vs ACCA: which should you write first?",
    date: "2026-04-02",
    excerpt: "A practical guide for Nigerian graduates choosing a professional track.",
  },
];
