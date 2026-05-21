import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Cursor } from "@/components/site/Cursor";
import { Grain } from "@/components/site/Grain";
import { Marquee } from "@/components/site/Marquee";
import { HeroArt } from "@/components/site/HeroArt";
import { AboutTeaser } from "@/components/site/AboutTeaser";
import { SelectedWorkTeaser } from "@/components/site/SelectedWorkTeaser";
import { ContactTeaser } from "@/components/site/ContactTeaser";
import { HomeScrollAtmosphere } from "@/components/site/HomeScrollAtmosphere";

export default function Home() {
  return (
    <>
      <Grain />
      <Cursor />
      <Nav />
      <HomeScrollAtmosphere />
      <main className="page">
        <HeroArt />
        <Marquee
          words={["Research", "Automation", "Systems", "Web3", "Algo Trading", "Writing", "AI Agents"]}
        />
        <AboutTeaser />
        <SelectedWorkTeaser />
        <ContactTeaser />
      </main>
      <Footer />
    </>
  );
}
