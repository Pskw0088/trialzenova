import { Link } from "react-router-dom"

const courses = [
  { id: "html-css", title: "HTML & CSS", desc: "Build modern responsive websites" },
  { id: "javascript", title: "JavaScript", desc: "Core JS, DOM, ES6+ concepts" },
  { id: "react", title: "React.js", desc: "Build fast frontend apps" },
  { id: "nextjs", title: "Next.js", desc: "Production-ready React apps" },
  { id: "nodejs", title: "Node.js", desc: "Backend with JavaScript" },
  { id: "sql", title: "SQL & Databases", desc: "MySQL, PostgreSQL fundamentals" },
  { id: "python", title: "Python", desc: "Automation, scripting & logic" },
  { id: "java", title: "Java", desc: "OOPs & backend foundations" },
  { id: "cpp", title: "C++", desc: "DSA & competitive programming" },
  { id: "git-github", title: "Git & GitHub", desc: "Version control like a pro" },
  { id: "photoshop", title: "Photoshop", desc: "Design & photo editing" },
  { id: "premiere-pro", title: "Premiere Pro", desc: "Professional video editing" },
  { id: "after-effects", title: "After Effects", desc: "Motion graphics & VFX" },
]

export default function EducationCourses() {
  return (
    <div className="min-h-screen bg-white text-zinc-900 px-6 py-14">
      <div className="mx-auto max-w-7xl">

        <Link to="/education" className="text-blue-600 font-semibold hover:underline">
          ← Back to Education
        </Link>

        <h1 className="mt-6 text-4xl md:text-5xl font-black">
          Learn <span className="text-blue-600">Skills That Matter</span>
        </h1>

        <p className="mt-3 max-w-2xl text-zinc-600">
          Industry-relevant courses designed to help you build real-world skills and careers.
        </p>

        {/* 🔥 OFFER (SUBTLE – DOES NOT AFFECT UI) */}
        <div className="mt-6 rounded-xl border border-blue-200 bg-blue-50 px-4 py-3 text-sm text-blue-700">
          🎉 <b>Limited Offer:</b> All Courses at <b>₹1999 Only</b> (Beginner → Advanced)
        </div>

        {/* COURSES */}
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {courses.map((course) => (
            <div
              key={course.id}
              /* ✅ OLD CARD STYLE – SAME AS BEFORE */
              className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm"
            >
              <h2 className="text-lg font-bold">{course.title}</h2>
              <p className="mt-2 text-sm text-zinc-600">{course.desc}</p>

              {/* LEVEL (SMALL, CLEAN) */}
              <span className="mt-3 inline-block rounded-full bg-zinc-100 px-3 py-1 text-xs">
                Beginner → Advanced
              </span>

              {/* PRICE (COMPACT) */}
              <p className="mt-3 text-sm font-bold text-blue-600">
                ₹1999 <span className="ml-1 text-xs text-zinc-400 line-through">₹4999</span>
              </p>

              {/* BUTTON (UNCHANGED STYLE) */}
              <Link
                to={`/education/course/${course.id}`}
                className="mt-4 inline-flex w-full items-center justify-center rounded-xl bg-blue-600 px-4 py-3 text-sm font-bold text-white hover:bg-blue-700 transition"
              >
                Explore Course →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}