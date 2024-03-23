import Footer from "./elements/Footer";
import Hero from "./elements/Hero";
import PersonPhoto from "./elements/PersonPhoto";

export default function Page() {
  return (
    <main className="h-max w-full bg-black">
      <Hero />
      <PersonPhoto/>
      <Footer/>
    </main>
  );
}
