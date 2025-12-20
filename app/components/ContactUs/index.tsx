"use client";

import SocialLinks from "./SocialLinks";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";
import { MessageSquare } from "lucide-react";

export default function ContactUs() {
  return (
    <section 
      id="contact" 
      className="px-4 sm:px-6 py-12 sm:py-16"
      aria-labelledby="contact-heading"
    >
      {/* SEO Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Digital Dreamers Den",
            "alternateName": "D3 Community",
            "url": "https://d3communityofficial.github.io/community-website",
            "logo": "https://d3communityofficial.github.io/community-website/logo.png",
            "description": "A vibrant tech community that brings together AI Full-Stack Developers to build the future. We host events, workshops, and networking opportunities.",
            "foundingDate": "2023",
            "foundingLocation": {
              "@type": "Place",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Chennai",
                "addressCountry": "IN"
              }
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "contactType": "General Inquiries",
              "email": "d3communityofficial@gmail.com",
              "availableLanguage": "English"
            },
            "sameAs": [
              "https://d3community.in/linkedin",
              "https://d3community.in/instagram",
              "https://d3community.in/youtube",
              "https://d3community.in/x",
              "https://github.com/d3communityofficial"
            ],
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Chennai",
              "addressCountry": "IN"
            }
          })
        }}
      />

      {/* Header */}
      <div className="max-w-7xl mx-auto mb-8 sm:mb-12 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-dark-card border border-dark-border mb-4">
          <MessageSquare className="w-4 h-4 text-dark-primary" />
          <span className="text-sm font-medium text-dark-muted">Get In Touch</span>
        </div>
        <h2 
          id="contact-heading"
          className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4"
          style={{
            background: 'var(--gradient-hero)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}
        >
          Connect With D3 Community
        </h2>
        <p className="text-dark-muted text-base sm:text-lg max-w-2xl mx-auto">
          Join our vibrant community of AI Full-Stack Developers. Reach out through your preferred channel or send us a message.
        </p>
      </div>

      {/* Bento Grid Layout */}
      <div className="max-w-7xl mx-auto">
        {/* Mobile: Stacked Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
          {/* Social Links - Full width on mobile, spans 2 columns on desktop */}
          <div className="lg:col-span-2">
            <SocialLinks />
          </div>

          {/* Contact Info - Full width on mobile, 1 column on desktop */}
          <div className="lg:col-span-1">
            <ContactInfo />
          </div>

          {/* Contact Form - Full width on all screens */}
          <div className="lg:col-span-3">
            <ContactForm />
          </div>
        </div>
      </div>

      {/* Additional Info */}
      <div className="max-w-7xl mx-auto mt-8 sm:mt-12">
        <div className="bg-dark-card rounded-bento p-6 border border-dark-border text-center">
          <p className="text-dark-muted text-sm">
            <span className="font-semibold text-dark-text">Looking for partnerships or sponsorships?</span>
            {" "}Email us at{" "}
            <a 
              href="mailto:d3communityofficial@gmail.com" 
              className="text-dark-primary hover:underline font-medium"
            >
              d3communityofficial@gmail.com
            </a>
            {" "}with the subject line "Partnership Inquiry"
          </p>
        </div>
      </div>
    </section>
  );
}
