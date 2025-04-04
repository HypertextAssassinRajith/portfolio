import About from "./components/about";
import Contact from "./components/contact";
import RecentContributions from "./components/contribution";
import ContactForm from "./components/form";
import ImageGallery from "./components/gallery";
import Header from "./components/header";
import Info from "./components/info";
import Qualification from "./components/qualification";
import Services from "./components/service";
import Skill from "./components/skill";

export default function Home() {
  return (
    <>
      <Header />
      <Info />
      <About />
      <Skill />
      <Qualification />
      <Services />
      <RecentContributions />
      <Contact />
      <ImageGallery />
      <ContactForm />
    </>
  );
}
