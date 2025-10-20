import { NextPage } from 'next';
import Head from 'next/head';
import { DefaultSeo } from 'next-seo';
import HeroSection from '@/components/sections/HeroSection';
import ServicesOverview from '@/components/sections/ServicesOverview';
import FeaturedProjects from '@/components/sections/FeaturedProjects';
// SocialProof removed (awards/media no longer shown)
// MethodSafety removed per request
import TeamOverview from '@/components/sections/TeamOverview';
import CareersSection from '@/components/sections/CareersSection';
import ContactSection from '@/components/sections/ContactSection';
import Layout from '@/components/layout/Layout';

const HomePage: NextPage = () => {
  return (
    <>
      <DefaultSeo
        title="Bureau Broersma - Constructieve engineering. Rekenkracht + verantwoordelijkheid. Sinds 1956"
        description="Wij berekenen, modelleren en verifiëren constructies — van woningbouw tot industriële en logistieke complexen. Onafhankelijk sinds 1956. 19.000+ projecten gerealiseerd."
        canonical="https://www.bureau-broersma.nl"
        openGraph={{
          type: 'website',
          locale: 'nl_NL',
          url: 'https://www.bureau-broersma.nl',
          siteName: 'Bureau Broersma',
          title: 'Bureau Broersma - Constructieve engineering sinds 1956',
          description: 'Wij berekenen, modelleren en verifiëren constructies — van woningbouw tot industriële en logistieke complexen. Onafhankelijk sinds 1956.',
          images: [
            {
              url: 'https://www.bureau-broersma.nl/images/og-image.jpg',
              width: 1200,
              height: 630,
              alt: 'Bureau Broersma - Structureel ontwerp sinds 1956',
            },
          ],
        }}
        twitter={{
          handle: '@bureaubroersma',
          site: '@bureaubroersma',
          cardType: 'summary_large_image',
        }}
        additionalMetaTags={[
          {
            name: 'keywords',
            content: 'constructieve engineering, structureel ontwerp, constructieberekeningen, Eurocode, BIM, Revit, staalconstructies, betonconstructies, ingenieursbureau, Den Haag, onafhankelijk advies',
          },
          {
            name: 'author',
            content: 'Bureau Broersma',
          },
          {
            name: 'robots',
            content: 'index, follow',
          },
        ]}
      />
      <Head>
        <link rel="canonical" href="https://www.bureau-broersma.nl" />
        <link rel="alternate" hrefLang="nl" href="https://www.bureau-broersma.nl" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#1a365d" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <Layout>
        <HeroSection />
        <ServicesOverview />
        <FeaturedProjects />
        {/* Method & Safety removed per request */}
        <TeamOverview />
        <CareersSection />
        <ContactSection />
      </Layout>
    </>
  );
};

export default HomePage;
