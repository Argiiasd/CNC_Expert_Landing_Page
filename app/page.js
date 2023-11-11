import Presentation from "./ui/presentation.jsx/presentation";
import About from "./ui/about/about";
import Students from "./ui/students/students";
import Footer from "./ui/footer/footer";

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
