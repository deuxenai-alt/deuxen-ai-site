import { Helmet } from "react-helmet-async";

interface SEOHeadProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
}

export function SEOHead({
  title = "Deuxen AI Automations — Your AI Receptionist, Always On",
  description = "AI voice agents that answer every call, book appointments, and never put customers on hold. 24/7 coverage for dental clinics, healthcare, salons, real estate, restaurants, and home services.",
  canonical = "https://deuxen.co.uk",
  ogImage = "https://deuxen.co.uk/og-image.jpg",
}: SEOHeadProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Deuxen AI Automations",
    url: "https://deuxen.co.uk",
    logo: "https://deuxen.co.uk/logo.svg",
    description:
      "AI voice agents and receptionists that answer calls, book appointments, and automate customer interactions.",
    sameAs: [
      "https://www.linkedin.com/company/deuxen-ai",
      "https://twitter.com/deuxen_ai",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Service",
      email: "manojvenkata1999@gmail.com",
    },
    areaServed: ["GB", "UK"],
    availableLanguage: "en",
  };

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="canonical" href={canonical} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonical} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Keywords */}
      <meta
        name="keywords"
        content="AI receptionist, voice agent, automated calls, appointment booking, dental software, healthcare software, business automation, customer service AI"
      />

      {/* Additional Meta Tags */}
      <meta name="author" content="Deuxen AI Automations" />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta httpEquiv="x-ua-compatible" content="IE=edge" />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>

      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
    </Helmet>
  );
}
