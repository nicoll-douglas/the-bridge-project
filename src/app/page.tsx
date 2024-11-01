import { Hero, Footer, Header, MarketingSection } from "./_components/homepage";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <MarketingSection
        id="section-2"
        readMore={{ scrollsTo: "#section-3" }}
        reverse
      />
      <MarketingSection id="section-3" readMore={{ scrollsTo: "#section-4" }} />
      <MarketingSection id="section-4" reverse />
      <Footer />
    </>
  );
}
