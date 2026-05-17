import type { FestivalPage } from "@/data/festival";

export function buildStructuredData(festival: FestivalPage, canonicalUrl: string) {
  return [
    {
      "@context": "https://schema.org",
      "@type": "MusicEvent",
      name: festival.name,
      description: festival.seoDescription,
      startDate: festival.startDate,
      endDate: festival.endDate,
      eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
      eventStatus: "https://schema.org/EventScheduled",
      location: {
        "@type": "Place",
        name: festival.venue.name,
        address: {
          "@type": "PostalAddress",
          addressLocality: festival.city,
          addressRegion: festival.state,
          addressCountry: "BR"
        }
      },
      organizer: {
        "@type": "Organization",
        name: festival.venue.name,
        url: festival.venue.url
      },
      offers: {
        "@type": "Offer",
        url: festival.links.tickets,
        availability: "https://schema.org/InStock"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: festival.venue.name,
      description: festival.venue.description,
      address: {
        "@type": "PostalAddress",
        addressLocality: festival.city,
        addressRegion: festival.state,
        addressCountry: "BR"
      },
      url: festival.venue.url,
      sameAs: [festival.links.instagram, festival.links.linktree]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: festival.faq.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer
        }
      }))
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: festival.name,
          item: canonicalUrl
        }
      ]
    }
  ];
}
