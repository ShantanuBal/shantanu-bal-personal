import PhotoLightbox from "./components/PhotoLightbox";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Shantanu Bal",
  url: "https://shantanubal.com",
  jobTitle: "Senior Software Engineer",
  description:
    "Senior software engineer with 10+ years building distributed systems at scale. Focused on financial technology.",
  sameAs: [
    "https://github.com/ShantanuBal",
    "https://www.linkedin.com/in/shantanubal/",
  ],
  knowsAbout: [
    "Distributed Systems",
    "Cloud Computing",
    "AWS",
    "Financial Technology",
    "Machine Learning Operations",
  ],
};

export default function Home() {
  return (
    <main className="relative z-10 max-w-2xl mx-auto px-6 py-20 text-slate-900 dark:text-slate-100">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="mb-20">
        <div className="flex items-center gap-5 mb-4">
          <PhotoLightbox />
          <div>
            <h1 className="text-3xl font-semibold tracking-tight mb-1 dark:bg-gradient-to-r dark:from-white dark:to-cyan-200 dark:bg-clip-text dark:text-transparent">
              Shantanu Bal
            </h1>
            <p className="text-slate-500 dark:text-slate-400 text-sm">
              Senior Software Engineer &middot; Seattle &rarr; New York
            </p>
          </div>
        </div>
        <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-3">
          10+ years building distributed, cloud-native systems at scale — most recently at Amazon
          and Axon. Now focused on applying that depth to financial technology.
        </p>
        <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
          Currently building{" "}
          <a
            href="https://usehorizon.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-cyan-400 hover:underline"
          >
            Horizon
          </a>
          , an AI-powered platform making financial market insights accessible to everyday
          investors — a direct expression of where I want the next chapter of my career to go.
        </p>

        <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
          <a
            href="https://github.com/ShantanuBal"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors"
          >
            GitHub
          </a>
          <span className="text-slate-300 dark:text-slate-700">&middot;</span>
          <a
            href="https://www.linkedin.com/in/shantanubal/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors"
          >
            LinkedIn
          </a>
          <span className="text-slate-300 dark:text-slate-700">&middot;</span>
          <a
            href="mailto:shantanu.r.bal@gmail.com"
            className="text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors"
          >
            shantanu.r.bal@gmail.com
          </a>
          <span className="text-slate-300 dark:text-slate-700">&middot;</span>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors"
          >
            Resume &darr;
          </a>
        </div>
      </section>

      {/* Journey */}
      <section className="mb-20">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-slate-400 dark:text-cyan-500 mb-8">
          My Journey So Far
        </h2>
        <div className="text-slate-600 dark:text-slate-300 leading-relaxed">
          <p>
            I grew up in Chennai, South India, studied Computer Science there, and went on
            to earn a postgraduate diploma in management from IIM Ranchi and a Master&apos;s
            in Computer Science from USC in Los Angeles. I then spent nine years at Amazon —
            working across devices, Alexa, Prime Air, and Amazon Robotics — before joining
            Axon, where I&apos;ve been building cloud infrastructure for vehicle intelligence.
            Now I&apos;m drawn to the intersection of finance and technology, and building
            Horizon made that concrete. The next chapter is New York.
          </p>
        </div>
      </section>

      {/* Projects */}
      <section className="mb-20">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-slate-400 dark:text-cyan-500 mb-8">
          Personal Projects
        </h2>
        <div className="space-y-10">
          <div>
            <div className="flex justify-between items-baseline flex-wrap gap-x-4 mb-0.5">
              <a
                href="https://usehorizon.dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium hover:text-blue-600 dark:text-slate-100 dark:hover:text-cyan-400 transition-colors"
              >
                Horizon ↗
              </a>
              <span className="text-sm text-slate-400 dark:text-cyan-800 font-[family-name:var(--font-geist-mono)]">
                Next.js &middot; AWS &middot; TypeScript &middot; Claude API
              </span>
            </div>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
              AI-powered financial market insights platform covering stocks, options chains,
              economic indicators, bonds, currencies, and commodities. Built on Next.js 16,
              DynamoDB, ECS, and the Anthropic Claude API. Live at usehorizon.dev.
            </p>
          </div>

          <div>
            <div className="flex justify-between items-baseline flex-wrap gap-x-4 mb-0.5">
              <a
                href="https://www.seattle-anti-freeze.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium hover:text-blue-600 dark:text-slate-100 dark:hover:text-cyan-400 transition-colors"
              >
                Seattle Anti-Freeze ↗
              </a>
              <span className="text-sm text-slate-400 dark:text-cyan-800 font-[family-name:var(--font-geist-mono)]">
                Next.js &middot; AWS &middot; TypeScript
              </span>
            </div>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
              Social community platform for Seattle residents to discover local events,
              meetups, and make real-world connections. Full-stack Next.js app with
              authentication, payments, and AWS CDK infrastructure.
            </p>
          </div>

          <div>
            <div className="flex justify-between items-baseline flex-wrap gap-x-4 mb-0.5">
              <a
                href="https://raspberry-pi-motion-detection.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium hover:text-blue-600 dark:text-slate-100 dark:hover:text-cyan-400 transition-colors"
              >
                Home Motion Detector ↗
              </a>
              <span className="text-sm text-slate-400 dark:text-cyan-800 font-[family-name:var(--font-geist-mono)]">
                Python &middot; OpenCV &middot; AWS S3
              </span>
            </div>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
              Real-time motion detection system on Raspberry Pi 5 using OpenCV. Captures images
              and video clips, uploads to AWS S3, and serves a live auto-refreshing web
              dashboard.
            </p>
          </div>
        </div>
      </section>

      {/* Work Experience */}
      <section className="mb-20">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-slate-400 dark:text-cyan-500 mb-8">
          Work Experience
        </h2>
        <div className="space-y-10">
          <div>
            <div className="flex justify-between items-baseline flex-wrap gap-x-4 mb-0.5">
              <span className="font-medium dark:text-slate-100">Senior Software Engineer</span>
              <span className="text-sm text-slate-400 dark:text-slate-500">Sept 2025 – Present</span>
            </div>
            <div className="text-slate-500 dark:text-slate-500 text-sm mb-2">Axon Enterprise, Inc.</div>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
              Designed cloud services that ingest, enrich, and store License Plate Recognition
              data streamed from edge devices. Built a multi-tenant indexing layer for fast
              search at scale and integrated real-time hotlist hit alerting pipelines.
            </p>
          </div>

          <div>
            <div className="flex justify-between items-baseline flex-wrap gap-x-4 mb-0.5">
              <span className="font-medium dark:text-slate-100">Senior Software Engineer</span>
              <span className="text-sm text-slate-400 dark:text-slate-500">May 2022 – Dec 2024</span>
            </div>
            <div className="text-slate-500 dark:text-slate-500 text-sm mb-2">Amazon.com Services LLC</div>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
              Led the cloud data platform for Amazon Robotics, managing the full ML model
              lifecycle — training, dataset curation, continual retraining, deployment, and
              real-time performance monitoring — across fulfillment centers. Led a
              first-of-its-kind A/B testing infrastructure for robotic work cells.
            </p>
          </div>

          <div>
            <div className="flex justify-between items-baseline flex-wrap gap-x-4 mb-0.5">
              <span className="font-medium dark:text-slate-100">Software Development Engineer</span>
              <span className="text-sm text-slate-400 dark:text-slate-500">Jan 2016 – Apr 2022</span>
            </div>
            <div className="text-slate-500 dark:text-slate-500 text-sm mb-2">Amazon.com Services LLC</div>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
              Shipped production software across four orgs: Robotics (Python micro-services for
              robotic orchestration), Prime Air (drone delivery on amazon.com), Alexa
              (third-party developer monetization platform and EU launch in Germany), and Device
              Services (IoT device onboarding via Bluetooth with iOS/Android libraries).
            </p>
          </div>

          <div>
            <div className="flex justify-between items-baseline flex-wrap gap-x-4 mb-0.5">
              <span className="font-medium dark:text-slate-100">Software Engineer</span>
              <span className="text-sm text-slate-400 dark:text-slate-500">May 2011 – May 2012</span>
            </div>
            <div className="text-slate-500 dark:text-slate-500 text-sm mb-2">Global Analytics India Ltd.</div>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
              Built Django web applications for customer-facing financial products.
            </p>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="mb-20">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-slate-400 dark:text-cyan-500 mb-8">
          Education
        </h2>
        <div className="space-y-4">
          <div>
            <div className="font-medium text-sm dark:text-slate-100">Master of Science, Computer Science</div>
            <div className="text-slate-500 dark:text-slate-500 text-sm">
              University of Southern California, Los Angeles
            </div>
          </div>
          <div>
            <div className="font-medium text-sm dark:text-slate-100">Postgraduate Diploma in Management</div>
            <div className="text-slate-500 dark:text-slate-500 text-sm">
              Indian Institute of Management, Ranchi, India
            </div>
          </div>
          <div>
            <div className="font-medium text-sm dark:text-slate-100">
              Bachelor of Engineering, Computer Science &amp; Engineering
            </div>
            <div className="text-slate-500 dark:text-slate-500 text-sm">Anna University, Chennai, India</div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="mb-20">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-slate-400 dark:text-cyan-500 mb-8">
          Skills
        </h2>
        <div className="flex flex-wrap gap-2">
          {[
            "Object-Oriented Programming",
            "Software Design",
            "Distributed Systems",
            "Event-Driven Architecture",
            "ML Operations",
            "Data Platforms",
            "AWS",
            "Java",
            "Python",
            "TypeScript",
            "SQL",
            "DevOps",
            "Next.js",
            "DynamoDB",
            "S3",
            "Athena",
            "Lambda",
            "Step Functions",
            "API Gateway",
            "ECS / Fargate",
          ].map((skill) => (
            <span
              key={skill}
              className="text-xs px-3 py-1 bg-slate-50 border border-slate-200 rounded-full text-slate-600
                dark:bg-slate-900/80 dark:border-cyan-900/50 dark:text-cyan-300"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-100 dark:border-slate-800 pt-8 text-sm text-slate-400 dark:text-slate-600">
        <p>shantanu.r.bal@gmail.com &middot; (408) 609-8216 &middot; Seattle, WA</p>
      </footer>
    </main>
  );
}
