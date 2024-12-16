import Image from "next/image";
import Header from "./components/header";
import Hero from "./Hero/page";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Footer />
    </div>
  );
}
