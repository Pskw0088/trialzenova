import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Landing from "./pages/Landing"
import Health from "./pages/Health"
import Education from "./pages/Education"
import Digital from "./pages/Digital"
import Contact from "./pages/Contact"
import CourseDetails from "./pages/CourseDetails"
import CourseAccess from "./pages/CourseAccess"
import EducationCourses from "./pages/EducationCourses"
import EducationCourseDetails from "./pages/EducationCourseDetails"
import PrivacyPolicy from "./pages/LegalPolicy"
import Terms from "./pages/Terms"
import LegalCookies from "./pages/LegalCookies"

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#050b1a] text-white">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/health" element={<Health />} />
          <Route path="/education" element={<Education />} />
          <Route path="/digital" element={<Digital />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/course-access/:id" element={<CourseAccess />} />
          <Route path="/education/courses" element={<EducationCourses />} />
          <Route path="/education/course/:id" element={<EducationCourseDetails />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/cookie-policy" element={<LegalCookies />} />

          {/* ✅ ADD THIS LINE */}
          <Route path="/course/:id" element={<CourseDetails />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}
