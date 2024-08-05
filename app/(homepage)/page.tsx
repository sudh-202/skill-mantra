// import Camp from "@/components/Camp";
// import Features from "@/components/Features";
// import GetApp from "@/components/GetApp";
// import Guide from "@/components/Guide";
import Companies from "@/components/Companies";
import Courses from "@/components/Courses";
import Hero from "@/components/Hero";
import Partners from "@/components/Partners";
import TestimonialCarousel from "@/components/Testimonials";
import VideoSection from "@/components/VideoSection";



export default function Home() {
  return (
    <>
      <Hero />
      <Courses />
      <Partners />
      <Companies />
      <TestimonialCarousel />
      <VideoSection />
      {/* <Camp />
      <Guide />
      <Features />
      <GetApp /> */}
    </>
  )
}
