export type TabId = "small" | "large" | "international";

export type PriceRow = {
  name: string;
  description: string;
  price: string;
};

export type RatePackage = {
  name: string;
  tag: string;
  items: string[];
  price: string;
};

export type RateCardData = {
  rows: PriceRow[];
  packages: RatePackage[];
};

export const tabs: { id: TabId; label: string }[] = [
  { id: "small", label: "Small business" },
  { id: "large", label: "Large business" },
  { id: "international", label: "International clients" },
];

const smallBusiness: RateCardData = {
  rows: [
    {
      name: "Logo Design",
      description: "Unique logo concepts with revisions",
      price: "₦80,000",
    },
    {
      name: "Brand Guidelines",
      description: "Colors, typography, and logo usage rules",
      price: "₦200,000",
    },
    {
      name: "Business Cards & Stationery",
      description: "Letterheads, envelopes, and digital signatures",
      price: "₦20,000",
    },
    {
      name: "Flyers & Brochures",
      description: "Single-page, bi-fold, tri-fold designs",
      price: "₦15,000",
    },
    {
      name: "Posters & Banners",
      description:
        "Promotional flyers/banners, vehicle wraps, billboard designs, and backdrops",
      price: "₦15,000",
    },
    {
      name: "Catalogs & Magazines",
      description:
        "Professionally designed layouts for print or digital use, company profiles, magazines, book cover designs",
      price: "₦10,000",
    },
    {
      name: "Menu Design",
      description: "Custom restaurant or event menus",
      price: "₦20,000",
    },
    {
      name: "Packaging Design",
      description: "Product labels, company welcome box, merch branding",
      price: "₦15,000",
    },
    {
      name: "Event Promo Pack",
      description: "Flyer + Poster + Social Media Ad",
      price: "₦40,000",
    },
    {
      name: "Restaurant Starter Kit",
      description: "Menu + Business Cards + Social Media Graphics",
      price: "₦50,000",
    },
    {
      name: "Social Media Graphics",
      description: "Facebook covers, Instagram posts, YouTube banners",
      price: "₦20,000",
    },
    {
      name: "Email Newsletters & Digital Ads",
      description: "Professional email templates and ad banners",
      price: "₦20,000",
    },
    {
      name: "Event Access",
      description: "Concert tickets, Invitation card, Admittance tag",
      price: "₦20,000",
    },
    {
      name: "Packaging Design",
      description: "Product labels for souvenirs, gift box, merch branding",
      price: "₦15,000",
    },
  ],
  packages: [
    {
      name: "Corporate Identity Package",
      tag: "Business",
      price: "₦250,000",
      items: [
        "Primary logos (1 concept + 2 revisions)",
        "Secondary logos",
        "Color palette: Primary, secondary, accent colors in RGB and CMYK format",
        "Typography (Headers and body fonts)",
        "Corporate stationery: Business card and letterhead",
        "Brand guide (PDF)",
      ],
    },
    {
      name: "Starter Package",
      tag: "Socials",
      price: "₦70,000",
      items: [
        "5 social media posts, stories, or display ad graphics",
        "2 rounds of revisions",
        "Final graphics delivered in correctly-sized PNG or JPG formats",
      ],
    },
    {
      name: "Second Package",
      tag: "Socials",
      price: "₦150,000",
      items: [
        "15 social media posts, stories, or display ad graphics",
        "2 rounds of revisions",
        "Final graphics delivered in correctly-sized PNG or JPG formats",
      ],
    },
    {
      name: "Custom Package",
      tag: "Socials",
      price: "₦200,000",
      items: [
        "16 and above for social media posts, stories, or display ad graphics",
        "2 rounds of revisions",
        "Final graphics delivered in correctly-sized PNG or JPG formats",
      ],
    },
    {
      name: "Wedding Package",
      tag: "Events",
      price: "₦50,000",
      items: [
        "Backdrops",
        "Product Labels for souvenirs",
        "Invitation Cards",
        "Gift Box",
      ],
    },
    {
      name: "Concert/Tech Package",
      tag: "Events",
      price: "₦25,000",
      items: [
        "Ticket Design",
        "Merch Branding",
        "Admittance Tag",
        
      ],
    },
  ],
};

const largeBusiness: RateCardData = {
  rows: [
    {
      name: "Logo Design",
      description: "Unique logo concepts with revisions",
      price: "₦200,000",
    },
    {
      name: "Brand Guidelines",
      description: "Colors, typography, and logo usage rules",
      price: "₦400,000",
    },
    {
      name: "Business Cards & Stationery",
      description: "Letterheads, envelopes, and digital signatures",
      price: "₦30,000",
    },
    {
      name: "Flyers & Brochures",
      description: "Single-page, bi-fold, tri-fold designs",
      price: "₦20,000",
    },
    {
      name: "Posters & Banners",
      description:
        "Promotional flyers/banners, vehicle wraps, billboard designs, and backdrops",
      price: "₦20,000",
    },
    {
      name: "Catalogs & Magazines",
      description:
        "Professionally designed layouts for print or digital use, company profiles, magazines, book cover designs",
      price: "₦20,000",
    },
    {
      name: "Menu Design",
      description: "Custom restaurant or event menus",
      price: "₦20,000",
    },
    {
      name: "Packaging Design",
      description: "Product labels, company welcome box, merch branding",
      price: "₦20,000",
    },
    {
      name: "Event Promo Pack",
      description: "Flyer + Poster + Social Media Ad",
      price: "₦50,000",
    },
    {
      name: "Restaurant Starter Kit",
      description: "Menu + Business Cards + Social Media Graphics",
      price: "₦100,000",
    },
    {
      name: "Social Media Graphics",
      description: "Facebook covers, Instagram posts, YouTube banners",
      price: "₦30,000",
    },
    {
      name: "Email Newsletters & Digital Ads",
      description: "Professional email templates and ad banners",
      price: "₦10,000",
    },
    {
      name: "Event Access",
      description: "Concert tickets, Invitation card, Admittance tag",
      price: "₦20,000",
    },
    {
      name: "Packaging Design",
      description: "Product labels for souvenirs, gift box, merch branding",
      price: "₦20,000",
    },
  ],
  packages: [
    {
      name: "Corporate Identity Package",
      tag: "Business",
      price: "₦500,000",
      items: [
        "Primary logos (1 concept + 2 revisions)",
        "Secondary logos",
        "Color palette: Primary, secondary, accent colors in RGB and CMYK format",
        "Typography (Headers and body fonts)",
        "Corporate stationery: Business card and letterhead",
        "Brand guide (PDF)",
      ],
    },
    {
      name: "Starter Package",
      tag: "Socials",
      price: "₦100,000",
      items: [
        "5 social media posts, stories, or display ad graphics",
        "2 rounds of revisions",
        "Final graphics delivered in correctly-sized PNG or JPG formats",
      ],
    },
    {
      name: "Second Package",
      tag: "Socials",
      price: "₦300,000",
      items: [
        "15 social media posts, stories, or display ad graphics",
        "2 rounds of revisions",
        "Final graphics delivered in correctly-sized PNG or JPG formats",
      ],
    },
    {
      name: "Custom Package",
      tag: "Socials",
      price: "₦350,000",
      items: [
        "16 and above for social media posts, stories, or display ad graphics",
        "2 rounds of revisions",
        "Final graphics delivered in correctly-sized PNG or JPG formats",
      ],
    },
    {
      name: "Wedding Package",
      tag: "Events",
      price: "₦80,000",
      items: [
        "Backdrops",
        "Product Labels for souvenirs",
        "Invitation Cards",
        "Gift Box",
      ],
    },
    {
      name: "Concert/Tech Package",
      tag: "Events",
      price: "₦50,000",
      items: [
        "Ticket Design",
        "Merch Branding",
        "Admittance Tag",
        
      ],
    },
  ],
};

const internationalClients: RateCardData = {
  rows: [
    {
      name: "Logo Design",
      description: "Unique logo concepts with revisions",
      price: "$200",
    },
    {
      name: "Brand Guidelines",
      description: "Colors, typography, and logo usage rules",
      price: "$500",
    },
    {
      name: "Business Cards & Stationery",
      description: "Letterheads, envelopes, and digital signatures",
      price: "$20",
    },
    {
      name: "Flyers & Brochures",
      description: "Single-page, bi-fold, tri-fold designs",
      price: "$30",
    },
    {
      name: "Posters & Banners",
      description:
        "Promotional flyers/banners, vehicle wraps, billboard designs, and backdrops",
      price: "$30",
    },
    {
      name: "Catalogs & Magazines",
      description:
        "Professionally designed layouts for print or digital use, company profiles, magazines, book cover designs",
      price: "$15",
    },
    {
      name: "Menu Design",
      description: "Custom restaurant or event menus",
      price: "$30",
    },
    {
      name: "Packaging Design",
      description: "Product labels, company welcome box, merch branding",
      price: "$30",
    },
    {
      name: "Event Promo Pack",
      description: "Flyer + Poster + Social Media Ad",
      price: "$100",
    },
    {
      name: "Restaurant Starter Kit",
      description: "Menu + Business Cards + Social Media Graphics",
      price: "$100",
    },
    {
      name: "Social Media Graphics",
      description: "Facebook covers, Instagram posts, YouTube banners",
      price: "$30",
    },
    {
      name: "Email Newsletters & Digital Ads",
      description: "Professional email templates and ad banners",
      price: "$10",
    },
    {
      name: "Event Access",
      description: "Concert tickets, Invitation card, Admittance tag",
      price: "$30",
    },
    {
      name: "Packaging Design",
      description: "Product labels for souvenirs, gift box, merch branding",
      price: "$30",
    },
  ],
  packages: [
    {
      name: "Corporate Identity Package",
      tag: "Business",
      price: "$800",
      items: [
        "Primary logos (1 concept + 2 revisions)",
        "Secondary logos",
        "Color palette: Primary, secondary, accent colors in RGB and CMYK format",
        "Typography (Headers and body fonts)",
        "Corporate stationery: Business card and letterhead",
        "Brand guide (PDF)",
      ],
    },
    {
      name: "Starter Package",
      tag: "Socials",
      price: "$80",
      items: [
        "5 social media posts, stories, or display ad graphics",
        "2 rounds of revisions",
        "Final graphics delivered in correctly-sized PNG or JPG formats",
      ],
    },
    {
      name: "Second Package",
      tag: "Socials",
      price: "$250",
      items: [
        "15 social media posts, stories, or display ad graphics",
        "2 rounds of revisions",
        "Final graphics delivered in correctly-sized PNG or JPG formats",
      ],
    },
    {
      name: "Custom Package",
      tag: "Socials",
      price: "$200",
      items: [
        "16 and above for social media posts, stories, or display ad graphics",
        "2 rounds of revisions",
        "Final graphics delivered in correctly-sized PNG or JPG formats",
      ],
    },
    {
      name: "Wedding Package",
      tag: "Events",
      price: "$100",
      items: [
        "Backdrops",
        "Product Labels for souvenirs",
        "Invitation Cards",
        "Gift Box",
      ],
    },
    {
      name: "Concert/Tech Package",
      tag: "Events",
      price: "$70",
      items: [
        "Ticket Design",
        "Merch Branding",
        "Admittance Tag",
        
      ],
    },
  ],
};


export const rateCards: Record<TabId, RateCardData> = {
  small: smallBusiness,
  large: largeBusiness,
  international: internationalClients,
};