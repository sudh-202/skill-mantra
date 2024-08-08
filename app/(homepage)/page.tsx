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
import TrustedBrands from "@/components/TrustedBrands";
import TargetSegment from "@/components/TargetSegment";
import Scope from "@/components/scope";



export default function Home() {
  return (
    <>
      <Hero />
      <Courses />
      <Partners />
      <Companies />
      <TestimonialCarousel />
      <TrustedBrands/>
      <WhyUs />
      <VideoSection />
      <TargetSegment/>
      <OurTrainer />
      <YoutubeVideo />
      <DegreeComparison />
      <Scope/>
      <FAQS/>
    </>
  )
}
