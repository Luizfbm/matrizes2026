const shared = {
  startDate: "2026-07-11",
  endDate: "2026-07-18",
  city: "Itaúnas",
  state: "ES",
  lineup: [
    "Ó do Forró",
    "Trio Xamego",
    "Trio Sabiá",
    "Os 3 do Nordeste",
    "Diana do Sertão",
    "Forró Caçana",
    "D2 in Trio",
    "Alvorada",
    "Nicolas Krassik",
    "Diego Oliveira",
    "Quininho de Valente",
    "Pipoca Show",
    "Nando do Acordeon",
    "Enok Virgulino",
    "Amanda Requião",
    "Chiquinho Alves",
    "Coisa de Zé",
    "Potiguá",
    "Barbara Greco",
    "Isamara",
    "Forrofia"
  ],
  links: {
    tickets: "https://www.sympla.com.br/evento/festival-matrizes-2026/3174950",
    instagram: "https://www.instagram.com/buracodotatuitaunas/",
    facebook: "https://www.facebook.com/tatuitaunas",
    spotify:
      "https://open.spotify.com/user/313insbwhhsnni6e7yw4asa3b37m?si=7e113b905c024643&nd=1&dlsi=dbc5fe3871e542df",
    youtube: "https://www.youtube.com/@buracodotatuitaunas",
    tiktok: "https://www.tiktok.com/@buracodotatuitaunas",
    maps:
      "https://www.google.com/maps/search/?api=1&query=Buraco%20do%20Tatu%20Ita%C3%BAnas%20Concei%C3%A7%C3%A3o%20da%20Barra%20ES",
    tfdRules: "https://drive.google.com/file/d/1PV4dAl6pNG3RllKo8Yl6BBGdSOoSDOi2/view",
    tfdAnnouncementEn: "https://drive.google.com/file/d/1xGBrjWa9JknOcBhTtW2WNs_X5G9SUB9k/view",
    tfdRegistration: "https://docs.google.com/forms/d/e/1FAIpQLSdB9kKPBZ_qslFrkmPUBo6oWyEjmKeUHjZthb2oGTKitqbm0A/viewform",
    linktree: "https://linktr.ee/buracodotatuitaunas"
  }
} as const;

export const festivalPages = {
  pt: {
    ...shared,
    locale: "pt-BR",
    languageName: "Português",
    alternateLabel: "English",
    alternatePath: "/en/",
    canonicalPath: "/",
    name: "Festival Matrizes 2026",
    officialSiteLabel: "Site oficial do Festival Matrizes",
    seoTitle: "Festival Matrizes 2026 em Itaúnas | Buraco do Tatu",
    seoDescription:
      "Site oficial do Festival Matrizes: forró em Itaúnas de 11 a 18 de julho de 2026 no Buraco do Tatu, com shows, dança, TFD e cultura.",
    displayDate: "11 a 18 de julho de 2026",
    venue: {
      name: "Buraco do Tatu",
      description:
        "Espaço cultural rústico e vibrante, conhecido como coração do forró pé de serra no Espírito Santo e ponto de encontro do público forrozeiro do Brasil e do exterior.",
      address: "Itaúnas, Conceição da Barra - ES",
      url: "https://www.instagram.com/buracodotatuitaunas/"
    },
    hero: {
      eyebrow: "Site oficial do Festival Matrizes",
      title: "Festival Matrizes 2026 em Itaúnas",
      lead:
        "Um dos maiores encontros dedicados à preservação e disseminação das Matrizes Tradicionais do Forró, no Buraco do Tatu, em Itaúnas.",
      primaryCta: "Ver programação",
      secondaryCta: "Garantir ingresso",
      facts: [
        { label: "Quando", value: "11 a 18 de julho de 2026" },
        { label: "Onde", value: "Buraco do Tatu, Itaúnas - ES" },
        { label: "Estilo", value: "Forró, dança e cultura" }
      ]
    },
    quickAnswer:
      "O Festival Matrizes 2026 acontece de 11 a 18 de julho no Buraco do Tatu, em Itaúnas, reunindo forró pé de serra, shows, dança, DJs, TFD e encontros culturais.",
    searchAnswer:
      "Para quem busca forró em Itaúnas, o Matrizes é o festival oficial do Buraco do Tatu dedicado às Matrizes Tradicionais do Forró.",
    sections: {
      quickEyebrow: "Resposta rápida",
      quickTitle: "O que é o Matrizes 2026?",
      lineupEyebrow: "Line-up e programação",
      lineupTitle: "Forró de 11 a 18 de julho",
      programNote:
        "A programação completa por dia pode ser atualizada conforme novas confirmações oficiais do festival.",
      ticketCta: "Garantir ingresso",
      tfdTitle: "Torneio de Forró Dança",
      tfdText:
        "O TFD integra o Festival Matrizes como espaço de valorização da dança, dos grupos e da cultura forrozeira que encontra em Itaúnas uma de suas pistas mais importantes.",
      tfdLinksLabel: "Links oficiais do TFD",
      tfdLinks: [
        { label: "Inscrições para o TFD", href: shared.links.tfdRegistration },
        { label: "Regulamento do torneio", href: shared.links.tfdRules },
        { label: "Anúncio oficial em inglês", href: shared.links.tfdAnnouncementEn }
      ],
      planEyebrow: "Planeje sua ida",
      planTitle: "Programação, ingressos e informações oficiais",
      infoCards: [
        {
          title: "Programação",
          text: "Veja os artistas confirmados, datas do festival e atualizações oficiais da programação do Festival Matrizes 2026 em Itaúnas.",
          icon: "party",
          href: "#programacao",
          linkLabel: "Ver programação e artistas do Festival Matrizes 2026"
        },
        {
          title: "Ingressos",
          text: "Garanta seu ingresso para o Festival Matrizes 2026 pelo canal oficial de venda na Sympla.",
          icon: "ticket",
          href: shared.links.tickets,
          linkLabel: "Comprar ingresso oficial do Festival Matrizes 2026 na Sympla"
        },
        {
          title: "Hospedagem em Itaúnas",
          text: "Reserve hospedagem com antecedência: julho é alta procura para forró, festivais e turismo na vila de Itaúnas.",
          icon: "location",
          href: shared.links.linktree,
          linkLabel: "Ver canais oficiais com informações para planejar hospedagem em Itaúnas"
        },
        {
          title: "Excursões e chegada",
          text: "Acompanhe os canais oficiais para informações sobre excursões, deslocamento e chegada a Itaúnas durante o festival.",
          icon: "location",
          href: shared.links.instagram,
          linkLabel: "Acompanhar informações oficiais sobre excursões e chegada a Itaúnas"
        },
        {
          title: "@buracodotatuitaunas",
          text: "Acompanhe novidades, chamadas e conteúdos oficiais do Buraco do Tatu.",
          icon: "instagram",
          href: shared.links.instagram,
          linkLabel: "Instagram oficial do Buraco do Tatu"
        },
        {
          title: "Facebook",
          text: "Acompanhe eventos e novidades oficiais no Facebook.",
          icon: "facebook",
          href: shared.links.facebook,
          linkLabel: "Facebook oficial do Buraco do Tatu"
        },
        {
          title: "Spotify",
          text: "Ouça seleções e conteúdos musicais ligados ao Buraco do Tatu.",
          icon: "spotify",
          href: shared.links.spotify,
          linkLabel: "Spotify oficial do Buraco do Tatu"
        },
        {
          title: "YouTube",
          text: "Veja vídeos e registros oficiais do Buraco do Tatu.",
          icon: "youtube",
          href: shared.links.youtube,
          linkLabel: "YouTube oficial do Buraco do Tatu"
        },
        {
          title: "TikTok",
          text: "Acompanhe cortes, chamadas e bastidores em vídeo curto.",
          icon: "tiktok",
          href: shared.links.tiktok,
          linkLabel: "TikTok oficial do Buraco do Tatu"
        },
        {
          title: "Como chegar",
          text: "O Festival Matrizes acontece no Buraco do Tatu, em Itaúnas, Conceição da Barra, Espírito Santo.",
          icon: "location",
          href: shared.links.maps,
          linkLabel: "Abrir localização do Buraco do Tatu em Itaúnas no Google Maps"
        }
      ],
      venueEyebrow: "A casa",
      venueTitle: "Buraco do Tatu em Itaúnas",
      venueText:
        "Com 30 anos de história, o Buraco do Tatu é um espaço cultural rústico e vibrante, símbolo da cultura popular capixaba e ponto de encontro do público forrozeiro do Brasil e do exterior.",
      itaunasEyebrow: "Destino",
      itaunasTitle: "Itaúnas, forró, dunas e julho",
      itaunasText:
        "Itaúnas é uma vila de Conceição da Barra, no Espírito Santo, conhecida pelas dunas, praia, natureza e pela força do forró. Em julho, a vila recebe forrozeiros de muitos lugares do Brasil.",
      faqEyebrow: "Perguntas frequentes",
      faqTitle: "Matrizes 2026 em Itaúnas",
      finalTitle: "Viva o Matrizes no Buraco do Tatu",
      finalText: "Veja a programação oficial e garanta seu ingresso para Itaúnas.",
      finalCta: "Garantir ingresso"
    },
    images: {
      heroSrc: "/images/matrizes-drive/festival-matrizes-2026-buraco-do-tatu-itaunas-casa-cheia.jpg",
      lineupSrc: "/images/matrizes-drive/programacao-festival-matrizes-2026-palco-forro-itaunas.jpg",
      danceSrc: "/images/matrizes-drive/danca-forro-festival-matrizes-2026-itaunas.jpg",
      venueSrc: "/images/matrizes-drive/forro-em-itaunas-festival-matrizes-2026-sanfona.jpg",
      detailSrc: "/images/matrizes-drive/detalhe-copo-festival-matrizes-2026-buraco-do-tatu.jpg",
      heroAlt: "Casa cheia no Festival Matrizes 2026 no Buraco do Tatu em Itaúnas",
      lineupAlt: "Palco do Festival Matrizes 2026 com show de forró em Itaúnas",
      danceAlt: "Casal dançando forró no Festival Matrizes 2026 em Itaúnas",
      venueAlt: "Show de forró no palco do Festival Matrizes no Buraco do Tatu em Itaúnas",
      tfdImages: [
        {
          src: "/images/matrizes-drive/danca-forro-festival-matrizes-2026-itaunas.jpg",
          alt: "Casal dançando forró durante o Festival Matrizes 2026 em Itaúnas"
        },
        {
          src: "/images/matrizes-drive/torneio-forro-danca-festival-matrizes-2026-itaunas.jpg",
          alt: "Casal competindo no Torneio de Forró Dança do Festival Matrizes em Itaúnas"
        }
      ]
    },
    faq: [
      {
        question: "Quando acontece o Festival Matrizes 2026?",
        answer: "O Festival Matrizes 2026 acontece de 11 a 18 de julho de 2026."
      },
      {
        question: "Onde acontece o Festival Matrizes 2026?",
        answer: "O festival acontece no Buraco do Tatu, em Itaúnas, Conceição da Barra, Espírito Santo."
      },
      {
        question: "O que é o Festival Matrizes?",
        answer:
          "O Matrizes é um encontro dedicado à preservação e disseminação das Matrizes Tradicionais do Forró, realizado pelo Buraco do Tatu em Itaúnas."
      },
      {
        question: "Onde garantir ingresso para o Matrizes 2026?",
        answer: "Os ingressos devem ser garantidos pelos canais oficiais do Festival Matrizes, incluindo a Sympla."
      },
      {
        question: "O que é o Buraco do Tatu em Itaúnas?",
        answer:
          "O Buraco do Tatu é uma casa tradicional de forró em Itaúnas, no Espírito Santo, e é a sede oficial do Festival Matrizes 2026."
      },
      {
        question: "Como chegar ao Festival Matrizes 2026 em Itaúnas?",
        answer:
          "O Festival Matrizes 2026 acontece no Buraco do Tatu, na vila de Itaúnas, em Conceição da Barra, Espírito Santo. A localização oficial pode ser consultada no Google Maps."
      },
      {
        question: "Tem hospedagem ou excursão para o Festival Matrizes?",
        answer:
          "Itaúnas costuma ter alta procura em julho. Para hospedagem, excursões e deslocamento, acompanhe os canais oficiais do Buraco do Tatu e do Festival Matrizes."
      },
      {
        question: "O que é o TFD no Festival Matrizes?",
        answer:
          "TFD é o Torneio de Forró Dança, uma programação do Festival Matrizes dedicada à valorização da dança, dos grupos e da cultura forrozeira em Itaúnas."
      }
    ]
  },
  en: {
    ...shared,
    locale: "en",
    languageName: "English",
    alternateLabel: "Português",
    alternatePath: "/",
    canonicalPath: "/en/",
    name: "Festival Matrizes 2026",
    officialSiteLabel: "Official website of Festival Matrizes",
    seoTitle: "Festival Matrizes 2026 in Itaúnas | Buraco do Tatu",
    seoDescription:
      "Official website of Festival Matrizes: forró in Itaúnas, Brazil, from July 11 to 18, 2026 at Buraco do Tatu, with concerts, dance and culture.",
    displayDate: "July 11 to 18, 2026",
    venue: {
      name: "Buraco do Tatu",
      description:
        "A rustic and vibrant cultural venue known as a heart of forró pé de serra in Espírito Santo, welcoming forró dancers and audiences from Brazil and abroad.",
      address: "Itaúnas, Conceição da Barra - ES, Brazil",
      url: "https://www.instagram.com/buracodotatuitaunas/"
    },
    hero: {
      eyebrow: "Official website of Festival Matrizes",
      title: "Festival Matrizes 2026 in Itaúnas",
      lead:
        "One of Brazil's major gatherings dedicated to preserving and sharing the traditional roots of forró, hosted by Buraco do Tatu in Itaúnas.",
      primaryCta: "See lineup",
      secondaryCta: "Get tickets",
      facts: [
        { label: "Dates", value: "July 11 to 18, 2026" },
        { label: "Where", value: "Buraco do Tatu, Itaúnas - Brazil" },
        { label: "Style", value: "Forró, dance and culture" }
      ]
    },
    quickAnswer:
      "Festival Matrizes 2026 takes place from July 11 to 18 at Buraco do Tatu in Itaúnas, Brazil, bringing together forró concerts, dance, DJs, TFD and cultural encounters.",
    searchAnswer:
      "For anyone looking for forró in Itaúnas or a forró festival in Brazil, Matrizes is the official Buraco do Tatu festival dedicated to the traditional roots of forró.",
    sections: {
      quickEyebrow: "Quick answer",
      quickTitle: "What is Festival Matrizes?",
      lineupEyebrow: "Lineup and program",
      lineupTitle: "Forró from July 11 to 18",
      programNote:
        "The day-by-day program may be updated as new official confirmations are announced.",
      ticketCta: "Get tickets",
      tfdTitle: "Forró Dance Tournament",
      tfdText:
        "TFD is part of Festival Matrizes as a space for celebrating dance, groups and the forró culture that makes Itaúnas one of Brazil's key dance destinations.",
      tfdLinksLabel: "Official TFD links",
      tfdLinks: [
        { label: "TFD registration", href: shared.links.tfdRegistration },
        { label: "Tournament rules in Portuguese", href: shared.links.tfdRules },
        { label: "Official TFD 2026 announcement", href: shared.links.tfdAnnouncementEn }
      ],
      planEyebrow: "Plan your trip",
      planTitle: "Lineup, tickets and official information",
      infoCards: [
        {
          title: "Lineup",
          text: "See confirmed artists, festival dates and official program updates for Festival Matrizes 2026 in Itaúnas.",
          icon: "party",
          href: "#programacao",
          linkLabel: "See Festival Matrizes 2026 lineup and program"
        },
        {
          title: "Tickets",
          text: "Get your Festival Matrizes 2026 ticket through the official Sympla sales channel.",
          icon: "ticket",
          href: shared.links.tickets,
          linkLabel: "Buy official Festival Matrizes 2026 tickets on Sympla"
        },
        {
          title: "Where to stay",
          text: "Book lodging early: July is a high-demand period for forró, festivals and travel in the village of Itaúnas.",
          icon: "location",
          href: shared.links.linktree,
          linkLabel: "Open official channels for planning lodging in Itaúnas"
        },
        {
          title: "Trips and arrival",
          text: "Follow the official channels for updates about group trips, transportation and arrival in Itaúnas during the festival.",
          icon: "location",
          href: shared.links.instagram,
          linkLabel: "Follow official updates about trips and arrival in Itaúnas"
        },
        {
          title: "@buracodotatuitaunas",
          text: "Follow news, announcements and official Buraco do Tatu content.",
          icon: "instagram",
          href: shared.links.instagram,
          linkLabel: "Official Buraco do Tatu Instagram"
        },
        {
          title: "Facebook",
          text: "Follow official events and updates on Facebook.",
          icon: "facebook",
          href: shared.links.facebook,
          linkLabel: "Official Buraco do Tatu Facebook"
        },
        {
          title: "Spotify",
          text: "Listen to music selections connected to Buraco do Tatu.",
          icon: "spotify",
          href: shared.links.spotify,
          linkLabel: "Official Buraco do Tatu Spotify"
        },
        {
          title: "YouTube",
          text: "Watch official videos and festival moments from Buraco do Tatu.",
          icon: "youtube",
          href: shared.links.youtube,
          linkLabel: "Official Buraco do Tatu YouTube"
        },
        {
          title: "TikTok",
          text: "Follow short videos, announcements and backstage moments.",
          icon: "tiktok",
          href: shared.links.tiktok,
          linkLabel: "Official Buraco do Tatu TikTok"
        },
        {
          title: "How to get there",
          text: "Festival Matrizes takes place at Buraco do Tatu in Itaúnas, Conceição da Barra, Espírito Santo, Brazil.",
          icon: "location",
          href: shared.links.maps,
          linkLabel: "Open Buraco do Tatu location in Itaúnas on Google Maps"
        }
      ],
      venueEyebrow: "The venue",
      venueTitle: "Buraco do Tatu in Itaúnas",
      venueText:
        "With 30 years of history, Buraco do Tatu is a rustic and vibrant cultural venue, a symbol of popular culture in Espírito Santo and a meeting point for the forró community from Brazil and abroad.",
      itaunasEyebrow: "Destination",
      itaunasTitle: "Itaúnas, forró, dunes and July",
      itaunasText:
        "Itaúnas is a village in Conceição da Barra, Espírito Santo, known for its dunes, beach, nature and strong forró culture. In July, the village welcomes forró dancers from across Brazil and abroad.",
      faqEyebrow: "FAQ",
      faqTitle: "Festival Matrizes 2026 in Itaúnas",
      finalTitle: "Experience Matrizes at Buraco do Tatu",
      finalText: "See the official lineup and get your ticket to Itaúnas.",
      finalCta: "Get tickets"
    },
    images: {
      heroSrc: "/images/matrizes-drive/festival-matrizes-2026-buraco-do-tatu-itaunas-casa-cheia.jpg",
      lineupSrc: "/images/matrizes-drive/programacao-festival-matrizes-2026-palco-forro-itaunas.jpg",
      danceSrc: "/images/matrizes-drive/danca-forro-festival-matrizes-2026-itaunas.jpg",
      venueSrc: "/images/matrizes-drive/forro-em-itaunas-festival-matrizes-2026-sanfona.jpg",
      detailSrc: "/images/matrizes-drive/detalhe-copo-festival-matrizes-2026-buraco-do-tatu.jpg",
      heroAlt: "Full house at Festival Matrizes 2026 at Buraco do Tatu in Itaúnas",
      lineupAlt: "Festival Matrizes 2026 stage with a forró concert in Itaúnas",
      danceAlt: "Couple dancing forró at Festival Matrizes 2026 in Itaúnas",
      venueAlt: "Forró concert on the Festival Matrizes stage at Buraco do Tatu in Itaúnas",
      tfdImages: [
        {
          src: "/images/matrizes-drive/danca-forro-festival-matrizes-2026-itaunas.jpg",
          alt: "Couple dancing forró during Festival Matrizes 2026 in Itaúnas"
        },
        {
          src: "/images/matrizes-drive/torneio-forro-danca-festival-matrizes-2026-itaunas.jpg",
          alt: "Couple competing in the Forró Dance Tournament at Festival Matrizes in Itaúnas"
        }
      ]
    },
    faq: [
      {
        question: "When does Festival Matrizes 2026 take place?",
        answer: "Festival Matrizes 2026 takes place from July 11 to 18, 2026."
      },
      {
        question: "Where does Festival Matrizes 2026 happen?",
        answer: "The festival happens at Buraco do Tatu in Itaúnas, Conceição da Barra, Espírito Santo, Brazil."
      },
      {
        question: "What is Festival Matrizes?",
        answer:
          "Matrizes is a gathering dedicated to preserving and sharing the traditional roots of forró, organized by Buraco do Tatu in Itaúnas."
      },
      {
        question: "Where can I get tickets for Matrizes 2026?",
        answer: "Tickets are available through the official Festival Matrizes channels, including Sympla."
      },
      {
        question: "What is Buraco do Tatu in Itaúnas?",
        answer:
          "Buraco do Tatu is a traditional forró venue in Itaúnas, Espírito Santo, Brazil, and the official home of Festival Matrizes 2026."
      },
      {
        question: "How do I get to Festival Matrizes 2026 in Itaúnas?",
        answer:
          "Festival Matrizes 2026 takes place at Buraco do Tatu in the village of Itaúnas, Conceição da Barra, Espírito Santo, Brazil. The official location is available on Google Maps."
      },
      {
        question: "Is there lodging or group travel for Festival Matrizes?",
        answer:
          "Itaúnas is in high demand in July. For lodging, group trips and transportation updates, follow the official Buraco do Tatu and Festival Matrizes channels."
      },
      {
        question: "What is TFD at Festival Matrizes?",
        answer:
          "TFD is the Forró Dance Tournament, a Festival Matrizes program dedicated to celebrating dance, groups and forró culture in Itaúnas."
      }
    ]
  }
} as const;

export type FestivalPage = (typeof festivalPages)[keyof typeof festivalPages];

export const festival = festivalPages.pt;
