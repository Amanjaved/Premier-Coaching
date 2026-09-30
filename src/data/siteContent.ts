/**
 * Centralized, editable site text & content for Premier Coaching.
 * Edit this file to update website content without modifying component files.
 */

import officialLogo from "@/assets/logo.png";
import heroGroup from "@/assets/hero-group.jpeg";
import studentsGroup1 from "@/assets/students-group-1.jpeg";
import studentsGroup2 from "@/assets/students-group-2.jpeg";
import studentsGroup3 from "@/assets/students-group-3.jpeg";
import studentsGroup4 from "@/assets/students-group-4.jpeg";
import medals1 from "@/assets/event-medals-1.jpeg";
import medals2 from "@/assets/event-medals-2.jpeg";
import water1 from "@/assets/event-poster-water-1.jpeg";
import water2 from "@/assets/event-poster-water-2.jpeg";
import flyerToppers from "@/assets/flyer-toppers.jpeg";
import building from "@/assets/building.jpeg";
import facultyBoard from "@/assets/faculty-board.jpeg";
import celebration1 from "@/assets/celebration-1.jpeg";
import celebration2 from "@/assets/celebration-2.jpeg";
import eventDrawingCompetition from "@/assets/event-drawing-competition.jpeg";
import eventDrawingGroup from "@/assets/event-drawing-group.jpeg";

export type GalleryCategory = "CLASSES" | "STUDENTS" | "EVENTS" | "ACHIEVEMENTS" | "CAMPUS";

export const siteContent = {
  brand: {
    name: "Premier Coaching",
    logoSrc: officialLogo,
    taglines: [
      "Learn • Practice • Succeed",
      "Your Success, Our Mission!",
      "Discipline Today, Success Tomorrow",
    ],
  },

  announcement: "🎓 Admission Open — Limited Seats | 50% Special Discount for Siblings",

  contact: {
    phonePrimary: "7881185953",
    phoneSecondary: "8299598588",
    whatsapp: "917881185953",
    whatsappGreeting: "Hi Premier Coaching, I want to know about admissions.",
    address: "Behind Yadav Bazar, Dubagga, Lucknow",
    timings: "Call us for batch timings",
    mapQuery: "Behind+Yadav+Bazar+Dubagga+Lucknow",
    mapEmbedUrl:
      "https://www.google.com/maps/embed?origin=mfe&pb=!1m2!2m1!1sBehind+Yadav+Bazar,+Dubagga,+Lucknow",
  },

  social: {
    facebook: "",
    instagram: "",
    youtube: "",
  },

  nav: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Courses", href: "#courses" },
    { label: "Subjects", href: "#subjects" },
    { label: "Faculty", href: "#faculty" },
    { label: "Results", href: "#results" },
    { label: "Gallery", href: "#gallery" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ],

  hero: {
    badge: "ADMISSION OPEN • LIMITED SEATS",
    headlinePrefix: "SHAPE YOUR FUTURE WITH ",
    headlineHighlight: "PREMIER COACHING",
    sub: "Quality teaching, concept-based learning and dedicated academic support for students from Class 1st to 12th.",
    chips: [
      "Concept-Based Teaching",
      "Small Batches",
      "Regular Tests & Notes",
      "Online Classes Available",
    ],
    floatingBadge: "Quality Teaching • Better Results",
    mainImage: heroGroup,
    mainImageAlt: "Premier Coaching faculty and students in the institute classroom",
    stats: [
      { value: 12, prefix: "Class 1–", suffix: "", label: "Classes 1st to 12th covered" },
      { value: 3, prefix: "", suffix: " Boards", label: "CBSE, ICSE & State Board" },
      { value: 7, prefix: "", suffix: " Subjects", label: "Core school subjects" },
      { value: 4, prefix: "", suffix: " Faculty", label: "Dedicated subject mentors" },
    ],
  },

  about: {
    eyebrow: "ABOUT PREMIER COACHING",
    heading: "Building Strong Foundations for a Better Future",
    body: "Premier Coaching in Dubagga, Lucknow provides structured, concept-driven mentoring for Classes 1st–12th in small, focused batches — ensuring every student receives personal attention and measurable board growth.",
    photo: {
      src: building,
      alt: "Premier Coaching institute premises behind Yadav Bazar, Dubagga, Lucknow",
    },
    locationTag: "Behind Yadav Bazar, Dubagga, Lucknow",
    cards: [
      {
        number: "01",
        title: "Concept-Based Learning",
        text: "Understanding core principles thoroughly with practical examples rather than rote memorization.",
      },
      {
        number: "02",
        title: "Regular Assessment",
        text: "Weekly chapter-wise tests and detailed performance analysis to identify gaps and measure growth.",
      },
      {
        number: "03",
        title: "Personal Attention",
        text: "Controlled batch sizes allowing individual doubt clearing and tailored guidance for every student.",
      },
    ],
  },

  highlights: [
    {
      icon: "users",
      title: "Experienced & Dedicated Faculty",
      text: "Qualified subject specialists who understand the board syllabus and mentor every child with patience.",
    },
    {
      icon: "lightbulb",
      title: "Concept-Based Teaching",
      text: "Focus on in-depth understanding, active classroom problem-solving, and building solid fundamentals.",
    },
    {
      icon: "clipboard-check",
      title: "Regular Tests & Performance Analysis",
      text: "Weekly evaluation, previous-year question practice, and structured feedback for continuous improvement.",
    },
    {
      icon: "book-open",
      title: "Complete Study Material & Notes",
      text: "Comprehensive chapter-wise printed notes, formula sheets, and solved question banks included.",
    },
    {
      icon: "medal",
      title: "Focus on Discipline & Results",
      text: "A productive, encouraging learning atmosphere with regular parent-teacher updates and career mentoring.",
    },
  ],

  courses: [
    {
      icon: "sprout",
      title: "Foundation Batch",
      subtitle: "Class 1st to 8th",
      text: "Strong foundational building in Mathematics, Science, and English with interactive exercises and homework support.",
    },
    {
      icon: "graduation-cap",
      title: "Board Exam Preparation",
      subtitle: "Class 9th to 12th",
      text: "Thorough syllabus coverage, board pattern tests, previous-year questions, and strategic answer-writing guidance.",
    },
    {
      icon: "school",
      title: "School / Tuition Support",
      subtitle: "All Classes",
      text: "Daily school curriculum assistance, chapter revisions, and test series aligned directly with school exams.",
    },
    {
      icon: "trophy",
      title: "Competitive Exam Guidance",
      subtitle: "Scholarship & Olympiads",
      text: "Aptitude strengthening, reasoning, and conceptual training for scholarship and school competitive exams.",
    },
    {
      icon: "message-circle-question",
      title: "Doubt Clearing & Revision",
      subtitle: "Weekly Sessions",
      text: "Dedicated one-on-one doubt clearing sessions and rapid revision marathons ahead of unit and board tests.",
    },
  ],

  courseStrip: {
    boards: "CBSE • ICSE • State Board",
    online: "Online Classes Available — Learn from Anywhere, Anytime!",
  },

  subjects: [
    {
      name: "Mathematics",
      icon: "Sigma",
      description:
        "Algebra, Geometry, Trigonometry, and Calculus with step-by-step formula mastery and extensive problem-solving practice.",
    },
    {
      name: "Physics",
      icon: "Atom",
      description:
        "Mechanics, Heat, Optics, Electricity, and Magnetism taught with real-world applications and numerical clarity.",
    },
    {
      name: "Chemistry",
      icon: "FlaskConical",
      description:
        "Organic mechanisms, inorganic equations, and physical chemistry calculations simplified with easy-to-remember notes.",
    },
    {
      name: "Biology",
      icon: "Leaf",
      description:
        "Botany, Zoology, Genetics, and Human Physiology with clear diagram illustrations and point-wise answer structures.",
    },
    {
      name: "English",
      icon: "Languages",
      description:
        "Grammar accuracy, writing skills, literature comprehension, and board-level presentation techniques.",
    },
    {
      name: "Social Studies",
      icon: "Globe2",
      description:
        "History, Geography, Political Science, and Economics structured for clarity, map practice, and high board scores.",
    },
    {
      name: "Commerce",
      icon: "LineChart",
      description:
        "Accountancy principles, Business Studies concepts, and Economics analytics for senior secondary students.",
    },
  ],

  faculty: [
    {
      name: "Tauqeer Mustafa",
      subjects: "Physics | Mathematics",
      qualification: "B.Sc., M.Sc. (LU), LL.B, LL.M (IU)",
      photo: "",
    },
    {
      name: "Vishal Gupta",
      subjects: "Chemistry",
      qualification: "B.Sc., M.Sc. (LU)",
      photo: "",
    },
    {
      name: "Rohit Kr. Priyadarshi",
      subjects: "Biology",
      qualification: "B.Pharma (AKTU)",
      photo: "",
    },
    {
      name: "Aman Gautam",
      subjects: "English",
      qualification: "D.El.Ed",
      photo: "",
    },
  ],

  whyChoose: {
    points: [
      "Small batch size for individual attention",
      "Regular parent-teacher interaction & progress updates",
      "Updated study material as per the latest syllabus",
      "Weekly doubt clearing and concept revision sessions",
      "Motivational sessions & academic career guidance",
      "Safe, disciplined & student-friendly study environment",
    ],
    photo: {
      src: studentsGroup1,
      alt: "Enthusiastic students at Premier Coaching enjoying collaborative learning",
    },
  },

  toppers: [
    { name: "Hubaib Khan", percentage: "98.9%", className: "Board Topper", year: "" },
    { name: "Mohammad Arsh", percentage: "80%", className: "High Achiever", year: "" },
    { name: "Dishant Gautam", percentage: "80%", className: "High Achiever", year: "" },
    { name: "Aryan Rathore", percentage: "77%", className: "High Achiever", year: "" },
  ],

  gallery: {
    heading: "Life at Premier Coaching",
    subheading: "Classrooms, student achievements, competitions, and celebration milestones.",
    images: [
      {
        src: studentsGroup3,
        alt: "Premier Coaching students attending classroom lecture session",
        category: "CLASSES" as GalleryCategory,
        title: "Classroom Lecture Session",
      },
      {
        src: studentsGroup4,
        alt: "Students seated at study desks during batch lecture at Premier Coaching",
        category: "CLASSES" as GalleryCategory,
        title: "Focused Study Batch",
      },
      {
        src: heroGroup,
        alt: "Premier Coaching faculty with senior batch students",
        category: "STUDENTS" as GalleryCategory,
        title: "Senior Batch with Faculty",
      },
      {
        src: studentsGroup1,
        alt: "Junior students of Premier Coaching cheering in the classroom",
        category: "STUDENTS" as GalleryCategory,
        title: "Junior Batch Celebration",
      },
      {
        src: studentsGroup2,
        alt: "Group photo of Premier Coaching students in the classroom",
        category: "STUDENTS" as GalleryCategory,
        title: "Student Group in Classroom",
      },
      {
        src: eventDrawingCompetition,
        alt: "Students proudly presenting creative art and drawing competition entries",
        category: "EVENTS" as GalleryCategory,
        title: "Drawing Competition Winners",
      },
      {
        src: eventDrawingGroup,
        alt: "Students celebrating with drawing competition awards",
        category: "EVENTS" as GalleryCategory,
        title: "Art & Talent Recognition",
      },
      {
        src: water1,
        alt: "Student presenting 'Water is Life' World Water Day poster",
        category: "EVENTS" as GalleryCategory,
        title: "World Water Day Awareness",
      },
      {
        src: water2,
        alt: "Student presenting 'Save Water — Do Not Waste It' poster",
        category: "EVENTS" as GalleryCategory,
        title: "Environmental Poster Contest",
      },
      {
        src: celebration1,
        alt: "Faculty and students celebrating academic milestones with cake cutting",
        category: "EVENTS" as GalleryCategory,
        title: "Academic Milestone Celebration",
      },
      {
        src: celebration2,
        alt: "Premier Coaching community celebration and achievement ceremony",
        category: "EVENTS" as GalleryCategory,
        title: "Coaching Center Gathering",
      },
      {
        src: medals1,
        alt: "Medal winner receiving prize book at Premier Coaching",
        category: "ACHIEVEMENTS" as GalleryCategory,
        title: "Medal & Prize Book Winner",
      },
      {
        src: medals2,
        alt: "Young medal winner showing his Premier Coaching medal",
        category: "ACHIEVEMENTS" as GalleryCategory,
        title: "Student Academic Medalist",
      },
      {
        src: flyerToppers,
        alt: "Premier Coaching admission flyer listing faculty and top scorers",
        category: "ACHIEVEMENTS" as GalleryCategory,
        title: "Official Achievers Banner",
      },
      {
        src: building,
        alt: "Premier Coaching institute premises behind Yadav Bazar, Dubagga, Lucknow",
        category: "CAMPUS" as GalleryCategory,
        title: "Institute Building & Entrance",
      },
      {
        src: facultyBoard,
        alt: "Official faculty qualifications and subjects board at Premier Coaching",
        category: "CAMPUS" as GalleryCategory,
        title: "Faculty Board & Qualifications",
      },
    ],
  },

  showTestimonials: true,
  testimonials: [
    {
      name: "Sanjay Verma",
      relation: "Parent of Class 10th Student (CBSE)",
      text: "Premier Coaching completely transformed my son's approach to Science and Maths. Earlier he struggled with numericals, but thanks to the dedicated teachers and regular tests, his confidence and scores improved tremendously.",
    },
    {
      name: "Dr. Farhana Ansari",
      relation: "Parent of Class 12th Board Student",
      text: "The individual attention in small batches is real. Teachers clear every doubt patiently, and their chapter-wise test series helped my daughter prepare systematically without last-minute stress. Best coaching in Dubagga.",
    },
    {
      name: "Mohd. Rashid",
      relation: "Parent of Class 8th & 6th Siblings",
      text: "We enrolled both our children here and also received their 50% sibling discount. The teachers maintain strict discipline, punctual classes, and strong concept foundations from the ground up.",
    },
  ],

  faqs: [
    {
      q: "Which classes do you teach?",
      a: "We offer structured coaching for students from Class 1st to Class 12th, covering primary, middle, secondary, and senior secondary levels.",
    },
    {
      q: "Which boards do you support?",
      a: "We teach CBSE, ICSE, and UP State Board syllabi with board-specific test series and study material.",
    },
    {
      q: "What subjects are taught at Premier Coaching?",
      a: "We teach all core subjects including Mathematics, Physics, Chemistry, Biology, English, Social Studies, and Commerce.",
    },
    {
      q: "Do you provide online classes?",
      a: "Yes, online interactive classes are available for students who prefer remote learning, alongside our offline batches in Dubagga.",
    },
    {
      q: "What is the batch size?",
      a: "We maintain small batch sizes to ensure individual attention, active student participation, and personalized doubt clearance.",
    },
    {
      q: "Is there a sibling discount available?",
      a: "Yes! Premier Coaching offers a 50% special discount on tuition fees for siblings enrolling together.",
    },
    {
      q: "Where is Premier Coaching located?",
      a: "Our center is conveniently located Behind Yadav Bazar, Dubagga, Lucknow, Uttar Pradesh.",
    },
    {
      q: "How can I enquire or take admission?",
      a: "You can call us directly on 7881185953 / 8299598588, message us on WhatsApp, or submit the enquiry form below to book a counseling session.",
    },
  ],

  admission: {
    heading: "ADMISSIONS OPEN",
    subheading: "Shape Your Future With Premier Coaching",
    supporting: "Classes 1st–12th • CBSE • ICSE • State Board",
    discount: "50% Special Discount for Siblings",
  },

  form: {
    classes: [
      "1st",
      "2nd",
      "3rd",
      "4th",
      "5th",
      "6th",
      "7th",
      "8th",
      "9th",
      "10th",
      "11th",
      "12th",
    ],
    boards: ["CBSE", "ICSE", "State Board"],
    courses: [
      "Foundation Batch (1st–8th)",
      "Board Exam Preparation (9th–12th)",
      "School / Tuition Support",
      "Competitive Exam Guidance",
      "Doubt Clearing & Revision",
    ],
    modes: ["Offline (Dubagga Center)", "Online Batch"],
  },

  footer: {
    tagline: "Learn • Practice • Succeed",
    slogan: "Discipline Today, Success Tomorrow",
    copyright: `© ${new Date().getFullYear()} Premier Coaching. All rights reserved.`,
  },
};

export type SiteContent = typeof siteContent;
