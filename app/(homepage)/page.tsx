// import Camp from "@/components/Camp";
// import Features from "@/components/Features";
// import GetApp from "@/components/GetApp";
// import Guide from "@/components/Guide";
import Companies from "@/components/Companies";
import Courses from "@/components/Courses";
import Hero from "@/components/Hero";
import OurTrainer from "@/components/OurTrainer";
import Partners from "@/components/Partners";
import TestimonialCarousel from "@/components/Testimonials";
import YoutubeVideo from "@/components/YoutubeVideo";
import VideoSection from "@/components/VideoSection";
import WhyUs from "@/components/WhyUs";
import DegreeComparison from "@/components/DegreeComparison";
import { FAQS } from "@/components/Faqs";



export default function Home() {
  return (
    <>
      <Hero />
      <Courses />
      <Partners />
      <Companies />
      <TestimonialCarousel />
      <VideoSection />
      <WhyUs />
      <OurTrainer />
      <YoutubeVideo />
      <DegreeComparison />
      <FAQS/>
      {/* <Camp />
      <Guide />
      <Features />
      <GetApp /> */}
    </>
  )
}
