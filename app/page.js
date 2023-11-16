// import Presentation from "./ui/presentation.jsx/presentation";
// import About from "./ui/about/about";
// import Students from "./ui/students/students";
// import Footer from "./ui/footer/footer";
import dynamic from "next/dynamic";
const Presentation = dynamic(() => import("./ui/presentation.jsx/presentation"));
const About = dynamic(() => import("./ui/about/about"));
const Students = dynamic(() => import("./ui/students/students"));
const Footer = dynamic(() => import("./ui/footer/footer"));

export default function Home() {
  return (
    <>
      <Presentation />
      <About />
      <Students />
      <Footer />
    </>
  )
}