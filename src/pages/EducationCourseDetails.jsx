import { useParams, Link } from "react-router-dom"

/* 🔥 LOAD RAZORPAY SDK */
function loadRazorpayScript() {
  return new Promise((resolve) => {
    if (window.Razorpay) {
      resolve(true)
      return
    }

    const script = document.createElement("script")
    script.src = "https://checkout.razorpay.com/v1/checkout.js"
    script.async = true
    script.onload = () => resolve(true)
    script.onerror = () => resolve(false)
    document.body.appendChild(script)
  })
}

/* 🔥 COURSE DATA + DRIVE LINKS */
const courseData = {
  "html-css": {
    title: "HTML & CSS",
    description: "Build modern responsive websites from scratch.",
    duration: "4 Weeks",
    drive: "https://drive.google.com/drive/folders/HTML_CSS_LINK",
    modules: [
      "HTML fundamentals",
      "CSS styling & layouts",
      "Flexbox & Grid",
      "Responsive design",
      "Website project",
    ],
  },

  javascript: {
    title: "JavaScript",
    description: "Master core JavaScript, DOM & ES6+ concepts.",
    duration: "6 Weeks",
    drive: "https://drive.google.com/drive/folders/JAVASCRIPT_LINK",
    modules: [
      "JavaScript basics",
      "Functions & scope",
      "DOM manipulation",
      "ES6+ features",
      "Mini projects",
    ],
  },

  react: {
    title: "React.js",
    description: "Build fast frontend apps using React.",
    duration: "6 Weeks",
    drive: "https://drive.google.com/drive/folders/REACT_LINK",
    modules: [
      "Components & JSX",
      "Props & State",
      "Hooks",
      "Routing",
      "API integration",
    ],
  },

  nextjs: {
    title: "Next.js",
    description: "Production-ready React apps with Next.js.",
    duration: "5 Weeks",
    drive: "https://drive.google.com/drive/folders/NEXTJS_LINK",
    modules: [
      "Routing",
      "SSR & SEO",
      "API routes",
      "Deployment",
    ],
  },

  nodejs: {
    title: "Node.js",
    description: "Backend development using JavaScript.",
    duration: "5 Weeks",
    drive: "https://drive.google.com/drive/folders/NODE_LINK",
    modules: [
      "Node basics",
      "Express APIs",
      "Async programming",
    ],
  },

  python: {
    title: "Python",
    description: "Automation, scripting & logic building.",
    duration: "6 Weeks",
    drive: "https://drive.google.com/drive/folders/PYTHON_LINK",
    modules: [
      "Python basics",
      "Loops & conditions",
      "Functions",
      "Mini projects",
    ],
  },

  java: {
    title: "Java",
    description: "OOPs & backend foundations.",
    duration: "6 Weeks",
    drive: "https://drive.google.com/drive/folders/JAVA_LINK",
    modules: [
      "Java basics",
      "OOP concepts",
      "Collections",
      "Mini project",
    ],
  },

  cpp: {
    title: "C++",
    description: "DSA & competitive programming.",
    duration: "6 Weeks",
    drive: "https://drive.google.com/drive/folders/CPP_LINK",
    modules: [
      "C++ fundamentals",
      "STL",
      "DSA basics",
      "Problem solving",
    ],
  },

  git: {
    title: "Git & GitHub",
    description: "Version control like a pro.",
    duration: "2 Weeks",
    drive: "https://drive.google.com/drive/folders/GIT_LINK",
    modules: [
      "Git basics",
      "GitHub workflow",
      "Collaboration",
    ],
  },

  photoshop: {
    title: "Photoshop",
    description: "Design & photo editing.",
    duration: "3 Weeks",
    drive: "https://drive.google.com/drive/folders/PHOTOSHOP_LINK",
    modules: [
      "Tools & workspace",
      "Photo editing",
      "Design basics",
    ],
  },

  premiere: {
    title: "Premiere Pro",
    description: "Professional video editing.",
    duration: "4 Weeks",
    drive: "https://drive.google.com/drive/folders/PREMIERE_LINK",
    modules: [
      "Editing basics",
      "Transitions",
      "Color grading",
    ],
  },

  aftereffects: {
    title: "After Effects",
    description: "Motion graphics & VFX.",
    duration: "4 Weeks",
    drive: "https://drive.google.com/drive/folders/AFTEREFFECTS_LINK",
    modules: [
      "Motion basics",
      "Text animations",
      "Visual effects",
    ],
  },
}

export default function EducationCourseDetails() {
  const { id } = useParams()
  const course = courseData[id]

  if (!course) {
    return <div className="p-10">Course not found</div>
  }

  /* 🔥 PAYMENT HANDLER */
  const handlePayment = async () => {
    const loaded = await loadRazorpayScript()
    if (!loaded) {
      alert("Razorpay SDK failed to load")
      return
    }

    const options = {
      key: import.meta.env.VITE_RAZORPAY_KEY,
      amount: 1999 * 100,
      currency: "INR",
      name: "Zenova Education",
      description: course.title,

      handler: function () {
        alert("Payment Successful 🎉 Redirecting to course...")
        window.location.href = course.drive
      },

      theme: {
        color: "#2563eb",
      },
    }

    const rzp = new window.Razorpay(options)
    rzp.open()
  }

  return (
    <div className="min-h-screen bg-white text-zinc-900 px-6 py-14">
      <div className="mx-auto max-w-4xl">

        <Link to="/education/courses" className="text-blue-600 font-semibold hover:underline">
          ← Back to Courses
        </Link>

        <h1 className="mt-6 text-4xl font-black">{course.title}</h1>
        <p className="mt-3 text-zinc-600">{course.description}</p>

        <div className="mt-5 rounded-xl bg-blue-50 border border-blue-200 px-5 py-3 text-blue-700">
          🎉 <b>Limited Offer:</b> Full Course at <b>₹1999 Only</b>
        </div>

        <div className="mt-6 flex gap-4 text-sm">
          <span className="rounded-full bg-zinc-100 px-4 py-1">
            Level: Beginner → Advanced
          </span>
          <span className="rounded-full bg-zinc-100 px-4 py-1">
            Duration: {course.duration}
          </span>
        </div>

        <p className="mt-6 text-3xl font-extrabold text-blue-600">
          ₹1999 <span className="ml-2 text-base text-zinc-400 line-through">₹4999</span>
        </p>

        <h2 className="mt-8 text-xl font-bold">Course Content</h2>
        <ul className="mt-4 space-y-2 text-zinc-700">
          {course.modules.map((item, i) => (
            <li key={i}>📘 {item}</li>
          ))}
        </ul>

        <button
          onClick={handlePayment}
          className="mt-10 w-full rounded-xl bg-blue-600 px-6 py-4 text-white font-bold hover:bg-blue-700 transition"
        >
          Enroll & Pay ₹1999
        </button>

      </div>
    </div>
  )
}