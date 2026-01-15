import React from "react";
import { Helmet } from "react-helmet";

const HomepageHelmet = () => {
  return (
    <Helmet>
      {/* ===== PRIMARY SEO TAGS ===== */}
      <title>
        GoTravio – Cab Booking & Car Rental App in India | Airport & Outstation Taxis
      </title>

      <meta
        name="description"
        content="Book local cabs, airport taxis, and outstation car rentals across India with GoTravio. Safe drivers, affordable pricing, and 24x7 taxi booking."
      />

      <meta name="robots" content="index, follow" />
      <meta name="author" content="GoTravio" />

      {/* ===== CANONICAL ===== */}
      <link rel="canonical" href="https://gotravio.in/" />

      {/* ===== OPEN GRAPH (FB / WHATSAPP / LINKEDIN) ===== */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="GoTravio" />
      <meta
        property="og:title"
        content="GoTravio – Cab Booking & Car Rental Services in India"
      />
      <meta
        property="og:description"
        content="Affordable cab booking and car rental services across India. Book local, airport, and outstation taxis with GoTravio."
      />
      <meta property="og:url" content="https://gotravio.in/" />
      <meta
        property="og:image"
        content="https://gotravio.in/assets/og-banner.jpg"
      />

      {/* ===== TWITTER CARD ===== */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content="GoTravio – Cab Booking App in India"
      />
      <meta
        name="twitter:description"
        content="Book safe and affordable cabs for local, airport, and outstation travel with GoTravio."
      />
      <meta
        name="twitter:image"
        content="https://gotravio.in/assets/og-banner.jpg"
      />

      {/* ===== STRUCTURED DATA (VERY IMPORTANT) ===== */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "TaxiService",
          name: "GoTravio",
          url: "https://gotravio.in/",
          logo: "https://gotravio.in/favicon.ico",
          description:
            "GoTravio provides cab booking and car rental services across India including local, airport and outstation travel.",
          areaServed: {
            "@type": "Country",
            name: "India",
          },
          serviceType: [
            "Cab Booking",
            "Taxi Service",
            "Airport Taxi",
            "Outstation Cab",
            "Car Rental",
          ],
        })}
      </script>

      {/* ===== FAVICON ===== */}
      <link rel="icon" href="/favicon.ico" />
    </Helmet>
  );
};

export default HomepageHelmet;
