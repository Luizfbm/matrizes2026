# Festival Matrizes 2026 Landing Page Design

## Context

The project is an MVP landing page for Festival Matrizes 2026, hosted by Buraco do Tatu in Itaunas, Espirito Santo. The page must help the Buraco do Tatu team present the festival professionally, convert visitors to ticket buyers, and compete for search visibility for queries such as "festival em itaunas 2026".

The current workspace is empty and is not a git repository. This design therefore defines the first implementation scope rather than modifying an existing app.

## Goals

- Make Festival Matrizes 2026 the clear first-viewport subject.
- Drive users toward the primary CTA: buying tickets.
- Present Buraco do Tatu as the house, cultural venue, and authority behind the festival.
- Prioritize SEO, local SEO, and generative search visibility from the first version.
- Build mobile-first, because most discovery traffic is expected from Instagram, search, WhatsApp, and mobile browsers.

## Primary Audience

- People searching for festivals in Itaunas in July 2026.
- Forro dancers and festival travelers comparing lodging, dates, programming, and logistics in Itaunas.
- Visitors coming from Instagram who need a clearer, more indexable source than social posts.
- Buraco do Tatu staff who need a simple MVP they can share and validate.

## Positioning

The page should position the event as:

> Festival Matrizes 2026 em Itaunas, de 11 a 18 de julho, no Buraco do Tatu.

It should make clear that Matrizes is a festival at Buraco do Tatu, without depending on any competitor's brand.

## SEO And GEO Requirements

SEO and GEO are not post-launch polish. They are structural requirements.

Target phrases include:

- festival em itaunas 2026
- Festival Matrizes 2026
- Matrizes 2026 Itaunas
- Buraco do Tatu Itaunas
- forro em Itaunas 2026
- forro Itaunas julho 2026
- casa de forro em Itaunas
- festival de forro em Itaunas

The page must include indexable HTML text for the event name, dates, location, description, lineup, logistics, and FAQ. Core information must not live only inside images.

Generative search visibility should be supported with short, direct answer blocks that can be quoted or summarized by AI systems. Example:

> O Festival Matrizes 2026 acontece de 11 a 18 de julho no Buraco do Tatu, em Itaunas, Espirito Santo, reunindo forro pe de serra, shows, danca, DJs e encontros culturais.

Structured data should be included for:

- `MusicEvent` or `Event`
- `Place`
- `LocalBusiness`
- `FAQPage`
- `BreadcrumbList`

## Page Structure

### 1. Hero

The hero is the conversion and SEO anchor.

Content:

- H1: "Festival Matrizes 2026 em Itaunas"
- Date: "11 a 18 de julho de 2026"
- Location: "Buraco do Tatu, Itaunas - ES"
- Short promise: forro, danca, encontros, praia, natureza, cultura.
- Primary CTA: "Comprar ingresso"
- Secondary CTA: "Ver programacao"

Visual direction:

- Mobile-first composition.
- Strong poster typography inspired by the Instagram campaign.
- Red, yellow, green, black, and off-white accents.
- Geometric bands and poster-like separators, used with restraint.

### 2. Quick Answer Block

A concise SEO/GEO block immediately below the hero.

It should answer:

- What is Festival Matrizes 2026?
- When does it happen?
- Where does it happen?
- How do users buy tickets?

This block exists for humans, search engines, and AI-generated answers.

### 3. Lineup And Program

The lineup should be text-first and indexable.

Expected content:

- Featured artists and bands.
- Daily schedule if available.
- If exact times are not available, use day-based cards and mark the program as being updated.
- Ticket CTA repeated after the section.

Mobile behavior:

- Use compact cards or a horizontal artist strip.
- Avoid dense poster-only visuals that become unreadable on small screens.

### 4. TFD

The Torneio de Forro Danca deserves its own section because it differentiates Matrizes from a simple show agenda.

Content:

- What TFD is.
- How it connects to Festival Matrizes.
- Important dates or registration links if available.
- CTA to learn more or register, secondary to ticket purchase unless TFD becomes the active campaign priority.

### 5. Plan Your Trip

This section turns festival interest into practical decision-making.

Content:

- Tickets and official sales link.
- Lodging references or lodging CTA.
- Excursion information if available.
- PDVs if relevant.
- Location and how to get to Itaunas.
- Short note that Itaunas is a village in Conceicao da Barra, ES.

### 6. Buraco Do Tatu

This section establishes authority and local identity.

Content:

- Buraco do Tatu as a traditional house of forro in Itaunas.
- "Desde 1996 fazendo Forro em Itaunas" as a key claim from the official Instagram profile.
- Its role as the home of Festival Matrizes.
- Pista, shows, dance, DJs, cultural encounters, and responsibility/social culture angle.

Tone:

- Concrete and credible.
- Avoid generic party language.
- Present the venue as a cultural house and festival destination.

### 7. Itaunas

This section supports local SEO and travel intent.

Content:

- Itaunas as a village in Espirito Santo known for forro, dunes, beach, nature, and July festivals.
- The relationship between the village, forro pe de serra, and festival tourism.
- Keep it concise so the page stays focused on Matrizes.

### 8. FAQ

FAQ should be visible on the page and also represented as structured data.

Initial questions:

- Quando acontece o Festival Matrizes 2026?
- Onde acontece o Festival Matrizes 2026?
- O que e o Festival Matrizes?
- O que e o Buraco do Tatu em Itaunas?
- Onde comprar ingresso para o Matrizes 2026?
- Como chegar em Itaunas?
- Tem hospedagem ou excursao para o festival?
- O que e o TFD?

### 9. Final CTA

The page should close with a direct conversion block.

Content:

- Festival name.
- Date and location.
- Ticket CTA.
- Urgency text if confirmed, such as lot change or limited availability.

## Visual Direction

The chosen direction is "Festival Passport with Poster Wall accents".

This means:

- The content flow is practical and travel-oriented.
- The page helps users decide, plan, and buy.
- Poster aesthetics appear in accents, headings, dividers, artist cards, and CTA blocks.
- The design should feel rooted in forro and Itaunas, not like a generic nightlife template.

Avoid:

- A purely generic event landing page.
- A long institutional venue brochure.
- Text locked inside images.
- Overly noisy poster layouts that hurt mobile readability.

## MVP Data Inputs Needed

Implementation can start with provisional content clearly marked in the code and UI copy, but the production page requires the following confirmed inputs:

- Official ticket URL.
- Official logo or campaign assets.
- Final lineup list.
- Daily schedule or status text for program updates.
- TFD registration/details link.
- Location/address details.
- Links for lodging, excursions, PDVs, Instagram, and Sympla/Linktree.
- Approved text claims about Buraco do Tatu history and structure.

## Technical Shape

The MVP should be a static or mostly static landing page, optimized for fast loading and easy indexing.

Implementation requirements:

- Semantic HTML.
- Responsive mobile-first CSS.
- Metadata: title, description, canonical URL, Open Graph, Twitter card.
- JSON-LD structured data.
- Accessible headings and buttons.
- Optimized images with alt text.
- No dependency on client-side rendering for primary content.

## Success Criteria

- On mobile, the user immediately understands what Matrizes 2026 is, when it happens, where it happens, and how to buy tickets.
- Search engines can read all core event information in HTML.
- The page explicitly targets "festival em itaunas 2026" and related queries without keyword stuffing.
- The Buraco do Tatu brand appears as the official house and cultural authority behind the festival.
- The MVP is simple enough for the house team to review quickly and validate before investing in a larger site.
