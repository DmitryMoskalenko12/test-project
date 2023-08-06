import Layout from "@/components/layout/layout";
import Slider from "@/components/slider/slider";
import About from "@/components/about/about";
import Task from "@/components/task/task";
import Projects from "@/components/projects/projects";
import Contact from "@/components/contact/contact";
import Footer from "@/components/footer/footer";

export default function HomePage() {
  return (
    <>
     <Slider/>
     <About/>
     <Task/>
     <Projects/>
     <Contact/>
     <Footer/> 
    </>
  )
}
