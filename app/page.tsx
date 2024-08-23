import Companies from "@/components/Home/Companies";
import Courses from "@/components/Home/Courses";
import Hero from "@/components/Home/Hero";
import OurTrainer from "@/components/Home/OurTrainer";
import Partners from "@/components/Home/Partners";
import TestimonialCarousel from "@/components/Home/Testimonials";
import YoutubeVideo from "@/components/Home/YoutubeVideo";
import VideoSection from "@/components/Home/VideoSection";
import WhyUs from "@/components/Home/WhyUs";
import DegreeComparison from "@/components/Home/DegreeComparison";
import { FAQS } from "@/components/Home/Faqs";
import TrustedBrands from "@/components/Home/TrustedBrands";
import TargetSegment from "@/components/Home/TargetSegment";
import Scope from "@/components/Home/scope";



export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <VideoSection />
      <TargetSegment/>
      <TrustedBrands/>
      <Courses />
      <Partners />
      <Companies /> 
      <TestimonialCarousel />
      <WhyUs />
      <OurTrainer />
      <YoutubeVideo />
      <DegreeComparison />
      <Scope/>
      <FAQS/>
    </main>
  )
}
