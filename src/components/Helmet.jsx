import React from "react";
import { Helmet } from "react-helmet";

const HomepageHelmet = () => {
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>
        GoTravio – Reliable Car Rental & Cab Booking Services in India
      </title>

      <meta
        name="description"
        content="GoTravio provides reliable car rental and cab booking services with professional drivers. Book 4, 5, 6, or 7-seater vehicles for city rides, airport transfers, business travel, and long-distance journeys."
      />

      <meta
        name="keywords"
        content="car rental, cab booking, taxi service, airport transfer, outstation cab, chauffeur service, car hire, GoTravio"
      />

      <meta name="author" content="GoTravio" />
      <meta name="robots" content="index, follow" />

      {/* Open Graph / Facebook / WhatsApp */}
      <meta
        property="og:title"
        content="GoTravio – Reliable Car Rental & Cab Booking Services"
      />
      <meta
        property="og:description"
        content="Book comfortable and affordable car rentals with GoTravio. Choose from 4, 5, 6, or 7-seater vehicles for all travel needs."
      />
      <meta
        property="og:image"
        content="https://gotravio.in/assets/og-banner.jpg"
      />
      <meta property="og:url" content="https://gotravio.in/" />
      <meta property="og:type" content="website" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content="GoTravio – Reliable Car Rental & Cab Booking"
      />
      <meta
        name="twitter:description"
        content="Affordable car rental and cab booking services for city, airport, and outstation travel with GoTravio."
      />
      <meta
        name="twitter:image"
        content="https://gotravio.in/assets/og-banner.jpg"
      />

      {/* Canonical URL */}
      <link rel="canonical" href="https://gotravio.in/" />

      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
    </Helmet>
  );
};

export default HomepageHelmet;
