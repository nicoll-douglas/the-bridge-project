import { Hero, Footer, Header, MarketingSection } from "./_components/homepage";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <MarketingSection id="section-2" hasNext="#section-3" reverse />
      <MarketingSection id="section-3" hasNext="#section-4" />
      <MarketingSection id="section-4" reverse />
      <Footer />
    </>
  );
}
