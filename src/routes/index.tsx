import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";

import { Preloader } from "@/components/site/Preloader";
import { CustomCursor } from "@/components/site/CustomCursor";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Highlights } from "@/components/site/Highlights";
import { Courses } from "@/components/site/Courses";
import { Subjects } from "@/components/site/Subjects";
import { Faculty } from "@/components/site/Faculty";
import { WhyChoose } from "@/components/site/WhyChoose";
import { Results } from "@/components/site/Results";
import { Gallery } from "@/components/site/Gallery";
import { Testimonials } from "@/components/site/Testimonials";
import { Faq } from "@/components/site/Faq";
import { Admission } from "@/components/site/Admission";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { FloatingActions } from "@/components/site/FloatingActions";

import ogImage from "@/assets/flyer-toppers.jpeg";

const title = "Premier Coaching | Classes 1st to 12th | Dubagga, Lucknow";
const description =
  "Premier Coaching provides academic coaching and tuition support for students from Class 1st to 12th in Dubagga, Lucknow, including CBSE, ICSE and State Board preparation.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:image", content: ogImage },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: ogImage },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          name: "Premier Coaching",
          description,
          telephone: ["+917881185953", "+918299598588"],
          address: {
            "@type": "PostalAddress",
            streetAddress: "Behind Yadav Bazar, Dubagga",
            addressLocality: "Lucknow",
            addressRegion: "Uttar Pradesh",
            addressCountry: "IN",
          },
          areaServed: "Lucknow, Uttar Pradesh, India",
          slogan: "Discipline Today, Success Tomorrow",
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="min-h-screen scroll-smooth bg-slate-50 dark:bg-[#050e1d] text-slate-900 dark:text-white selection:bg-[#f3ba2f] selection:text-[#071328] transition-colors duration-300">
      {/* Custom Preloader & Magnetic Cursor */}
      <Preloader onComplete={() => setLoaded(true)} />
      <CustomCursor />

      {/* Main Website Navigation */}
      <Navbar />

      <main className={loaded ? "opacity-100 transition-opacity duration-500" : ""}>
        <Hero />
        <About />
        <Highlights />
        <Courses />
        <Subjects />
        <Faculty />
        <WhyChoose />
        <Results />
        <Gallery />
        <Testimonials />
        <Faq />
        <Admission />
        <Contact />
      </main>

      <Footer />
      <FloatingActions />
    </div>
  );
}
